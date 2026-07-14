const db = require('./database');
const situations = require('./situations_mixed.js');

async function migrate() {
  console.log('Iniciando migración de situaciones a la base de datos...');
  await db.query('DROP TABLE IF EXISTS situaciones');
  await db.query(`
    CREATE TABLE situaciones (
      id VARCHAR(50) PRIMARY KEY,
      department VARCHAR(100),
      rubro VARCHAR(100),
      title VARCHAR(255),
      description TEXT,
      options JSONB,
      icon VARCHAR(50),
      is_open_ended BOOLEAN,
      is_audio_response BOOLEAN
    )
  `);

  for (const sit of situations) {
    await db.query(`
      INSERT INTO situaciones (id, department, rubro, title, description, options, icon, is_open_ended, is_audio_response)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `, [
      sit.id,
      sit.department,
      sit.rubro || 'General',
      sit.title,
      sit.description,
      JSON.stringify(sit.options || []),
      sit.icon || 'AlertTriangle',
      sit.isOpenEnded || false,
      sit.isAudioResponse || false
    ]);
  }
  console.log('Migración completada. ' + situations.length + ' situaciones insertadas.');
  process.exit(0);
}

migrate();
