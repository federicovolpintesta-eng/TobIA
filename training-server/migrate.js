const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'hotel_b2b',
  password: 'password',
  port: 5432,
});

async function run() {
  await pool.query("ALTER TABLE empresas ADD COLUMN IF NOT EXISTS brand_color VARCHAR(50) DEFAULT '#C5A059';");
  await pool.query("ALTER TABLE empresas ADD COLUMN IF NOT EXISTS logo_url VARCHAR(255);");
  console.log("Migration done");
  pool.end();
}
run();
