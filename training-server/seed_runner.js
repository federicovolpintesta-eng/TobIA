const fs = require('fs');
const { Pool } = require('pg');
const pool = new Pool({ user: 'admin', host: 'localhost', database: 'hotel_b2b', password: 'password', port: 5432 });
async function run() {
  try {
    const seed = fs.readFileSync(__dirname + '/seed.sql', 'utf8');
    await pool.query(seed);
    console.log("Seeded successfully");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}
run();
