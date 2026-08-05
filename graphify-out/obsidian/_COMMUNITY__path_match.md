---
type: community
cohesion: 0.43
members: 7
---

# _path_match

**Cohesion:** 0.43 - moderately connected
**Members:** 7 nodes

## Members
- [[dot-test_both_directions_work()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_exact_match()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_graph_path_longer_with_boundary()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_no_false_positive_on_partial_filename()]] - code - temp-graphify/tests/test_prs.py
- [[TestPathMatch]] - code - temp-graphify/tests/test_prs.py
- [[True if graph_src and pr_file refer to the same file (path-boundary safe).]] - rationale - temp-graphify/graphify/prs.py
- [[_path_match()]] - code - temp-graphify/graphify/prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_path_match
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_prs.py]]
- 2 edges to [[_COMMUNITY_test_prs.py]]
- 1 edge to [[_COMMUNITY_compute_pr_impact]]

## Top bridge nodes
- [[_path_match()]] - degree 9, connects to 3 communities
- [[TestPathMatch]] - degree 6, connects to 2 communities