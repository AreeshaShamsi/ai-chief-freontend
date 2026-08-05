---
type: community
cohesion: 1.00
members: 2
---

# test_barrel_reexport_emits_imports_from

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Barrel file must emit file-level imports_from edges to source modules.]] - rationale - temp-graphify/tests/test_extract.py
- [[test_barrel_reexport_emits_imports_from()]] - code - temp-graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_barrel_reexport_emits_imports_from
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_extract_js]]
- 1 edge to [[_COMMUNITY_test_extract.py]]

## Top bridge nodes
- [[test_barrel_reexport_emits_imports_from()]] - degree 3, connects to 2 communities