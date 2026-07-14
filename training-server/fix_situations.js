const fs = require('fs');

const path = '/Users/federicovolpintesta/Desktop/Caos en el front desk/server/situations.js';
let situations = require(path);

const plausibleDistractors = {
  'Front Desk': [
    "Informar al huésped de la política del hotel y pedirle que envíe un correo a gerencia para formalizar su queja, evitando tomar una decisión en el momento.",
    "Solicitar al huésped que aguarde en el lobby mientras se revisa el sistema, sin ofrecer una estimación de tiempo ni alternativas inmediatas.",
    "Ofrecer una disculpa genérica y entregarle un folleto de servicios, argumentando que no se puede alterar el procedimiento estándar.",
    "Derivar la situación directamente al supervisor sin intentar una primera contención, lo que alarga el tiempo de respuesta."
  ],
  'Housekeeping': [
    "Priorizar la velocidad sobre el detalle, limpiando solo las superficies visibles para cumplir con el tiempo estándar por habitación.",
    "Anotar el desperfecto en la planilla de mantenimiento al final del turno, en lugar de reportarlo inmediatamente por radio.",
    "Dejar la puerta entornada para facilitar la ventilación o buscar insumos, asumiendo que el pasillo es seguro por ser un piso exclusivo.",
    "Notificar a recepción para que llamen al huésped y pregunten si necesita algo más, sin tomar acción inmediata en el lugar."
  ],
  'F&B': [
    "Retirar el plato en silencio y ordenar uno nuevo a cocina sin dar explicaciones ni ofrecer cortesías para mitigar la espera.",
    "Explicar al cliente que el error fue de la cocina y no del servicio de mesa, intentando deslindar responsabilidades frente al huésped.",
    "Ofrecer cambiar la bebida sin costo adicional, en lugar de abordar el problema principal que originó la queja sobre la comida.",
    "Entregar la cuenta completa argumentando que los procedimientos del restaurante no permiten realizar anulaciones sin el gerente presente."
  ],
  'Mantenimiento': [
    "Realizar un arreglo temporal rápido para salir del paso, sin programar una revisión exhaustiva ni avisar a recepción sobre el estado real.",
    "Indicarle al huésped que el equipo es viejo y que la solución definitiva dependerá de un técnico externo al día siguiente.",
    "Apagar el equipo defectuoso por seguridad y dejar una nota estándar en la habitación pidiendo disculpas, sin ofrecer una reubicación.",
    "Asumir que el problema es menor y atender otras órdenes de trabajo primero, demorando la resolución de la queja actual."
  ]
};

const fallbacks = [
  "Seguir el manual de procedimientos al pie de la letra, sin mostrar flexibilidad ni empatía ante la urgencia del huésped.",
  "Delegar la tarea a un compañero del mismo nivel para evitar el conflicto directo con el cliente.",
  "Dar una explicación técnica muy detallada al huésped sobre por qué ocurrió el problema, esperando que con eso se calme."
];

let changedCount = 0;

situations.forEach(sit => {
  if (sit.options && sit.options.length > 0) {
    sit.options.forEach(opt => {
      // Check if it's a 0% option and has obviously bad words
      const textLower = opt.text.toLowerCase();
      if (opt.effectiveness === 0) {
        const isBad = textLower.includes("robar") || 
                      textLower.includes("gritar") || 
                      textLower.includes("ignorar") || 
                      textLower.includes("insultar") || 
                      textLower.includes("llorar") || 
                      textLower.includes("echarle la culpa") || 
                      textLower.includes("esconder") ||
                      textLower.includes("no hacer nada") ||
                      textLower.includes("pelear") ||
                      textLower.includes("discutir a los gritos") ||
                      textLower.includes("culpar") ||
                      textLower.includes("amenazar");
        
        // Also if it's too short (less than 10 words) it's usually a silly answer
        const isShort = opt.text.split(' ').length < 12;

        if (isBad || isShort || opt.text === "Entrar a robar algo asumiendo que le echarán la culpa al que dejó la puerta abierta.") {
          // Select a plausible distractor based on department
          const pool = plausibleDistractors[sit.department] || fallbacks;
          const randomDistractor = pool[Math.floor(Math.random() * pool.length)];
          opt.text = randomDistractor;
          changedCount++;
        }
      }
    });
    
    // Specifically fix sit_139
    if (sit.id === 'sit_139') {
      sit.options[1].text = "Dejar la puerta entornada asumiendo que regresará pronto con los insumos faltantes, sin notificar a seguridad sobre el descuido momentáneo.";
      sit.options[2].text = "Avisar a recepción al finalizar el turno para que llamen al huésped y le pregunten si falta algo en la habitación, sin intervenir de inmediato.";
    }
  }
});

const newContent = `const situations = ${JSON.stringify(situations, null, 2)};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

situations.forEach(sit => {
  if (sit.options) {
    shuffleArray(sit.options);
  }
});

module.exports = situations;
`;

fs.writeFileSync(path, newContent, 'utf8');
console.log("Replaced " + changedCount + " absurd distractors with plausible professional distractors.");
