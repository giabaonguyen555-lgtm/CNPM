import pg from "pg";
const { Pool } = pg;
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:bao@localhost:5432/main";
const databaseHost = new URL(connectionString).hostname;
const isLocalDatabase = ["localhost", "127.0.0.1", "::1"].includes(databaseHost);
export const pool = new Pool({
  connectionString,
  ssl: isLocalDatabase ? false : { rejectUnauthorized: false },
});
export async function withDb(fn) { const client = await pool.connect(); try { return await fn(client); } finally { client.release(); } }
