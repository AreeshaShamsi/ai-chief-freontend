---
type: community
cohesion: 0.12
members: 16
---

# _make_scip_node_id

**Cohesion:** 0.12 - loosely connected
**Members:** 16 nodes

## Members
- [[Derive a stable Graphify node ID from a SCIP symbol identifier. Uses SHA-1…]] - rationale - temp-graphify/graphify/scip_ingest.py
- [[Different source_file produces different hash.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Different symbol produces different hash.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[If sanitised suffix is empty, uses just the hash.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Non-alphanumeric characters are replaced with underscores.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Same inputs always produce the same id.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Symbol with  uses suffix after last .]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Symbol without  uses the full symbol (sanitised) as suffix.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[_make_scip_node_id()]] - code - temp-graphify/graphify/scip_ingest.py
- [[test_make_scip_node_id_deterministic()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_make_scip_node_id_empty_after_sanitisation_falls_back()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_make_scip_node_id_source_file_affects_hash()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_make_scip_node_id_special_characters_are_sanitised()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_make_scip_node_id_symbol_affects_hash()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_make_scip_node_id_with_hash_separator()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_make_scip_node_id_without_hash()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_make_scip_node_id
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_scip_ingest.py]]
- 2 edges to [[_COMMUNITY_scip_ingest.py]]
- 1 edge to [[_COMMUNITY_ingest_scip_json]]

## Top bridge nodes
- [[_make_scip_node_id()]] - degree 12, connects to 3 communities
- [[test_make_scip_node_id_deterministic()]] - degree 3, connects to 1 community
- [[test_make_scip_node_id_empty_after_sanitisation_falls_back()]] - degree 3, connects to 1 community
- [[test_make_scip_node_id_source_file_affects_hash()]] - degree 3, connects to 1 community
- [[test_make_scip_node_id_special_characters_are_sanitised()]] - degree 3, connects to 1 community