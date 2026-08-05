---
type: community
cohesion: 1.00
members: 2
---

# test_sql_cross_file_fk_resolves_and_never_leaks_scan_path

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[2324 a REFERENCES target defined in ANOTHER file must collapse onto the real…]] - rationale - temp-graphify/tests/test_multilang.py
- [[test_sql_cross_file_fk_resolves_and_never_leaks_scan_path()]] - code - temp-graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_sql_cross_file_fk_resolves_and_never_leaks_scan_path
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY_test_multilang.py]]

## Top bridge nodes
- [[test_sql_cross_file_fk_resolves_and_never_leaks_scan_path()]] - degree 4, connects to 3 communities