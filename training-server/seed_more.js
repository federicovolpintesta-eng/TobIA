const { Pool } = require('pg');
const crypto = require('crypto');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'hotel_b2b',
  password: 'password',
  port: 5432,
});

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const roles = ['Front Desk', 'Housekeeping', 'F&B', 'Mantenimiento'];

async function run() {
  try {
    // Generar 20 efectivos
    for (let i = 1; i <= 20; i++) {
      const nombre = `Efectivo Prueba ${i}`;
      const rol = randomElement(roles);
      const uuid = crypto.randomUUID();
      const { rows } = await pool.query(
        'INSERT INTO empleados (empresa_id, nombre, rol, tipo_perfil, fecha_ingreso, uuid_evaluacion) VALUES (1, $1, $2, $3, CURRENT_DATE - (random() * 365)::int, $4) RETURNING id',
        [nombre, rol, 'efectivo', uuid]
      );
      const empId = rows[0].id;

      // Generar 1 a 3 evaluaciones aleatorias para los efectivos
      const numEvals = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numEvals; j++) {
        const nps = Math.floor(Math.random() * 50) + 50; // 50 to 100
        const res = Math.floor(Math.random() * 40) + 60;
        const ana = Math.floor(Math.random() * 40) + 60;
        const emp = Math.floor(Math.random() * 40) + 60;
        await pool.query(
          `INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, personality_profile, created_at) 
           VALUES ($1, $2, $3, $4, $5, $6, 'Auto generado', 'Estándar', NOW() - (random() * 60)::int * INTERVAL '1 day')`,
          [empId, nps, res, ana, emp, rol]
        );
      }
    }

    // Generar 5 candidatos (Pendientes, sin evaluaciones)
    for (let i = 1; i <= 5; i++) {
      const nombre = `Candidato Pendiente ${i}`;
      const rol = randomElement(roles);
      const uuid = crypto.randomUUID();
      await pool.query(
        'INSERT INTO empleados (empresa_id, nombre, rol, tipo_perfil, fecha_ingreso, uuid_evaluacion) VALUES (1, $1, $2, $3, CURRENT_DATE, $4)',
        [nombre, rol, 'candidato', uuid]
      );
    }
    
    console.log("Seeding done: 20 empleados, 5 candidatos.");
  } catch (e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

run();
