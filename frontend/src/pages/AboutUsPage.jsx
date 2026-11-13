import { Link } from "react-router-dom";
import { ArrowRight, Headphones, Languages, MapPin, Route, Sparkles } from "lucide-react";
import { sites, t } from "../core/data/hanoiHeritageSites";
import { useHeritage } from "../core/context/HeritageContext";

export default function AboutUsPage() {
  const { language, sites: heritageSites } = useHeritage();
  const labels = { ...t.en, ...(t[language] || {}) };
  const displayedSites = heritageSites?.length ? heritageSites : sites;
  const districts = new Set(displayedSites.map((site) => site.district)).size;
  const featured = displayedSites.slice(0, 3);
  const steps = [
    ["01", labels.aboutStepChoose, labels.aboutStepChooseText, "/"],
    ["02", labels.aboutStepListen, labels.aboutStepListenText, "/location/hoan-kiem"],
    ["03", labels.aboutStepPlan, labels.aboutStepPlanText, "/map"],
  ];
  const principles = [
    ["01", labels.aboutPrincipleLocal, labels.aboutPrincipleLocalText],
    ["02", labels.aboutPrincipleWalk, labels.aboutPrincipleWalkText],
    ["03", labels.aboutPrincipleAccess, labels.aboutPrincipleAccessText],
  ];
  const categoryLabels = {
    vi: { Cultural: "Văn hóa", Historical: "Lịch sử", Spiritual: "Tâm linh", Architectural: "Kiến trúc" },
    en: { Cultural: "Cultural", Historical: "Historical", Spiritual: "Spiritual", Architectural: "Architectural" },
    fr: { Cultural: "Culturel", Historical: "Historique", Spiritual: "Spirituel", Architectural: "Architectural" },
    ja: { Cultural: "文化", Historical: "歴史", Spiritual: "精神文化", Architectural: "建築" },
    ko: { Cultural: "문화", Historical: "역사", Spiritual: "종교", Architectural: "건축" },
    "zh-CN": { Cultural: "文化", Historical: "历史", Spiritual: "宗教", Architectural: "建筑" },
  };
  const districtLabels = {
    vi: { "Hoan Kiem": "Hoàn Kiếm", "Dong Da": "Đống Đa", "Ba Dinh": "Ba Đình", "Old Quarter": "Phố cổ", "Tay Ho": "Tây Hồ" },
    en: { "Hoan Kiem": "Hoan Kiem", "Dong Da": "Dong Da", "Ba Dinh": "Ba Dinh", "Old Quarter": "Old Quarter", "Tay Ho": "Tay Ho" },
    fr: { "Hoan Kiem": "Hoan Kiem", "Dong Da": "Đống Đa", "Ba Dinh": "Ba Đình", "Old Quarter": "Vieux quartier", "Tay Ho": "Tây Hồ" },
    ja: { "Hoan Kiem": "ホアンキエム", "Dong Da": "ドンダー", "Ba Dinh": "バーディン", "Old Quarter": "旧市街", "Tay Ho": "タイホー" },
    ko: { "Hoan Kiem": "호안끼엠", "Dong Da": "동다", "Ba Dinh": "바딘", "Old Quarter": "구시가지", "Tay Ho": "떠이호" },
    "zh-CN": { "Hoan Kiem": "还剑", "Dong Da": "栋多", "Ba Dinh": "巴亭", "Old Quarter": "老城区", "Tay Ho": "西湖" },
  };
  return (
    <main className="about-page site-main">
      <section className="bg-slate-900 py-16 text-white md:py-24"><div className="container"><div className="grid items-end gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div><p className="text-xs font-semibold uppercase tracking-[.3em] text-slate-400">{labels.aboutEyebrow}</p><h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{labels.aboutHeroTitle}</h1><p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">{labels.aboutHeroText}</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">{labels.aboutStart}<ArrowRight size={16} /></Link><Link to="/map" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"><MapPin size={16} /> {labels.aboutMap}</Link></div></div>
        <div className="grid grid-cols-3 gap-3"><div className="col-span-2 mt-8 overflow-hidden rounded-2xl"><img src={featured[0].image} alt={featured[0].name[language] || featured[0].name.en} className="h-52 w-full object-cover md:h-64" /></div><div className="overflow-hidden rounded-2xl"><img src={featured[1].image} alt={featured[1].name[language] || featured[1].name.en} className="h-52 w-full object-cover md:h-64" /></div><div className="col-span-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300"><span>{labels.aboutPlaces}</span><span className="text-slate-500">01 — 09</span></div></div>
      </div></div></section>
      <section className="container py-14 md:py-20">
        <div className="grid grid-cols-2 gap-5 border-b border-slate-200 pb-12 md:grid-cols-4"><Fact icon={<MapPin size={18} />} value={displayedSites.length} label={labels.aboutSites} /><Fact icon={<Languages size={18} />} value="6" label={labels.aboutLanguages} /><Fact icon={<Route size={18} />} value={districts} label={labels.aboutDistricts} /><Fact icon={<Headphones size={18} />} value="1" label={labels.aboutAudio} /></div>
        <div className="grid gap-10 border-b border-slate-200 py-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-slate-400">{labels.aboutWhyEyebrow}</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">{labels.aboutWhyTitle}</h2></div><div className="space-y-5 text-sm leading-7 text-slate-600"><p>{labels.aboutWhyText1}</p><p>{labels.aboutWhyText2}</p></div></div>
        <div className="py-16"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-slate-400">{labels.aboutHowEyebrow}</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight">{labels.aboutHowTitle}</h2></div><Link to="/" className="text-sm font-semibold underline">{labels.aboutBrowse}</Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{steps.map(([number, title, text, href]) => <Link to={href} key={number} className="group border-t-2 border-slate-900 pt-5 transition hover:-translate-y-1"><span className="text-xs text-slate-400">{number}</span><h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p><ArrowRight size={17} className="mt-6 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900" /></Link>)}</div></div>
        <div className="border-y border-slate-200 py-16"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.25em] text-slate-400"><Sparkles size={15} /> {labels.aboutSelection}</div><div className="mt-8 grid gap-4 md:grid-cols-3">{featured.map((site) => <Link to={`/location/${site.id}`} key={site.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-md"><img src={site.image} alt={site.name[language] || site.name.en} className="h-44 w-full object-cover transition group-hover:scale-[1.02]" /><div className="p-4"><p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{categoryLabels[language]?.[site.category] || categoryLabels.en[site.category] || site.category} · {districtLabels[language]?.[site.district] || districtLabels.en[site.district] || site.district}</p><h3 className="mt-2 font-bold text-slate-900">{site.name[language] || site.name.en}</h3><p className="mt-2 text-xs text-slate-500">{labels.aboutSince} {site.year} · {site.duration} {labels.aboutMinutes}</p></div></Link>)}</div></div>
        <div className="grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr]"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-slate-400">{labels.aboutPrinciplesEyebrow}</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight">{labels.aboutPrinciplesTitle}</h2></div><div className="divide-y divide-slate-200">{principles.map(([number, title, text]) => <div key={number} className="grid gap-4 py-5 sm:grid-cols-[48px_180px_1fr]"><span className="text-xs text-slate-400">{number}</span><h3 className="font-bold text-slate-900">{title}</h3><p className="text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div>
        <section className="rounded-3xl bg-slate-50 p-8 md:p-10"><div className="flex flex-wrap items-center justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-slate-400">{labels.aboutAvailable}</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">{labels.aboutCtaTitle}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">{labels.aboutCtaText}</p></div><Link to="/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">{labels.aboutExplore}<ArrowRight size={16} /></Link></div></section>
      </section>
    </main>
  );
}
function Fact({ icon, value, label }) { return <div><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">{icon}</div><p className="mt-4 text-2xl font-extrabold text-slate-900">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>; }
