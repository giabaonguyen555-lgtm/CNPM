import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

/** Data directory, configurable through DATA_DIR (resolved lazily so tests can set it before use). */
export function dataDir() {
  return process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT, "data");
}

/** Upload directory, configurable through UPLOADS_DIR. */
export function uploadsDir() {
  return process.env.UPLOADS_DIR ? path.resolve(process.env.UPLOADS_DIR) : path.join(ROOT, "uploads");
}

export const serverRoot = ROOT;

const queues = new Map();

/** Runs `task` after every previously queued task for the same key (per-file mutex). */
function enqueue(key, task) {
  const previous = queues.get(key) || Promise.resolve();
  const next = previous.then(task, task);
  const settled = next.catch(() => {});
  queues.set(key, settled);
  settled.then(() => { if (queues.get(key) === settled) queues.delete(key); });
  return next;
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return typeof fallback === "function" ? await fallback() : structuredClone(fallback);
    if (error instanceof SyntaxError) throw new Error(`Corrupted data file: ${file}`);
    throw error;
  }
}

async function writeJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  const temp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(temp, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await rename(temp, file);
}

/**
 * Creates a JSON-file backed store whose reads and read-modify-write updates are serialized.
 * `fallback` is the initial value (or an async factory) used when the file does not exist yet.
 */
export function createJsonStore(fileName, fallback) {
  const file = () => path.join(dataDir(), fileName);
  return {
    file,
    read() {
      const target = file();
      return enqueue(target, () => readJson(target, fallback));
    },
    /** `mutator(store)` may mutate the store in place; return `{ result, changed }` or any value (treated as changed). */
    update(mutator) {
      const target = file();
      return enqueue(target, async () => {
        const store = await readJson(target, fallback);
        const outcome = await mutator(store);
        const changed = outcome && typeof outcome === "object" && "changed" in outcome ? outcome.changed : true;
        if (changed) await writeJson(target, store);
        return outcome && typeof outcome === "object" && "result" in outcome ? outcome.result : outcome;
      });
    },
  };
}
