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
    const sql = fs.readFileSync('migrate_v4.sql', 'utf8');
    await pool.query(sql);
    console.log('Migration v4 applied successfully');
  } catch (err) {
    console.error('Error applying migration:', err);
  } finally {
    await pool.end();
  }
}

run();
