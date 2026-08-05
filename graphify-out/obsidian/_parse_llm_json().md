---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "_parse_llm_json"
location: "L967"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_parse_llm_json
---

# _parse_llm_json()

## Connections
- [[Strip optional markdown fences and parse JSON. Returns empty fragment on…]] - `rationale_for` [EXTRACTED]
- [[_call_azure()]] - `calls` [EXTRACTED]
- [[_call_bedrock()]] - `calls` [EXTRACTED]
- [[_call_claude()]] - `calls` [EXTRACTED]
- [[_call_claude_cli()]] - `calls` [EXTRACTED]
- [[_call_openai_compat()]] - `calls` [EXTRACTED]
- [[_sanitize_fragment()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_empty_response_returns_empty_fragment()]] - `calls` [EXTRACTED]
- [[test_fence_with_uppercase_language_tag()]] - `calls` [EXTRACTED]
- [[test_fence_without_closing_backticks()]] - `calls` [EXTRACTED]
- [[test_merge_after_sanitize_does_not_raise_on_source_file_access()]] - `calls` [EXTRACTED]
- [[test_parse_llm_json_fenced_response_is_sanitized()]] - `calls` [EXTRACTED]
- [[test_parse_llm_json_sanitizes_stray_list_in_edges()]] - `calls` [EXTRACTED]
- [[test_preamble_then_fence_is_parsed()]] - `calls` [EXTRACTED]
- [[test_prose_wrapped_json_without_fence_is_parsed()]] - `calls` [EXTRACTED]
- [[test_raw_json_still_works()]] - `calls` [EXTRACTED]
- [[test_semantic_fragment_sanitize.py]] - `imports` [EXTRACTED]
- [[test_total_refusal_returns_empty_fragment()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_parse_llm_json