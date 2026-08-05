---
type: community
cohesion: 1.00
members: 2
---

# test_ingest_edge_with_zero_sourceline_has_empty_location

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[When sourceline is 0, source_location on edge is empty string.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_edge_with_zero_sourceline_has_empty_location()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingest_edge_with_zero_sourceline_has_empty_location
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_ingest_edge_with_zero_sourceline_has_empty_location()]] - degree 3, connects to 2 communities