---
type: community
cohesion: 1.00
members: 2
---

# test_unique_cross_document_symbol_still_resolves

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[When a target symbol is defined in exactly ONE other document, the edge still…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_unique_cross_document_symbol_still_resolves()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_unique_cross_document_symbol_still_resolves
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_unique_cross_document_symbol_still_resolves()]] - degree 3, connects to 2 communities