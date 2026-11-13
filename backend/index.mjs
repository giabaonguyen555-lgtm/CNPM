import http from "node:http";
import { readFile, mkdir, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { createAccessCode, listCodes, getAccessStats, redeemCode, revokeCode, verifyToken, deleteCode, deleteExpiredCodes } from "./access-code-store.mjs";
import { createPayment, listPayments, getRevenueStats } from "./payment-store.mjs";
import { listPois, savePoi, setMedia, removeMedia, deletePoi, safeMediaName, mediaRoot } from "./poi-store.mjs";
import { recordEvent, getPoiStats } from "./analytics-store.mjs";

const port = Number(process.env.PORT || 8787);
const adminKey = process.env.ADMIN_API_KEY || "demo-admin-key";
const cors = { "access-control-allow-origin": process.env.CLIENT_ORIGIN || "*", "access-control-allow-headers": "content-type, authorization, x-admin-key", "access-control-allow-methods": "GET,POST,PUT,DELETE,OPTIONS" };
const MAX_JSON_BYTES = 1024 * 1024;

function send(response, status, payload, headers = {}) {
  response.writeHead(status, { ...cors, "content-type": "application/json; charset=utf-8", ...headers });
  response.end(JSON.stringify(payload));
}
async function readBody(request, limit = MAX_JSON_BYTES) {
  let raw = "";
  for await (const chunk of request) { raw += chunk; if (Buffer.byteLength(raw) > limit) throw Object.assign(new Error("Payload too large"), { statusCode: 413 }); }
  try { return raw ? JSON.parse(raw) : {}; } catch { throw Object.assign(new Error("Invalid JSON"), { statusCode: 400 }); }
}
async function readBuffer(request, limit) {
  const chunks = []; let size = 0;
  for await (const chunk of request) { size += chunk.length; if (size > limit) throw Object.assign(new Error("Payload too large"), { statusCode: 413 }); chunks.push(chunk); }
  return Buffer.concat(chunks);
}
const admin = (request) => request.headers["x-admin-key"] === adminKey;
const resultResponse = (response, result, fallbackStatus = 200) => { const { statusCode = fallbackStatus, ...payload } = result || {}; return send(response, statusCode, payload); };

function contentTypeExtension(contentType, kind) {
  const types = kind === "audio" ? { "audio/mpeg": "mp3", "audio/mp4": "m4a", "audio/wav": "wav", "audio/ogg": "ogg" } : { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
  return types[contentType?.split(";")[0].toLowerCase()];
}
async function serveMedia(request, response, pathname) {
  const match = pathname.match(/^\/media\/(audio|images)\/(.+)$/);
  if (!match) return false;
  const kind = match[1] === "audio" ? "audio" : "images";
  const name = decodeURIComponent(match[2]);
  const file = safeMediaName(name, kind);
  if (!file) return send(response, 400, { error: "Invalid media path." });
  let info; try { info = await stat(file); } catch { return send(response, 404, { error: "Media not found." }); }
  const range = request.headers.range;
  let start = 0; let end = info.size - 1; let status = 200;
  if (range && kind === "audio") {
    const parsed = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!parsed) return send(response, 416, { error: "Invalid range." });
    if (parsed[1]) start = Number(parsed[1]);
    if (parsed[2]) end = Number(parsed[2]);
    if (!parsed[1] && parsed[2]) start = Math.max(0, info.size - Number(parsed[2]));
    end = Math.min(end, info.size - 1);
    if (start > end || start >= info.size) return send(response, 416, { error: "Range not satisfiable." });
    status = 206;
  }
  const extension = path.extname(file).slice(1).toLowerCase();
  const mediaType = kind === "audio"
    ? ({ mp3: "audio/mpeg", m4a: "audio/mp4", wav: "audio/wav", ogg: "audio/ogg" }[extension] || "application/octet-stream")
    : `image/${extension === "jpg" ? "jpeg" : extension}`;
  const headers = { ...cors, "content-type": mediaType, "content-length": end - start + 1, "accept-ranges": "bytes" };
  if (status === 206) headers["content-range"] = `bytes ${start}-${end}/${info.size}`;
  response.writeHead(status, headers);
  createReadStream(file, { start, end }).on("error", () => response.destroy()).pipe(response);
  return true;
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  try {
    if (request.method === "OPTIONS") { response.writeHead(204, cors); response.end(); return; }
    if (url.pathname.startsWith("/media/")) return serveMedia(request, response, url.pathname);
    if (request.method === "GET" && url.pathname === "/health") return send(response, 200, { status: "ok", service: "access-code-service", timestamp: new Date().toISOString() });
    if (request.method === "POST" && url.pathname === "/api/payments") return resultResponse(response, await createPayment((await readBody(request)).method), 201);
    if (request.method === "GET" && url.pathname === "/api/payments") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return send(response, 200, { payments: await listPayments() }); }
    if (request.method === "GET" && url.pathname === "/api/payments/stats") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return send(response, 200, await getRevenueStats()); }
    if (request.method === "GET" && url.pathname === "/api/access-codes") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return send(response, 200, { codes: await listCodes() }); }
    if (request.method === "GET" && url.pathname === "/api/access-stats") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return send(response, 200, await getAccessStats()); }
    if (request.method === "DELETE" && url.pathname === "/api/access-codes" ) { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return resultResponse(response, url.searchParams.get("status") === "expired" ? await deleteExpiredCodes() : { error: "status=expired is required.", statusCode: 400 }); }
    if (request.method === "POST" && url.pathname === "/api/access-codes/redeem") { const input = await readBody(request); return resultResponse(response, await redeemCode(input.code)); }
    if (request.method === "POST" && url.pathname === "/api/access-codes/redeem") return null;
    const revoke = url.pathname.match(/^\/api\/access-codes\/([^/]+)\/revoke$/); const codePath = url.pathname.match(/^\/api\/access-codes\/([^/]+)$/);
    if (revoke && request.method === "POST") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); const result = await revokeCode(decodeURIComponent(revoke[1])); return result ? send(response, 200, { code: result }) : send(response, 404, { error: "Access code not found." }); }
    if (codePath && request.method === "DELETE") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return resultResponse(response, await deleteCode(decodeURIComponent(codePath[1]))); }
    if (request.method === "GET" && url.pathname === "/api/access/me") { const token = request.headers.authorization?.replace(/^Bearer\s+/i, ""); const session = token && await verifyToken(token); return session ? send(response, 200, { active: true, expiresAt: new Date(session.exp).toISOString() }) : send(response, 401, { active: false }); }
    if (request.method === "GET" && url.pathname === "/api/pois") return send(response, 200, { pois: await listPois({ publishedOnly: true }) });
    if (request.method === "POST" && url.pathname === "/api/analytics/events") return resultResponse(response, await recordEvent(await readBody(request)), 201);
    if (request.method === "GET" && url.pathname === "/api/analytics/poi-stats") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return send(response, 200, await getPoiStats()); }
    if (url.pathname === "/api/admin/pois" && request.method === "GET") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return send(response, 200, { pois: await listPois() }); }
    if (url.pathname === "/api/admin/pois" && request.method === "POST") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return resultResponse(response, await savePoi(await readBody(request)), 201); }
    const poiMatch = url.pathname.match(/^\/api\/admin\/pois\/([^/]+)$/); const audioMatch = url.pathname.match(/^\/api\/admin\/pois\/([^/]+)\/audio\/([^/]+)$/); const imageMatch = url.pathname.match(/^\/api\/admin\/pois\/([^/]+)\/image$/);
    if (poiMatch && request.method === "PUT") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return resultResponse(response, await savePoi(await readBody(request), decodeURIComponent(poiMatch[1]))); }
    if (poiMatch && request.method === "DELETE") { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); return resultResponse(response, await deletePoi(decodeURIComponent(poiMatch[1]))); }
    if (audioMatch && ["PUT", "DELETE"].includes(request.method)) { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); const id = decodeURIComponent(audioMatch[1]); const lang = decodeURIComponent(audioMatch[2]); if (request.method === "DELETE") return resultResponse(response, await removeMedia(id, "audio", lang)); const ext = contentTypeExtension(request.headers["content-type"], "audio"); if (!ext) return send(response, 415, { error: "Unsupported audio type." }); const data = await readBuffer(request, 20 * 1024 * 1024); await mkdir(mediaRoot("audio"), { recursive: true }); const fileName = `${id}-${lang}-${Date.now()}-${randomUUID()}.${ext}`; await import("node:fs/promises").then(({ writeFile }) => writeFile(path.join(mediaRoot("audio"), fileName), data)); return resultResponse(response, await setMedia(id, "audio", lang, fileName)); }
    if (imageMatch && ["PUT", "DELETE"].includes(request.method)) { if (!admin(request)) return send(response, 401, { error: "Admin authorization required." }); const id = decodeURIComponent(imageMatch[1]); if (request.method === "DELETE") return resultResponse(response, await removeMedia(id, "image")); const ext = contentTypeExtension(request.headers["content-type"], "image"); if (!ext) return send(response, 415, { error: "Unsupported image type." }); const data = await readBuffer(request, 5 * 1024 * 1024); await mkdir(mediaRoot("images"), { recursive: true }); const fileName = `${id}-${Date.now()}-${randomUUID()}.${ext}`; await import("node:fs/promises").then(({ writeFile }) => writeFile(path.join(mediaRoot("images"), fileName), data)); return resultResponse(response, await setMedia(id, "image", null, fileName)); }
    return send(response, 404, { error: "Not found." });
  } catch (error) { console.error(error); return send(response, error.statusCode || 500, { error: error.statusCode ? error.message : "Internal server error." }); }
});
server.listen(port, "0.0.0.0", () => console.log(`Access Code API listening on http://localhost:${port}`));
