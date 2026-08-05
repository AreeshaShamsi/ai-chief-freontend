---
type: community
cohesion: 0.06
members: 35
---

# Path

**Cohesion:** 0.06 - loosely connected
**Members:** 35 nodes

## Members
- [[1348 git-hook paths are repo-root-relative even when the graph root is a…]] - rationale - temp-graphify/tests/test_watch.py
- [[2056 an incremental rebuild whose change set names a file that exists but has…]] - rationale - temp-graphify/tests/test_watch.py
- [[2251 --force means accept a shrink, not overwrite a graph that could…]] - rationale - temp-graphify/tests/test_watch.py
- [[2251 an existing graph.json over GRAPHIFY_MAX_GRAPH_BYTES could not be READ,…]] - rationale - temp-graphify/tests/test_watch.py
- [[777 ``.graphify_root`` stores the user-supplied path (``.``), not the…]] - rationale - temp-graphify/tests/test_watch.py
- [[A rejected candidate keeps the marker paired with the existing graph.]] - rationale - temp-graphify/tests/test_watch.py
- [[An incremental rebuild must not treat .foo.py as a deleted live source.]] - rationale - temp-graphify/tests/test_watch.py
- [[Build a real graph for one code file, then inject two semantic nodes (no…]] - rationale - temp-graphify/tests/test_watch.py
- [[Destination-only rename reconciliation also covers AST-backed docs.]] - rationale - temp-graphify/tests/test_watch.py
- [[Detached hooks can inherit a CWD that no longer exists. Without…]] - rationale - temp-graphify/tests/test_watch.py
- [[Fail-closed eviction a file that leaves the scan corpus (newly ignored) but…]] - rationale - temp-graphify/tests/test_watch.py
- [[GRAPHIFY_REPO_ROOT lets detached hook rebuilds recover from a deleted CWD.]] - rationale - temp-graphify/tests/test_watch.py
- [[Happy-path regression for the 2251 fix a valid existing graph under the…]] - rationale - temp-graphify/tests/test_watch.py
- [[Path_115]] - code
- [[Persisted source paths keep their meaning when invocation style changes.]] - rationale - temp-graphify/tests/test_watch.py
- [[Pre-rebase subdirectory graphs stored source_file relative to watch_root.]] - rationale - temp-graphify/tests/test_watch.py
- [[The fail-closed preserve must not weaken true-deletion eviction once the…]] - rationale - temp-graphify/tests/test_watch.py
- [[_merge_changed_paths preserves first-seen order and drops dupes.]] - rationale - temp-graphify/tests/test_watch.py
- [[_seed_graph_with_semantic_layer()]] - code - temp-graphify/tests/test_watch.py
- [[test_graphify_root_preserves_relative_when_invoked_with_relative_path()]] - code - temp-graphify/tests/test_watch.py
- [[test_merge_changed_paths_dedupes_in_order()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_accepts_repo_relative_changed_path_for_subdir_root()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_deleted_cwd_uses_graphify_repo_root()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_deleted_cwd_without_repo_root_returns_false()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_does_not_update_root_marker_when_write_is_refused()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_incremental_preserves_present_non_ast_source()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_normalizes_preserved_source_paths()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_preserves_nodes_from_excluded_but_alive_file()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_prunes_legacy_watch_relative_subdir_source()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_prunes_renamed_ast_backed_document()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_still_evicts_when_excluded_file_is_also_deleted()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_subdir_survives_absolute_to_relative_invocation()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_force_does_not_clobber_unreadable_graph()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_readable_graph_still_preserves_semantic_nodes()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_refuses_overwrite_when_existing_graph_over_size_cap()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Path
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY__rebuild_code]]
- 17 edges to [[_COMMUNITY_test_watch.py]]
- 4 edges to [[_COMMUNITY_parametrize]]
- 4 edges to [[_COMMUNITY_skipif]]
- 4 edges to [[_COMMUNITY__queue_pending]]
- 1 edge to [[_COMMUNITY__write_build_config]]

## Top bridge nodes
- [[Path_115]] - degree 29, connects to 4 communities
- [[_seed_graph_with_semantic_layer()]] - degree 8, connects to 3 communities
- [[test_rebuild_force_does_not_clobber_unreadable_graph()]] - degree 5, connects to 2 communities
- [[test_rebuild_readable_graph_still_preserves_semantic_nodes()]] - degree 5, connects to 2 communities
- [[test_rebuild_refuses_overwrite_when_existing_graph_over_size_cap()]] - degree 5, connects to 2 communities