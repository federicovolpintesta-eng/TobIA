ALTER TABLE empleados ADD COLUMN IF NOT EXISTS tipo_perfil VARCHAR(50) DEFAULT 'efectivo';
ALTER TABLE empleados ADD COLUMN IF NOT EXISTS uuid_evaluacion UUID DEFAULT gen_random_uuid();

CREATE TABLE IF NOT EXISTS asignaciones_cursos (
    id SERIAL PRIMARY KEY,
    empleado_id INTEGER REFERENCES empleados(id),
    rol_asignado VARCHAR(100) NOT NULL,
    completado BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- update mock data
UPDATE empleados SET tipo_perfil = 'efectivo' WHERE id IN (1, 2);
UPDATE empleados SET tipo_perfil = 'candidato' WHERE id = 3;
