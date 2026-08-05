---
type: community
cohesion: 0.05
members: 37
---

# graphify/__init__.py

**Cohesion:** 0.05 - loosely connected
**Members:** 37 nodes

## Members
- [[dot-test_cp1252_would_fail_but_utf8_succeeds()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_failure_count_in_merged_result()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_no_false_alarm_when_all_chunks_succeed()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_read_files_produces_utf8_safe_prompt()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_subprocess_encoding_kwarg_in_extract_files_direct()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_summary_printed_when_chunks_fail()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[A summary line must appear on stderr when ≥1 chunk fails.]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[Demonstrate the exact failure mode that is now fixed. The prompt string…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[Demonstrates the bug fix. The full batch of 4 communities triggers malformed…]] - rationale - temp-graphify/tests/test_label_retry.py
- [[End-to-end path write unicode file → extract_files_direct → subprocess.…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[Exercises the same code path as the rsl-siege-manager reproduction without…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[Regression tests for UnicodeEncodeError on Windows cp1252 console. On Windows…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[TestLoudChunkFailure]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[TestSubstitutionValidation]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[Tests for ANTHROPIC_BASE_URL  ANTHROPIC_MODEL overrides on the claude backend.…]] - rationale - temp-graphify/tests/test_anthropic_custom_endpoint.py
- [[Tests for OPENAI_BASE_URL  OPENAI_MODEL overrides on the openai backend. These…]] - rationale - temp-graphify/tests/test_openai_custom_endpoint.py
- [[Tests for graphify.llm._label_batch_with_retry — adaptive split-and-retry on…]] - rationale - temp-graphify/tests/test_label_retry.py
- [[The Fortran C-preprocessor path is hardened against argument injection (F5). A…]] - rationale - temp-graphify/tests/test_cpp_preprocess.py
- [[When all chunks succeed, failed_chunks must be 0 and no failure summary should…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[When chunks fail, extract_corpus_parallel must record failed_chunks  0 in its…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[__getattr__()]] - code - temp-graphify/graphify/__init__.py
- [[_read_files must return a string that encodes cleanly to UTF-8.]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[extract_corpus_parallel must surface chunk failures loudly — either via non-…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[graphify - extract · build · cluster · analyze · report.]] - rationale - temp-graphify/graphify/__init__.py
- [[graphify__init__.py]] - code - temp-graphify/graphify/__init__.py
- [[test_anthropic_custom_endpoint.py]] - code - temp-graphify/tests/test_anthropic_custom_endpoint.py
- [[test_charmap_encoding.py]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[test_claude_base_url_and_model_env_override()]] - code - temp-graphify/tests/test_anthropic_custom_endpoint.py
- [[test_claude_defaults_without_env()]] - code - temp-graphify/tests/test_anthropic_custom_endpoint.py
- [[test_cpp_preprocess.py]] - code - temp-graphify/tests/test_cpp_preprocess.py
- [[test_cpp_preprocess_passes_absolute_path()]] - code - temp-graphify/tests/test_cpp_preprocess.py
- [[test_graphify_openai_model_wins_over_openai_model()]] - code - temp-graphify/tests/test_openai_custom_endpoint.py
- [[test_label_batch_recovers_via_split_on_invalid_json()]] - code - temp-graphify/tests/test_label_retry.py
- [[test_label_retry.py]] - code - temp-graphify/tests/test_label_retry.py
- [[test_openai_base_url_and_model_env_override()]] - code - temp-graphify/tests/test_openai_custom_endpoint.py
- [[test_openai_custom_endpoint.py]] - code - temp-graphify/tests/test_openai_custom_endpoint.py
- [[test_openai_defaults_without_env()]] - code - temp-graphify/tests/test_openai_custom_endpoint.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/graphify/__init__py
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_llm.py]]
- 1 edge to [[_COMMUNITY__call_claude_cli]]
- 1 edge to [[_COMMUNITY_test_detect.py]]
- 1 edge to [[_COMMUNITY_test_evidence_binding.py]]
- 1 edge to [[_COMMUNITY_test_file_slice.py]]
- 1 edge to [[_COMMUNITY_test_hook_guard.py]]
- 1 edge to [[_COMMUNITY_test_image_vision.py]]
- 1 edge to [[_COMMUNITY_test_install_references.py]]
- 1 edge to [[_COMMUNITY_test_install_roundtrip.py]]
- 1 edge to [[_COMMUNITY_test_llm_backends.py]]
- 1 edge to [[_COMMUNITY__parse_llm_json]]
- 1 edge to [[_COMMUNITY_detect.py]]
- 1 edge to [[_COMMUNITY_convert_office_file]]
- 1 edge to [[_COMMUNITY_test_office_limits.py]]
- 1 edge to [[_COMMUNITY_save_semantic_cache]]
- 1 edge to [[_COMMUNITY_test_semantic_cleanup.py]]
- 1 edge to [[_COMMUNITY_test_serve_http.py]]
- 1 edge to [[_COMMUNITY_test_stat_index_portability.py]]
- 1 edge to [[_COMMUNITY_file_hash]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_TestSubprocessEncoding]]

## Top bridge nodes
- [[graphify__init__.py]] - degree 25, connects to 18 communities
- [[test_charmap_encoding.py]] - degree 6, connects to 2 communities
- [[test_openai_custom_endpoint.py]] - degree 6, connects to 1 community
- [[test_anthropic_custom_endpoint.py]] - degree 5, connects to 1 community
- [[test_cpp_preprocess.py]] - degree 4, connects to 1 community