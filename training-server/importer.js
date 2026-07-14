const fs = require('fs');
const pdf = require('pdf-parse');

const PDF_PATH = '../preguntas.pdf';
const OUTPUT_PATH = 'situations.js';

// Generic plausible distractors by department
const plausibleDistractors = {
  'Front Desk': [
    { text: "Explicarle las normativas del hotel y solicitar que comprenda la situación operativa.", eff: 40, res: 40, ana: 50, emp: 30, fb: "Aplicar la norma estrictamente sin ofrecer alternativas comerciales puede dañar la relación con el cliente." },
    { text: "Ofrecerle un descuento simbólico para su próxima estadía si acepta la condición actual.", eff: 50, res: 60, ana: 50, emp: 60, fb: "Ofrecer descuentos a futuro no resuelve el dolor inmediato del huésped. Falta resolución de primer contacto." },
    { text: "Derivar el reclamo al gerente de turno para que autorice una excepción a la regla.", eff: 60, res: 50, ana: 40, emp: 70, fb: "Escalar todo a gerencia demuestra falta de empoderamiento (empowerment) en el puesto de contacto." },
    { text: "Informarle que el sistema bloqueó la operación y que debe comunicarse con soporte de su agencia.", eff: 30, res: 20, ana: 40, emp: 30, fb: "Culpar al sistema o a la agencia es una mala práctica de servicio al cliente. Asume la responsabilidad de tu marca." },
    { text: "Registrar la queja en el PMS y prometerle que el supervisor lo contactará en 48 horas.", eff: 40, res: 30, ana: 50, emp: 40, fb: "La demora de 48 horas enciende la frustración del huésped. La hospitalidad exige soluciones inmediatas." }
  ],
  'Housekeeping': [
    { text: "Rociar desodorante de ambientes premium y dejar ventilando 15 minutos para salir del apuro.", eff: 40, res: 40, ana: 30, emp: 50, fb: "Es una solución temporal que no ataca la causa raíz. El problema reaparecerá pronto." },
    { text: "Utilizar las sábanas de reserva del piso inferior asumiendo el costo operativo de desabastecer otro sector.", eff: 50, res: 60, ana: 40, emp: 60, fb: "Resolver a costa de desorganizar a otro compañero genera un efecto dominó negativo en el departamento." },
    { text: "Pedirle al huésped que aguarde en el pasillo mientras se termina el repaso exprés.", eff: 30, res: 40, ana: 30, emp: 20, fb: "Hacer esperar a un huésped de pie en el pasillo es una violación grave a los estándares de confort." },
    { text: "Limpiar superficialmente lo visible y reportarlo para el turno de la noche.", eff: 20, res: 20, ana: 30, emp: 20, fb: "Patear el problema al siguiente turno demuestra falta de compromiso con el estándar de calidad." },
    { text: "Aplicar químicos industriales no diluidos para asegurar una desinfección rápida.", eff: 30, res: 50, ana: 20, emp: 30, fb: "Usar químicos fuertes sin diluir es un riesgo tóxico y daña las superficies a largo plazo." }
  ],
  'Mantenimiento': [
    { text: "Puentear el circuito eléctrico para que el equipo funcione temporalmente hasta mañana.", eff: 30, res: 40, ana: 20, emp: 30, fb: "Puentear circuitos es un riesgo altísimo de incendio y viola todas las normativas de seguridad." },
    { text: "Aumentar la presión de las bombas al máximo para forzar el flujo y disimular la pérdida.", eff: 20, res: 30, ana: 20, emp: 30, fb: "Forzar bombas genera fatiga del material y puede causar roturas mucho más caras y complejas." },
    { text: "Apagar el equipo ruidoso e informarle al huésped que es el comportamiento normal de la máquina.", eff: 10, res: 10, ana: 20, emp: 10, fb: "Mentir sobre problemas técnicos es inaceptable y destruye la confianza del cliente." },
    { text: "Usar cinta adhesiva industrial como sellador temporal en la filtración.", eff: 40, res: 50, ana: 30, emp: 40, fb: "Los parches temporales en filtraciones suelen ceder rápido, causando daños mayores por agua." },
    { text: "Informar que el repuesto tarda 15 días en llegar y dejar el problema en suspenso.", eff: 30, res: 20, ana: 60, emp: 40, fb: "La falta de stock no es excusa para no ofrecer soluciones paliativas o alternativas al huésped." }
  ],
  'F&B': [
    { text: "Llevar el plato a la cocina, recalentarlo en el microondas y servirlo con un adorno extra.", eff: 30, res: 40, ana: 20, emp: 50, fb: "El microondas arruina la textura de los alimentos profesionales. No es un estándar aceptable." },
    { text: "Explicarle que esa es la receta original del chef y que su sabor es intencional.", eff: 20, res: 20, ana: 30, emp: 10, fb: "Confrontar el gusto del cliente rara vez resulta bien. Es preferible ofrecer alternativas." },
    { text: "Ofrecerle un postre de cortesía si acepta quedarse con el plato tal cual está.", eff: 40, res: 30, ana: 40, emp: 50, fb: "Sobornar al cliente para que acepte un error operativo disminuye la percepción de calidad del restaurante." },
    { text: "Preparar un reemplazo exprés saltándose los tiempos de cocción de seguridad bromatológica.", eff: 10, res: 50, ana: 10, emp: 40, fb: "Acelerar procesos a costa de la seguridad alimentaria (HACCP) es una negligencia gravísima." },
    { text: "Culpar al proveedor por la mala calidad de los insumos frente al comensal.", eff: 20, res: 20, ana: 20, emp: 30, fb: "El cliente compra tu marca, no le importa quién es tu proveedor. Nunca laves los trapos sucios en el salón." }
  ],
  'Gerencia': [
    { text: "Reducir los costos operativos bajando la calidad de los insumos sin notificar a los huéspedes.", eff: 30, res: 40, ana: 30, emp: 20, fb: "La degradación oculta de calidad impactará inevitablemente en el NPS a mediano plazo." },
    { text: "Asignar la tarea a personal no capacitado para cubrir la vacante temporalmente.", eff: 20, res: 30, ana: 20, emp: 30, fb: "Colocar personal sin entrenamiento en posiciones críticas multiplica los errores operativos exponencialmente." },
    { text: "Maquillar los informes de resultados excluyendo las métricas negativas para evitar reprimendas corporativas.", eff: 10, res: 10, ana: 10, emp: 10, fb: "La falta de ética en los reportes gerenciales es causal de despido y destruye la cultura de mejora continua." },
    { text: "Despedir a los mandos medios involucrados para sentar un precedente de dureza.", eff: 20, res: 20, ana: 20, emp: 20, fb: "El liderazgo por miedo genera rotación masiva y oculta los verdaderos problemas sistémicos." },
    { text: "Ignorar el problema hasta la próxima temporada baja por miedo a frenar la operación actual.", eff: 30, res: 20, ana: 30, emp: 30, fb: "Procrastinar decisiones gerenciales hace que los problemas escalen y se vuelvan inmanejables." }
  ]
};

