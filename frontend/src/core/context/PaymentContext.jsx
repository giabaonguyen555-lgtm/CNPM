import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const PaymentContext = createContext(null);
const TOKEN_KEY = "access_token";
const ACCESS_EVENT = "hanoi:access";
const VERIFY_INTERVAL_MS = 30000;

const DEFAULT_API_BASE = typeof window === "undefined"
  ? "http://localhost:8787"
  : `${window.location.protocol}//${window.location.hostname}:8787`;
export const ACCESS_API_BASE = (import.meta.env.VITE_ACCESS_API_URL || DEFAULT_API_BASE).replace(/\/$/, "");

export const PAYMENT_METHODS = ["credit", "bank"];

function normalizeCode(code) {
  return String(code || "").trim().toUpperCase().replace(/\s+/g, "");
}

function readPass() {
  try {
    const value = JSON.parse(localStorage.getItem(TOKEN_KEY) || "null");
    return value?.accessToken && value.expiresAt > Date.now() ? value : null;
  } catch {
    return null;
  }
}

function clearPass() {
  localStorage.removeItem(TOKEN_KEY);
}

async function readJson(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

function extractCode(data) {
  const candidate = data?.accessCode ?? data?.code ?? data?.payment?.accessCode;
  if (typeof candidate === "string") return candidate;
  return candidate?.code || "";
}

function redeemErrorMessage(status, data) {
  if (status === 404) return data.error || "Mã truy cập không hợp lệ.";
  if (status === 410) return data.error || "Mã truy cập đã hết hạn hoặc bị thu hồi.";
  if (status === 400) return data.error || "Vui lòng nhập mã truy cập.";
  return data.error || "Không thể kích hoạt mã truy cập.";
}

export function PaymentProvider({ children }) {
  const [pass, setPass] = useState(readPass);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [errorKind, setErrorKind] = useState("");
  const [lastPayment, setLastPayment] = useState(null);
  const [issuedCode, setIssuedCode] = useState("");
  const accessRequest = useRef(0);

  const hasAccess = Boolean(pass);
  const expiresAt = pass?.expiresAt || 0;
  const activeCode = pass?.code || "";

  const syncFromStorage = useCallback(() => {
    const next = readPass();
    if (!next) clearPass();
    setPass(next);
  }, []);

  const revokeLocally = useCallback(() => {
    clearPass();
    setPass(null);
    window.dispatchEvent(new CustomEvent(ACCESS_EVENT));
  }, []);

  const verifyAccess = useCallback(async () => {
    const requestId = ++accessRequest.current;
    const current = readPass();
    if (!current) {
      if (localStorage.getItem(TOKEN_KEY)) revokeLocally();
      else setPass(null);
      return false;
    }
    try {
      const response = await fetch(`${ACCESS_API_BASE}/api/access/me`, {
        headers: { authorization: `Bearer ${current.accessToken}` },
      });
      // Ignore a response for an older token; redeeming another code while this
      // request is in flight must not revoke the newly activated pass.
      if (requestId !== accessRequest.current || readPass()?.accessToken !== current.accessToken) return true;
      if (response.status === 401 || response.status === 403 || response.status === 410) {
        // Server-side revoke/expiry must immediately remove local playback access.
        revokeLocally();
        return false;
      }
      if (response.ok) {
        const data = await readJson(response);
        const serverExpiry = data.expiresAt ? new Date(data.expiresAt).getTime() : current.expiresAt;
        if (Number.isFinite(serverExpiry) && serverExpiry !== current.expiresAt) {
          const updated = { ...current, expiresAt: serverExpiry };
          localStorage.setItem(TOKEN_KEY, JSON.stringify(updated));
          setPass(updated.expiresAt > Date.now() ? updated : null);
        }
      }
      return true;
    } catch {
      // Network failure: keep the local pass until it expires; retry on next tick.
      return true;
    }
  }, [revokeLocally]);

  useEffect(() => {
    verifyAccess();
    const timer = window.setInterval(verifyAccess, VERIFY_INTERVAL_MS);
    const onFocus = () => verifyAccess();
    // Mobile browsers rarely fire "focus" when returning to a tab; they fire visibilitychange/pageshow instead.
    const onVisible = () => { if (document.visibilityState === "visible") verifyAccess(); };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onFocus);
    window.addEventListener("storage", syncFromStorage);
    window.addEventListener(ACCESS_EVENT, syncFromStorage);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onFocus);
      window.removeEventListener("storage", syncFromStorage);
      window.removeEventListener(ACCESS_EVENT, syncFromStorage);
    };
  }, [verifyAccess, syncFromStorage]);

  const redeemAccessCode = useCallback(async (rawCode) => {
    const code = normalizeCode(rawCode);
    setError("");
    setErrorKind("");
    if (!code) {
      setError("Vui lòng nhập mã truy cập.");
      setErrorKind("invalid");
      return false;
    }
    setStatus("redeeming");
    try {
      const response = await fetch(`${ACCESS_API_BASE}/api/access-codes/redeem`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await readJson(response);
      if (!response.ok) {
        setError(redeemErrorMessage(response.status, data));
        setErrorKind(
          response.status === 410 ? "expired"
            : response.status === 404 || response.status === 400 ? "invalid"
            : "server",
        );
        setStatus("idle");
        return false;
      }
      const next = {
        code: data.code?.code || code,
        accessToken: data.accessToken,
        expiresAt: new Date(data.expiresAt).getTime(),
        activatedAt: data.code?.activatedAt || new Date().toISOString(),
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(next));
      setPass(next);
      setStatus("success");
      window.dispatchEvent(new CustomEvent(ACCESS_EVENT));
      return true;
    } catch {
      setError("Dịch vụ truy cập không khả dụng. Hãy chạy backend bằng npm run server.");
      setErrorKind("network");
      setStatus("idle");
      return false;
    }
  }, []);

  const pay = useCallback(async (method) => {
    if (!PAYMENT_METHODS.includes(method)) return false;
    setError("");
    setErrorKind("");
    setStatus("paying");
    setLastPayment(null);
    setIssuedCode("");
    try {
      const response = await fetch(`${ACCESS_API_BASE}/api/payments`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ method }),
      });
      const data = await readJson(response);
      const code = extractCode(data);
      if (!response.ok || !code) {
        setError(data.error || "Thanh toán không thành công. Vui lòng thử lại.");
        setErrorKind("payment");
        setStatus("idle");
        return false;
      }
      const redeemed = await redeemAccessCode(code);
      if (redeemed) {
        setLastPayment(data.payment || null);
        setIssuedCode(code);
      } else {
        setIssuedCode("");
      }
      return redeemed;
    } catch {
      setError("Dịch vụ thanh toán không khả dụng. Hãy chạy backend bằng npm run server.");
      setErrorKind("network");
      setStatus("idle");
      return false;
    }
  }, [redeemAccessCode]);

  const resetPayment = useCallback(() => {
    setStatus("idle");
    setError("");
    setErrorKind("");
  }, []);

  const value = useMemo(
    () => ({
      hasAccess,
      expiresAt,
      activeCode,
      issuedCode,
      lastPayment,
      status,
      error,
      errorKind,
      pay,
      redeemAccessCode,
      verifyAccess,
      resetPayment,
    }),
    [hasAccess, expiresAt, activeCode, issuedCode, lastPayment, status, error, errorKind, pay, redeemAccessCode, verifyAccess, resetPayment],
  );

  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
}

export const usePayment = () => useContext(PaymentContext);
