INSERT INTO empleados (empresa_id, nombre, rol, fecha_ingreso) VALUES 
(1, 'Federico', 'Recepcionista', '2025-01-10'),
(1, 'Mariana Lopez', 'Recepcionista', '2025-02-15'),
(1, 'Carlos Ramirez', 'Mozo', '2025-03-20');

INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, proxima_evaluacion) VALUES 
(2, 88, 92, 85, 95, 'Front Desk', 'Excelente desempeño general.', CURRENT_DATE + INTERVAL '2 months'),
(3, 45, 40, 60, 80, 'F&B (Mozo)', 'Asignar curso de Resolución de Conflictos.', CURRENT_DATE + INTERVAL '2 months');
