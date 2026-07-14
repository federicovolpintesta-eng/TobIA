import json

with open('/Users/federicovolpintesta/.gemini/antigravity/brain/93e1468d-1b64-4f63-8463-d3a5c236870d/.system_generated/logs/transcript.jsonl', 'r') as f:
    for line in f:
        if not line.strip(): continue
        obj = json.loads(line)
        if 'tool_calls' in obj:
            for tc in obj['tool_calls']:
                if tc.get('tool_name') == 'default_api:view_file':
                    resp = tc.get('tool_response', {})
                    out = resp.get('output', '')
                    if '==Start of PDF==' in out:
                        with open('raw_pdf.txt', 'w') as outf:
                            outf.write(out)
                        print("Saved OCR!")
                        exit(0)
