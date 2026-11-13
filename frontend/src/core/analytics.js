const SESSION_KEY = "hanoi_analytics_session";
const EVENTS_KEY = "hanoi_analytics_events";

function createSessionId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getAnalyticsSession() {
  if (typeof window === "undefined") return "server-session";
  let session = window.sessionStorage.getItem(SESSION_KEY);
  if (!session) {
    session = createSessionId();
    window.sessionStorage.setItem(SESSION_KEY, session);
  }
  return session;
}

export function readAnalyticsEvents() {
  if (typeof window === "undefined") return [];
  try {
    const events = JSON.parse(window.localStorage.getItem(EVENTS_KEY) || "[]");
    return Array.isArray(events) ? events : [];
  } catch {
    return [];
  }
}

export function trackEvent(type, payload = {}) {
  if (typeof window === "undefined" || !type) return;
  const event = {
    id: createSessionId(),
    type,
    sessionId: getAnalyticsSession(),
    timestamp: new Date().toISOString(),
    poiId: payload.poiId || null,
    language: payload.language || null,
    source: payload.source || "direct",
  };
  try {
    const events = [...readAnalyticsEvents(), event].slice(-1000);
    window.localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch { /* storage full or unavailable */ }
  window.dispatchEvent(new CustomEvent("hanoi:analytics", { detail: event }));
  if (REMOTE_EVENT_TYPES.includes(type) && event.poiId) sendRemoteEvent(event);
}

const REMOTE_EVENT_TYPES = ["audio_completed"];
const DEFAULT_ANALYTICS_API_BASE = typeof window === "undefined"
  ? "http://localhost:8787"
  : `${window.location.protocol}//${window.location.hostname}:8787`;
const ANALYTICS_API_BASE = (import.meta.env.VITE_ACCESS_API_URL || DEFAULT_ANALYTICS_API_BASE).replace(/\/$/, "");

function sendRemoteEvent({ type, poiId, language, source, sessionId }) {
  if (typeof fetch !== "function") return;
  const body = JSON.stringify({ type, poiId, language, source, sessionId });
  try {
    fetch(`${ANALYTICS_API_BASE}/api/analytics/events`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => { /* analytics must never block the UI */ });
  } catch { /* ignore */ }
}

export function clearAnalyticsEvents() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(EVENTS_KEY);
  window.dispatchEvent(new CustomEvent("hanoi:analytics"));
}

export const analyticsEventTypes = [
  "guide_opened",
  "poi_opened",
  "audio_started",
  "audio_completed",
  "language_selected",
];
