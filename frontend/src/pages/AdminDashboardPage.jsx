import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, CreditCard, ExternalLink, Headphones, LogOut, MapPin, RefreshCw, Search, ShieldCheck, Trash2, X, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useAuth } from "../core/context/AuthContext";
import { ACCESS_API_BASE } from "../core/context/PaymentContext";
import { resolveMediaUrl } from "../core/context/HeritageContext";
import { buildPoiUrl } from "../core/publicUrl";

const ADMIN_KEY = import.meta.env.VITE_ADMIN_API_KEY || "demo-admin-key";
const tabs = [["overview", "Tổng quan"], ["access", "Mã truy cập"], ["payments", "Thanh toán"], ["pois", "Thư viện POI"], ["monitoring", "Giám sát hệ thống"]];
const langs = ["vi", "en", "fr", "zh-CN", "ja", "ko"];
const api = (path, options = {}) => fetch(`${ACCESS_API_BASE}${path}`, { ...options, headers: { "Content-Type": "application/json", "x-admin-key": ADMIN_KEY, ...(options.headers || {}) } });
const money = (n) => `${Number(n || 0).toLocaleString("vi-VN")}đ`;
const fmt = (value) => value ? new Date(value).toLocaleString("vi-VN") : "—";

export default function AdminDashboardPage() {
  const [params, setParams] = useSearchParams();
  const { logout } = useAuth();
  const tab = tabs.some(([key]) => key === params.get("tab")) ? params.get("tab") : "overview";
  const [data, setData] = useState({ codes: [], payments: [], pois: [], accessStats: {}, paymentStats: {}, poiStats: {}, health: null });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const notify = (message, type = "success") => { setToast({ message, type }); setTimeout(() => setToast(null), 3000); };
  const load = async () => {
    setLoading(true);
    try {
      const headers = { "x-admin-key": ADMIN_KEY };
      const results = await Promise.allSettled([
        fetch(`${ACCESS_API_BASE}/api/access-codes`, { headers }), fetch(`${ACCESS_API_BASE}/api/access-stats`, { headers }),
        fetch(`${ACCESS_API_BASE}/api/payments`, { headers }), fetch(`${ACCESS_API_BASE}/api/payments/stats`, { headers }),
        fetch(`${ACCESS_API_BASE}/api/admin/pois`, { headers }), fetch(`${ACCESS_API_BASE}/api/analytics/poi-stats`, { headers }), fetch(`${ACCESS_API_BASE}/health`)
      ]);
      const json = async (r, fallback) => r.status === "fulfilled" && r.value.ok ? r.value.json() : fallback;
       const [codes, accessStats, payments, paymentStats, pois, poiStats, health] = await Promise.all(results.map((r, i) => json(r, i === 0 ? [] : i === 6 ? null : {})));
        const normalizedPois = Array.isArray(pois) ? pois : pois.pois || [];
        const byPoi = Object.fromEntries((poiStats?.pois || []).map((item) => [item.poiId, item]));
        const normalizedPoiStats = {
          ...(poiStats || {}),
          totalListens: normalizedPois.reduce((sum, poi) => sum + (byPoi[poi.id]?.listens || 0), 0),
          byPoi,
        };
        setData({ codes: Array.isArray(codes) ? codes : codes.codes || [], payments: Array.isArray(payments) ? payments : payments.payments || [], pois: normalizedPois, accessStats, paymentStats, poiStats: normalizedPoiStats, health });
    } catch (error) { notify(error.message || "Không thể tải dữ liệu", "error"); } finally { setLoading(false); }
  };
  useEffect(() => { load(); const timer = setInterval(load, 5000); return () => clearInterval(timer); }, []);
  const action = async (path, options, success) => { try { const response = await api(path, options); const body = await response.json().catch(() => ({})); if (!response.ok) throw new Error(body.error || "Thao tác thất bại"); notify(success); load(); } catch (error) { notify(error.message, "error"); } };
  return <main className="site-main min-h-screen bg-slate-50 pb-24"><header className="border-b border-slate-100 bg-white"><div className="container flex items-center justify-between gap-4 py-4"><div className="flex items-center gap-3"><ShieldCheck size={22}/><div><h1 className="text-lg font-extrabold">Trang quản trị</h1><p className="text-xs text-slate-500">Quản lý nội dung và vận hành</p></div></div><div className="flex gap-2"><Link to="/" className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold"><ExternalLink size={13} className="mr-1 inline"/>Trang công khai</Link><button onClick={logout} className="rounded-full border border-slate-200/70 px-3 py-2 text-xs font-semibold"><LogOut size={13} className="mr-1 inline"/>Đăng xuất</button></div></div></header><div className="container mt-6 flex flex-col gap-6 lg:flex-row"><nav className="flex gap-1 overflow-x-auto lg:w-48 lg:flex-col">{tabs.map(([key, label]) => <button key={key} onClick={() => setParams(key === "overview" ? {} : { tab: key })} className={`rounded-lg px-4 py-2.5 text-left text-sm font-semibold ${tab === key ? "bg-white shadow-sm" : "text-slate-500"}`}>{label}</button>)}</nav><section className="min-w-0 flex-1">{tab === "overview" && <Overview data={data}/>} {tab === "access" && <AccessCodes codes={data.codes} action={action}/>} {tab === "payments" && <Payments payments={data.payments} stats={data.paymentStats}/>} {tab === "pois" && <Pois pois={data.pois} stats={data.poiStats} search={search} setSearch={setSearch} onEdit={setEditing} action={action}/>} {tab === "monitoring" && <Monitoring health={data.health} loading={loading}/>}</section></div>{editing && <PoiModal poi={editing === "new" ? null : editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); notify("Đã lưu POI"); }} onError={(e) => notify(e, "error")}/>} {toast && <div className={`fixed bottom-6 right-4 z-50 rounded-xl border border-slate-200/70 px-4 py-3 text-sm font-semibold shadow-lg ${toast.type === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}><CheckCircle2 size={16} className="mr-2 inline"/>{toast.message}</div>}</main>;
}

 function Overview({ data }) { const s = data.paymentStats || {}; const a = data.accessStats || {}; const p = data.poiStats || {}; return <div className="space-y-6"><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><Stat label="POI đã xuất bản" value={(data.pois || []).filter(x => x.status === "published").length} icon={<MapPin/>}/><Stat label="Doanh thu tổng" value={money(s.totalRevenue)} icon={<CreditCard/>}/><Stat label="Doanh thu hôm nay" value={money(s.todayRevenue)} icon={<CreditCard/>}/><Stat label="Mã đang hoạt động" value={a.activePasses ?? 0} icon={<ShieldCheck/>}/><Stat label="Tổng lượt nghe" value={p.totalListens ?? 0} icon={<Headphones/>}/></div><Panel title="Tóm tắt vận hành"><p className="text-sm text-slate-600">{data.health ? `Access API hoạt động (${data.health.status || "ok"}).` : "Không kết nối được Access API."} Dữ liệu được làm mới tự động.</p></Panel></div>; }
