---
type: community
cohesion: 0.15
members: 23
---

# test_search_hook.py

**Cohesion:** 0.15 - loosely connected
**Members:** 23 nodes

## Members
- [[A Bash tool_input carries `command`; the Grep-shape detection must not fire…]] - rationale - temp-graphify/tests/test_search_hook.py
- [[Feed a Grep-tool-shaped payload (patternpathglob, no command) to the guard.]] - rationale - temp-graphify/tests/test_search_hook.py
- [[The Bash PreToolUse guard nudges toward the graph before grepfind searches.…]] - rationale - temp-graphify/tests/test_search_hook.py
- [[The guard resolves the graph via GRAPHIFY_OUT, not a hardcoded path.]] - rationale - temp-graphify/tests/test_search_hook.py
- [[_env()_3]] - code - temp-graphify/tests/test_search_hook.py
- [[_run()_12]] - code - temp-graphify/tests/test_search_hook.py
- [[_run_grep_tool()]] - code - temp-graphify/tests/test_search_hook.py
- [[_search_matcher()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_bash_non_search_with_stray_pattern_key_does_not_nudge()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_command_has_no_shell_syntax()_1]] - code - temp-graphify/tests/test_search_hook.py
- [[test_fails_open_on_malformed_stdin()_1]] - code - temp-graphify/tests/test_search_hook.py
- [[test_grep_tool_input_nudges_with_graph()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_grep_tool_input_silent_without_graph()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_grep_tool_never_blocks()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_grep_tool_nudge_is_valid_pretooluse_json()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_honors_graphify_out_override()_1]] - code - temp-graphify/tests/test_search_hook.py
- [[test_matcher_targets_bash_and_grep()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_never_blocks()_2]] - code - temp-graphify/tests/test_search_hook.py
- [[test_nudge_payload_is_valid_pretooluse_json()_1]] - code - temp-graphify/tests/test_search_hook.py
- [[test_nudges_on_search_commands_with_graph()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_search_hook.py]] - code - temp-graphify/tests/test_search_hook.py
- [[test_silent_on_non_search_commands()]] - code - temp-graphify/tests/test_search_hook.py
- [[test_silent_without_graph()_1]] - code - temp-graphify/tests/test_search_hook.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_search_hookpy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_graphify__main__.py]]

## Top bridge nodes
- [[test_search_hook.py]] - degree 21, connects to 1 community
- [[_search_matcher()]] - degree 4, connects to 1 community