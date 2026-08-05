---
type: community
cohesion: 0.11
members: 30
---

# test_prs.py

**Cohesion:** 0.11 - loosely connected
**Members:** 30 nodes

## Members
- [[dot-test_both_fail_returns_main()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_cancelled_is_failure()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_contains_pr_metadata_and_count_header()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_empty_pr_list()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_empty_rollup_returns_none()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_failure_conclusion()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_falls_back_to_git_symbolic_ref()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_gh_returns_empty_dict_falls_back()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_gh_returns_main()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_git_timeout_returns_main()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_in_progress_is_pending()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_mixed_success_and_failure_is_failure()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_success()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_timed_out_is_failure()]] - code - temp-graphify/tests/test_prs.py
- [[Auto-detect the repo's default branch via gh, then git, then fall back to…]] - rationale - temp-graphify/graphify/prs.py
- [[Build the configured low-level MCP Server (shared by every transport). All…]] - rationale - temp-graphify/graphify/serve.py
- [[Plain-text PR summary for MCP output (no ANSI).]] - rationale - temp-graphify/graphify/prs.py
- [[TestDetectDefaultBranch]] - code - temp-graphify/tests/test_prs.py
- [[TestFormatPrsText]] - code - temp-graphify/tests/test_prs.py
- [[TestParseCi]] - code - temp-graphify/tests/test_prs.py
- [[Tests for graphifyprs.py.]] - rationale - temp-graphify/tests/test_prs.py
- [[_build_server()]] - code - temp-graphify/graphify/serve.py
- [[_detect_default_branch()]] - code - temp-graphify/graphify/prs.py
- [[_gh()]] - code - temp-graphify/graphify/prs.py
- [[_parse_ci()]] - code - temp-graphify/graphify/prs.py
- [[datetime_1]] - code
- [[fetch_prs()]] - code - temp-graphify/graphify/prs.py
- [[format_prs_text()]] - code - temp-graphify/graphify/prs.py
- [[gh returns data but with no defaultBranchRef — should still fall back.]] - rationale - temp-graphify/tests/test_prs.py
- [[test_prs.py]] - code - temp-graphify/tests/test_prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_prspy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_prs.py]]
- 8 edges to [[_COMMUNITY_fetch_worktrees]]
- 6 edges to [[_COMMUNITY_serve.py]]
- 5 edges to [[_COMMUNITY_make_pr]]
- 3 edges to [[_COMMUNITY_compute_pr_impact]]
- 2 edges to [[_COMMUNITY_test_analyze.py]]
- 2 edges to [[_COMMUNITY_test_build.py]]
- 2 edges to [[_COMMUNITY__path_match]]
- 2 edges to [[_COMMUNITY_build_community_labels]]
- 1 edge to [[_COMMUNITY_generate]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY__max_server_contexts]]
- 1 edge to [[_COMMUNITY__communities_from_graph]]
- 1 edge to [[_COMMUNITY_test_serve_http.py]]
- 1 edge to [[_COMMUNITY_default_graph_json]]

## Top bridge nodes
- [[_build_server()]] - degree 20, connects to 11 communities
- [[test_prs.py]] - degree 24, connects to 6 communities
- [[_gh()]] - degree 8, connects to 4 communities
- [[_detect_default_branch()]] - degree 14, connects to 3 communities
- [[_parse_ci()]] - degree 12, connects to 2 communities