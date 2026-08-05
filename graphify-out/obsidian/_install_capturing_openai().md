---
source_file: "temp-graphify/tests/test_llm_backends.py"
type: "code"
community: "test_llm_backends.py"
location: "L469"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_llm_backendspy
---

# _install_capturing_openai()

## Connections
- [[Like _install_fake_openai but records kwargs passed to create().]] - `rationale_for` [EXTRACTED]
- [[test_call_openai_compat_explicit_extra_body_skips_ollama_auto_derive()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_extra_body_wins_over_moonshot_default()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_uses_explicit_extra_body()]] - `calls` [EXTRACTED]
- [[test_deepseek_thinking_disabled_via_env()]] - `calls` [EXTRACTED]
- [[test_deepseek_thinking_on_by_default()]] - `calls` [EXTRACTED]
- [[test_explicit_extra_body_wins_over_thinking_env()]] - `calls` [EXTRACTED]
- [[test_llm_backends.py]] - `contains` [EXTRACTED]
- [[test_non_ollama_backend_gets_no_num_ctx_extra_body()]] - `calls` [EXTRACTED]
- [[test_ollama_extra_body_sets_num_ctx_and_keep_alive()]] - `calls` [EXTRACTED]
- [[test_ollama_num_ctx_env_override()]] - `calls` [EXTRACTED]
- [[test_ollama_num_ctx_scales_with_small_token_budget()]] - `calls` [EXTRACTED]
- [[test_openai_compat_env_var_temperature_applied()]] - `calls` [EXTRACTED]
- [[test_openai_compat_forces_non_streaming_response()]] - `calls` [EXTRACTED]
- [[test_openai_compat_omits_temperature_for_o3_model()]] - `calls` [EXTRACTED]
- [[test_openai_compat_sends_temperature_for_normal_model()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_llm_backendspy