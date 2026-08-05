---
type: community
cohesion: 0.50
members: 4
---

# _call_pairs

**Cohesion:** 0.50 - moderately connected
**Members:** 4 nodes

## Members
- [[_call_pairs()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_emits_calls()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_emits_calls()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_emits_calls()]] - code - temp-graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_call_pairs
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_test_multilang.py]]
- 1 edge to [[_COMMUNITY_extract_js]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_extract_rust]]

## Top bridge nodes
- [[test_go_emits_calls()]] - degree 3, connects to 2 communities
- [[test_rust_emits_calls()]] - degree 3, connects to 2 communities
- [[test_ts_emits_calls()]] - degree 3, connects to 2 communities
- [[_call_pairs()]] - degree 4, connects to 1 community