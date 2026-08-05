---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "_call_claude_cli"
location: "L1420"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_call_claude_cli
---

# _call_claude_cli()

## Connections
- [[Call Claude via the locally-installed Claude Code CLI (`claude -p`). Routes…]] - `rationale_for` [EXTRACTED]
- [[_ImageRef]] - `references` [EXTRACTED]
- [[_claude_cli_envelope()]] - `calls` [EXTRACTED]
- [[_claude_cli_supports_json_schema()]] - `calls` [EXTRACTED]
- [[_extraction_system()]] - `calls` [EXTRACTED]
- [[_no_window_kwargs()]] - `calls` [EXTRACTED]
- [[_parse_llm_json()]] - `calls` [EXTRACTED]
- [[_resolve_api_timeout()]] - `calls` [EXTRACTED]
- [[_response_is_hollow()]] - `calls` [EXTRACTED]
- [[_with_image_notes()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_call_claude_cli_passes_errors_replace_to_subprocess()]] - `calls` [EXTRACTED]
- [[test_call_claude_cli_tolerates_non_utf8_in_stderr()]] - `calls` [EXTRACTED]
- [[test_claude_cli_adds_dir_and_read_instruction()]] - `calls` [EXTRACTED]
- [[test_claude_cli_extraction_honours_timeout()]] - `calls` [EXTRACTED]
- [[test_claude_cli_passes_oversized_image_by_path()]] - `calls` [EXTRACTED]
- [[test_extraction_instructions_ride_in_user_turn()]] - `calls` [EXTRACTED]
- [[test_finish_reason_length_on_max_tokens()]] - `calls` [EXTRACTED]
- [[test_instructions_ride_in_user_turn_not_system_prompt()]] - `calls` [EXTRACTED]
- [[test_json_schema_flag_absent_when_cli_lacks_it()]] - `calls` [EXTRACTED]
- [[test_json_schema_flag_added_when_cli_supports_it()]] - `calls` [EXTRACTED]
- [[test_model_env_var_adds_model_flag()]] - `calls` [EXTRACTED]
- [[test_no_model_flag_when_env_var_unset()]] - `calls` [EXTRACTED]
- [[test_no_session_persistence_flag_in_subprocess()]] - `calls` [EXTRACTED]
- [[test_no_system_prompt_flag_in_subprocess()]] - `calls` [EXTRACTED]
- [[test_non_windows_uses_bare_claude()]] - `calls` [EXTRACTED]
- [[test_prefers_structured_output_over_prose_result()]] - `calls` [EXTRACTED]
- [[test_raises_on_garbage_envelope()]] - `calls` [EXTRACTED]
- [[test_raises_on_nonzero_exit()]] - `calls` [EXTRACTED]
- [[test_raises_when_cli_missing()]] - `calls` [EXTRACTED]
- [[test_returns_parsed_nodes_and_edges()]] - `calls` [EXTRACTED]
- [[test_token_accounting_includes_cache()]] - `calls` [EXTRACTED]
- [[test_user_turn_preserves_untrusted_source_guardrails()]] - `calls` [EXTRACTED]
- [[test_windows_falls_back_to_bare_claude_when_cmd_missing()]] - `calls` [EXTRACTED]
- [[test_windows_prefers_claude_cmd_over_bare_claude()]] - `calls` [EXTRACTED]
- [[test_windows_raises_when_neither_cmd_nor_bare_claude_present()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_call_claude_cli