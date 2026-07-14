const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'hotel_b2b',
  password: 'password',
  port: 5432,
});

async function run() {
  // Clear old data to prevent confusion
  await pool.query('DELETE FROM evaluaciones;');
  await pool.query('DELETE FROM empleados;');

  // Insert mock employees
  const { rows: emps } = await pool.query(`
    INSERT INTO empleados (empresa_id, nombre, rol, tipo_perfil, fecha_ingreso, uuid_evaluacion) VALUES 
    (1, 'Laura Martínez', 'Front Desk', 'efectivo', '2023-01-15', '11111111-1111-1111-1111-111111111111'),
    (1, 'Roberto Sánchez', 'F&B', 'efectivo', '2022-11-20', '22222222-2222-2222-2222-222222222222'),
    (1, 'Valeria Gomez', 'Housekeeping', 'candidato', '2026-06-01', '33333333-3333-3333-3333-333333333333'),
    (1, 'Diego Torres', 'Mantenimiento', 'efectivo', '2021-03-10', '44444444-4444-4444-4444-444444444444'),
    (1, 'Sofia Herrera', 'F&B', 'candidato', '2026-06-05', '55555555-5555-5555-5555-555555555555')
    RETURNING id, nombre;
  `);

  const lauraId = emps.find(e => e.nombre === 'Laura Martínez').id;
  const robertoId = emps.find(e => e.nombre === 'Roberto Sánchez').id;
  const valeriaId = emps.find(e => e.nombre === 'Valeria Gomez').id;
  const diegoId = emps.find(e => e.nombre === 'Diego Torres').id;
  const sofiaId = emps.find(e => e.nombre === 'Sofia Herrera').id;

  // Laura: High performer initially, then drops dramatically (Attrition Risk trigger)
  await pool.query(`INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, personality_profile, created_at) VALUES 
    ($1, 95, 90, 95, 100, 'Front Desk', 'Excelente desempeño inicial', 'Estándar', NOW() - INTERVAL '3 months'),
    ($1, 90, 90, 90, 90, 'Front Desk', 'Mantiene gran nivel', 'Estándar', NOW() - INTERVAL '2 months'),
    ($1, 55, 60, 50, 40, 'Front Desk', 'Baja motivación detectada', 'Estilo de Liderazgo: Rígido/Normativo. Baja tolerancia a la frustración. Su enfoque es transaccional y puede desencadenar conflicto verbal con huéspedes.', NOW() - INTERVAL '1 month')
  `, [lauraId]);

  // Roberto: Burnout risk (Constantly low NPS and low Empathy)
  await pool.query(`INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, personality_profile, created_at) VALUES 
    ($1, 40, 70, 50, 20, 'F&B', 'Problemas en trato al cliente', 'Estilo de Liderazgo: Pragmático. Se orienta directamente a la solución operativa, aunque carece de tacto emocional profundo.', NOW() - INTERVAL '1 month')
  `, [robertoId]);

  // Valeria: High Potential Candidate
  await pool.query(`INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, personality_profile, created_at) VALUES 
    ($1, 88, 90, 85, 95, 'Housekeeping', 'Candidata prometedora', 'Estilo de Liderazgo: Empático y Conciliador. Tolera bien la presión y busca restaurar la relación con el cliente.', NOW() - INTERVAL '1 day')
  `, [valeriaId]);

  // Diego: Core Player
  await pool.query(`INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, personality_profile, created_at) VALUES 
    ($1, 75, 80, 70, 75, 'Mantenimiento', 'Desempeño sólido y constante', 'Estándar', NOW() - INTERVAL '10 days')
  `, [diegoId]);

  // Sofia: Underperformer Candidate
  await pool.query(`INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, personality_profile, created_at) VALUES 
    ($1, 30, 40, 30, 20, 'F&B', 'No cumple expectativas básicas', 'Estándar', NOW() - INTERVAL '2 days')
  `, [sofiaId]);

  // Update Config for Empresa 1 (White Label demo)
  await pool.query(`UPDATE empresas SET brand_color = '#8B0000', logo_url = '' WHERE id = 1;`);

  console.log("Mock data generated.");
  pool.end();
}
run();
