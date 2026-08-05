---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_llm_backends.py"
location: "L345"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_llm_backendspy
---

# _resolve_temperature()

## Connections
- [[Resolve the temperature to send, honouring GRAPHIFY_LLM_TEMPERATURE. Precedence…]] - `rationale_for` [EXTRACTED]
- [[_bedrock_inference_config()]] - `calls` [EXTRACTED]
- [[_call_llm()]] - `calls` [EXTRACTED]
- [[_model_requires_default_temperature()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_resolve_temperature_default_for_normal_model()]] - `calls` [EXTRACTED]
- [[test_resolve_temperature_env_var_invalid_falls_back()]] - `calls` [EXTRACTED]
- [[test_resolve_temperature_env_var_none_omits()]] - `calls` [EXTRACTED]
- [[test_resolve_temperature_env_var_numeric_overrides()]] - `calls` [EXTRACTED]
- [[test_resolve_temperature_omitted_for_reasoning_model()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_llm_backendspy