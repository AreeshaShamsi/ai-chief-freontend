---
type: community
cohesion: 1.00
members: 2
---

# test_ingest_document_without_symbols_key

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Document dict without 'symbols' key is treated as empty list.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_document_without_symbols_key()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingest_document_without_symbols_key
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_ingest_document_without_symbols_key()]] - degree 3, connects to 2 communities