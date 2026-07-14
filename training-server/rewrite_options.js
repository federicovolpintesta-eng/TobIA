require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const filePath = path.join(__dirname, 'situations_mixed.js');
const situations = require('./situations_mixed.js');

async function processChunk(chunk) {
  const prompt = `
Eres un experto en entrenamiento corporativo y diseño de opciones para simuladores de capacitación en hotelería.
A continuación te enviaré un JSON con un arreglo de situaciones.
Tu trabajo es Reescribir EXCLUSIVAMENTE el campo "text" de aquellas "options" que tienen "effectiveness": 0.
Las opciones correctas (effectiveness: 100) NO deben ser modificadas.

OBJETIVO:
Las opciones incorrectas actuales son demasiado obvias, absurdas, ilegales o groseras (ej. "cobrar un soborno", "insultar", "gritar", "ignorar al cliente"). 
Debes reescribirlas para que suenen COMO RESPUESTAS PROFESIONALES, EDUCADAS Y PLAUSIBLES (Distractores Fuertes). 
Deben parecer acciones que un empleado novato o excesivamente burocrático tomaría creyendo que hace lo correcto, pero que en realidad son un error de procedimiento, falta de proactividad, una escalación innecesaria, o una excusa cortés pero inútil.
Debes mantener la letra inicial (ej. "B) ", "C) ") en el texto si la tuviera.

Devuelve ESTRICTAMENTE el arreglo JSON modificado, sin markdown ni texto extra.

JSON ENTRADA:
${JSON.stringify(chunk, null, 2)}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    
    return JSON.parse(response.text);
  } catch (err) {
    console.error("Error procesando chunk:", err);
    return chunk; // Fallback to original
  }
}

async function main() {
  console.log("Iniciando reescritura de opciones obvias para " + situations.length + " situaciones...");
  
  const toProcess = situations.filter(s => s.options && s.options.length > 0);
  const openEnded = situations.filter(s => !s.options || s.options.length === 0);
  
  const chunkSize = 15;
  const processedSituations = [];
  
  for (let i = 0; i < toProcess.length; i += chunkSize) {
    console.log("Procesando lote " + (Math.floor(i / chunkSize) + 1) + " de " + Math.ceil(toProcess.length / chunkSize) + "...");
    const chunk = toProcess.slice(i, i + chunkSize);
    const result = await processChunk(chunk);
    processedSituations.push(...result);
  }
  
  const finalSituations = [...openEnded, ...processedSituations];
  
  // Sort back by ID to keep original order roughly
  finalSituations.sort((a, b) => {
    const numA = parseInt(a.id.replace(/[^0-9]/g, '')) || 0;
    const numB = parseInt(b.id.replace(/[^0-9]/g, '')) || 0;
    return numA - numB;
  });
  
  const fileContent = 'const situations = ' + JSON.stringify(finalSituations, null, 2) + ';\n\nmodule.exports = situations;\n';
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log("¡Reescritura completada y guardada en situations_mixed.js!");
}

main();
