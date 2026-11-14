export function getPublicOrigin() {
  const configured = import.meta.env.VITE_PUBLIC_URL?.trim()?.replace(/\/$/, "");
  if (typeof window === "undefined") return configured || "";

  // QR must point to the origin currently serving this copy. This keeps QR links
  // valid when another machine gets a different tunnel or LAN address.
  const { hostname, protocol } = window.location;
  const isLoopback = ["localhost", "127.0.0.1", "::1"].includes(hostname);
  const isConfiguredHttps = /^https:\/\//i.test(configured || "");
  // Prefer configured HTTPS when this copy is opened over HTTP LAN.
  if (isConfiguredHttps && protocol !== "https:") return configured;
  if (!isLoopback) return window.location.origin;
  if (configured && !/^(https?:\/\/)(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(configured)) return configured;
  return window.location.origin;
}

// HashRouter: app lives under BASE_URL and routes go after "#".
const appUrl = (route) => `${getPublicOrigin()}${import.meta.env.BASE_URL}#${route}`;

export function buildPoiUrl(id, accessCode = "") {
  const params = new URLSearchParams({ source: "qr", mobile: "1" });
  if (accessCode) params.set("access", accessCode);
  return appUrl(`/location/${encodeURIComponent(id)}?${params.toString()}`);
}

export function buildExploreUrl() {
  return appUrl("/?source=qr&mobile=1");
}
