---
type: community
cohesion: 0.12
members: 33
---

# test_querylog.py

**Cohesion:** 0.12 - loosely connected
**Members:** 33 nodes

## Members
- [[Any_7]] - code
- [[Append one JSONL record to the query log. Never raises.]] - rationale - temp-graphify/graphify/querylog.py
- [[End-to-end with no opt-in, log_query must not create the default log.]] - rationale - temp-graphify/tests/test_querylog.py
- [[Path_48]] - code
- [[Query logging for graphify — append-only JSONL, fail-silent.]] - rationale - temp-graphify/graphify/querylog.py
- [[Tests for graphify.querylog.]] - rationale - temp-graphify/tests/test_querylog.py
- [[_clear_log_env()]] - code - temp-graphify/tests/test_querylog.py
- [[_log_path()]] - code - temp-graphify/graphify/querylog.py
- [[_log_responses()]] - code - temp-graphify/graphify/querylog.py
- [[log_query()]] - code - temp-graphify/graphify/querylog.py
- [[nodes_from_result()]] - code - temp-graphify/graphify/querylog.py
- [[querylog.py]] - code - temp-graphify/graphify/querylog.py
- [[test_disable_env()]] - code - temp-graphify/tests/test_querylog.py
- [[test_disable_env_true()]] - code - temp-graphify/tests/test_querylog.py
- [[test_explicit_nodes_returned_takes_precedence()]] - code - temp-graphify/tests/test_querylog.py
- [[test_kind_mcp_query()]] - code - temp-graphify/tests/test_querylog.py
- [[test_log_creates_parent_dirs()]] - code - temp-graphify/tests/test_querylog.py
- [[test_log_never_raises()]] - code - temp-graphify/tests/test_querylog.py
- [[test_log_query_appends()]] - code - temp-graphify/tests/test_querylog.py
- [[test_log_query_writes_jsonl()]] - code - temp-graphify/tests/test_querylog.py
- [[test_log_query_writes_nothing_by_default()]] - code - temp-graphify/tests/test_querylog.py
- [[test_nodes_from_result_empty()]] - code - temp-graphify/tests/test_querylog.py
- [[test_nodes_from_result_missing()]] - code - temp-graphify/tests/test_querylog.py
- [[test_nodes_from_result_parses_header()]] - code - temp-graphify/tests/test_querylog.py
- [[test_nodes_from_result_singular()]] - code - temp-graphify/tests/test_querylog.py
- [[test_nodes_returned_inferred_from_result()]] - code - temp-graphify/tests/test_querylog.py
- [[test_query_log_disable_wins()]] - code - temp-graphify/tests/test_querylog.py
- [[test_query_log_enabled_by_explicit_flag()]] - code - temp-graphify/tests/test_querylog.py
- [[test_query_log_enabled_by_explicit_path()]] - code - temp-graphify/tests/test_querylog.py
- [[test_query_log_off_by_default()]] - code - temp-graphify/tests/test_querylog.py
- [[test_querylog.py]] - code - temp-graphify/tests/test_querylog.py
- [[test_responses_not_logged_by_default()]] - code - temp-graphify/tests/test_querylog.py
- [[test_responses_optin()]] - code - temp-graphify/tests/test_querylog.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_querylogpy
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_serve.py]]

## Top bridge nodes
- [[querylog.py]] - degree 8, connects to 2 communities
- [[log_query()]] - degree 20, connects to 1 community