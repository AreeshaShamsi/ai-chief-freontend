---
type: community
cohesion: 0.35
members: 11
---

# compute_pr_impact

**Cohesion:** 0.35 - loosely connected
**Members:** 11 nodes

## Members
- [[dot-_make_graph()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_empty_files_returns_empty()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_matching_both_files()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_matching_files_returns_correct_communities_and_count()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_no_double_counting_same_graph_file_matched_by_two_pr_files()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_no_double_counting_when_basename_matches_multiple_paths()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_no_matching_files_returns_empty()]] - code - temp-graphify/tests/test_prs.py
- [[3 nodes across 2 communities, 2 distinct source files.]] - rationale - temp-graphify/tests/test_prs.py
- [[Return (communities_touched, nodes_affected) for a set of changed files. Builds…]] - rationale - temp-graphify/graphify/prs.py
- [[TestComputePrImpact]] - code - temp-graphify/tests/test_prs.py
- [[compute_pr_impact()]] - code - temp-graphify/graphify/prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/compute_pr_impact
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_test_prs.py]]
- 3 edges to [[_COMMUNITY_Graph]]
- 2 edges to [[_COMMUNITY_prs.py]]
- 1 edge to [[_COMMUNITY__path_match]]
- 1 edge to [[_COMMUNITY_serve.py]]

## Top bridge nodes
- [[compute_pr_impact()]] - degree 12, connects to 4 communities
- [[TestComputePrImpact]] - degree 9, connects to 2 communities
- [[dot-_make_graph()]] - degree 7, connects to 1 community
- [[dot-test_no_double_counting_same_graph_file_matched_by_two_pr_files()]] - degree 3, connects to 1 community
- [[dot-test_no_double_counting_when_basename_matches_multiple_paths()]] - degree 3, connects to 1 community