---
type: community
cohesion: 0.33
members: 13
---

# make_pr

**Cohesion:** 0.33 - loosely connected
**Members:** 13 nodes

## Members
- [[dot-status()]] - code - temp-graphify/graphify/prs.py
- [[dot-test_changes_req()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_ci_fail()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_draft()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_draft_not_marked_stale()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_pending()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_ready()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_stale()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_wrong_base()]] - code - temp-graphify/tests/test_prs.py
- [[Build a minimal PRInfo with sensible defaults.]] - rationale - temp-graphify/tests/test_prs.py
- [[TestClassify]] - code - temp-graphify/tests/test_prs.py
- [[_classify()]] - code - temp-graphify/graphify/prs.py
- [[make_pr()]] - code - temp-graphify/tests/test_prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/make_pr
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_prs.py]]
- 4 edges to [[_COMMUNITY_prs.py]]

## Top bridge nodes
- [[make_pr()]] - degree 13, connects to 2 communities
- [[_classify()]] - degree 11, connects to 2 communities
- [[TestClassify]] - degree 10, connects to 2 communities
- [[dot-status()]] - degree 2, connects to 1 community