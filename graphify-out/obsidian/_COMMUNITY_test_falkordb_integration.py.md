---
type: community
cohesion: 0.29
members: 8
---

# test_falkordb_integration.py

**Cohesion:** 0.29 - loosely connected
**Members:** 8 nodes

## Members
- [[Integration test for push_to_falkordb against a real FalkorDB instance. Runs…]] - rationale - temp-graphify/tests/test_falkordb_integration.py
- [[MERGE-based push is safe to re-run - counts must not grow.]] - rationale - temp-graphify/tests/test_falkordb_integration.py
- [[Return a connected FalkorDB client, or skip if none is reachable.]] - rationale - temp-graphify/tests/test_falkordb_integration.py
- [[_connect()]] - code - temp-graphify/tests/test_falkordb_integration.py
- [[db()]] - code - temp-graphify/tests/test_falkordb_integration.py
- [[test_falkordb_integration.py]] - code - temp-graphify/tests/test_falkordb_integration.py
- [[test_push_to_falkordb_creates_expected_graph()]] - code - temp-graphify/tests/test_falkordb_integration.py
- [[test_push_to_falkordb_is_idempotent()]] - code - temp-graphify/tests/test_falkordb_integration.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_falkordb_integrationpy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY__fixture]]

## Top bridge nodes
- [[test_push_to_falkordb_is_idempotent()]] - degree 4, connects to 2 communities
- [[test_push_to_falkordb_creates_expected_graph()]] - degree 3, connects to 2 communities
- [[test_falkordb_integration.py]] - degree 6, connects to 1 community
- [[db()]] - degree 3, connects to 1 community