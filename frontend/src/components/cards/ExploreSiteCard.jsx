import { MapPin, Play, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useHeritage, getHighlights } from "../../core/context/HeritageContext";
import { getCategoryTextClass } from "../../core/utils/categoryStyles";
import { useAudio } from "../../core/context/AudioPlayerContext";
import { usePayment } from "../../core/context/PaymentContext";
export default function SiteCard({ site }) {
  const { language } = useHeritage();
  const { play } = useAudio();
  const { hasAccess } = usePayment();
  const navigate = useNavigate();
  return (
    <article className="group rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
      <Link to={"/location/" + site.id}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={site.image}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <span
            className={`absolute top-3 left-3 bg-white/95 rounded-full px-3 py-1 text-xs font-semibold ${getCategoryTextClass(site.category)}`}
          >
            {site.category}
          </span>
        </div>
      </Link>
      <div className="p-5">
        <Link to={"/location/" + site.id}>
          <h3 className="font-bold">{site.name[language] || site.name.en}</h3>
        </Link>
        <p className="text-xs text-gray-500 mt-2 flex gap-1">
          <MapPin size={13} />
          {site.district} · {site.year}
        </p>
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {site.description[language] || site.description.en}
        </p>
        <div className="border-t mt-4 pt-3 flex justify-between items-center text-xs text-gray-500">
           <button
             type="button"
             onClick={(event) => { event.preventDefault(); event.stopPropagation(); hasAccess ? play(site) : navigate(`/paywall?next=${encodeURIComponent(`/location/${site.id}`)}`); }}
            className={`flex items-center gap-1 hover:text-black ${!hasAccess ? "text-amber-700" : ""}`}
          >
            <Play size={14} fill="currentColor" />
            {hasAccess ? "Play audio" : "Unlock audio"} · {site.duration} min
          </button>
        </div>
      </div>
    </article>
  );
}
