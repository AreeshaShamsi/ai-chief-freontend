---
type: community
cohesion: 1.00
members: 2
---

# test_documents_field_non_list_returns_empty

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[`documents` as a non-list returns the empty result.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_documents_field_non_list_returns_empty()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_documents_field_non_list_returns_empty
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_documents_field_non_list_returns_empty()]] - degree 3, connects to 2 communities