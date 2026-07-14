const fs = require('fs');
const pdf = require('pdf-parse');

async function run() {
  try {
    const dataBuffer = fs.readFileSync('../preguntas.pdf');
    const parser = new pdf.PDFParse(dataBuffer);
    const data = await parser.parse();
    console.log("Length:", data.text ? data.text.length : "undefined");
    console.log(data.text ? data.text.substring(0, 100) : Object.keys(data));
  } catch(e) {
    console.error(e);
  }
}
run();
