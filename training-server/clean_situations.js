const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'situations_mixed.js');
let content = fs.readFileSync(filePath, 'utf8');

const phrasesToRemove = [
  "Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
  "Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
  "Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
  "Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
  "Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
  "Alimentos y Bebidas"
];

phrasesToRemove.forEach(phrase => {
  // Regex to remove the phrase optionally preceded/followed by space
  const regex = new RegExp(`\\s*${phrase.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}\\s*`, 'g');
  content = content.replace(regex, '');
});

// Clean up any trailing spaces before closing quote
content = content.replace(/ \+?"/g, '"');
content = content.replace(/  +/g, ' ');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned up situations_mixed.js');
