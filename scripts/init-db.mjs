import { readFile } from "node:fs/promises";
import pg from "pg";

const { Client } = pg;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is required");

const databaseHost = new URL(connectionString).hostname;
const isLocalDatabase = ["localhost", "127.0.0.1", "::1"].includes(databaseHost);
const client = new Client({
  connectionString,
  ssl: isLocalDatabase ? false : { rejectUnauthorized: false },
});
await client.connect();
try {
  const schema = await readFile(new URL("../backend/postgres-schema.sql", import.meta.url), "utf8");
  await client.query(schema);

  const { rows } = await client.query("SELECT COUNT(*)::int AS count FROM poi");
  if (rows[0].count === 0) {
    const dump = await readFile(new URL("../backend/database/hanoi_heritage_insert.sql", import.meta.url), "utf8");
    const seed = dump.split("\n")
      .filter((line) => !line.trimStart().startsWith("\\") && !/^SET transaction_timeout\s*=/.test(line.trim()))
      .map((line) => line.startsWith("INSERT INTO public.ngon_ngu ") ? line.replace(/;$/, " ON CONFLICT (ma) DO NOTHING;") : line)
      .join("\n");
    await client.query(seed);
    console.log("Database initialized and demo data seeded.");
  } else {
    console.log(`Database schema ready; keeping existing data (${rows[0].count} POIs).`);
  }
} finally {
  await client.end();
}
