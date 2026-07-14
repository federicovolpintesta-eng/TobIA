const fs = require('fs');

const path = '/Users/federicovolpintesta/Desktop/Caos en el front desk/server/situations.js';
let content = fs.readFileSync(path, 'utf8');

const metaPhrases = [
  "Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
  "Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad."
];

let replacedCount = 0;

metaPhrases.forEach(phrase => {
  if (content.includes(phrase)) {
    const parts = content.split(phrase);
    replacedCount += parts.length - 1;
    content = parts.join('');
  }
});

// clean up double spaces that might have been created
content = content.replace(/  +/g, ' ');

fs.writeFileSync(path, content, 'utf8');

console.log("Removed " + replacedCount + " meta-commentary phrases.");
