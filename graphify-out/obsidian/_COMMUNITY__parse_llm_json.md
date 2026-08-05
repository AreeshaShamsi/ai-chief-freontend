---
type: community
cohesion: 0.09
members: 33
---

# _parse_llm_json

**Cohesion:** 0.09 - loosely connected
**Members:** 33 nodes

## Members
- [[1631 — a malformed LLM chunk (a stray non-dict entry in edgesnodes) must not…]] - rationale - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[Claude often prefixes the JSON with a short preamble before the ```json fence.…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Default behaviour when the env var is not set, --model is not added so claude-…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Extraction instructions must be delivered in the user turn, not via --system-…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Force ``nodes````edges````hyperedges`` to lists of dicts, in place. A model…]] - rationale - temp-graphify/graphify/llm.py
- [[GRAPHIFY_CLAUDE_CLI_MODEL must be forwarded to claude -p --model.]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Regression clean JSON input (the original happy path) must keep parsing…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Some models return prose around bare JSON with no markdown fence. The balanced-…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Strip optional markdown fences and parse JSON. Returns empty fragment on…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for `_parse_llm_json` robustness and the `_call_claude_cli` subprocess…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[Truncated response the model started the fence but ran out of tokens before…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[When the model refuses or returns unrelated prose, the parser must degrade…]] - rationale - temp-graphify/tests/test_llm_parser.py
- [[_make_envelope()]] - code - temp-graphify/tests/test_llm_parser.py
- [[_parse_llm_json()]] - code - temp-graphify/graphify/llm.py
- [[_sanitize_fragment()]] - code - temp-graphify/graphify/llm.py
- [[patch]] - code
- [[test_empty_response_returns_empty_fragment()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_fence_with_uppercase_language_tag()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_fence_without_closing_backticks()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_instructions_ride_in_user_turn_not_system_prompt()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_llm_parser.py]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_merge_after_sanitize_does_not_raise_on_source_file_access()]] - code - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[test_model_env_var_adds_model_flag()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_no_model_flag_when_env_var_unset()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_parse_llm_json_fenced_response_is_sanitized()]] - code - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[test_parse_llm_json_sanitizes_stray_list_in_edges()]] - code - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[test_preamble_then_fence_is_parsed()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_prose_wrapped_json_without_fence_is_parsed()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_raw_json_still_works()]] - code - temp-graphify/tests/test_llm_parser.py
- [[test_sanitize_coerces_non_list_values_to_empty()]] - code - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[test_sanitize_drops_non_dict_edge_entries()]] - code - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[test_semantic_fragment_sanitize.py]] - code - temp-graphify/tests/test_semantic_fragment_sanitize.py
- [[test_total_refusal_returns_empty_fragment()]] - code - temp-graphify/tests/test_llm_parser.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_parse_llm_json
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_llm.py]]
- 4 edges to [[_COMMUNITY__call_claude_cli]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_test_image_vision.py]]
- 1 edge to [[_COMMUNITY_test_llm_backends.py]]

## Top bridge nodes
- [[_parse_llm_json()]] - degree 19, connects to 4 communities
- [[test_llm_parser.py]] - degree 14, connects to 2 communities
- [[test_semantic_fragment_sanitize.py]] - degree 9, connects to 1 community
- [[_sanitize_fragment()]] - degree 6, connects to 1 community
- [[test_instructions_ride_in_user_turn_not_system_prompt()]] - degree 5, connects to 1 community