const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'hotel_b2b',
  password: 'password',
  port: 5432,
});

async function run() {
  await pool.query("ALTER TABLE evaluaciones ADD COLUMN IF NOT EXISTS personality_profile TEXT;");
  console.log("Migration 2 done");
  pool.end();
}
run();