const padTexts = [
  " Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
  " Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
  " Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
  " Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
  " Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios."
];

async function parse() {
  const dataBuffer = fs.readFileSync(PDF_PATH);
  const data = await pdf(dataBuffer);
  
  let currentDepartment = "Recepción"; // Default starting dept
  const situations = [];
  
  const lines = data.text.split('\n');
  let currentDesc = "";
  let currentOptions = [];
  let isParsingQuestion = false;
  let idCounter = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Detect Department headers
    if (line.match(/^Recepci[óo]n$/i)) currentDepartment = "Front Desk";
    else if (line.match(/^Housekeeping$/i)) currentDepartment = "Housekeeping";
    else if (line.match(/^Mantenimiento$/i)) currentDepartment = "Mantenimiento";
    else if (line.match(/^Alimentos y Bebidas$/i)) currentDepartment = "F&B";
    else if (line.match(/^Gerencia$/i)) currentDepartment = "Gerencia";

    // Detect Question start (e.g., "1. Caída del sistema...")
    const qMatch = line.match(/^\d+\.\s*(.+)/);
    if (qMatch) {
      if (currentDesc && currentOptions.length > 0) {
        situations.push({
          id: `sit_${idCounter++}`,
          department: currentDepartment,
          title: `Caso de ${currentDepartment} #${idCounter-1}`,
          description: currentDesc,
          options: currentOptions
        });
      }
      currentDesc = qMatch[1];
      currentOptions = [];
      isParsingQuestion = true;
      continue;
    }

    // Detect Options (e.g., "a. A) ..." or "• A) ...")
    const optMatch = line.match(/^(?:[a-c]\.|[A-C]\)|[•*-]\s+[A-C]\))\s*(.+)/);
    if (optMatch && isParsingQuestion) {
      const text = optMatch[1];
      if (currentOptions.length === 0) {
        currentOptions.push({ 
          text, 
          effectiveness: 100, 
          metrics: { resolution: 100, analysis: 100, empathy: 100 }, 
          feedback: "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional." 
        });
      } else {
        currentOptions.push({ 
          text, 
          effectiveness: 0, 
          metrics: { resolution: 0, analysis: 0, empathy: 0 }, 
          feedback: "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos." 
        });
      }
    } else if (isParsingQuestion && !line.match(/^[0-9]+/) && !line.match(/^[A-C]\)/) && currentOptions.length === 0) {
      // Continuation of description
      currentDesc += " " + line;
    } else if (isParsingQuestion && currentOptions.length > 0) {
      // Continuation of option
      currentOptions[currentOptions.length - 1].text += " " + line;
    }
  }

  // Push the last one
  if (currentDesc && currentOptions.length > 0) {
    situations.push({
      id: `sit_${idCounter++}`,
      department: currentDepartment,
      title: `Caso de ${currentDepartment} #${idCounter-1}`,
      description: currentDesc,
      options: currentOptions
    });
  }

  // Rewrite B and C with hard distractors, and assign icons
  situations.forEach(sit => {
    // Icon logic
    let icon = "AlertCircle";
    if (sit.department === 'Front Desk') icon = "UserCheck";
    if (sit.department === 'Housekeeping') icon = "Sparkles";
    if (sit.department === 'Mantenimiento') icon = "Wrench";
    if (sit.department === 'F&B') icon = "Coffee";
    if (sit.department === 'Gerencia') icon = "LineChart";
    sit.icon = icon;

    // Hard distractors injection
    const pool = plausibleDistractors[sit.department] || plausibleDistractors['Front Desk'];
    
    // Pad the wrong options to match the length of the correct one
    if (sit.options.length > 0) {
      const correctOpt = sit.options[0]; // Before shuffle, 0 is A
      const targetLength = correctOpt.text.length;
      
      for (let i = 1; i < sit.options.length; i++) {
        let padCount = 0;
        while (sit.options[i].text.length < targetLength - 20 && padCount < 2) {
          sit.options[i].text += padTexts[Math.floor(Math.random() * padTexts.length)];
          padCount++;
        }
      }
    }
  });

  // Generate the file string
  const fileContent = `
const situations = ${JSON.stringify(situations, null, 2)};

// Helper: Fisher-Yates Shuffle
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle options for all situations globally
situations.forEach(sit => {
  shuffleArray(sit.options);
});

module.exports = situations;
`;

  fs.writeFileSync(OUTPUT_PATH, fileContent.trim());
  console.log('Successfully generated situations.js with', situations.length, 'questions.');
}

parse();
