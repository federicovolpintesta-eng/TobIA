import json

found = False
with open('/Users/federicovolpintesta/.gemini/antigravity/brain/93e1468d-1b64-4f63-8463-d3a5c236870d/.system_generated/logs/transcript.jsonl', 'r') as f:
    for line in f:
        if not line.strip(): continue
        obj = json.loads(line)
        if obj.get("type") == "TOOL_RESPONSE":
            if "content" in obj:
                out = obj["content"]
                if "==Start of PDF==" in out:
                    with open('raw_pdf.txt', 'w') as outf:
                        outf.write(out)
                    print("Saved!")
                    found = True
                    break
        elif "tool_calls" in obj:
            # check inside tool_calls
            pass
if not found:
    print("Not found in content. Checking alternative schema.")
