import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Admin-only authentication (PRD FR-ADM-01/02, NFR-SEC-01..03).
 * Visitors never log in: audio access is granted by the 24h pass in PaymentContext.
 *
 * MVP note: credentials are verified client-side against a SHA-256 hash so that the
 * plain password is never stored in source. Replace with a backend auth endpoint
 * when the Content Service exists.
 */
const AuthContext = createContext(null);
const SESSION_KEY = "hanoi_admin_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;
const SALT = "hanoi-admin-salt:";
const ADMIN_ACCOUNT = {
  email: "admin@hanoiheritage.vn",
  passwordHash: "76fcc12474d10aed04c389455a555194c2adc68409e3cc204656a5bf350483c6",
};

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function readSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    if (session?.role === "admin" && session.expiresAt > Date.now()) return session;
    localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore malformed session */
  }
  return null;
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Remove legacy guest-account data from older builds.
    localStorage.removeItem("authUser");
    const timer = window.setInterval(() => setSession(readSession()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    setError("");
    try {
      if (!email?.trim() || !password) throw new Error("Enter the admin email and password.");
      const hash = await sha256(SALT + password);
      if (email.trim().toLowerCase() !== ADMIN_ACCOUNT.email || hash !== ADMIN_ACCOUNT.passwordHash) {
        throw new Error("Invalid admin credentials.");
      }
      const next = { email: ADMIN_ACCOUNT.email, role: "admin", expiresAt: Date.now() + SESSION_TTL_MS };
      localStorage.setItem(SESSION_KEY, JSON.stringify(next));
      setSession(next);
      return next;
    } catch (nextError) {
      setError(nextError.message || "Unable to sign in.");
      throw nextError;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({
      user: session,
      isAuthenticated: Boolean(session),
      isAdmin: session?.role === "admin",
      loading,
      error,
      login,
      logout,
    }),
    [session, loading, error, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
