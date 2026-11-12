import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CreditCard,
  Landmark,
  LockKeyhole,
  CheckCircle2,
  Loader2,
  Copy,
  Check,
  KeyRound,
} from "lucide-react";
import { usePayment } from "../core/context/PaymentContext";
import { useHeritage } from "../core/context/HeritageContext";
import { t } from "../core/data/hanoiHeritageSites";


const errorTitles = {
  invalid: "Mã không hợp lệ",
  expired: "Mã đã hết hạn hoặc bị thu hồi",
  payment: "Thanh toán thất bại",
  network: "Không kết nối được máy chủ",
  server: "Không thể kích hoạt mã",
};

function formatExpiry(expiresAt) {
  if (!expiresAt) return "";
  return new Date(expiresAt).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" });
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement("textarea");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Sao chép mã truy cập"
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-900"
    >
      {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
      {copied ? "Đã sao chép" : "Sao chép"}
    </button>
  );
}

export default function PaywallPage() {
  const [params] = useSearchParams();
  const { language } = useHeritage();
  const labels = t[language] || t.en;
  const next = params.get("next") || "/";
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";
  const {
    hasAccess,
    activeCode,
    expiresAt,
    lastPayment,
    issuedCode,
    status,
    error,
    errorKind,
    pay,
    redeemAccessCode,
  } = usePayment();
  const [code, setCode] = useState(() => params.get("code") || "");
  const [method, setMethod] = useState("");
  useEffect(() => {
    const suppliedCode = params.get("code");
    if (suppliedCode) setCode(suppliedCode.toUpperCase());
  }, [params]);
  const busy = status === "paying" || status === "redeeming";

  if (hasAccess) {
    return (
      <main className="site-main grid place-items-center bg-slate-50 px-4 py-16">
        <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto text-emerald-600" size={42} />
          <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
            {lastPayment ? "Thanh toán thành công" : "Đã kích hoạt quyền nghe"}
          </h1>
          {lastPayment && (
            <p className="mt-2 text-xs text-slate-500">
              Giao dịch <b className="text-slate-800">{lastPayment.id}</b>
              {lastPayment.payerName ? <> · {lastPayment.payerName}</> : null}
              {lastPayment.payerDetail ? <> · {lastPayment.payerDetail}</> : null}
            </p>
          )}
          {activeCode && (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Mã truy cập</p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <span className="font-mono text-xl font-extrabold tracking-wider text-slate-900">{activeCode}</span>
                <CopyButton value={activeCode} />
              </div>
            </div>
          )}
          {expiresAt > 0 && (
            <p className="mt-4 text-xs text-slate-500">Hết hạn lúc {formatExpiry(expiresAt)}</p>
          )}
          <Link
            to={safeNext}
            className="mt-7 inline-block rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            {safeNext === "/" ? "Tiếp tục khám phá" : "Quay lại hướng dẫn audio"}
          </Link>
          {safeNext !== "/" && (
            <Link to="/" className="mt-3 block text-xs font-semibold text-slate-500 underline">
              Về trang Khám phá
            </Link>
          )}
        </section>
      </main>
    );
  }

  const startPayment = (nextMethod) => {
    if (busy) return;
    setMethod(nextMethod);
    pay(nextMethod);
  };

  const submitCode = (event) => {
    event.preventDefault();
    if (busy) return;
    setMethod("");
    redeemAccessCode(code);
  };

  const paymentError = error && errorKind === "payment";
  const showError = Boolean(error);

  return (
    <main className="site-main grid place-items-center bg-slate-50 px-4 py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
          <LockKeyhole size={20} />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Vé nghe 24 giờ · 50.000đ
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Mở khóa toàn bộ hướng dẫn audio Hà Nội.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
          Thanh toán mô phỏng một lần để nhận mã truy cập 24 giờ. Bạn có thể dùng mã trên bất kỳ thiết bị nào mà không cần tài khoản.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => startPayment("credit")}
            disabled={busy}
            className="rounded-2xl border border-slate-200 p-5 text-left transition hover:border-slate-900 hover:shadow-sm disabled:cursor-wait disabled:opacity-60"
          >
            <span className="flex items-center justify-between">
              <CreditCard size={20} />
              {status === "paying" && method === "credit" && <Loader2 size={16} className="animate-spin" />}
            </span>
            <b className="mt-4 block text-sm">Thẻ tín dụng</b>
            <span className="mt-2 block text-xs leading-5 text-slate-500">
              Visa / Mastercard (mô phỏng).
            </span>
          </button>
          <button
            type="button"
            onClick={() => startPayment("bank")}
            disabled={busy}
            className="rounded-2xl border border-slate-200 p-5 text-left transition hover:border-slate-900 hover:shadow-sm disabled:cursor-wait disabled:opacity-60"
          >
            <span className="flex items-center justify-between">
              <Landmark size={20} />
              {status === "paying" && method === "bank" && <Loader2 size={16} className="animate-spin" />}
            </span>
            <b className="mt-4 block text-sm">Chuyển khoản ngân hàng</b>
            <span className="mt-2 block text-xs leading-5 text-slate-500">
              Chuyển khoản nội địa (mô phỏng).
            </span>
          </button>
        </div>
        <p className="mt-3 text-[11px] text-slate-500">
          Thanh toán mô phỏng – không trừ tiền thật.
        </p>
        {paymentError && method && (
          <p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
            <b>{errorTitles.payment}:</b> {error}
          </p>
        )}

        <form onSubmit={submitCode} className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <label htmlFor="access-code" className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <KeyRound size={14} />
            Đã có mã? Nhập mã để dùng trên thiết bị này
          </label>
          <input
            id="access-code"
            value={code}
            onChange={(event) => setCode(event.target.value.toUpperCase())}
            placeholder="HANOI-7K4P-92QX"
            autoComplete="off"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-3 font-mono text-sm uppercase outline-none focus:border-slate-900"
          />
          <button
            type="submit"
            disabled={busy || !code.trim()}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-xs font-semibold text-white disabled:opacity-50"
          >
            {status === "redeeming" && !method && <Loader2 size={14} className="animate-spin" />}
            Kích hoạt mã
          </button>
          <p className="mt-3 text-[11px] leading-5 text-slate-500">Mã truy cập dùng được trên mọi thiết bị trong thời hạn hiệu lực.</p>
          {showError && !paymentError && (
            <p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
              <b>{errorTitles[errorKind] || "Lỗi"}:</b> {error}
            </p>
          )}
        </form>

        <Link to="/" className="mt-8 block text-xs font-semibold text-slate-500 underline">
          Về trang Khám phá
        </Link>
      </section>
    </main>
  );
}
