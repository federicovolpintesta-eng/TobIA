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
    const schema = fs.readFileSync(__dirname + '/schema.sql', 'utf8');
    await pool.query(schema);
    console.log("Schema initialized");

    const migrateV2 = fs.readFileSync(__dirname + '/migrate_v2.sql', 'utf8');
    await pool.query(migrateV2);
    console.log("Migrate V2 initialized");

    const migrateV3 = fs.readFileSync(__dirname + '/migrate_v3.sql', 'utf8');
    await pool.query(migrateV3);
    console.log("Migrate V3 initialized");
    
    // Add columns from migrate.js and migrate2.js
    await pool.query("ALTER TABLE empresas ADD COLUMN IF NOT EXISTS brand_color VARCHAR(50);");
    await pool.query("ALTER TABLE empresas ADD COLUMN IF NOT EXISTS logo_url VARCHAR(255);");
    await pool.query("ALTER TABLE evaluaciones ADD COLUMN IF NOT EXISTS personality_profile TEXT;");
    await pool.query("ALTER TABLE evaluaciones ADD COLUMN IF NOT EXISTS audio_base64 TEXT;");
    await pool.query("ALTER TABLE empleados ADD COLUMN IF NOT EXISTS cv_summary TEXT;");
    await pool.query("ALTER TABLE empleados ADD COLUMN IF NOT EXISTS interview_questions JSONB;");
    await pool.query("ALTER TABLE empleados ADD COLUMN IF NOT EXISTS training_plan TEXT;");

    console.log("All migrations applied");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}
run();
