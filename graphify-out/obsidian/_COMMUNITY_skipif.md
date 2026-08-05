---
type: community
cohesion: 0.11
members: 22
---

# skipif

**Cohesion:** 0.11 - loosely connected
**Members:** 22 nodes

## Members
- [[1059 after the primary rebuild, the lock-holder must loop and drain any paths…]] - rationale - temp-graphify/tests/test_watch.py
- [[1059 when the rebuild lock is held, an incremental hook must queue its…]] - rationale - temp-graphify/tests/test_watch.py
- [[Changed files under followed symlinks retain their watched lexical path.]] - rationale - temp-graphify/tests/test_watch.py
- [[End-to-end probe of the post-commit-delete bug fix. Build a tiny graph, delete…]] - rationale - temp-graphify/tests/test_watch.py
- [[GH-858 a non-blocking caller that fails to acquire the lock must not truncate…]] - rationale - temp-graphify/tests/test_watch.py
- [[GH-858 each acquisition truncates and rewrites the PID line rather than…]] - rationale - temp-graphify/tests/test_watch.py
- [[GH-858 lock file must be unlinked once the rebuild completes so downstream…]] - rationale - temp-graphify/tests/test_watch.py
- [[Per-repo advisory lock around a rebuild. Yields True if acquired, False if…]] - rationale - temp-graphify/graphify/watch.py
- [[_rebuild_lock()]] - code - temp-graphify/graphify/watch.py
- [[gh-928 .graphifyignore must be parsed exactly once at watch() startup, not per…]] - rationale - temp-graphify/tests/test_watch.py
- [[gh-928 the watch Handler must short-circuit paths matching .graphifyignore so…]] - rationale - temp-graphify/tests/test_watch.py
- [[skipif_2]] - code
- [[test_rebuild_code_drains_late_arrivals()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_incremental_rename_preserves_symlink_source_path()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_prunes_deleted_file_nodes()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_queues_on_lock_contention()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_lock_does_not_accumulate_pids_across_runs()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_lock_non_blocking_does_not_clobber_holder()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_lock_removed_after_release()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_lock_writes_pid_with_newline()]] - code - temp-graphify/tests/test_watch.py
- [[test_watch_handler_honors_graphifyignore()]] - code - temp-graphify/tests/test_watch.py
- [[test_watch_loads_graphifyignore_once()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/skipif
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_test_watch.py]]
- 6 edges to [[_COMMUNITY__rebuild_code]]
- 4 edges to [[_COMMUNITY_Path_1]]
- 1 edge to [[_COMMUNITY__queue_pending]]

## Top bridge nodes
- [[test_rebuild_code_queues_on_lock_contention()]] - degree 6, connects to 3 communities
- [[test_rebuild_code_incremental_rename_preserves_symlink_source_path()]] - degree 5, connects to 3 communities
- [[test_rebuild_code_prunes_deleted_file_nodes()]] - degree 5, connects to 3 communities
- [[_rebuild_lock()]] - degree 10, connects to 2 communities
- [[test_rebuild_code_drains_late_arrivals()]] - degree 4, connects to 2 communities