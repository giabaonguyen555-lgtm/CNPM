import { Link } from "react-router-dom";
import { ArrowUpRight, Headphones, MapPin, Radio } from "lucide-react";
import { useHeritage } from "../../core/context/HeritageContext";
import { t } from "../../core/data/hanoiHeritageSites";

const locationLinks = [
  ["hoan-kiem", "/location/hoan-kiem"], ["literature", "/location/literature"],
  ["old-quarter", "/location/old-quarter"], ["tran-quoc", "/location/tran-quoc"],
];
export default function Footer() {
  const { language, sites } = useHeritage(); const labels = { ...t.en, ...(t[language] || {}) };
  return <footer className="site-footer border-t border-slate-200 bg-white pb-32 pt-12 text-sm text-slate-500"><div className="container"><div className="grid gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
    <div><Link to="/" className="text-base font-extrabold tracking-tight text-slate-900">HANOI<span className="text-slate-400">/</span>HERITAGE</Link><p className="mt-4 max-w-xs leading-6">{labels.footerTagline}</p><Link to="/location/hoan-kiem" className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800">{labels.startHoanKiem} <ArrowUpRight size={14} /></Link></div>
    <div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-slate-900">{labels.exploreTitle}</h2><div className="mt-4 grid gap-3"><Link className="transition hover:text-slate-900" to="/">{labels.allSites}</Link><Link className="transition hover:text-slate-900" to="/map">{labels.interactiveMap}</Link><Link className="transition hover:text-slate-900" to="/about">{labels.aboutGuide}</Link><Link className="transition hover:text-slate-900" to="/favorites">{labels.savedGuides}</Link></div></div>
    <div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-slate-900">{labels.planWalk}</h2><div className="mt-4 grid gap-3">{locationLinks.map(([id, href]) => { const site = sites?.find((item) => item.id === id); return <Link key={href} className="truncate transition hover:text-slate-900" to={href}>{site?.name?.[language] || site?.name?.en || id}</Link>; })}</div></div>
    <div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-slate-900">{labels.project}</h2><div className="mt-4 grid gap-3"><Link className="transition hover:text-slate-900" to="/paywall">{labels.audioPass}</Link><span className="inline-flex items-center gap-2 text-xs"><Headphones size={14} /> {labels.browserAudio}</span><span className="inline-flex items-center gap-2 text-xs"><MapPin size={14} /> {labels.builtForHanoi}</span></div></div>
  </div><div className="flex flex-wrap items-center justify-between gap-4 pt-5 text-xs text-slate-400"><p>{labels.copyright}</p><div className="flex items-center gap-4"><span className="inline-flex items-center gap-1.5"><Radio size={13} /> {labels.webGuide}</span><span>VI · EN · FR · JA · KO · ZH-CN</span></div></div></div></footer>;
}
