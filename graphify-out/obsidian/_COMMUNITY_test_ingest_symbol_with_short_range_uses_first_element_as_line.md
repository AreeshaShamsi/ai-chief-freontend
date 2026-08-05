---
type: community
cohesion: 1.00
members: 2
---

# test_ingest_symbol_with_short_range_uses_first_element_as_line

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[A range list with exactly 2 elements (minimum required) sets sourceline from…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_with_short_range_uses_first_element_as_line()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingest_symbol_with_short_range_uses_first_element_as_line
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_ingest_symbol_with_short_range_uses_first_element_as_line()]] - degree 3, connects to 2 communities