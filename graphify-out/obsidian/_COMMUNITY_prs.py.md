---
type: community
cohesion: 0.19
members: 32
---

# prs.py

**Cohesion:** 0.19 - loosely connected
**Members:** 32 nodes

## Members
- [[dot-blast_radius()]] - code - temp-graphify/graphify/prs.py
- [[dot-days_old()]] - code - temp-graphify/graphify/prs.py
- [[Fetch PR file lists concurrently, compute graph impact, return community labels.]] - rationale - temp-graphify/graphify/prs.py
- [[PRInfo]] - code - temp-graphify/graphify/prs.py
- [[Pad an ANSI-colored string to visible width (strips escape codes for length…]] - rationale - temp-graphify/graphify/prs.py
- [[Path_47]] - code
- [[Return (backend, model) using GRAPHIFY_TRIAGE_BACKEND or first available key.]] - rationale - temp-graphify/graphify/prs.py
- [[Return configured model override or backend default model.]] - rationale - temp-graphify/graphify/llm.py
- [[_c()]] - code - temp-graphify/graphify/prs.py
- [[_ci_icon()]] - code - temp-graphify/graphify/prs.py
- [[_default_model_for_backend()]] - code - temp-graphify/graphify/llm.py
- [[_load_graph_json()]] - code - temp-graphify/graphify/prs.py
- [[_pad()]] - code - temp-graphify/graphify/prs.py
- [[_resolve_triage_backend()]] - code - temp-graphify/graphify/prs.py
- [[_status_color()]] - code - temp-graphify/graphify/prs.py
- [[_truncate()]] - code - temp-graphify/graphify/prs.py
- [[attach_graph_impact()]] - code - temp-graphify/graphify/prs.py
- [[bold()]] - code - temp-graphify/graphify/prs.py
- [[cmd_prs()]] - code - temp-graphify/graphify/prs.py
- [[cyan()]] - code - temp-graphify/graphify/prs.py
- [[dim()]] - code - temp-graphify/graphify/prs.py
- [[graphify prs — graph-aware PR dashboard. Fast terminal overview of open PRs…]] - rationale - temp-graphify/graphify/prs.py
- [[green()]] - code - temp-graphify/graphify/prs.py
- [[magenta()]] - code - temp-graphify/graphify/prs.py
- [[prs.py]] - code - temp-graphify/graphify/prs.py
- [[red()]] - code - temp-graphify/graphify/prs.py
- [[render_conflicts()]] - code - temp-graphify/graphify/prs.py
- [[render_dashboard()]] - code - temp-graphify/graphify/prs.py
- [[render_pr_detail()]] - code - temp-graphify/graphify/prs.py
- [[render_worktrees()]] - code - temp-graphify/graphify/prs.py
- [[triage_with_opus()]] - code - temp-graphify/graphify/prs.py
- [[yellow()]] - code - temp-graphify/graphify/prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/prspy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_prs.py]]
- 6 edges to [[_COMMUNITY_fetch_worktrees]]
- 4 edges to [[_COMMUNITY_extract_files_direct]]
- 4 edges to [[_COMMUNITY_make_pr]]
- 3 edges to [[_COMMUNITY_build_community_labels]]
- 3 edges to [[_COMMUNITY__path_match]]
- 2 edges to [[_COMMUNITY_llm.py]]
- 2 edges to [[_COMMUNITY_default_graph_json]]
- 2 edges to [[_COMMUNITY_compute_pr_impact]]
- 2 edges to [[_COMMUNITY_test_security.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_paths.py]]

## Top bridge nodes
- [[prs.py]] - degree 40, connects to 10 communities
- [[PRInfo]] - degree 22, connects to 6 communities
- [[cmd_prs()]] - degree 15, connects to 5 communities
- [[attach_graph_impact()]] - degree 9, connects to 3 communities
- [[_default_model_for_backend()]] - degree 6, connects to 2 communities