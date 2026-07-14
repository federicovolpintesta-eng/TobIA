const fs = require('fs');
const logs = fs.readFileSync('/Users/federicovolpintesta/.gemini/antigravity/brain/93e1468d-1b64-4f63-8463-d3a5c236870d/.system_generated/logs/transcript.jsonl', 'utf-8');

let ocrText = '';
const lines = logs.split('\n');
for (const line of lines) {
  if (!line) continue;
  const obj = JSON.parse(line);
  if (obj.tool_calls) {
    for (const res of obj.tool_calls) {
      if (res.tool_name === 'default_api:view_file' && res.tool_response && res.tool_response.output) {
        if (res.tool_response.output.includes('==Start of PDF==')) {
          ocrText = res.tool_response.output;
        }
      }
    }
  }
}

let cleanText = ocrText.replace(/==Screenshot for page \d+==/g, '');
cleanText = cleanText.replace(/==Start of OCR for page \d+==/g, '');
cleanText = cleanText.replace(/==End of OCR for page \d+==/g, '');
cleanText = cleanText.replace(/==Start of PDF==/g, '');
cleanText = cleanText.replace(/==End of PDF==/g, '');
// remove image tags completely
cleanText = cleanText.replace(/!\[\]\(.*?\)/g, '');

fs.writeFileSync('raw_pdf.txt', cleanText);
console.log('Saved raw_pdf.txt, length:', cleanText.length);
