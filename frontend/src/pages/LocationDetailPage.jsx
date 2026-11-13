import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
import {
  Play,
  Pause,
  MapPin,
  Calendar,
  Globe,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Lock,
  CreditCard,
} from "lucide-react";
import { useHeritage, getHighlights } from "../core/context/HeritageContext";
import { useAudio } from "../core/context/AudioPlayerContext";
import { getCategoryTextClass } from "../core/utils/categoryStyles";
import { usePayment } from "../core/context/PaymentContext";
import NotFoundPage from "./NotFoundPage";
import { trackEvent } from "../core/analytics";
import { t, languageLabels } from "../core/data/hanoiHeritageSites";
import { QRCodeSVG } from "qrcode.react";
import { buildPoiUrl } from "../core/publicUrl";

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

const categoryColors = {
  Cultural: "#0f766e",
  Historical: "#4f46e5",
  Architectural: "#b45309",
  Spiritual: "#be185d",
};

const formatTime = (seconds = 0) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export default function LocationDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") === "qr" ? "qr" : "direct";
  const fromMobile = searchParams.get("mobile") === "1";
  const { language, sites } = useHeritage();
  const labels = t[language] || t.en;
  const site = sites.find((item) => item.id === id);
  const navigate = useNavigate();
  const { hasAccess } = usePayment();
  const audio = useAudio();
  const {
    current,
    error,
    playing,
    play,
    progress,
    seek,
    seekSeconds,
    volume,
    setVolume,
    duration,
    rate,
    setRate,
    language: audioLanguage,
    setLanguage: setAudioLanguage,
  } = audio;

  useEffect(() => {
    if (!site) return;
    const key = `poi-opened:${source}:${site.id}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    trackEvent("poi_opened", { poiId: site.id, language, source });
  }, [language, site, source]);

  if (!site) return <NotFoundPage />;

  const title = site.name[language] || site.name.vi || site.name.en;
  const localizedDescription = site.description[language] || site.description.vi || site.description.en;
  const active = current?.id === site.id;
  const color = categoryColors[site.category] || "#111827";
  const localizedCategory = categoryLabels[language]?.[site.category] || categoryLabels.en[site.category] || site.category;
  const localizedDistrict = districtLabels[language]?.[site.district] || districtLabels.en[site.district] || site.district;
  const poiQrUrl = buildPoiUrl(site.id);
  const currentSeconds = (progress / 100) * (duration || Number(site.duration) * 60);
  const recommendations = sites
    .filter((item) => item.id !== site.id)
    .slice(0, 3);

  const changeLanguage = (nextLanguage) => {
    setAudioLanguage(nextLanguage);
    if (active && playing) {
      audio.stop();
      window.setTimeout(() => audio.play(site), 0);
    }
  };


  return (
    <main className="site-main">
      <section className="relative h-[360px] md:h-[420px] overflow-hidden bg-gray-200">
        <img
          src={site.image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        <div className="absolute bottom-8 inset-x-0">
          <div className="container">
            <span
              style={{ borderColor: color, color }}
              className={`inline-flex bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryTextClass(site.category)}`}
            >
              {site.category}
            </span>
            <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight mt-3">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <span className="bg-white border border-gray-200/80 rounded-lg px-3 py-2">
                <MapPin size={13} className="inline mr-1" />
                {site.district}, Hanoi
              </span>
              <span className="bg-white border border-gray-200/80 rounded-lg px-3 py-2">
                <Calendar size={13} className="inline mr-1" />
                {labels.heritageSince} {site.year}
              </span>
              <span className="bg-white border border-gray-200/80 rounded-lg px-3 py-2 text-slate-500">{labels.openAccess}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container grid lg:grid-cols-12 gap-8 py-8 pb-32">
        <div className="lg:col-span-8 space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="flex min-w-0 flex-wrap items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
                <span>Audio Guide</span>
                <span className="whitespace-nowrap rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 sm:px-2.5 sm:text-xs">
                  {active && duration ? `${formatTime(duration)} total` : `${site.duration}:00 total`}
                </span>
              </h2>
              <label className="flex shrink-0 items-center text-xs">
                <Globe className="mr-1.5 h-4 w-4 text-slate-500 sm:mr-2" />
                <select
                   value={audioLanguage}
                   onChange={(event) => changeLanguage(event.target.value)}
                  className="w-[104px] rounded-lg border border-slate-200/80 bg-slate-100/80 px-2 py-1.5 text-[11px] font-medium text-slate-800 outline-none sm:w-auto sm:min-w-[130px] sm:px-3 sm:text-xs"
                >
                  <option value="vi">Vietnamese</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                  <option value="zh-CN">Chinese</option>
                </select>
              </label>
            </div>
             {language !== "vi" && !site.description[language] && <p className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">This guide is not translated yet. Vietnamese content is shown.</p>}
             {error && <p className="mb-3 text-xs text-amber-600">{error}</p>}
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              {localizedDescription}
            </p>
            {!hasAccess ? (
               <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                   <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-slate-900 shadow-sm"><Lock size={16} /></span>
                  <div>
                     <h3 className="text-sm font-bold text-slate-900">{labels.audioLocked}</h3>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{labels.payDescription}</p>
                  </div>
                </div>
                 <div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="flex flex-col rounded-xl border border-slate-200 bg-white p-3">
                       <p className="flex items-center gap-2 text-xs font-bold text-slate-900"><CreditCard size={15} />{labels.payToListen}</p>
                       <p className="mt-1.5 flex-1 text-[11px] leading-4 text-slate-500">{labels.payDescription}</p>
                       <button type="button" onClick={() => navigate(`/paywall?next=${encodeURIComponent(`/location/${site.id}${fromMobile || source === "qr" ? `?source=${source}&mobile=${fromMobile ? "1" : "0"}` : ""}`)}`)} className="mt-3 rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800">{labels.payToListen}</button>
                     </div>
                    <div className="hidden flex-col items-center rounded-xl border border-slate-200 bg-white p-3 md:flex">
                      <p className="self-start text-xs font-bold text-slate-900">{labels.scanPhone || "Mở trên điện thoại"}</p>
                      <QRCodeSVG value={poiQrUrl} size={88} includeMargin bgColor="#fff" fgColor="#0f172a" aria-label={`${labels.scanPhone || "Mở trên điện thoại"}: ${title}`} className="mt-2" />
                      <p className="mt-1 text-center text-[10px] leading-4 text-slate-500">{labels.scanPhone || "Quét để mở POI trên điện thoại"}</p>
                    </div>
                </div>
              </div>
            ) : (<>
            <div className="relative w-full h-2 bg-slate-100 rounded-full cursor-pointer">
              <div
                className="absolute inset-y-0 left-0 bg-slate-950 h-full rounded-full"
                style={{ width: `${active ? progress : 0}%` }}
              />
              <input
                aria-label="Audio progress"
                type="range"
                min="0"
                max="100"
                 value={active ? progress : 0}
                 disabled={!hasAccess}
                 onChange={(event) => hasAccess && seek(Number(event.target.value))}
                className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full shadow-sm pointer-events-none"
                style={{ left: `calc(${active ? progress : 0}% - 8px)` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
              <span>{formatTime(currentSeconds)}</span>
               <span>{formatTime(duration || Number(site.duration) * 60)}</span>
            </div>
            <div className="flex items-center justify-center gap-6 my-4">
               <button
                 aria-label="Skip back 15 seconds"
                 disabled={!hasAccess}
                 onClick={() => hasAccess && seekSeconds(-15)}
                 className="p-2 text-slate-700 hover:text-slate-950 transition-colors disabled:cursor-not-allowed disabled:opacity-40"
               >
                <SkipBack className="w-4 h-4" />
              </button>
               <button
                 type="button"
                 aria-label={!hasAccess ? "Unlock audio" : active && playing ? "Pause audio" : "Play audio"}
                 onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!hasAccess) {
                     navigate(`/paywall?next=${encodeURIComponent(`/location/${site.id}?source=${source}&mobile=${fromMobile ? "1" : "0"}`)}`);
                     return;
                   }
                   play(site);
                }}
                className="w-11 h-11 bg-slate-950 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center shadow-sm transition"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {active && playing ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </span>
              </button>
               <button
                 aria-label="Skip forward 15 seconds"
                 disabled={!hasAccess}
                 onClick={() => hasAccess && seekSeconds(15)}
                 className="p-2 text-slate-700 hover:text-slate-950 transition-colors disabled:cursor-not-allowed disabled:opacity-40"
               >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <button
                aria-label={volume ? "Mute audio" : "Unmute audio"}
                onClick={() => setVolume(volume ? 0 : 1)}
                className="shrink-0 text-slate-600"
              >
                {volume ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>
              <div className="flex-1 h-2.5 bg-slate-100 rounded-full relative flex items-center">
                <div
                  className="bg-slate-950 h-full rounded-l-full"
                  style={{ width: `${volume * 100}%` }}
                />
                <input
                  aria-label="Volume"
                  type="range"
                  min="0"
                  max="1"
                  step=".05"
                  value={volume}
                  onChange={(event) => setVolume(Number(event.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full pointer-events-none"
                  style={{ left: `calc(${volume * 100}% - 8px)` }}
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setRate(
                    rate === 2
                      ? 1
                      : rate === 1
                        ? 1.25
                        : rate === 1.25
                          ? 1.5
                          : 2,
                  )
                }
                className="border border-slate-200 hover:bg-slate-50 rounded-lg px-3 py-1 text-xs font-semibold text-slate-800 shrink-0"
              >
                {rate}x
              </button>
            </div>
            </>)}
          </section>

           <section className="border border-gray-200/70 rounded-2xl p-6">
             <h2 className="font-bold">{labels.aboutSite}</h2>
             <p className="text-sm text-gray-600 leading-7 mt-4">{localizedDescription}</p>
           </section>
           <section className="border border-gray-200/70 rounded-2xl p-6">
             <h2 className="font-bold">{labels.highlights}</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mt-4">
              {getHighlights(site, language).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <section className="border border-gray-200/70 rounded-2xl p-6">
            <h2 className="font-bold border-b border-gray-100 pb-3">
               {labels.quickInfo}

            </h2>
            <dl className="space-y-4 mt-4 text-sm">
              <div>
                 <dt className="text-xs text-gray-500">{labels.location}</dt>
                 <dd className="font-semibold mt-1">{localizedDistrict}, {labels.hanoi}</dd>
              </div>
              <div>
                 <dt className="text-xs text-gray-500">{labels.heritageYear}</dt>
                <dd className="font-semibold mt-1">{site.year}</dd>
              </div>
              <div>
                 <dt className="text-xs text-gray-500">{labels.category}</dt>
                <dd className="font-semibold mt-1" style={{ color }}>
                   {localizedCategory}

                </dd>
              </div>
              <div>
                 <dt className="text-xs text-gray-500">{labels.audioDuration}</dt>
                 <dd className="font-semibold mt-1">{site.duration} {labels.minutes}</dd>
              </div>
            </dl>
          </section>
           <section className="border border-gray-200 rounded-2xl p-5">
              <h2 className="font-bold mb-4">{labels.exploreMore}</h2>
            <div className="space-y-3">
              {recommendations.map((recommendation) => (
                <Link
                  key={recommendation.id}
                  to={`/location/${recommendation.id}`}
                  className="group flex gap-3 items-center border border-gray-100 rounded-xl p-2 hover:border-black transition"
                >
                  <img
                    src={recommendation.image}
                    alt=""
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <span className="min-w-0">
                    <strong className="block text-sm truncate">
                      {recommendation.name[language] || recommendation.name.en}
                    </strong>
                    <small className="text-gray-500">
                       {(categoryLabels[language]?.[recommendation.category] || categoryLabels.en[recommendation.category] || recommendation.category)} · {recommendation.duration} {labels.minutes}
                    </small>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
