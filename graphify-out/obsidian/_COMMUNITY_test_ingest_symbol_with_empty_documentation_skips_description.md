---
type: community
cohesion: 1.00
members: 2
---

# test_ingest_symbol_with_empty_documentation_skips_description

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[When documentation0 is empty string, scip_description is omitted.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_with_empty_documentation_skips_description()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingest_symbol_with_empty_documentation_skips_description
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_ingest_symbol_with_empty_documentation_skips_description()]] - degree 3, connects to 2 communities