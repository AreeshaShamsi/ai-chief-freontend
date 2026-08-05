---
type: community
cohesion: 0.09
members: 27
---

# serve.py

**Cohesion:** 0.09 - loosely connected
**Members:** 27 nodes

## Members
- [[NOTE no decorators here — the handlers below are plain coroutines,]] - rationale - temp-graphify/graphify/serve.py
- [[dot-__call__()_1]] - code - temp-graphify/graphify/serve.py
- [[dot-__init__()_8]] - code - temp-graphify/graphify/serve.py
- [[IDF weights for query terms, cached in G.graph'_idf_cache'. Common terms like…]] - rationale - temp-graphify/graphify/serve.py
- [[NamedTuple]] - code
- [[Per-query scoring result, returned by the private `_score_query` helper.…]] - rationale - temp-graphify/graphify/serve.py
- [[Pick a path endpoint from a _score_nodes result, preferring full-token matches.…]] - rationale - temp-graphify/graphify/serve.py
- [[Pure-ASGI API-key gate for the HTTP transport. Implemented as raw ASGI (not…]] - rationale - temp-graphify/graphify/serve.py
- [[Render pre-built lines under the same ~3-charstoken budget rule as…]] - rationale - temp-graphify/graphify/serve.py
- [[Return match tiers in precedence order (source_exact, exact, prefix,…]] - rationale - temp-graphify/graphify/serve.py
- [[_ApiKeyMiddleware]] - code - temp-graphify/graphify/serve.py
- [[_QueryScores]] - code - temp-graphify/graphify/serve.py
- [[_compute_idf()]] - code - temp-graphify/graphify/serve.py
- [[_cut_lines_to_budget()]] - code - temp-graphify/graphify/serve.py
- [[_filter_graph_by_context()]] - code - temp-graphify/graphify/serve.py
- [[_find_node_tiers()]] - code - temp-graphify/graphify/serve.py
- [[_infer_context_filters()]] - code - temp-graphify/graphify/serve.py
- [[_normalize_context_filters()]] - code - temp-graphify/graphify/serve.py
- [[_pick_scored_endpoint()]] - code - temp-graphify/graphify/serve.py
- [[_resolve_context_filters()]] - code - temp-graphify/graphify/serve.py
- [[_strip_diacritics()_1]] - code - temp-graphify/graphify/serve.py
- [[serve.py]] - code - temp-graphify/graphify/serve.py
- [[test_cut_lines_to_budget_over_budget_announces_at_top()]] - code - temp-graphify/tests/test_serve.py
- [[test_cut_lines_to_budget_under_budget_is_byte_identical()]] - code - temp-graphify/tests/test_serve.py
- [[test_infer_context_filters_for_calls_question()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_context_filter_aliases_resolve()]] - code - temp-graphify/tests/test_serve.py
- [[test_resolve_context_filters_explicit_overrides_heuristic()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/servepy
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_test_serve.py]]
- 11 edges to [[_COMMUNITY__score_nodes]]
- 8 edges to [[_COMMUNITY__find_node]]
- 6 edges to [[_COMMUNITY_test_prs.py]]
- 6 edges to [[_COMMUNITY_test_query_induced_edges.py]]
- 5 edges to [[_COMMUNITY_default_graph_json]]
- 4 edges to [[_COMMUNITY__query_terms]]
- 4 edges to [[_COMMUNITY_Graph]]
- 3 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_test_analyze.py]]
- 2 edges to [[_COMMUNITY_graphifybuild.py]]
- 2 edges to [[_COMMUNITY_test_build.py]]
- 2 edges to [[_COMMUNITY_fetch_worktrees]]
- 2 edges to [[_COMMUNITY_test_serve_http.py]]
- 2 edges to [[_COMMUNITY__communities_from_graph]]
- 1 edge to [[_COMMUNITY_generate]]
- 1 edge to [[_COMMUNITY_test_benchmark.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_compute_pr_impact]]
- 1 edge to [[_COMMUNITY_test_querylog.py]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY_security.py]]
- 1 edge to [[_COMMUNITY_test_security.py]]
- 1 edge to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY__max_server_contexts]]
- 1 edge to [[_COMMUNITY__MCPASGIApp]]

## Top bridge nodes
- [[serve.py]] - degree 70, connects to 26 communities
- [[_compute_idf()]] - degree 8, connects to 3 communities
- [[_filter_graph_by_context()]] - degree 7, connects to 3 communities
- [[_find_node_tiers()]] - degree 7, connects to 3 communities
- [[_pick_scored_endpoint()]] - degree 5, connects to 3 communities