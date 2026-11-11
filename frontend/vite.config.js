import os from "node:os";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function getLanAddress() {
  const interfaces = os.networkInterfaces();
  for (const entries of Object.values(interfaces)) {
    for (const entry of entries || []) {
      if (entry.family === "IPv4" && !entry.internal && !entry.address.startsWith("169.254.")) {
        return entry.address;
      }
    }
  }
  return "localhost";
}

const envDir = fileURLToPath(new URL("..", import.meta.url));
const port = 5173;
const lanAddress = getLanAddress();
const env = loadEnv("development", envDir, "");
const base = process.env.VITE_BASE_PATH || env.VITE_BASE_PATH || "/";
const configuredPublicUrl = (env.VITE_PUBLIC_URL || process.env.VITE_PUBLIC_URL)?.replace(/\/$/, "");
const isLanUrl = configuredPublicUrl && /^https?:\/\/(localhost|127\.0\.0\.1|(?:10|192\.168|172\.(?:1[6-9]|2\d|3[01]))\.)/i.test(configuredPublicUrl);
// LAN addresses are regenerated on every Vite start so QR links follow Wi-Fi changes.
const publicUrl = configuredPublicUrl && !isLanUrl ? configuredPublicUrl : `http://${lanAddress}:${port}`;

export default defineConfig({
  base,
  envDir,
  plugins: [react(), tailwindcss()],
  define: {
    "import.meta.env.VITE_PUBLIC_URL": JSON.stringify(publicUrl),
  },
  server: {
    host: true,
    port,
    strictPort: true,
    allowedHosts: [".loca.lt", ".trycloudflare.com"],
  },
});
