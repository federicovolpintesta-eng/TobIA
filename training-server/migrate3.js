const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'hotel_b2b',
  password: 'password',
  port: 5432,
});

async function run() {
  try {
    const sql = fs.readFileSync(__dirname + '/migrate_v3.sql', 'utf8');
    await pool.query(sql);
    console.log("Migration 3 done");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}
run();
