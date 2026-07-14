const fs = require('fs');
let content = fs.readFileSync('situations.js', 'utf8');

const textRegex = /"text":\s*"([^"]+)"/g;

content = content.replace(textRegex, (match, textContent) => {
  if (/^[A-C]\)\s/.test(textContent)) {
    let cleaned = textContent;
    // Remueve oraciones comunes que revelan la respuesta incorrecta.
    cleaned = cleaned.replace(/\.\s*(Aplicar esta medida|Esta decisión|Esto puede|Esto demuestra|Esta acción|Sin embargo|No obstante|Aunque|Lo cual|Generando|Lo que|Demuestra|Evidencia|Es una vía rápida|Alimentos y Bebidas|Mantenimiento).*$/i, '.');
    return `"text": "${cleaned}"`;
  }
  return match;
});

fs.writeFileSync('situations.js', content);
console.log("Done");
