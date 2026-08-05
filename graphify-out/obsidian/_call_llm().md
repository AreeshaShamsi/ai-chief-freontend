---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "llm.py"
location: "L2501"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/llmpy
---

# _call_llm()

## Connections
- [[Send a plain-text prompt to `backend` and return the model's text reply. When…]] - `rationale_for` [EXTRACTED]
- [[_azure_client()]] - `calls` [EXTRACTED]
- [[_backend_pkg_hint()]] - `calls` [EXTRACTED]
- [[_bedrock_inference_config()]] - `calls` [EXTRACTED]
- [[_bedrock_response_text()]] - `calls` [EXTRACTED]
- [[_claude_cli_envelope()]] - `calls` [EXTRACTED]
- [[_default_model_for_backend()]] - `calls` [EXTRACTED]
- [[_format_backend_env_keys()]] - `calls` [EXTRACTED]
- [[_get_backend_api_key()]] - `calls` [EXTRACTED]
- [[_label_batch_with_retry()]] - `calls` [EXTRACTED]
- [[_llm_tiebreak()]] - `calls` [EXTRACTED]
- [[_no_window_kwargs()]] - `calls` [EXTRACTED]
- [[_resolve_api_timeout()]] - `calls` [EXTRACTED]
- [[_resolve_max_retries()]] - `calls` [EXTRACTED]
- [[_resolve_ollama_base_url()]] - `calls` [EXTRACTED]
- [[_resolve_temperature()]] - `calls` [EXTRACTED]
- [[_thinking_disabled_via_env()]] - `calls` [EXTRACTED]
- [[_validate_ollama_base_url()]] - `calls` [EXTRACTED]
- [[dedup.py]] - `imports` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_call_llm_claude_cli_branch_honours_timeout()]] - `calls` [EXTRACTED]
- [[test_call_llm_claude_client_built_with_timeout_and_retries()]] - `calls` [EXTRACTED]
- [[test_call_llm_openai_compat_client_built_with_timeout_and_retries()]] - `calls` [EXTRACTED]
- [[test_simple_completion_resolves_cmd_shim_on_windows()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/llmpy