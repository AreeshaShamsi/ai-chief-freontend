---
type: community
cohesion: 1.00
members: 2
---

# test_occurrence_negative_line_falls_back_to_zero

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[An occurrence with a negative line number resolves source_location to empty.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_occurrence_negative_line_falls_back_to_zero()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_occurrence_negative_line_falls_back_to_zero
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_occurrence_negative_line_falls_back_to_zero()]] - degree 3, connects to 2 communities