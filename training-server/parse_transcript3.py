import json

found = False
with open('/Users/federicovolpintesta/.gemini/antigravity/brain/93e1468d-1b64-4f63-8463-d3a5c236870d/.system_generated/logs/transcript.jsonl', 'r') as f:
    for line in f:
        if not line.strip(): continue
        obj = json.loads(line)
        if obj.get("type") == "TOOL_RESPONSE":
            # dump keys
            print(list(obj.keys()))
            if "content" in obj:
                print(type(obj["content"]))
                print(str(obj["content"])[:100])
            if "output" in obj:
                print("OUTPUT EXISTS")
            break
