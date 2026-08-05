---
type: community
cohesion: 0.11
members: 18
---

# backup_if_protected

**Cohesion:** 0.11 - loosely connected
**Members:** 18 nodes

## Members
- [[All-default labels → no backup (not curated).]] - rationale - temp-graphify/tests/test_export.py
- [[Changed graph.json on same day overwrites the existing backup in place.]] - rationale - temp-graphify/tests/test_export.py
- [[GRAPHIFY_NO_BACKUP=1 disables backup entirely.]] - rationale - temp-graphify/tests/test_export.py
- [[No graph.json → no backup.]] - rationale - temp-graphify/tests/test_export.py
- [[Same content on same day returns existing backup dir without re-copying.]] - rationale - temp-graphify/tests/test_export.py
- [[Snapshot graph artifacts to a dated subfolder before an overwrite. Triggers…]] - rationale - temp-graphify/graphify/export.py
- [[backup_if_protected()]] - code - temp-graphify/graphify/export.py
- [[graph.json + .graphify_semantic_marker → backup taken.]] - rationale - temp-graphify/tests/test_export.py
- [[graph.json + non-default label in .graphify_labels.json → backup taken.]] - rationale - temp-graphify/tests/test_export.py
- [[graph.json present but no sentinel and no curated labels → no backup.]] - rationale - temp-graphify/tests/test_export.py
- [[test_backup_curated_labels()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_default_labels_only()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_env_disable()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_no_graph_json()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_no_markers()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_same_day_changed_content()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_same_day_no_accumulation()]] - code - temp-graphify/tests/test_export.py
- [[test_backup_semantic_marker()]] - code - temp-graphify/tests/test_export.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/backup_if_protected
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_test_export.py]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_to_json]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[backup_if_protected()]] - degree 17, connects to 5 communities
- [[test_backup_curated_labels()]] - degree 3, connects to 1 community
- [[test_backup_default_labels_only()]] - degree 3, connects to 1 community
- [[test_backup_env_disable()]] - degree 3, connects to 1 community
- [[test_backup_no_graph_json()]] - degree 3, connects to 1 community