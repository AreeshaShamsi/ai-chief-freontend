---
type: community
cohesion: 0.07
members: 49
---

# extract_files_direct

**Cohesion:** 0.07 - loosely connected
**Members:** 49 nodes

## Members
- [[A hostname that RESOLVES to a link-local IP is blocked, not just literals (F3).]] - rationale - temp-graphify/tests/test_ollama.py
- [[Extract semantic nodesedges from a list of files using the given backend.…]] - rationale - temp-graphify/graphify/llm.py
- [[Link-local  cloud-metadata Ollama targets fail closed (F3).]] - rationale - temp-graphify/tests/test_ollama.py
- [[Loopback is silent; a general LAN host warns but is allowed (F3).]] - rationale - temp-graphify/tests/test_ollama.py
- [[Return accepted API-key environment variables for a backend.]] - rationale - temp-graphify/graphify/llm.py
- [[Return the first configured API key for backend, or an empty string.]] - rationale - temp-graphify/graphify/llm.py
- [[Return the name of whichever backend has an API key set, or None. Priority…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for the Ollama backend additions in graphifyllm.py.]] - rationale - temp-graphify/tests/test_ollama.py
- [[True if host is, or resolves to, a link-local  cloud-metadata address.…]] - rationale - temp-graphify/graphify/llm.py
- [[Warn if OLLAMA_BASE_URL looks unsafe; hard-block link-localmetadata (F3).…]] - rationale - temp-graphify/graphify/llm.py
- [[Whether `backend`'s configured model can see images. Ollama is special-cased…]] - rationale - temp-graphify/graphify/llm.py
- [[_backend_env_keys()]] - code - temp-graphify/graphify/llm.py
- [[_backend_supports_vision()]] - code - temp-graphify/graphify/llm.py
- [[_clear_backend_env()]] - code - temp-graphify/tests/test_llm_backends.py
- [[_get_backend_api_key()]] - code - temp-graphify/graphify/llm.py
- [[_ollama_host_is_link_local_or_metadata()]] - code - temp-graphify/graphify/llm.py
- [[_validate_ollama_base_url()]] - code - temp-graphify/graphify/llm.py
- [[detect_backend()]] - code - temp-graphify/graphify/llm.py
- [[extract_files_direct with backend=ollama and no OLLAMA_API_KEY should use…]] - rationale - temp-graphify/tests/test_ollama.py
- [[extract_files_direct()]] - code - temp-graphify/graphify/llm.py
- [[parametrize_19]] - code
- [[test_backend_detection_prefers_gemini()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_capability_flags()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_detect_backend_azure_requires_endpoint_not_just_key()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_detect_backend_claude_beats_ollama()]] - code - temp-graphify/tests/test_ollama.py
- [[test_detect_backend_kimi_beats_ollama()]] - code - temp-graphify/tests/test_ollama.py
- [[test_detect_backend_none_without_envvars()]] - code - temp-graphify/tests/test_ollama.py
- [[test_detect_backend_ollama()]] - code - temp-graphify/tests/test_ollama.py
- [[test_detect_backend_returns_azure_when_both_vars_set()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_extract_files_direct_accepts_str_paths()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_extract_files_direct_routes_gemini_through_openai_compat()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_gemini_accepts_gemini_api_key()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_gemini_accepts_google_api_key()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_gemini_model_can_be_overridden_by_env()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_missing_gemini_key_names_both_supported_env_vars()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_ollama.py]] - code - temp-graphify/tests/test_ollama.py
- [[test_ollama_alias_resolving_to_link_local_blocked()]] - code - temp-graphify/tests/test_ollama.py
- [[test_ollama_api_key_sentinel()]] - code - temp-graphify/tests/test_ollama.py
- [[test_ollama_blocks_link_local_and_metadata()]] - code - temp-graphify/tests/test_ollama.py
- [[test_ollama_in_backends()]] - code - temp-graphify/tests/test_ollama.py
- [[test_ollama_loopback_and_lan_do_not_raise()]] - code - temp-graphify/tests/test_ollama.py
- [[test_ollama_warn_false_still_hard_blocks_but_stays_quiet()]] - code - temp-graphify/tests/test_ollama.py
- [[test_openai_backend_detected()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_openai_compat_backends_resolve_full_output_cap()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_openai_compat_env_var_temperature_applied()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_openai_compat_omits_temperature_for_o3_model()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_openai_compat_sends_temperature_for_normal_model()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_str_path_entry_points_handle_edge_cases()]] - code - temp-graphify/tests/test_llm_backends.py
- [[warn=False suppresses the LAN warning but never the metadata hard-block (F3).]] - rationale - temp-graphify/tests/test_ollama.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_files_direct
SORT file.name ASC
```

## Connections to other communities
- 24 edges to [[_COMMUNITY_test_llm_backends.py]]
- 14 edges to [[_COMMUNITY_llm.py]]
- 7 edges to [[_COMMUNITY_test_image_vision.py]]
- 5 edges to [[_COMMUNITY_cli.py]]
- 4 edges to [[_COMMUNITY_prs.py]]
- 4 edges to [[_COMMUNITY_test_chunking.py]]
- 3 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_test_evidence_binding.py]]
- 2 edges to [[_COMMUNITY__call_claude_cli]]
- 1 edge to [[_COMMUNITY_dedup.py]]
- 1 edge to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_test_labeling.py]]
- 1 edge to [[_COMMUNITY__load_custom_providers]]

## Top bridge nodes
- [[extract_files_direct()]] - degree 37, connects to 8 communities
- [[detect_backend()]] - degree 21, connects to 6 communities
- [[_get_backend_api_key()]] - degree 17, connects to 6 communities
- [[_validate_ollama_base_url()]] - degree 13, connects to 3 communities
- [[_clear_backend_env()]] - degree 18, connects to 2 communities