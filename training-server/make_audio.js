const fs = require('fs');

const path = '/Users/federicovolpintesta/Desktop/Caos en el front desk/server/situations.js';
let situations = require(path);

situations = situations.map(sit => {
  sit.isAudioResponse = true; // Forzamos voz / transcripción
  sit.isOpenEnded = false; 
  sit.options = []; // Borramos las opciones
  return sit;
});

const newContent = `const situations = ${JSON.stringify(situations, null, 2)};

module.exports = situations;
`;

fs.writeFileSync(path, newContent, 'utf8');
console.log(`Convertidas ${situations.length} situaciones a Voice Simulator`);
