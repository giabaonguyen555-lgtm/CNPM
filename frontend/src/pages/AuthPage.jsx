import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useAuth } from "../core/context/AuthContext";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, error, isAdmin } = useAuth();
  const nextParam = new URLSearchParams(location.search).get("next") || "/admin";
  const next = nextParam.startsWith("/admin") ? nextParam : "/admin";

  if (isAdmin) return <Navigate to={next} replace />;

  const submit = async (event) => {
    event.preventDefault();
    try {
      await login({ email, password });
      navigate(next, { replace: true });
    } catch {
      /* error is exposed by AuthContext */
    }
  };

  return (
    <main className="site-main grid min-h-screen place-items-center bg-slate-50 px-4 py-16">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
          <ShieldCheck size={20} />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Quản trị nội dung</p>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-900">Đăng nhập quản trị</h1>
        <p className="mt-2 text-sm text-slate-500">
          Chỉ dành cho đội ngũ quản trị nội dung Hanoi Heritage. Khách tham quan không cần tài khoản — audio được mở bằng mã truy cập 24 giờ.
        </p>
        <label className="mt-6 block text-sm font-semibold">
          Email quản trị
          <input required type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-slate-900" />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          Mật khẩu
          <div className="relative mt-2">
            <input required minLength="8" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-slate-200 p-3 pr-11 outline-none focus:border-slate-900" />
            <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>
        {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="mt-6 w-full rounded-lg bg-slate-950 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50">
          {loading ? "Đang xác thực…" : "Đăng nhập"}
        </button>
        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-[11px] leading-5 text-amber-800">
          Tài khoản demo: <b>admin@hanoiheritage.vn</b> / <b>Heritage@2026</b>
        </p>
        <Link to="/" className="mt-5 block text-center text-xs font-semibold text-slate-500 underline">Quay lại trang khách</Link>
      </form>
    </main>
  );
}
