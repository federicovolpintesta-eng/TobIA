CREATE TABLE IF NOT EXISTS empresas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email_contacto VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS empleados (
    id SERIAL PRIMARY KEY,
    empresa_id INTEGER REFERENCES empresas(id),
    nombre VARCHAR(255) NOT NULL,
    rol VARCHAR(100) NOT NULL,
    fecha_ingreso DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS evaluaciones (
    id SERIAL PRIMARY KEY,
    empleado_id INTEGER REFERENCES empleados(id),
    nps_global INTEGER NOT NULL,
    resolucion_pct INTEGER NOT NULL,
    analisis_pct INTEGER NOT NULL,
    empatia_pct INTEGER NOT NULL,
    rol_evaluado VARCHAR(100) NOT NULL,
    feedback_generado TEXT,
    proxima_evaluacion DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default company for testing
INSERT INTO empresas (nombre, email_contacto, password_hash) 
VALUES ('Boutique Resort', 'rrhh@boutique.com', '$2b$10$xyz...') 
ON CONFLICT (email_contacto) DO NOTHING;
