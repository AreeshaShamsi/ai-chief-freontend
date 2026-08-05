---
type: community
cohesion: 0.05
members: 56
---

# _call_claude_cli

**Cohesion:** 0.05 - loosely connected
**Members:** 56 nodes

## Members
- [[2076 review with --json-schema the CLI puts the constrained object in…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[--system-prompt must NOT be used the CLI ignores its 'raw JSON only' directive…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[A probe that fails to run is treated as unsupported (safe fallback) and cached…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[Call Claude via the locally-installed Claude Code CLI (`claude -p`). Routes…]] - rationale - temp-graphify/graphify/llm.py
- [[Estimate USD cost for a given token count using published pricing.]] - rationale - temp-graphify/graphify/llm.py
- [[Honour GRAPHIFY_API_TIMEOUT env var override, else use default (seconds).]] - rationale - temp-graphify/graphify/llm.py
- [[If `claude.cmd` is somehow unavailable but `claude` resolves (e.g. WSL-style…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[If neither `claude.cmd` nor `claude` are on PATH on Windows, raise the standard…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[Older CLIs without --json-schema must not receive the flag (it would be an…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[On Windows, npm installs `claude.ps1` alongside `claude.cmd`. `CreateProcess`…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[On non-Windows platforms, behaviour is unchanged bare `claude` is passed to…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[Return True if this Claude Code CLI accepts ``--json-schema``. Structured…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for the `claude-cli` backend (855856). Mocks subprocess.run +…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[The untrusted_source guardrails from _extraction_system must survive the move…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[The full extraction schema, an explicit imperative, and the source must all be…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[The label_simple_completion path must spawn the resolved claude.cmd on…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[When errors='replace' is set, non-UTF-8 bytes in stderr produce replacement…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[When the CLI advertises --json-schema, it is passed with a schema that pins the…]] - rationale - temp-graphify/tests/test_claude_cli_backend.py
- [[_call_claude_cli()]] - code - temp-graphify/graphify/llm.py
- [[_claude_cli_supports_json_schema()]] - code - temp-graphify/graphify/llm.py
- [[_no_window_kwargs()]] - code - temp-graphify/graphify/llm.py
- [[_resolve_api_timeout()]] - code - temp-graphify/graphify/llm.py
- [[estimate_cost()]] - code - temp-graphify/graphify/llm.py
- [[fake_claude()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[subprocess kwargs that suppress the console window claude.cmd would otherwise…]] - rationale - temp-graphify/graphify/llm.py
- [[test_backend_registered_with_zero_cost()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_call_claude_cli_tolerates_non_utf8_in_stderr()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_claude_cli_backend.py]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_claude_cli_extraction_honours_timeout()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_estimate_cost_azure_no_keyerror()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_extract_files_direct_dispatches_to_claude_cli()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_extraction_instructions_ride_in_user_turn()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_finish_reason_length_on_max_tokens()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_json_schema_flag_absent_when_cli_lacks_it()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_json_schema_flag_added_when_cli_supports_it()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_no_session_persistence_flag_in_subprocess()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_no_system_prompt_flag_in_subprocess()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_non_windows_uses_bare_claude()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_prefers_structured_output_over_prose_result()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_raises_on_garbage_envelope()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_raises_on_nonzero_exit()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_raises_when_cli_missing()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_resolve_api_timeout_default()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_resolve_api_timeout_env_override()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_resolve_api_timeout_ignores_invalid()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_resolve_api_timeout_ignores_nonpositive()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_returns_parsed_nodes_and_edges()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_simple_completion_resolves_cmd_shim_on_windows()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_supports_json_schema_detects_flag_in_help()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_supports_json_schema_false_and_cached_on_probe_error()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_supports_json_schema_false_when_flag_absent()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_token_accounting_includes_cache()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_user_turn_preserves_untrusted_source_guardrails()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_windows_falls_back_to_bare_claude_when_cmd_missing()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_windows_prefers_claude_cmd_over_bare_claude()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_windows_raises_when_neither_cmd_nor_bare_claude_present()]] - code - temp-graphify/tests/test_claude_cli_backend.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_call_claude_cli
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_llm.py]]
- 5 edges to [[_COMMUNITY_test_llm_backends.py]]
- 4 edges to [[_COMMUNITY__parse_llm_json]]
- 3 edges to [[_COMMUNITY_test_image_vision.py]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_extract_files_direct]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY__fixture]]

## Top bridge nodes
- [[_call_claude_cli()]] - degree 37, connects to 6 communities
- [[_resolve_api_timeout()]] - degree 11, connects to 3 communities
- [[estimate_cost()]] - degree 6, connects to 3 communities
- [[test_claude_cli_backend.py]] - degree 33, connects to 2 communities
- [[_claude_cli_supports_json_schema()]] - degree 7, connects to 1 community