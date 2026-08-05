---
type: community
cohesion: 0.05
members: 75
---

# test_llm_backends.py

**Cohesion:** 0.05 - loosely connected
**Members:** 75 nodes

## Members
- [[1686 - a wedged local Ollama request must not multiply --api-timeout by the…]] - rationale - temp-graphify/tests/test_ollama_retry_cap.py
- [[Both extraction paths share the same hyperedge contract (the '3 or more nodes ……]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Build a minimal stand-in for an `openai` SDK ChatCompletion response.]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Call any OpenAI-compatible API (Kimi, OpenAI, etc.) and return parsed JSON.]] - rationale - temp-graphify/graphify/llm.py
- [[Detect a successful HTTP response that yielded no usable extraction. A local…]] - rationale - temp-graphify/graphify/llm.py
- [[Inject a stub `openai` module so `_call_openai_compat` can run without the real…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Inject a stub openai module with AzureOpenAI so _call_azure and _azure_client…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Like _install_fake_openai but records kwargs passed to create().]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Resolve the Ollama base URL. Honors an explicit OLLAMA_BASE_URL first…]] - rationale - temp-graphify/graphify/llm.py
- [[Resolve the temperature to send, honouring GRAPHIFY_LLM_TEMPERATURE. Precedence…]] - rationale - temp-graphify/graphify/llm.py
- [[Return a minimal claude -p --output-format json envelope.]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Tests for direct semantic-extraction backend selection.]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[The OpenAI-compatible client (kimiopenaigeminideepseekollama) is built with…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[The native-backend prompt must request hyperedges, like the skill's extraction-…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[True if `model` is a reasoning model that rejects an explicit temperature.…]] - rationale - temp-graphify/graphify/llm.py
- [[_backend_base_url()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_call_openai_compat()]] - code - temp-graphify/graphify/llm.py
- [[_capture_client_kwargs()]] - code - temp-graphify/tests/test_ollama_retry_cap.py
- [[_fake_openai_response()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_install_capturing_openai()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_install_fake_azure_openai()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_install_fake_openai()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_make_cli_envelope()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_model_requires_default_temperature()]] - code - temp-graphify/graphify/llm.py
- [[_ok()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_resolve_ollama_base_url()]] - code - temp-graphify/graphify/llm.py
- [[_resolve_temperature()]] - code - temp-graphify/graphify/llm.py
- [[_response_is_hollow()]] - code - temp-graphify/graphify/llm.py
- [[parametrize_16]] - code
- [[subprocess.run must be called with errors='replace' so non-UTF-8 output bytes…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[test_api_timeout_is_passed_to_client()]] - code - temp-graphify/tests/test_ollama_retry_cap.py
- [[test_base_url_defaults_without_env()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_base_url_env_overrides()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_azure_uses_correct_client_params_and_max_completion_tokens()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_claude_cli_passes_errors_replace_to_subprocess()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_explicit_extra_body_skips_ollama_auto_derive()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_extra_body_wins_over_moonshot_default()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_preserves_real_finish_reason()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_relabels_empty_content_as_length()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_relabels_none_content_as_length()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_relabels_unparseable_json_as_length()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_uses_explicit_extra_body()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_cloud_backend_keeps_default_retries()]] - code - temp-graphify/tests/test_ollama_retry_cap.py
- [[test_deepseek_thinking_disabled_via_env()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_deepseek_thinking_on_by_default()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_explicit_extra_body_wins_over_thinking_env()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_extract_corpus_parallel_ollama_parallel_env_restores_concurrency()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_llm_backends.py]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_model_requires_default_temperature_false_for_normal_models()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_model_requires_default_temperature_true_for_reasoning_models()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_matches_skill_spec_on_hyperedges()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_requests_hyperedges()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_non_ollama_backend_gets_no_num_ctx_extra_body()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_ollama_defaults_to_zero_sdk_retries()]] - code - temp-graphify/tests/test_ollama_retry_cap.py
- [[test_ollama_extra_body_sets_num_ctx_and_keep_alive()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_ollama_honors_explicit_max_retries()]] - code - temp-graphify/tests/test_ollama_retry_cap.py
- [[test_ollama_num_ctx_env_override()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_ollama_num_ctx_scales_with_small_token_budget()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_ollama_retry_cap.py]] - code - temp-graphify/tests/test_ollama_retry_cap.py
- [[test_openai_compat_client_built_with_retries()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_openai_compat_forces_non_streaming_response()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_normalizes_host_without_scheme()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_prefers_base_url()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_preserves_normalized_host()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_returns_default_without_env()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_default_for_normal_model()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_env_var_invalid_falls_back()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_env_var_none_omits()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_env_var_numeric_overrides()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_omitted_for_reasoning_model()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_accepts_real_extraction()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_empty_string()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_none_content()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_parsed_but_no_nodes_or_edges()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_whitespace_only()]] - code - temp-graphify/tests/test_llm_backends.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_llm_backendspy
SORT file.name ASC
```

## Connections to other communities
- 24 edges to [[_COMMUNITY_extract_files_direct]]
- 21 edges to [[_COMMUNITY_llm.py]]
- 10 edges to [[_COMMUNITY_test_chunking.py]]
- 5 edges to [[_COMMUNITY__call_claude_cli]]
- 3 edges to [[_COMMUNITY_test_image_vision.py]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY__parse_llm_json]]

## Top bridge nodes
- [[_call_openai_compat()]] - degree 34, connects to 6 communities
- [[test_llm_backends.py]] - degree 79, connects to 5 communities
- [[_response_is_hollow()]] - degree 12, connects to 3 communities
- [[_resolve_temperature()]] - degree 11, connects to 2 communities
- [[_resolve_ollama_base_url()]] - degree 9, connects to 2 communities