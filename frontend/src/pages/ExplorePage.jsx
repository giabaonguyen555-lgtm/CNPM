import { useEffect, useMemo, useState } from "react";
import { Search, MapPin } from "lucide-react";
import { t } from "../core/data/hanoiHeritageSites";
import { trackEvent } from "../core/analytics";
import { getCategoryTextClass } from "../core/utils/categoryStyles";
import { useHeritage } from "../core/context/HeritageContext";
import SiteCard from "../components/cards/ExploreSiteCard";
export default function ExplorePage() {
  const { language, sites } = useHeritage();
  const labels = t[language] || t.en;
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 6;
  useEffect(() => {
    trackEvent("guide_opened", { language });
  }, [language]);
  const districts = ["All", ...new Set(sites.map((s) => s.district))];
  const filtered = useMemo(
    () =>
      sites.filter(
        (s) =>
          (district === "All" || s.district === district) &&
          `${s.name.en} ${s.name.vi} ${s.description.en}`
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, district, sites],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleSites = filtered.slice((page - 1) * pageSize, page * pageSize);
  useEffect(() => { setPage(1); }, [q, district]);
  useEffect(() => { if (page > pageCount) setPage(pageCount); }, [page, pageCount]);
  return (
    <main className="site-main">
      <section className="bg-gradient-to-b from-gray-200/70 via-gray-100/30 to-white py-16 text-center">
        <div className="container">
             <p className="text-xs uppercase tracking-[.25em] text-gray-500">
             {labels.audioGuide || t.en.audioGuide}
           </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            {t[language]?.explore || "Explore Hanoi"}
          </h1>
          <p className="text-gray-500 mt-4">{t[language]?.subtitle}</p>
             <p className="text-xs text-gray-500 mt-4 flex justify-center gap-1">
              <MapPin size={14} />{sites.length} {labels.sitesCount || t.en.sitesCount} in Hanoi
            </p>

          <div className="max-w-xl mx-auto mt-7 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-slate-300 bg-white transition-all focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/10">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              value={q}
               onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder={t[language]?.search}
              className="explore-search-input w-full bg-transparent border-0 !border-transparent outline-none !outline-none focus:outline-none focus-visible:!outline-none focus:ring-0 focus-visible:!ring-0 focus:border-transparent shadow-none !shadow-none text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center mt-4">
            {districts.map((d) => (
              <button
                key={d}
                 onClick={() => { setDistrict(d); setPage(1); }}
                className={
                  district === d
                    ? "bg-black text-white rounded-full px-4 py-2 text-xs"
                    : "bg-white border border-slate-300 rounded-full px-4 py-2 text-xs hover:border-black"
                }
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-4">
        <p className="text-xs text-gray-500 mb-5">
           {labels.showing || t.en.showing} {filtered.length ? (page - 1) * pageSize + 1 : 0}–{Math.min(page * pageSize, filtered.length)} {labels.of || t.en.of} {filtered.length} {labels.sitesCount || t.en.sitesCount}
         </p>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {visibleSites.map((s) => (
             <SiteCard key={s.id} site={s} />
           ))}
         </div>
         {pageCount > 1 && (
           <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
             <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1} className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-40">{labels.previous || t.en.previous}</button>
             {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button type="button" key={number} onClick={() => setPage(number)} aria-current={page === number ? "page" : undefined} className={`h-9 min-w-9 rounded-full px-3 text-xs font-semibold ${page === number ? "bg-slate-950 text-white" : "border border-slate-300 bg-white text-slate-700 hover:border-slate-950"}`}>{number}</button>)}
             <button type="button" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={page === pageCount} className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-40">{labels.next || t.en.next}</button>
           </nav>
         )}
       </section>
    </main>
  );
}
