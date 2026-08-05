---
type: community
cohesion: 0.43
members: 7
---

# build_community_labels

**Cohesion:** 0.43 - moderately connected
**Members:** 7 nodes

## Members
- [[dot-test_basic_grouping()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_empty_nodes()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_no_community_field_skipped()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_top_n_capped()]] - code - temp-graphify/tests/test_prs.py
- [[Return {community_id top_labels} extracted from graph node data.]] - rationale - temp-graphify/graphify/prs.py
- [[TestBuildCommunityLabels]] - code - temp-graphify/tests/test_prs.py
- [[build_community_labels()]] - code - temp-graphify/graphify/prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build_community_labels
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_prs.py]]
- 2 edges to [[_COMMUNITY_test_prs.py]]

## Top bridge nodes
- [[build_community_labels()]] - degree 8, connects to 2 communities
- [[TestBuildCommunityLabels]] - degree 6, connects to 2 communities