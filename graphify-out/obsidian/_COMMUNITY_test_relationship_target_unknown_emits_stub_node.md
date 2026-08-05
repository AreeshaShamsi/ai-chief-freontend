---
type: community
cohesion: 1.00
members: 2
---

# test_relationship_target_unknown_emits_stub_node

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[A relationship targeting a symbol NOT in any document creates a stub external…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_relationship_target_unknown_emits_stub_node()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_relationship_target_unknown_emits_stub_node
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]

## Top bridge nodes
- [[test_relationship_target_unknown_emits_stub_node()]] - degree 3, connects to 2 communities