---
type: community
cohesion: 1.00
members: 2
---

# test_ingest_symbol_without_kind_defaults_to_unknown

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[When kind is missing, metadata uses 'unknown'.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_kind_defaults_to_unknown()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingest_symbol_without_kind_defaults_to_unknown
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_ingest_symbol_without_kind_defaults_to_unknown()]] - degree 3, connects to 2 communities