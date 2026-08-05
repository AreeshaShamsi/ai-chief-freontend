---
type: community
cohesion: 0.40
members: 5
---

# _write_build_config

**Cohesion:** 0.40 - moderately connected
**Members:** 5 nodes

## Members
- [[1886 `--exclude` recorded at extract time must survive into updatewatch…]] - rationale - temp-graphify/tests/test_watch.py
- [[Persist corpus-shaping options under ``out_dir``. Best effort and non…]] - rationale - temp-graphify/graphify/watch.py
- [[_write_build_config()]] - code - temp-graphify/graphify/watch.py
- [[test_rebuild_honors_persisted_excludes()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_honors_persisted_no_gitignore()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_write_build_config
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY__rebuild_code]]
- 3 edges to [[_COMMUNITY_test_watch.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_Path_1]]

## Top bridge nodes
- [[_write_build_config()]] - degree 8, connects to 4 communities
- [[test_rebuild_honors_persisted_no_gitignore()]] - degree 4, connects to 3 communities
- [[test_rebuild_honors_persisted_excludes()]] - degree 4, connects to 2 communities