function AccessCodes({ codes, action }) { const [filter, setFilter] = useState("all"); const visible = codes.filter(x => filter === "all" || x.status === filter); return <Panel title="Mã truy cập"><div className="mb-4 flex flex-wrap gap-2">{[["all", "Tất cả"], ["active", "Đang hoạt động"], ["expired", "Đã hết hạn"], ["revoked", "Đã thu hồi"]].map(([k, l]) => <button key={k} onClick={() => setFilter(k)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${filter === k ? "bg-slate-900 text-white" : "bg-slate-100"}`}>{l}</button>)}<button onClick={() => action("/api/access-codes?status=expired", { method: "DELETE" }, "Đã xóa mã hết hạn")} className="ml-auto rounded-full border border-slate-200/70 px-3 py-1.5 text-xs font-semibold"><Trash2 size={13} className="mr-1 inline"/>Xóa mã hết hạn</button></div><div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-xs"><thead><tr className="border-b border-slate-100 text-slate-500"><th className="p-3">Mã</th><th className="p-3">Trạng thái</th><th className="p-3">Kích hoạt</th><th className="p-3">Hết hạn</th><th className="p-3">Thao tác</th></tr></thead><tbody>{visible.map(x => <tr key={x.code} className="border-b border-slate-100"><td className="p-3 font-mono font-semibold">{x.code}</td><td className="p-3">{x.status}</td><td className="p-3">{fmt(x.activatedAt)}</td><td className="p-3">{fmt(x.expiresAt)}</td><td className="p-3">{x.status === "active" ? <button onClick={() => action(`/api/access-codes/${encodeURIComponent(x.code)}/revoke`, { method: "POST" }, "Đã thu hồi mã")} className="rounded-lg bg-red-50 px-2 py-1 text-red-700">Thu hồi</button> : <button onClick={() => action(`/api/access-codes/${encodeURIComponent(x.code)}`, { method: "DELETE" }, "Đã xóa mã")} className="rounded-lg bg-slate-100 px-2 py-1">Xóa</button>}</td></tr>)}</tbody></table>{!visible.length && <Empty text="Chưa có mã truy cập"/>}</div></Panel>; }
function Payments({ payments, stats }) { return <div className="space-y-5"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><Stat label="Doanh thu" value={money(stats.totalRevenue)} icon={<CreditCard/>}/><Stat label="Hôm nay" value={money(stats.todayRevenue)} icon={<CreditCard/>}/><Stat label="Thành công" value={stats.successfulPayments ?? 0} icon={<CheckCircle2/>}/><Stat label="Lỗi" value={stats.failedPayments ?? 0} icon={<X/>}/></div><Panel title="Giao dịch"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead><tr className="border-b border-slate-100 text-slate-500">{["Mã giao dịch", "Người trả", "Phương thức", "Số tiền", "Thời gian", "Trạng thái", "Mã truy cập"].map(x => <th className="p-3" key={x}>{x}</th>)}</tr></thead><tbody>{payments.map(x => <tr className="border-b border-slate-100" key={x.id}><td className="p-3 font-mono">{x.id}</td><td className="p-3"><b>{x.payerName}</b><br/><span className="text-slate-500">{x.payerDetail}</span></td><td className="p-3">{x.method === "credit" ? "Thẻ tín dụng" : "Chuyển khoản"}</td><td className="p-3">{money(x.amount)}</td><td className="p-3">{fmt(x.createdAt)}</td><td className="p-3">{x.status === "paid" ? "Đã thanh toán" : "Lỗi"}</td><td className="p-3 font-mono">{x.accessCode || "—"}</td></tr>)}</tbody></table></div></Panel></div>; }
function Pois({ pois, stats, search, setSearch, onEdit, action }) { const rows = pois.filter(x => `${x.name?.vi || ""} ${x.name?.en || ""} ${x.category || ""} ${x.district || ""}`.toLowerCase().includes(search.toLowerCase())); return <Panel title="Thư viện POI"><div className="mb-4 flex justify-between"><label className="rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs"><Search size={13} className="mr-2 inline"/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm kiếm..." className="w-40 outline-none"/></label><button onClick={() => onEdit("new")} className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">Thêm POI</button></div><div className="divide-y">{rows.map(p => <div key={p.id} className="flex flex-wrap items-center gap-3 py-4"><img src={resolveMediaUrl(p.image)} className="h-14 w-14 rounded-lg object-cover"/><div className="min-w-[180px] flex-1"><b>{p.name?.vi || p.name?.en}</b><p className="text-xs text-slate-500">{p.category} · {p.district} · {p.status === "published" ? "Đã xuất bản" : "Nháp"}</p></div><span className="text-xs text-slate-500">{Object.keys(p.audio || {}).length}/{langs.length} audio</span><span className="text-xs text-slate-500">{stats?.byPoi?.[p.id]?.listens || 0} nghe</span><details className="relative"><summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg border border-slate-200/70 px-3 py-1.5 text-xs font-semibold"><QrCode size={13}/>QR</summary><div className="absolute bottom-9 right-0 z-20 rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xl"><QRCodeSVG value={buildPoiUrl(p.id)} size={112} includeMargin bgColor="#fff" fgColor="#0f172a" aria-label={`QR ${p.name?.en || p.id}`} /><p className="mt-1 max-w-[130px] text-[10px] leading-4 text-slate-500">Quét trên máy tính để mở nhanh trang POI này trên điện thoại. QR không dùng để xác thực mã truy cập.</p></div></details><button onClick={() => onEdit(p)} className="rounded-lg border border-slate-200/70 px-3 py-1.5 text-xs">Sửa</button><button onClick={() => action(`/api/admin/pois/${p.id}`, { method: "DELETE" }, "Đã xóa POI")} className="rounded-lg border border-red-200 px-3 py-1.5 text-xs text-red-600">Xóa</button></div>)}{!rows.length && <Empty text="Chưa có POI"/>}</div></Panel>; }
function PoiModal({ poi, onClose, onSaved, onError }) {
  const blank = { id: "", status: "draft", name: Object.fromEntries(langs.map(l => [l, ""])), description: Object.fromEntries(langs.map(l => [l, ""])), highlights: Object.fromEntries(langs.map(l => [l, []])), category: "Cultural", district: "Hoan Kiem", year: "", duration: 5, coordinates: [21.0285, 105.8542], image: "", audio: {} };
  const [form, setForm] = useState(poi ? { ...blank, ...poi } : blank);
  const [activeLang, setActiveLang] = useState("vi");
  const [files, setFiles] = useState({});
  const [saving, setSaving] = useState(false);
  const [audioStatus, setAudioStatus] = useState("");
  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));
  const updateLang = (field, lang, value) => setForm(f => ({ ...f, [field]: { ...f[field], [lang]: value } }));
  const chooseAudio = (lang, file) => {
    if (!file) return;
    const allowedTypes = ['audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/ogg'];
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(file.type) || !['mp3', 'mp4', 'wav', 'ogg'].includes(extension)) return onError("Chỉ nhận file MP3, MP4, WAV hoặc OGG hợp lệ.");
    if (file.size > 20 * 1024 * 1024) return onError("File audio không được vượt quá 20MB.");
    setFiles(current => ({ ...current, [lang]: file }));
  };
  const uploadAudio = async id => {
    for (const [lang, file] of Object.entries(files)) {
      const response = await fetch(`${ACCESS_API_BASE}/api/admin/pois/${encodeURIComponent(id)}/audio/${encodeURIComponent(lang)}`, { method: "PUT", headers: { "Content-Type": file.type || "application/octet-stream", "x-admin-key": ADMIN_KEY }, body: file });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || `Không thể tải audio ${lang}`);
    }
  };
  const removeAudio = async lang => {
    try {
      const response = await api(`/api/admin/pois/${encodeURIComponent(form.id)}/audio/${encodeURIComponent(lang)}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Không thể xóa audio");
      setForm(f => ({ ...f, audio: { ...f.audio, [lang]: undefined } }));
      setAudioStatus(`Đã xóa audio ${lang}.`);
    } catch (error) { onError(error.message); }
  };
  const submit = async e => {
    e.preventDefault();
    if (!form.name.vi?.trim() || !form.name.en?.trim()) return onError("Cần nhập tên tiếng Việt và tiếng Anh.");
    setSaving(true);
    try {
      const response = await api(`/api/admin/pois${poi ? `/${poi.id}` : ""}`, { method: poi ? "PUT" : "POST", body: JSON.stringify({ ...form, audio: undefined, highlights: Object.fromEntries(langs.map(l => [l, (form.highlights?.[l] || []).map(s => s.trim()).filter(Boolean)])), duration: Number(form.duration), coordinates: [Number(form.coordinates[0]), Number(form.coordinates[1])] }) });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || "Không thể lưu POI");
      const id = body.id || body.poi?.id || form.id;
      await uploadAudio(id);
      onSaved();
    } catch (error) { onError(error.message); } finally { setSaving(false); }
  };
  return <div className="fixed inset-0 z-40 overflow-y-auto bg-slate-900/40 p-4"><div className="mx-auto max-w-5xl rounded-2xl bg-white p-5 shadow-xl"><div className="mb-5 flex items-start justify-between"><div><h2 className="text-lg font-bold">{poi ? "Sửa POI" : "Thêm POI"}</h2><p className="mt-1 text-sm text-slate-500">Audio có thể thêm sau. Bạn vẫn có thể lưu bản nháp khi chưa có audio.</p></div><button type="button" onClick={onClose} aria-label="Đóng"><X/></button></div><form onSubmit={submit} className="space-y-5"><section className="rounded-xl border border-slate-200/70 p-4"><h3 className="font-bold">Thông tin cơ bản</h3><div className="mt-3 grid gap-3 sm:grid-cols-3"><Field label="Slug"><input value={form.id} disabled={!!poi} onChange={e => update("id", e.target.value)}/></Field><Field label="Danh mục"><input value={form.category} onChange={e => update("category", e.target.value)}/></Field><Field label="Quận"><input value={form.district} onChange={e => update("district", e.target.value)}/></Field><Field label="Thời lượng (phút)"><input type="number" min="1" value={form.duration} onChange={e => update("duration", e.target.value)}/></Field><Field label="Năm"><input value={form.year} onChange={e => update("year", e.target.value)}/></Field><Field label="Trạng thái"><select value={form.status} onChange={e => update("status", e.target.value)}><option value="draft">Bản nháp</option><option value="published">Đã xuất bản</option></select></Field></div></section><section className="rounded-xl border border-slate-200/70 p-4"><h3 className="font-bold">Nội dung đa ngôn ngữ</h3><div className="mt-3 flex flex-wrap gap-2">{langs.map(lang => <button type="button" key={lang} onClick={() => setActiveLang(lang)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${activeLang === lang ? "bg-slate-900 text-white" : "bg-slate-100"}`}>{lang}</button>)}</div><div className="mt-3 grid gap-3"><Field label={`Tên (${activeLang})`}><input value={form.name[activeLang] || ""} onChange={e => updateLang("name", activeLang, e.target.value)}/></Field><Field label={`Mô tả (${activeLang})`}><textarea rows="3" value={form.description[activeLang] || ""} onChange={e => updateLang("description", activeLang, e.target.value)}/></Field><Field label={`Điểm nổi bật (${activeLang}) · mỗi dòng một mục`}><textarea rows="4" value={(form.highlights?.[activeLang] || []).join("\n")} onChange={e => updateLang("highlights", activeLang, e.target.value.split("\n"))}/></Field></div></section><section className="rounded-xl border border-slate-200/70 p-4"><h3 className="font-bold">Audio theo ngôn ngữ</h3><p className="mt-1 text-sm text-slate-500">Định dạng hỗ trợ: MP3, MP4, WAV, OGG · tối đa 20MB mỗi file.</p>{audioStatus && <p className="mt-2 text-xs font-semibold text-emerald-700">{audioStatus}</p>}<div className="mt-3 grid gap-3 sm:grid-cols-2">{langs.map(lang => <div key={lang} className="rounded-lg bg-slate-50 p-3"><div className="flex items-center justify-between"><b className="text-sm">{lang}</b>{form.audio?.[lang] && <button type="button" onClick={() => removeAudio(lang)} className="text-xs text-red-600">Xóa audio</button>}</div><p className="mt-1 truncate text-xs text-slate-600">{files[lang]?.name || (form.audio?.[lang] ? "Đã có audio" : "Chưa có audio")}</p><input className="mt-2 block w-full text-xs" type="file" accept=".mp3,.mp4,.wav,.ogg,audio/mpeg,audio/mp4,audio/wav,audio/ogg" onChange={e => chooseAudio(lang, e.target.files?.[0])}/></div>)}</div></section><div className="flex justify-end gap-2"><button type="button" onClick={onClose} className="rounded-lg border border-slate-200/70 px-4 py-2 text-sm">Hủy</button><button disabled={saving} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">{saving ? "Đang lưu..." : "Lưu POI"}</button></div></form></div></div>;
}function Monitoring({ health, loading }) { return <div className="space-y-4"><h2 className="text-lg font-bold">Giám sát hệ thống</h2><div className="grid gap-4 sm:grid-cols-2"><Monitor label="Access API" value={health ? "Đang hoạt động" : "Ngoại tuyến"} ok={!!health}/><Monitor label="Cổng thanh toán" value="Mô phỏng – chưa tích hợp"/><Monitor label="Làm mới" value={loading ? "Đang tải..." : new Date().toLocaleTimeString("vi-VN")}/></div></div>; }
function Field({ label, children }) { return <label className="block text-xs font-semibold text-slate-600">{label}<span className="mt-1 block">{children}</span></label>; }
function Stat({ label, value, icon }) { return <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm"><div className="text-slate-500">{icon}</div><p className="mt-3 text-xs font-semibold uppercase text-slate-400">{label}</p><p className="mt-1 text-2xl font-extrabold">{value}</p></div>; }
function Monitor({ label, value, ok }) { return <div className="rounded-2xl border border-slate-200/70 bg-white p-5"><p className="text-xs font-semibold uppercase text-slate-400">{label}</p><p className={`mt-3 font-bold ${ok ? "text-emerald-600" : "text-slate-700"}`}>{value}</p></div>; }
function Panel({ title, children }) { return <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm"><h2 className="text-sm font-bold">{title}</h2><div className="mt-4">{children}</div></div>; }
function Empty({ text }) { return <p className="py-8 text-center text-sm text-slate-500">{text}</p>; }
