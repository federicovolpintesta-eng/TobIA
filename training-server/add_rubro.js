require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No GEMINI_API_KEY found in .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: apiKey });

async function main() {
  console.log("Cargando situaciones...");
  const situations = require('./situations_mixed.js');
  console.log(`Se encontraron ${situations.length} situaciones.`);

  // Extraemos un resumen para mandarle a Gemini
  const miniSituations = situations.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description
  }));

  const prompt = `
Eres un clasificador de situaciones de entrenamiento para empleados de un hotel.
Aquí tienes una lista de situaciones. Analiza cada una y asígnale UN "rubro" principal de esta lista:
- Financiero
- RRHH
- Operaciones
- Comercial / Marketing
- Servicio al Cliente
- Mantenimiento / IT
- Legal / Sanidad

Devuelve ÚNICAMENTE un objeto JSON válido donde las claves sean el ID de la situación y el valor sea el rubro asignado.
Ejemplo de salida:
{
  "sit_open_1": "Servicio al Cliente",
  "sit_1": "Mantenimiento / IT"
}

Situaciones a clasificar:
${JSON.stringify(miniSituations)}
`;

  console.log("Enviando a Gemini (esto puede tardar unos segundos)...");
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text;
    const rubrosMap = JSON.parse(resultText);

    let updatedCount = 0;
    for (const sit of situations) {
      if (rubrosMap[sit.id]) {
        sit.rubro = rubrosMap[sit.id];
        updatedCount++;
      } else {
        sit.rubro = "Operaciones"; // Default fallback
      }
    }

    console.log(`Clasificación completada. ${updatedCount} situaciones actualizadas.`);

    const newFileContent = `const situations = ${JSON.stringify(situations, null, 2)};\n\nmodule.exports = situations;`;
    fs.writeFileSync('./situations_mixed.js', newFileContent);
    console.log("Archivo situations_mixed.js sobrescrito con el nuevo campo 'rubro'.");
    
  } catch (error) {
    console.error("Error al generar la clasificación:", error);
  }
}

main();
