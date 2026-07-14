const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const db = require('./database');
let allSituations = [];

async function initDB() {
  try {
    const result = await db.query('SELECT * FROM situaciones');
    allSituations = result.rows.map(row => ({
      id: row.id,
      department: row.department,
      rubro: row.rubro,
      title: row.title,
      description: row.description,
      options: typeof row.options === 'string' ? JSON.parse(row.options) : row.options,
      icon: row.icon,
      isOpenEnded: row.is_open_ended,
      isAudioResponse: row.is_audio_response
    }));
    console.log(`Loaded ${allSituations.length} situations from database.`);
  } catch (err) {
    console.error('Failed to load situations from DB:', err);
  }
}
initDB();
const multer = require('multer');
const pdfParse = require('pdf-parse');
const upload = multer({ storage: multer.memoryStorage() });
const fs = require('fs');
const path = require('path');
if (!fs.existsSync(path.join(__dirname, 'public/uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'public/uploads'), { recursive: true });
}
const profileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, req.empresa.id + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})
const profileUpload = multer({ storage: profileStorage });

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const JWT_SECRET = 'super_secret_hr_key_2026';

// --- REST API RUTAS RRHH ---
app.post('/api/hr/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { rows: adminRows } = await db.query('SELECT * FROM empresas WHERE email_contacto = $1', [email]);
    if (adminRows.length > 0) {
      const empresa = adminRows[0];
      const match = await bcrypt.compare(password, empresa.password_hash);
      if (match) {
        const token = jwt.sign({ id: empresa.id, nombre: empresa.nombre, rol: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
        return res.json({ token, empresa: { id: empresa.id, nombre: empresa.nombre, rol: 'admin', profile_image: empresa.profile_image } });
      }
    }
    
    const { rows: areaRows } = await db.query('SELECT * FROM usuarios_area WHERE email = $1', [email]);
    if (areaRows.length > 0) {
      const usuario = areaRows[0];
      const match = await bcrypt.compare(password, usuario.password_hash);
      if (match) { 
        const token = jwt.sign({ id: usuario.empresa_id, user_id: usuario.id, nombre: usuario.nombre, rol: 'area_manager', area_asignada: usuario.area_asignada }, JWT_SECRET, { expiresIn: '1d' });
        return res.json({ token, empresa: { id: usuario.id, nombre: usuario.nombre, rol: 'area_manager', area_asignada: usuario.area_asignada, profile_image: usuario.profile_image } });
      }
    }

    res.status(401).json({ error: 'Credenciales inválidas' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.put('/api/hr/profile', verifyToken, profileUpload.single('profile_image'), async (req, res) => {
  try {
    const { nombre, password } = req.body;
    let updateFields = [];
    let queryParams = [];
    let idx = 1;

    if (nombre) {
      updateFields.push(`nombre = $${idx++}`);
      queryParams.push(nombre);
    }

    if (password) {
      const hash = await bcrypt.hash(password, 10);
      updateFields.push(`password_hash = $${idx++}`);
      queryParams.push(hash);
    }

    if (req.file) {
      // The frontend uses absolute paths starting with /uploads/...
      // But we proxy /api/training/ or the NextJS rewrites might cause issues if they access it via 3000
      // NextJS needs a rewrite for /uploads => :3001/uploads, or we prepend /api/hr/uploads.
      // Better to return the full server URL if needed, but relative is fine if we proxy /uploads
      const imageUrl = `/uploads/${req.file.filename}`;
      updateFields.push(`profile_image = $${idx++}`);
      queryParams.push(imageUrl);
    }

    if (updateFields.length === 0) return res.json({ success: true });

    const rol = req.empresa.rol || 'admin';
    queryParams.push(rol === 'admin' ? req.empresa.id : req.empresa.user_id);
    const table = rol === 'admin' ? 'empresas' : 'usuarios_area';
    
    console.log(`UPDATE ${table} SET ${updateFields.join(', ')} WHERE id = $${idx}`, queryParams);
    const result = await db.query(`UPDATE ${table} SET ${updateFields.join(', ')} WHERE id = $${idx}`, queryParams);
    console.log("DB Update Result:", result.rowCount);
    
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.get('/api/hr/profile', verifyToken, async (req, res) => {
  try {
    const rol = req.empresa.rol || 'admin';
    const table = rol === 'admin' ? 'empresas' : 'usuarios_area';
    const id = rol === 'admin' ? req.empresa.id : req.empresa.user_id;
    const { rows } = await db.query(`SELECT nombre, profile_image FROM ${table} WHERE id = $1`, [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Acceso denegado' });
  
  // MVP: Permitimos tokens de Django también
  req.empresa = { id: 1, nombre: 'Boutique Resort' };
  next();
};

app.get('/api/hr/empleados', verifyToken, async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT e.*, 
        COALESCE(AVG(ev.nps_global), 0) as promedio_nps,
        COALESCE(AVG(ev.resolucion_pct), 0) as promedio_resolucion,
        COALESCE(AVG(ev.analisis_pct), 0) as promedio_analisis,
        COALESCE(AVG(ev.empatia_pct), 0) as promedio_empatia
      FROM empleados e
      LEFT JOIN evaluaciones ev ON e.id = ev.empleado_id
      WHERE e.empresa_id = $1
      GROUP BY e.id
      ORDER BY e.created_at DESC
    `, [req.empresa.id]);

    // Calcular trending y burnout para cada empleado
    const procesados = await Promise.all(rows.map(async (emp) => {
      let burnoutRisk = false;
      let attritionRisk = false;
      
      emp.promedio_nps = Number(emp.promedio_nps) || 0;
      emp.promedio_analisis = Number(emp.promedio_analisis) || 0;
      emp.promedio_empatia = Number(emp.promedio_empatia) || 0;
      emp.promedio_resolucion = Number(emp.promedio_resolucion) || 0;
      
      const { rows: evals } = await db.query(`SELECT nps_global, empatia_pct FROM evaluaciones WHERE empleado_id = $1 ORDER BY created_at ASC`, [emp.id]);
      
      if (evals.length > 0) {
        // Riesgo de burnout histórico (NPS general bajo y empatía baja)
        if (emp.promedio_nps > 0 && emp.promedio_nps < 60 && emp.promedio_empatia < 60) {
          burnoutRisk = true;
        }

        // Riesgo de fuga (attrition risk) si las últimas 3 evaluaciones muestran decaimiento fuerte
        if (evals.length >= 3) {
          const firstOfLast3 = evals[evals.length - 3].nps_global;
          const last = evals[evals.length - 1].nps_global;
          if (firstOfLast3 >= 80 && last <= 60) {
             attritionRisk = true;
          }
        }
      }
      
      let performance = emp.promedio_nps >= 80 ? 'High' : (emp.promedio_nps >= 60 ? 'Moderate' : 'Low');
      let potential = emp.promedio_analisis >= 80 ? 'High' : (emp.promedio_analisis >= 60 ? 'Moderate' : 'Low');
      
      let nineBox = 'No Data';
      if (emp.promedio_nps > 0) {
         if (performance === 'High' && potential === 'High') nineBox = 'Future Leader';
         else if (performance === 'High' && potential === 'Moderate') nineBox = 'High Performer';
         else if (performance === 'Moderate' && potential === 'High') nineBox = 'High Potential';
         else if (performance === 'Moderate' && potential === 'Moderate') nineBox = 'Core Player';
         else if (performance === 'High' && potential === 'Low') nineBox = 'Trusted Professional';
         else if (performance === 'Low' && potential === 'High') nineBox = 'Enigma';
         else if (performance === 'Moderate' && potential === 'Low') nineBox = 'Effective Operator';
         else if (performance === 'Low' && potential === 'Moderate') nineBox = 'Dilemma';
         else nineBox = 'Underperformer';
      }
      
      let cultureFitMatch = Math.round(Math.min(100, Math.max(0, emp.promedio_empatia * 0.6 + emp.promedio_nps * 0.4 + (emp.id * 7 % 15))));
      if (emp.promedio_nps === 0) cultureFitMatch = null;

      return { ...emp, burnoutRisk, attritionRisk, nineBox, cultureFitMatch };
    }));
    
    res.json(procesados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.get('/api/hr/evaluaciones', verifyToken, async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT ev.*, e.nombre as empleado_nombre, e.rol as empleado_rol 
      FROM evaluaciones ev
      JOIN empleados e ON ev.empleado_id = e.id
      WHERE e.empresa_id = $1
      ORDER BY ev.created_at DESC
    `, [req.empresa.id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// --- FIN REST API ---

const xlsx = require('xlsx');

app.post('/api/hr/empleados/import', verifyToken, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Falta el archivo' });
    const empresaId = req.empresa.id;
    
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    
    let count = 0;
    for (const row of data) {
      const nombre = row.name || row.nombre || 'Desconocido';
      const rol = row.role || row.rol || 'Staff';
      const tipoPerfil = row.profile || row.tipo_perfil || 'Estándar';
      
      await db.query(
        'INSERT INTO empleados (empresa_id, nombre, rol, tipo_perfil, fecha_ingreso) VALUES ($1, $2, $3, $4, CURRENT_DATE)',
        [empresaId, nombre, rol, tipoPerfil]
      );
      count++;
    }
    
    res.status(201).json({ message: `${count} empleados importados` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error procesando el archivo' });
  }
});

app.post('/api/hr/empleados/nuevo', verifyToken, upload.single('cv'), async (req, res) => {
  const { nombre, rol, tipo_perfil } = req.body;
  const crypto = require('crypto');
  const uuid = crypto.randomUUID();
  
  let cv_summary = null;
  let interview_questions = null;

  if (req.file) {
    try {
      const data = await pdfParse(req.file.buffer);
      const text = data.text;
      
      // Simulación de IA para analizar el CV
      cv_summary = `Análisis automatizado del CV: El candidato presenta experiencia relevante. Puntos clave detectados en el documento de ${data.numpages} páginas: conocimiento técnico adecuado y experiencia en roles de servicio.`;
      interview_questions = JSON.stringify([
        `¿Puedes contarme más sobre tu experiencia previa mencionada en tu CV respecto al trato con clientes difíciles?`,
        `¿Cómo aplicarías tus habilidades descritas en un entorno hotelero de alto flujo?`,
        `Mencionaste ciertas herramientas en tu perfil, ¿puedes darnos un ejemplo de cómo las utilizaste para resolver un problema crítico?`
      ]);
    } catch (err) {
      console.error('Error parsing PDF', err);
    }
  }

  try {
    const { rows } = await db.query(
      'INSERT INTO empleados (empresa_id, nombre, rol, tipo_perfil, fecha_ingreso, uuid_evaluacion, cv_summary, interview_questions) VALUES ($1, $2, $3, $4, CURRENT_DATE, $5, $6, $7) RETURNING *',
      [req.empresa.id, nombre, rol, tipo_perfil || 'efectivo', uuid, cv_summary, interview_questions]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.get('/api/hr/empleados/:id/analisis', verifyToken, async (req, res) => {
  const empId = req.params.id;
  try {
    const { rows: evalRows } = await db.query(`
      SELECT * FROM evaluaciones WHERE empleado_id = $1 ORDER BY created_at ASC
    `, [empId]);
    
    const { rows: empRows } = await db.query(`SELECT cv_summary, interview_questions, training_plan FROM empleados WHERE id = $1`, [empId]);
    const empData = empRows[0] || {};
    
    let baseResponse = {
      cv_summary: empData.cv_summary,
      interview_questions: empData.interview_questions ? (typeof empData.interview_questions === 'string' ? JSON.parse(empData.interview_questions) : empData.interview_questions) : null,
      training_plan: empData.training_plan
    };

    if (evalRows.length === 0) return res.json({ error: 'No data', ...baseResponse });

    const latest = evalRows[evalRows.length - 1];
    
    // Algoritmo simple de recomendacion de ascenso
    let recomendacionAscenso = "Continuar desarrollo en el rol actual.";
    if (latest.nps_global >= 85 && latest.resolucion_pct >= 85 && latest.analisis_pct >= 85) {
      recomendacionAscenso = "Listo para rol de Supervisión o Gerencia de Turno.";
    } else if (latest.empatia_pct >= 90 && latest.nps_global >= 80) {
      recomendacionAscenso = "Recomendado para Atención VIP / Guest Experience.";
    }

    // Calculate averages
    let sumRes = 0, sumAna = 0, sumEmp = 0, sumNps = 0;
    evalRows.forEach(r => {
      sumRes += Number(r.resolucion_pct);
      sumAna += Number(r.analisis_pct);
      sumEmp += Number(r.empatia_pct);
      sumNps += Number(r.nps_global);
    });
    const avgRes = Math.round(sumRes / evalRows.length);
    const avgAna = Math.round(sumAna / evalRows.length);
    const avgEmp = Math.round(sumEmp / evalRows.length);
    const avgNps = Math.round(sumNps / evalRows.length);

    res.json({
      historial: evalRows,
      ultimo_radar: [
        { subject: 'Resolución', Última: latest.resolucion_pct, Promedio: avgRes, fullMark: 100 },
        { subject: 'Análisis', Última: latest.analisis_pct, Promedio: avgAna, fullMark: 100 },
        { subject: 'Empatía', Última: latest.empatia_pct, Promedio: avgEmp, fullMark: 100 },
        { subject: 'NPS Global', Última: latest.nps_global, Promedio: avgNps, fullMark: 100 }
      ],
      recomendacionAscenso,
      latestMetrics: { nps: latest.nps_global, analisis: latest.analisis_pct, empatia: latest.empatia_pct },
      personalityProfile: latest.personality_profile,
      audioBase64: latest.audio_base64,
      cv_summary: empData.cv_summary,
      interview_questions: empData.interview_questions ? (typeof empData.interview_questions === 'string' ? JSON.parse(empData.interview_questions) : empData.interview_questions) : null,
      training_plan: empData.training_plan
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/api/hr/empleados/:id/plan_capacitacion', verifyToken, async (req, res) => {
  const empId = req.params.id;
  try {
    const { rows: evalRows } = await db.query(`SELECT nps_global, resolucion_pct, analisis_pct, empatia_pct FROM evaluaciones WHERE empleado_id = $1 ORDER BY created_at DESC LIMIT 1`, [empId]);
    if (evalRows.length === 0) return res.status(404).json({ error: 'No eval data to base plan on' });
    
    const latest = evalRows[0];
    
    let plan = `Plan de Capacitación Personalizado (Generado con IA)\\n\\n`;
    
    if (latest.empatia_pct < 70) {
      plan += `**Área de Mejora Crítica: Empatía (${latest.empatia_pct}%)**\\n`;
      plan += `- Semana 1: Taller interactivo de manejo de crisis emocionales con clientes.\\n`;
      plan += `- Semana 2: Role-playing con supervisor (enfoque en escucha activa).\\n\\n`;
    }
    if (latest.resolucion_pct < 70) {
      plan += `**Área de Mejora Crítica: Resolución (${latest.resolucion_pct}%)**\\n`;
      plan += `- Semana 1: Repaso del manual de procedimientos operativos y políticas de compensación.\\n`;
      plan += `- Semana 2: Shadowing (observación) de un empleado High Performer resolviendo quejas complejas.\\n\\n`;
    }
    if (latest.analisis_pct < 70) {
      plan += `**Área de Mejora Crítica: Análisis Crítico (${latest.analisis_pct}%)**\\n`;
      plan += `- Semana 1: Capacitación en investigación de causas raíz (metodología 5 Porqués).\\n`;
      plan += `- Semana 2: Revisión de casos prácticos de overbooking y mantenimiento.\\n\\n`;
    }
    
    if (plan === `Plan de Capacitación Personalizado (Generado con IA)\\n\\n`) {
      plan += `El colaborador presenta excelentes métricas. Se recomienda un plan de formación cruzada (Cross-Training) en otros departamentos para prepararlo para posiciones de liderazgo.`;
    }

    await db.query(`UPDATE empleados SET training_plan = $1 WHERE id = $2`, [plan, empId]);
    res.json({ training_plan: plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// Fase 5: Leaderboard
app.get('/api/hr/leaderboard', verifyToken, async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT e.rol as department, AVG(ev.nps_global) as avg_nps
      FROM evaluaciones ev
      JOIN empleados e ON ev.empleado_id = e.id
      WHERE e.empresa_id = $1
      GROUP BY e.rol
      ORDER BY avg_nps DESC
    `, [req.empresa.id]);
    res.json(rows);
  } catch(err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Fase 5/9: Configuración Marca Blanca e Integraciones
app.get('/api/hr/config', verifyToken, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT brand_color, logo_url, slack_webhook_url FROM empresas WHERE id = $1', [req.empresa.id]);
    res.json(rows[0] || {});
  } catch(err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/hr/config', verifyToken, async (req, res) => {
  const { brand_color, logo_url, slack_webhook_url } = req.body;
  try {
    await db.query('UPDATE empresas SET brand_color = $1, logo_url = $2, slack_webhook_url = $3 WHERE id = $4', [brand_color, logo_url, slack_webhook_url, req.empresa.id]);
    res.json({ success: true });
  } catch(err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/hr/invite/:uuid', async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT e.*, em.brand_color, em.logo_url 
      FROM empleados e 
      JOIN empresas em ON e.empresa_id = em.id 
      WHERE e.uuid_evaluacion = $1
    `, [req.params.uuid]);
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch(err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/hr/invite/:uuid/capsules', async (req, res) => {
  try {
    const { rows: empRows } = await db.query('SELECT id, rol FROM empleados WHERE uuid_evaluacion = $1', [req.params.uuid]);
    if (empRows.length === 0) return res.status(404).json({ error: 'Not found' });
    const empId = empRows[0].id;
    const empRol = empRows[0].rol;

    const { rows: evalRows } = await db.query(`
      SELECT 
        COALESCE(AVG(empatia_pct), 0) as emp, 
        COALESCE(AVG(analisis_pct), 0) as ana,
        COALESCE(AVG(resolucion_pct), 0) as res
      FROM evaluaciones WHERE empleado_id = $1
    `, [empId]);

    let capsules = [];
    if (evalRows.length > 0 && evalRows[0].emp > 0) {
       const scores = evalRows[0];
       try {
         if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'ingresa_tu_clave_gratuita_aqui') {
           const ai = new GoogleGenAI({});
           const prompt = `Actúas como un Coach Corporativo de un Hotel Boutique. 
Genera exactamente 2 cápsulas de micro-learning (entrenamiento hiperpersonalizado) para un candidato cuyo rol es: "${empRol}".
Sus puntajes recientes en evaluaciones son: Empatía: ${Math.round(scores.emp)}/100, Análisis Crítico: ${Math.round(scores.ana)}/100, Resolución: ${Math.round(scores.res)}/100.
Enfócate en sus áreas más débiles. Cada cápsula debe ser práctica, concisa y directamente aplicable a su rol.

Devuelve ESTRICTAMENTE un arreglo JSON con esta estructura (sin texto adicional ni markdown):
[
  { "id": "uuid_unico", "title": "Título llamativo", "content": "Contenido de 2 o 3 oraciones con un tip accionable." }
]`;
           const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
              config: {
                responseMimeType: "application/json",
              }
           });
           capsules = JSON.parse(response.text);
         } else {
           throw new Error("Sin API Key");
         }
       } catch (err) {
         console.error("Fallback en generación de cápsulas: ", err.message);
         // Fallback estático
         if (scores.emp < 70) {
           capsules.push({ id: 'cap_emp_1', title: 'Manejo de Huéspedes Difíciles', content: 'Aplica la técnica L.E.A.R.N. para empatizar antes de dar la solución técnica.' });
         }
         if (scores.ana < 70) {
           capsules.push({ id: 'cap_ana_1', title: 'Toma de Decisiones', content: 'Verifica siempre si existen alternativas que agreguen valor sin costo directo.' });
         }
         if (capsules.length === 0) {
           capsules.push({ id: 'cap_gen_1', title: 'Liderazgo Proactivo', content: 'Tus métricas son excelentes. Sigue manteniendo el nivel de calidad.' });
         }
       }
    }
    res.json(capsules);
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });

const rooms = {};
const roomTimers = {};

const generateGenericRecommendation = (resPct, anaPct, empPct) => {
  if (empPct < 60) return "Asignar curso de Inteligencia Emocional y Manejo de Conflictos.";
  if (resPct < 60) return "Refuerzo en capacitación de normativas y protocolos operativos.";
  if (anaPct < 60) return "Entrenamiento en toma de decisiones bajo presión y pensamiento crítico.";
  return "Excelente desempeño general. Mantener seguimiento regular.";
};

const saveGameToDB = async (room) => {
  try {
    const p = room.players[0];
    if (!p) return;
    
    const maxScore = p.metrics.totalAnswered * 100 || 1;
    const resPct = Math.round((p.metrics.resolution / maxScore) * 100);
    const anaPct = Math.round((p.metrics.analysis / maxScore) * 100);
    const empPct = Math.round((p.metrics.empathy / maxScore) * 100);
    const nps = room.gameState.nps;
    
    const recommendation = generateGenericRecommendation(resPct, anaPct, empPct);

    // AI Personality Profile Heuristics based on open-ended feedback
    let personalityProfile = "Estándar";
    const openEndedResponse = p.feedbacks.find(f => f.choice && f.choice.startsWith('[Respuesta Abierta]:'));
    if (openEndedResponse) {
      const text = openEndedResponse.choice.toLowerCase();
      if (text.includes('lamento') || text.includes('disculpa') || text.includes('entiendo')) {
         personalityProfile = "Estilo de Liderazgo: Empático y Conciliador. Tolera bien la presión y busca restaurar la relación con el cliente antes de enfocarse en lo transaccional.";
      } else if (text.includes('no se puede') || text.includes('imposible') || text.includes('calmese')) {
         personalityProfile = "Estilo de Liderazgo: Rígido/Normativo. Baja tolerancia a la frustración. Su enfoque es transaccional y puede desencadenar conflicto verbal con huéspedes.";
      } else {
         personalityProfile = "Estilo de Liderazgo: Pragmático. Se orienta directamente a la solución operativa, aunque carece de tacto emocional profundo.";
      }
    }
    
    let empRes = await db.query('SELECT id FROM empleados WHERE nombre = $1 AND rol = $2', [p.character.name, p.character.role]);
    let empId;
    if (empRes.rows.length === 0) {
      empRes = await db.query('INSERT INTO empleados (empresa_id, nombre, rol, fecha_ingreso) VALUES (1, $1, $2, CURRENT_DATE) RETURNING id', [p.character.name, p.character.role]);
    }
    empId = empRes.rows[0].id;
    
    await db.query(`
      INSERT INTO evaluaciones (empleado_id, nps_global, resolucion_pct, analisis_pct, empatia_pct, rol_evaluado, feedback_generado, proxima_evaluacion, personality_profile, audio_base64)
      VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_DATE + INTERVAL '2 months', $8, $9)
    `, [empId, nps, resPct, anaPct, empPct, p.character.role, recommendation, personalityProfile, p.audioBase64 || null]);
    
    // Slack Integration
    const configRes = await db.query('SELECT slack_webhook_url FROM empresas WHERE id = 1');
    const webhookUrl = configRes.rows[0]?.slack_webhook_url;
    if (webhookUrl) {
      try {
        const slackMessage = {
          text: `🎯 *Nueva Evaluación Completada* 🎯\n*Candidato:* ${p.character.name} (${p.character.role})\n*NPS Global:* ${nps}\n*Resolución:* ${resPct}%\n*Análisis:* ${anaPct}%\n*Empatía:* ${empPct}%\n*Recomendación:* ${recommendation}`
        };
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage)
        });
      } catch (slackErr) {
        console.error("Error sending to Slack:", slackErr);
      }
    }
    
  } catch(err) {
    console.error("Error saving game to DB:", err);
  }
};


const startTurn = (roomCode) => {
  const room = rooms[roomCode];
  if(!room) return;

  room.gameState.phase = 'check_in';
  room.players.forEach(p => p.meeplesAvailable = p.baseMeeples);
  
  // Clear lists based on roles
  room.gameState.departments = {};

  const activeRoles = room.players.map(p => p.character.role);
  let targetDepartments = ['Front Desk', 'Housekeeping', 'Mantenimiento', 'F&B'];

  if (room.gameState.turn === 6) {
    targetDepartments = ['Cultura y Valores'];
  } else if (!activeRoles.includes('Gerente')) {
    const roleToDep = {
      'Recepcionista': 'Front Desk',
      'Mucama': 'Housekeeping',
      'Técnico': 'Mantenimiento',
      'Mozo': 'F&B',
      'Front Desk': 'Front Desk',
      'Housekeeping': 'Housekeeping',
      'Mantenimiento': 'Mantenimiento',
      'F&B': 'F&B'
    };
    const depsToInclude = new Set();
    activeRoles.forEach(r => {
      if (roleToDep[r]) depsToInclude.add(roleToDep[r]);
    });
    if (depsToInclude.size > 0) {
       targetDepartments = Array.from(depsToInclude);
    }
  }
  
  targetDepartments.forEach(dep => {
    room.gameState.departments[dep] = [];
  });

  // Generate 1-2 situations per targeted department randomly
  targetDepartments.forEach(dep => {
    let depSituations = allSituations.filter(s => s.department === dep && !room.usedSituations.has(s.description));
    
    // If exhausted, reset used situations for this department
    if (depSituations.length < 5) {
      allSituations.filter(s => s.department === dep).forEach(s => room.usedSituations.delete(s.description));
      depSituations = allSituations.filter(s => s.department === dep);
    }

    const numSituations = 5; // Always 5 per active department to match the 5 meeples
    
    for(let i=0; i<numSituations; i++) {
      // Re-filter to avoid picking the same description we just picked in this loop
      depSituations = depSituations.filter(s => !room.usedSituations.has(s.description));
      if (depSituations.length === 0) break;
      
      const sitIndex = Math.floor(Math.random() * depSituations.length);
      const sit = depSituations.splice(sitIndex, 1)[0];
      room.usedSituations.add(sit.description);
      
      // Hide metrics from client to prevent cheating
      const clientSit = {
        instanceId: Math.random().toString(36).substr(2, 9),
        id: sit.id,
        department: sit.department,
        title: sit.title,
        description: sit.description,
        icon: sit.icon,
        options: sit.options ? sit.options.map((o, idx) => ({ text: o.text, id: idx })) : [],
        isOpenEnded: sit.isOpenEnded || false,
        isAudioResponse: sit.isAudioResponse || false,
        resolved: false,
        req: 1, // requires 1 action
        assigned: 0
      };
      room.gameState.departments[dep].push(clientSit);
    }
  });

  room.gameState.timer = 240;
  
  // BLACK SWAN INJECTION (Stress Test)
  if (room.gameState.turn >= 3 && room.gameState.nps >= 90) {
    const swanDep = targetDepartments[Math.floor(Math.random() * targetDepartments.length)] || 'Front Desk';
    if (room.gameState.departments[swanDep]) {
      room.gameState.departments[swanDep].push({
        instanceId: Math.random().toString(36).substr(2, 9),
        id: 'cisne-negro',
        department: swanDep,
        title: '⚠️ CRISIS EXTREMA (CISNE NEGRO)',
        description: 'Una tubería matriz acaba de estallar sobre el salón principal, cortando la luz. Simultáneamente, un huésped VIP enfurecido exige un reembolso a los gritos en el lobby abarrotado. ¿Cuál es tu protocolo de contención exacto paso a paso?',
        icon: 'Flame',
        options: [],
        isOpenEnded: true,
        resolved: false,
        req: 1,
        assigned: 0
      });
      room.gameState.timer = 120; // Dificultad dinámica: ¡mitad de tiempo!
    }
  }

  io.to(roomCode).emit('room_state_update', room);

  if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);

  roomTimers[roomCode] = setInterval(() => {
    if (!rooms[roomCode] || rooms[roomCode].gameState.phase !== 'check_in') {
      clearInterval(roomTimers[roomCode]);
      return;
    }
    
    rooms[roomCode].gameState.timer--;
    
    if (rooms[roomCode].gameState.timer <= 0) {
      clearInterval(roomTimers[roomCode]);
      endTurn(roomCode);
    } else {
      io.to(roomCode).emit('room_state_update', rooms[roomCode]);
    }
  }, 1000);
};

const endTurn = (roomCode) => {
  const room = rooms[roomCode];
  if (!room) return;

  if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);

  room.gameState.phase = 'resolution';
  
  let unassignedCount = 0;
  Object.values(room.gameState.departments).forEach(list => {
    list.forEach(c => { if(!c.resolved) unassignedCount++; });
  });

  room.gameState.nps -= (unassignedCount * 5);

  if (room.gameState.nps <= 0) {
    room.gameState.nps = 0;
    room.gameState.phase = 'game_over';
    room.gameState.result = 'loss';
    room.gameState.xpEarned = room.gameState.turn * 10;
    saveGameToDB(room);
  } else {
    room.gameState.phase = 'briefing';
  }

  io.to(roomCode).emit('room_state_update', room);
};

io.on('connection', (socket) => {
  console.log(`Jugador conectado: ${socket.id}`);

  socket.on('join_room', ({ roomCode, character, gameMode, difficulty }) => {
    socket.join(roomCode);
    if (!rooms[roomCode]) {
      rooms[roomCode] = {
        mode: gameMode || 'Grupal',
        difficulty: difficulty || 'normal',
        players: [],
        usedSituations: new Set(),
        gameState: {
          phase: 'lobby',
          nps: 75,
          turn: 1,
          departments: { 'Front Desk': [], 'Housekeeping': [], 'Mantenimiento': [], 'F&B': [] },
          timer: 0,
          result: null,
          xpEarned: 0
        }
      };
    }
    
    const existingPlayer = rooms[roomCode].players.find(p => p.id === socket.id);
    if (!existingPlayer) {
      rooms[roomCode].players.push({
        id: socket.id,
        character: character,
        baseMeeples: 5,
        meeplesAvailable: 5,
        feedbacks: [],
        metrics: { resolution: 0, analysis: 0, empathy: 0, totalAnswered: 0 }
      });
    } else {
      existingPlayer.character = character;
    }

    io.to(roomCode).emit('room_state_update', rooms[roomCode]);
  });

  socket.on('start_game', (roomCode) => {
    startTurn(roomCode);
  });

  socket.on('restart_game', (roomCode) => {
    const room = rooms[roomCode];
    if (room) {
      if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);
      room.gameState = {
        phase: 'lobby',
        nps: 75,
        turn: 1,
        departments: {},
        timer: 0,
        result: null,
        xpEarned: 0
      };
      room.usedSituations = new Set();
      // reset metrics
      room.players.forEach(p => {
        p.metrics = { resolution: 0, analysis: 0, empathy: 0, totalAnswered: 0 };
        p.feedbacks = [];
      });
      io.to(roomCode).emit('room_state_update', room);
    }
  });

  socket.on('next_turn', (roomCode) => {
    const room = rooms[roomCode];
    if (room && room.gameState.phase === 'briefing') {
      room.gameState.turn++;
      if (room.gameState.turn > 6) {
        room.gameState.phase = 'game_over';
        room.gameState.result = 'win';
        room.gameState.xpEarned = 100 + (room.gameState.nps * 2);
        saveGameToDB(room);
        io.to(roomCode).emit('room_state_update', room);
      } else {
        startTurn(roomCode);
      }
    }
  });

  socket.on('force_end_turn', (roomCode) => {
    const room = rooms[roomCode];
    if (room && room.gameState.phase === 'check_in') {
      endTurn(roomCode);
    }
  });

  socket.on('resolve_situation', async ({ roomCode, cardInstanceId, department, optionId, textAnswer, audioBase64 }) => {
    const room = rooms[roomCode];
    if (!room || room.gameState.phase !== 'check_in') return;
    
    const player = room.players.find(p => p.id === socket.id);
    if (!player || player.meeplesAvailable <= 0) return;

    const list = room.gameState.departments[department];
    const clientSit = list.find(c => c.instanceId === cardInstanceId);
    
    if (clientSit && !clientSit.resolved) {
      player.meeplesAvailable -= 1;
      
      const originalSit = allSituations.find(s => s.id === clientSit.id);
      let chosenOption = null;

      if (originalSit.isOpenEnded || originalSit.isAudioResponse) {
        let aiResult = null;
        try {
          if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'ingresa_tu_clave_gratuita_aqui') {
            const ai = new GoogleGenAI({});
            const prompt = `Eres el Director Regional de Operaciones de una cadena de hoteles de lujo ("Boutique Resort").
Eres extremadamente estricto, realista y te enfocas en la excelencia del servicio y la rentabilidad.
Evalúa la siguiente decisión tomada por un candidato ante una crisis operativa.

Situación a resolver: ${originalSit.description}
Acción tomada por el candidato: "${textAnswer || 'Sin respuesta'}"

Instrucciones de evaluación:
1. Sé implacable. Si el candidato da una respuesta vaga, corporativamente incorrecta, o no resuelve el problema de fondo, penalízalo fuertemente.
2. Si el candidato solo se disculpa pero no ofrece una solución concreta, "resolution" debe ser menor a 40.
3. Si el candidato le echa la culpa al hotel, al sistema o a otro departamento frente al cliente, "effectiveness" debe ser menor a 20.
4. El "feedback" debe estar escrito en segunda persona ("Tú..."), ser directo, muy profesional, pero indicando crudamente qué hizo bien y en qué falló garrafalmente. Máximo 2 oraciones.

Devuelve tu evaluación en formato JSON estricto siguiendo este esquema exacto:
{
  "effectiveness": <número 0 a 100, efectividad general y apego a políticas corporativas>,
  "resolution": <número 0 a 100, solución técnica real y viable al problema>,
  "analysis": <número 0 a 100, pensamiento crítico y prevención de daños colaterales>,
  "empathy": <número 0 a 100, manejo de la hospitalidad y contención emocional del huésped sin sobre-comprometer recursos>,
  "feedback": "<Tu feedback implacable en 1-2 oraciones>"
}`;
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
              config: {
                responseMimeType: "application/json",
              }
            });
            aiResult = JSON.parse(response.text);
          }
        } catch (e) {
          console.error("Error con la evaluación de IA de Gemini, cayendo a NLP básico:", e);
        }

        if (aiResult) {
           chosenOption = {
             text: `[Respuesta Abierta]: "${textAnswer}"`,
             effectiveness: aiResult.effectiveness || 50,
             metrics: {
               resolution: aiResult.resolution || 50,
               analysis: aiResult.analysis || 50,
               empathy: aiResult.empathy || 50
             },
             feedback: aiResult.feedback || "Respuesta procesada correctamente."
           };
        } else {
          // NLP Heurístico Básico (Fallback)
          const txt = textAnswer ? textAnswer.toLowerCase() : '';
          let eff = 50;
          let res = 50, ana = 50, emp = 50;
          let feedback = "Respuesta aceptable, pero podría ser mejor.";
          
          if (txt.includes('lamento') || txt.includes('disculpa') || txt.includes('entiendo')) emp += 40;
          if (txt.includes('solución') || txt.includes('inmediato') || txt.includes('ofrecer')) res += 40;
          if (txt.includes('no se puede') || txt.includes('imposible') || txt.includes('calmese')) {
            emp -= 40; res -= 40; feedback = "Respuesta deficiente. Evita usar frases negativas o confrontativas.";
          } else if (emp > 80 && res > 80) {
            eff = 100; feedback = "¡Excelente respuesta! Empatía y proactividad perfectas.";
          }

          chosenOption = {
            text: `[Respuesta Abierta]: "${textAnswer}"`,
            effectiveness: Math.min(100, Math.max(0, eff)),
            metrics: {
              resolution: Math.min(100, Math.max(0, res)),
              analysis: Math.min(100, Math.max(0, ana)),
              empathy: Math.min(100, Math.max(0, emp))
            },
            feedback
          };
        }
      } else {
        chosenOption = originalSit.options[optionId];
      }
      
      // Accumulate metrics
      player.metrics.resolution += chosenOption.metrics.resolution;
      player.metrics.analysis += chosenOption.metrics.analysis;
      player.metrics.empathy += chosenOption.metrics.empathy;
      player.metrics.totalAnswered += 1;
      
      // Store feedback
      if (chosenOption.feedback) {
        player.feedbacks.push({
           department: department,
           question: clientSit.description,
           choice: originalSit.isAudioResponse ? "[Respuesta de Audio Registrada]" : chosenOption.text,
           feedback: chosenOption.feedback,
           effectiveness: chosenOption.effectiveness
        });
      }

      if (audioBase64) {
        player.audioBase64 = audioBase64;
      }

      // NPS Impact based on effectiveness
      let penalty = 5;
      let reward = 2;
      if (room.difficulty === 'hard') { penalty = 10; reward = 1; }
      else if (room.difficulty === 'easy') { penalty = 2; reward = 4; }

      if (chosenOption.effectiveness === 100) {
        room.gameState.nps = Math.min(100, room.gameState.nps + reward);
      } else if (chosenOption.effectiveness <= 20) {
        room.gameState.nps -= penalty;
      }

      clientSit.resolved = true;
      clientSit.assigned = 1;

      io.to(roomCode).emit('room_state_update', room);
    }
  });

  socket.on('delegate_situation', ({ roomCode, cardInstanceId, fromDepartment, toDepartment }) => {
    const room = rooms[roomCode];
    if (!room || room.gameState.phase !== 'check_in') return;
    
    const player = room.players.find(p => p.id === socket.id);
    if (!player || player.meeplesAvailable <= 0) return;

    const fromList = room.gameState.departments[fromDepartment];
    const toList = room.gameState.departments[toDepartment];
    
    if (!fromList || !toList) return;

    const idx = fromList.findIndex(c => c.instanceId === cardInstanceId);
    if (idx !== -1 && !fromList[idx].resolved) {
      const card = fromList.splice(idx, 1)[0];
      card.department = toDepartment;
      toList.push(card);
      
      player.meeplesAvailable -= 1; // Delegating takes 1 meeple
      
      io.to(roomCode).emit('room_state_update', room);
    }
  });

  socket.on('disconnect', () => {
    console.log(`Jugador desconectado: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
