---
source_file: "temp-graphify/tests/test_semantic_fragment_sanitize.py"
type: "code"
community: "_parse_llm_json"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_parse_llm_json
---

# test_semantic_fragment_sanitize.py

## Connections
- [[1631 — a malformed LLM chunk (a stray non-dict entry in edgesnodes) must not…]] - `rationale_for` [EXTRACTED]
- [[_parse_llm_json()]] - `imports` [EXTRACTED]
- [[_sanitize_fragment()]] - `imports` [EXTRACTED]
- [[llm.py]] - `imports_from` [EXTRACTED]
- [[test_merge_after_sanitize_does_not_raise_on_source_file_access()]] - `contains` [EXTRACTED]
- [[test_parse_llm_json_fenced_response_is_sanitized()]] - `contains` [EXTRACTED]
- [[test_parse_llm_json_sanitizes_stray_list_in_edges()]] - `contains` [EXTRACTED]
- [[test_sanitize_coerces_non_list_values_to_empty()]] - `contains` [EXTRACTED]
- [[test_sanitize_drops_non_dict_edge_entries()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_parse_llm_json