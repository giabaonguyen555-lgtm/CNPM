import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { languages, sites as staticSites } from "../data/hanoiHeritageSites";
import { trackEvent } from "../analytics";

const C = createContext();

const DEFAULT_API_BASE = typeof window === "undefined"
  ? "http://localhost:8787"
  : `${window.location.protocol}//${window.location.hostname}:8787`;
const API_BASE = (import.meta.env.VITE_ACCESS_API_URL || DEFAULT_API_BASE).replace(/\/$/, "");

export function resolveMediaUrl(value) {
  if (!value || typeof value !== "string") return value || "";
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  if (value.startsWith("/media/")) return `${API_BASE}${value}`;
  if (value.startsWith("/assets/")) return `${import.meta.env.BASE_URL}${value.slice(1)}`;
  return value;
}

function normalizePoi(poi) {
  if (!poi || !poi.id || !poi.name) return null;
  const audio = poi.audio && typeof poi.audio === "object"
    ? Object.fromEntries(Object.entries(poi.audio).filter(([, url]) => url).map(([lang, url]) => [lang, resolveMediaUrl(url)]))
    : {};
  const rawHighlights = poi.highlights;
  return {
    ...poi,
    image: resolveMediaUrl(poi.image),
    audio,
    description: poi.description || {},
    highlights: rawHighlights || [],
    coordinates: Array.isArray(poi.coordinates) ? poi.coordinates.map(Number) : [21.0285, 105.8542],
    duration: Number(poi.duration) || 5,
  };
}

/** Returns highlights as a string[] for a given language (supports both array and {lang: []} shapes). */
export function getHighlights(site, language = "vi") {
  const value = site?.highlights;
  if (Array.isArray(value)) {
    return value.map((item) => (typeof item === "string" ? item : item?.[language] || item?.vi || item?.en || "")).filter(Boolean);
  }
  // Empty arrays are truthy, so skip them explicitly to fall back to a language that has content.
  if (value && typeof value === "object") return [value[language], value.vi, value.en].find((list) => list?.length) || [];
  return [];
}

export function HeritageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("lang") || "vi";
    const normalized = saved === "zh" ? "zh-CN" : saved;
    return languages.includes(normalized) ? normalized : "vi";
  });
  const [sites, setSites] = useState(staticSites);
  const [poiStatus, setPoiStatus] = useState("loading");
  const loadedFromApi = useRef(false);

  useEffect(() => {
    localStorage.setItem("lang", language);
    // Remove guest-account data from older builds (out of PRD scope).
    ["favorites", "listened", "listenedSessions"].forEach((key) => localStorage.removeItem(key));
  }, [language]);

  const loadPois = useCallback(async (signal) => {
    try {
      const response = await fetch(`${API_BASE}/api/pois`, { signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const list = (Array.isArray(data) ? data : data?.pois || []).map(normalizePoi).filter(Boolean);
      if (!list.length) throw new Error("Empty POI list");
      setSites(list);
      setPoiStatus("api");
      loadedFromApi.current = true;
    } catch (error) {
      // A failed background refresh keeps API data already shown instead of reverting to static data.
      if (error?.name === "AbortError" || loadedFromApi.current) return;
      setSites(staticSites);
      setPoiStatus("fallback");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    loadPois(controller.signal);
    // Pick up audio/POI edits made in the admin when the visitor returns to this tab.
    const onVisible = () => { if (document.visibilityState === "visible") loadPois(); };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    return () => {
      controller.abort();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [loadPois]);

  const selectLanguage = useCallback((nextLanguage, metadata = {}) => {
    if (!languages.includes(nextLanguage)) return;
    setLanguage(nextLanguage);
    trackEvent("language_selected", { language: nextLanguage, ...metadata });
  }, []);

  // Kept as a no-op hook point for the audio player; no per-visitor history is stored (PRD 6.2).
  const addListened = useCallback(() => {}, []);

  const getSite = useCallback((id) => sites.find((item) => item.id === id) || null, [sites]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: selectLanguage,
      selectLanguage,
      addListened,
      languages,
      sites,
      getSite,
      poiStatus,
      reloadPois: () => loadPois(),
    }),
    [language, selectLanguage, addListened, sites, getSite, poiStatus, loadPois],
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}

export const useHeritage = () => useContext(C);
