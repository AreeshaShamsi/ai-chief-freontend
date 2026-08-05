---
type: community
cohesion: 1.00
members: 2
---

# test_ingest_multiple_symbols_in_one_document

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Multiple symbols in a single document all become nodes.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_multiple_symbols_in_one_document()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingest_multiple_symbols_in_one_document
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_ingest_multiple_symbols_in_one_document()]] - degree 3, connects to 2 communities