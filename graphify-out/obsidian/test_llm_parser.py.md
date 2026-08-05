---
source_file: "temp-graphify/tests/test_llm_parser.py"
type: "code"
community: "_parse_llm_json"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_parse_llm_json
---

# test_llm_parser.py

## Connections
- [[Tests for `_parse_llm_json` robustness and the `_call_claude_cli` subprocess…]] - `rationale_for` [EXTRACTED]
- [[_make_envelope()]] - `contains` [EXTRACTED]
- [[graphify__init__.py]] - `imports_from` [EXTRACTED]
- [[llm.py]] - `imports_from` [EXTRACTED]
- [[test_empty_response_returns_empty_fragment()]] - `contains` [EXTRACTED]
- [[test_fence_with_uppercase_language_tag()]] - `contains` [EXTRACTED]
- [[test_fence_without_closing_backticks()]] - `contains` [EXTRACTED]
- [[test_instructions_ride_in_user_turn_not_system_prompt()]] - `contains` [EXTRACTED]
- [[test_model_env_var_adds_model_flag()]] - `contains` [EXTRACTED]
- [[test_no_model_flag_when_env_var_unset()]] - `contains` [EXTRACTED]
- [[test_preamble_then_fence_is_parsed()]] - `contains` [EXTRACTED]
- [[test_prose_wrapped_json_without_fence_is_parsed()]] - `contains` [EXTRACTED]
- [[test_raw_json_still_works()]] - `contains` [EXTRACTED]
- [[test_total_refusal_returns_empty_fragment()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_parse_llm_json