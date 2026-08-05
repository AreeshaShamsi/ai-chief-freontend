---
type: community
cohesion: 1.00
members: 2
---

# test_relationship_int_flag_is_ignored

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[`is_implementation 1` is truthy but not True — must not route to scip_impl.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_relationship_int_flag_is_ignored()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_relationship_int_flag_is_ignored
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_relationship_int_flag_is_ignored()]] - degree 3, connects to 2 communities