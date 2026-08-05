---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_image_vision.py"
location: "L1632"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_image_visionpy
---

# _call_bedrock()

## Connections
- [[Call AWS Bedrock via boto3 Converse API using the standard AWS credential chain.]] - `rationale_for` [EXTRACTED]
- [[_ImageRef]] - `references` [EXTRACTED]
- [[_bedrock_content()]] - `calls` [EXTRACTED]
- [[_bedrock_inference_config()]] - `calls` [EXTRACTED]
- [[_bedrock_response_text()]] - `calls` [EXTRACTED]
- [[_extraction_system()]] - `calls` [EXTRACTED]
- [[_parse_llm_json()]] - `calls` [EXTRACTED]
- [[_resolve_api_timeout()]] - `calls` [EXTRACTED]
- [[_resolve_max_retries()]] - `calls` [EXTRACTED]
- [[_response_is_hollow()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_call_bedrock_api_timeout_defaults_when_unset()]] - `calls` [EXTRACTED]
- [[test_call_bedrock_honors_api_timeout()]] - `calls` [EXTRACTED]
- [[test_call_bedrock_parses_reasoning_model_response()]] - `calls` [EXTRACTED]
- [[test_call_bedrock_sends_raw_image_bytes()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_image_visionpy