import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  LocateFixed,
  Route as RouteIcon,
  Navigation,
  Sparkles,
  MapPinned,
} from "lucide-react";
import { useHeritage } from "../core/context/HeritageContext";
import { useAudio } from "../core/context/AudioPlayerContext";
import { getCategoryTextClass } from "../core/utils/categoryStyles";
import { useGeolocation } from "../core/hooks/useGeolocation";
import { distanceInMeters, formatDistance } from "../core/location/distance";
import { usePayment } from "../core/context/PaymentContext";
import { useNavigate } from "react-router-dom";
import { t } from "../core/data/hanoiHeritageSites";

const markerIcon = L.divIcon({ className: "custom-marker", html: "<span></span>", iconSize: [24, 24], iconAnchor: [12, 12] });
const selectedMarkerIcon = L.divIcon({ className: "custom-marker selected", html: "<span></span>", iconSize: [30, 30], iconAnchor: [15, 15] });
const nearestMarkerIcon = L.divIcon({ className: "custom-marker nearest", html: "<span></span>", iconSize: [28, 28], iconAnchor: [14, 14] });

function Recenter({ site }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(site.coordinates, 14, { duration: 0.8 });
  }, [map, site]);
  return null;
}

export default function MapPage() {
  const { sites, language } = useHeritage();
  const labels = t[language] || t.en;
  const [selected, setSelected] = useState(sites[0]);
  useEffect(() => {
    if (sites.length && (!selected || !sites.some((site) => site.id === selected.id))) setSelected(sites[0]);
  }, [sites, selected]);
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const searchAreaRef = useRef(null);
  const [route, setRoute] = useState(false);
  const [gpsError, setGpsError] = useState("");
  const [proximityEnabled, setProximityEnabled] = useState(false);
  const navigate = useNavigate();
  const { hasAccess } = usePayment();
  const { play } = useAudio();
  const {
    position,
    status: locationStatus,
    error: locationError,
    request: requestLocation,
  } = useGeolocation({ watch: proximityEnabled, enabled: proximityEnabled });
  const categories = ["All", ...new Set(sites.map((site) => site.category))];
  const distances = useMemo(() => {
    if (!position) return new Map();
    const userPoint = [position.latitude, position.longitude];
    return new Map(
      sites.map((site) => [
        site.id,
        distanceInMeters(userPoint, site.coordinates),
      ]),
    );
  }, [position]);
  const nearestSite = useMemo(() => {
    if (!position || distances.size === 0) return null;
    return sites.reduce(
      (nearest, site) =>
        distances.get(site.id) < distances.get(nearest.id) ? site : nearest,
      sites[0],
    );
  }, [distances, position]);
  const nearbySite =
    nearestSite && distances.get(nearestSite.id) <= 500 ? nearestSite : null;

  const filtered = useMemo(
    () =>
      sites.filter((site) => {
        const haystack =
          `${Object.values(site.name).join(" ")} ${Object.values(site.description).join(" ")} ${site.district}`.toLowerCase();
        return (
          (category === "All" || site.category === category) &&
          haystack.includes(query.toLowerCase())
        );
      }),
    [category, query],
  );

  const locate = () => {
    requestLocation();
  };

  const toggleProximity = async () => {
    if (!hasAccess) {
      navigate("/paywall?next=/map");
      return;
    }
    if (proximityEnabled) {
      setProximityEnabled(false);
      return;
    }
    if (await requestLocation()) setProximityEnabled(true);
  };

  useEffect(() => {
    const closeMobileSearch = (event) => {
      if (window.matchMedia("(min-width: 768px)").matches) return;
      if (searchAreaRef.current && !searchAreaRef.current.contains(event.target)) {
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMobileSearch);
    return () => document.removeEventListener("mousedown", closeMobileSearch);
  }, []);

  const showLocationList = mobileSearchOpen || query.trim().length > 0;

  useEffect(() => {
    if (position) {
      setGpsError("");
      setSelected((currentSelection) => currentSelection?.id === "my-location" ? sites[0] : currentSelection);
    }
  }, [position]);

  useEffect(() => {
    if (locationError) setGpsError(locationError);
  }, [locationError]);

  return (
    <main className="map-page container py-8 site-main">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            {labels.exploreTitle || t.en.exploreTitle}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
            {labels.mapHeadline || t.en.mapHeadline}
          </h1>
        </div>
        <p className="max-w-xs text-right text-xs leading-5 text-slate-500">
{labels.mapDescription || t.en.mapDescription}
        </p>
      </div>
      <div className="map-layout grid lg:grid-cols-[320px_1fr] gap-4 h-[min(650px,calc(100vh-190px))] min-h-[500px]">
         <aside className="map-search-panel border border-gray-200/70 rounded-2xl p-4 overflow-hidden flex flex-col bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {labels.map || t.en.map}
              </p>
              <h2 className="mt-1 text-lg font-extrabold text-slate-900">
                {labels.explore || t.en.explore}
              </h2>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <MapPinned size={16} />
            </span>
          </div>
           <div ref={searchAreaRef} className="relative">
           <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-slate-300 bg-white transition-all focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/10 mt-3">
             <Search size={14} className="text-gray-500 shrink-0" />
             <input
               value={query}
               onFocus={() => setMobileSearchOpen(true)}
               onChange={(event) => { setQuery(event.target.value); setMobileSearchOpen(true); }}
               placeholder={labels.search || t.en.search}
               className="map-search-input w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent shadow-none text-xs"
             />
           </div>
           {showLocationList && <div className="map-search-dropdown lg:hidden absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-xl" onMouseDown={() => setMobileSearchOpen(true)}>
             {filtered.length === 0 ? <div className="py-5 text-center text-sm text-gray-500">{labels.noResults || t.en.noResults}</div> : filtered.map((site) => { const title = site.name[language] || site.name.en; return <button key={site.id} onMouseDown={() => setMobileSearchOpen(false)} onClick={() => setSelected(site)} className={`w-full text-left rounded-xl border p-2.5 flex gap-2.5 transition ${selected.id === site.id ? "border-slate-900 bg-slate-50" : "border-gray-200/70 hover:border-slate-400"}`}><img src={site.image} alt={title} className="h-14 w-14 rounded-lg object-cover" /><span className="min-w-0 flex-1"><b className="block truncate text-xs">{title}</b><small className="text-[11px] text-gray-500">{site.district}</small><em className={`mt-1 block text-[10px] font-semibold uppercase not-italic ${getCategoryTextClass(site.category)}`}>{site.category}</em></span></button>; })}
           </div>}
           </div>
           <div className="flex gap-1.5 flex-wrap mt-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? "bg-black text-white rounded-full px-2.5 py-1 text-[11px]"
                    : "border border-gray-200 rounded-full px-2.5 py-1 text-[11px] hover:border-black"
                }
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-4 border-y border-slate-100 py-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {labels.discoverTools || t.en.discoverTools}
            </p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={locate}
                className="border border-gray-200 rounded-full px-2.5 py-1 text-[11px] flex gap-1 items-center hover:border-black"
              >
                <LocateFixed size={13} /> {labels.myLocation || t.en.myLocation}
              </button>
              <button
                onClick={toggleProximity}
                className={
                  proximityEnabled
                    ? "bg-black text-white rounded-full px-2.5 py-1 text-[11px] flex gap-1 items-center"
                    : "border border-gray-200 rounded-full px-2.5 py-1 text-[11px] flex gap-1 items-center hover:border-black"
                }
              >
                {labels.gpsAudio || t.en.gpsAudio}
              </button>
              <button
                onClick={() => setRoute((value) => !value)}
                className={
                  route
                    ? "bg-black text-white rounded-full px-2.5 py-1 text-[11px] flex gap-1 items-center"
                    : "border border-gray-200 rounded-full px-2.5 py-1 text-[11px] flex gap-1 items-center"
                }
              >
                <RouteIcon size={13} /> {labels.route || t.en.route}
              </button>
            </div>
          </div>
          {(gpsError || locationStatus === "loading") && (
            <div className={`mt-2 flex items-center justify-between gap-2 text-[11px] ${gpsError ? "text-red-600" : "text-slate-500"}`}>
              <span>{gpsError || "{labels.findingLocation || t.en.findingLocation}"}</span>
              {gpsError && <button type="button" onClick={locate} className="font-semibold underline">Retry</button>}
            </div>
          )}
          {proximityEnabled && nearestSite && position && (
            <div className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
              <span className="mr-1 font-semibold text-slate-900">{labels.gpsActive || t.en.gpsActive}</span> ·

                             {labels.nearest || t.en.nearest}:{" "}
              <strong className="text-slate-900">
                {nearestSite.name[language] || nearestSite.name.en}
              </strong>{" "}
              · {formatDistance(distances.get(nearestSite.id))}
              {nearbySite && (
                <span className="ml-1 text-emerald-600">{labels.nearby || t.en.nearby}</span>
              )}
            </div>
          )}
           <div className="map-search-results hidden lg:block flex-1 space-y-2 overflow-auto pr-1">
             {filtered.length === 0 && (
               <div className="py-5 text-center text-sm text-gray-500">
                 <p>{labels.noResults || t.en.noResults}</p>
                 <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="mt-2 text-xs font-semibold text-slate-900 underline">{labels.clearFilters || t.en.clearFilters}</button>
               </div>
             )}
             {filtered.map((site) => {
              const title = site.name[language] || site.name.en;
              return (
                <button
                   onClick={() => setSelected(site)}
                   key={site.id}
                  className={`w-full text-left rounded-xl border p-2.5 flex gap-2.5 transition ${selected.id === site.id ? "border-slate-900 bg-slate-50 shadow-sm" : "border-gray-200/70 hover:border-slate-400"}`}
                >
                  <img
                    src={site.image}
                    alt={title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <span className="flex-1 min-w-0">
                    <b className="text-xs block truncate">{title}</b>
                    <small className="text-gray-500 text-[11px]">
                      {site.district}
                      {distances.has(site.id)
                        ? ` · ${formatDistance(distances.get(site.id))}`
                        : ""}
                    </small>
                    <em
                      className={`block text-[10px] uppercase not-italic mt-1 font-semibold ${getCategoryTextClass(site.category)}`}
                    >
                      {site.category}
                    </em>
                  </span>
                </button>
              );
             })}
           </div>
         </aside>
        <section className="relative isolate z-0 overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
          <MapContainer
            center={selected.coordinates}
            zoom={14}
            scrollWheelZoom={true}
            className="h-full min-h-0"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Recenter site={selected} />
             {position && (
               <CircleMarker
                 center={[position.latitude, position.longitude]}
                 radius={8}
                 pathOptions={{ color: "#1d4ed8", fillColor: "#60a5fa", fillOpacity: 0.9, weight: 3 }}
               >
                 <Popup><strong>Your location</strong><br /><small>Accuracy: {Math.round(position.accuracy)}m</small></Popup>
               </CircleMarker>
             )}
            {sites.map((site) => (
              <Marker
                key={site.id}
                opacity={
                  nearestSite?.id === site.id && proximityEnabled ? 1 : 0.85
                }
                eventHandlers={{ click: () => setSelected(site) }}
                 position={site.coordinates}
                 icon={selected.id === site.id ? selectedMarkerIcon : nearestSite?.id === site.id && proximityEnabled ? nearestMarkerIcon : markerIcon}
              >
                <Popup>
                  <div className="w-48">
                    <img
                      src={site.image}
                      alt=""
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                    <strong className="text-sm block">
                      {site.name[language] || site.name.en}
                    </strong>
                    <small className="text-gray-500">
                      {site.duration} min audio guide
                    </small>
                    <Link
                      className="block mt-2 text-xs font-semibold underline"
                      to={`/location/${site.id}`}
                    >
                      Listen audio guide
                    </Link>
                     <button
onClick={() => {
                          if (!hasAccess) {
                            navigate(`/paywall?next=${encodeURIComponent(`/location/${site.id}`)}`);
                            return;
                          }
                          play(site);
                       }}
                       className="mt-2 text-xs bg-black text-white rounded px-2 py-1"
                     >
                      Play now
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
            {route && (
              <Polyline
                positions={sites.map((site) => site.coordinates)}
                pathOptions={{ color: "#111827", weight: 3, dashArray: "6 8" }}
              />
            )}
          </MapContainer>
          {route && (
            <div className="absolute bottom-3 left-3 z-[500] flex items-center gap-2 rounded-lg border border-slate-200 bg-white/95 px-3 py-2 text-[11px] text-slate-600 shadow-sm">
              <RouteIcon size={13} className="text-slate-900" /> Suggested route
              · visual preview only
            </div>
          )}
          <div className="absolute right-3 top-3 z-[500] hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[10px] text-slate-500 shadow-sm sm:flex">
            <Navigation size={12} className="text-slate-900" /> Scroll to zoom
          </div>
        </section>
      </div>
    </main>
  );
}
