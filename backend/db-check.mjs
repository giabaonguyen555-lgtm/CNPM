// Temporary: checks PostgreSQL connection and lists databases/tables. Delete after use.
import pg from "pg";

const client = new pg.Client({
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || "postgres",
});

try {
  await client.connect();
  const v = await client.query("select version()");
  console.log("CONNECTED:", v.rows[0].version);
  const dbs = await client.query("select datname from pg_database where not datistemplate order by 1");
  console.log("DATABASES:", dbs.rows.map((r) => r.datname).join(", "));
  const t = await client.query(
    "select table_schema, table_name from information_schema.tables where table_schema not in ('pg_catalog','information_schema') order by 1,2"
  );
  console.log(`TABLES in ${client.database}:`, t.rows.length ? t.rows.map((r) => `${r.table_schema}.${r.table_name}`).join(", ") : "(none)");
  const live = await client.query("select now() as server_time, pg_backend_pid() as pid, inet_server_port() as port");
  console.log("LIVE:", JSON.stringify(live.rows[0]));
  for (const r of t.rows) {
    const c = await client.query(`select count(*)::int as n from "${r.table_schema}"."${r.table_name}"`);
    console.log(`  ${r.table_name}: ${c.rows[0].n} rows`);
  }
} catch (e) {
  console.log("FAIL:", e.code || "", e.message);
} finally {
  await client.end().catch(() => {});
}
