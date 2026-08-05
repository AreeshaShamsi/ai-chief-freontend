---
type: community
cohesion: 0.06
members: 54
---

# cache.py

**Cohesion:** 0.06 - loosely connected
**Members:** 54 nodes

## Members
- [[An entry for a file that no longer exists (dropped from the live set) is pruned.]] - rationale - temp-graphify/tests/test_cache.py
- [[Apply ``fn`` to every string VALUE reachable in ``obj``, in place. Values only,…]] - rationale - temp-graphify/graphify/cache.py
- [[Changing a file's content leaves the old content-hash entry orphaned; pruning…]] - rationale - temp-graphify/tests/test_cache.py
- [[Fingerprint the caller's extraction prompt, or None when it supplied none.…]] - rationale - temp-graphify/graphify/cache.py
- [[Inverse of func`_relativize_ids_in` — re-anchor to the current root. The…]] - rationale - temp-graphify/graphify/cache.py
- [[Inverse of func`_relativize_source_files_in`. Re-anchor relative…]] - rationale - temp-graphify/graphify/cache.py
- [[Inverse of func`_stat_key_to_relative`. Re-anchor a stored relative key…]] - rationale - temp-graphify/graphify/cache.py
- [[Mutate ``payload`` to rewrite absolute ``source_file`` fields as forward-slash…]] - rationale - temp-graphify/graphify/cache.py
- [[Path_3]] - code
- [[Prune touches only cachesemantic.json AST entries and atomic-write .tmp…]] - rationale - temp-graphify/tests/test_cache.py
- [[Pruning against the FULL live set must keep every live entry — guards the trap…]] - rationale - temp-graphify/tests/test_cache.py
- [[Remove AST cache entries left behind by other graphify versions. Sweeps sibling…]] - rationale - temp-graphify/graphify/cache.py
- [[Remove orphaned semantic cache entries, returning the count pruned. The…]] - rationale - temp-graphify/graphify/cache.py
- [[Replace the absolute root inside every stored id  path with the marker. Walks…]] - rationale - temp-graphify/graphify/cache.py
- [[Return ``key`` as a forward-slash relative path from ``anchor``. Local…]] - rationale - temp-graphify/graphify/cache.py
- [[Return ``src`` in portable form backslashes flipped to forward slashes, then…]] - rationale - temp-graphify/graphify/cache.py
- [[Return set of file hashes that have a valid cache entry (any kind).]] - rationale - temp-graphify/graphify/cache.py
- [[Return the id-slug prefix ``path_str`` contributes above ``rel_str``.…]] - rationale - temp-graphify/graphify/cache.py
- [[Returns the cache directory for ``kind`` - creates it if needed. kind is ast,…]] - rationale - temp-graphify/graphify/cache.py
- [[Root forms to strip from  restore into one cache entry (2257). Returns…]] - rationale - temp-graphify/graphify/cache.py
- [[Save extraction result for this file. Stores as graphify-…]] - rationale - temp-graphify/graphify/cache.py
- [[The on-disk cache JSON contains forward-slash relative source_file entries — no…]] - rationale - temp-graphify/tests/test_cache.py
- [[The semantic cache is deliberately not versioned entries are produced by the…]] - rationale - temp-graphify/tests/test_cache.py
- [[Upgrading removes AST entries left behind by previous versions so the cache…]] - rationale - temp-graphify/tests/test_cache.py
- [[_absolutize_ids_in()]] - code - temp-graphify/graphify/cache.py
- [[_absolutize_source_files_in()]] - code - temp-graphify/graphify/cache.py
- [[_cleanup_stale_ast_entries()]] - code - temp-graphify/graphify/cache.py
- [[_ensure_stat_index()]] - code - temp-graphify/graphify/cache.py
- [[_id_anchor()]] - code - temp-graphify/graphify/cache.py
- [[_normalize_source_file_value()]] - code - temp-graphify/graphify/cache.py
- [[_portability_anchors()]] - code - temp-graphify/graphify/cache.py
- [[_relativize_ids_in()]] - code - temp-graphify/graphify/cache.py
- [[_relativize_source_files_in()]] - code - temp-graphify/graphify/cache.py
- [[_resolve_prompt_fp()]] - code - temp-graphify/graphify/cache.py
- [[_rewrite_strings()]] - code - temp-graphify/graphify/cache.py
- [[_stat_index_file()]] - code - temp-graphify/graphify/cache.py
- [[_stat_key_to_absolute()]] - code - temp-graphify/graphify/cache.py
- [[_stat_key_to_relative()]] - code - temp-graphify/graphify/cache.py
- [[``source_file`` for an in-root symlink must be stored under the symlink's own…]] - rationale - temp-graphify/tests/test_cache.py
- [[cache.py]] - code - temp-graphify/graphify/cache.py
- [[cache_dir()]] - code - temp-graphify/graphify/cache.py
- [[cached_files returns the set of cached hashes.]] - rationale - temp-graphify/tests/test_cache.py
- [[cached_files()]] - code - temp-graphify/graphify/cache.py
- [[prune_semantic_cache()]] - code - temp-graphify/graphify/cache.py
- [[save_cached()]] - code - temp-graphify/graphify/cache.py
- [[test_ast_cache_version_bump_cleans_stale_entries()]] - code - temp-graphify/tests/test_cache.py
- [[test_cached_files()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_cached_in_root_symlink_keeps_symlink_name()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_cached_relativizes_source_file()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_survives_version_bump()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_prune_handles_deleted_file()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_prune_ignores_ast_and_tmp()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_prune_keeps_live_unchanged_entries()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_prune_removes_orphan_entries()]] - code - temp-graphify/tests/test_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/cachepy
SORT file.name ASC
```

## Connections to other communities
- 25 edges to [[_COMMUNITY_test_cache.py]]
- 20 edges to [[_COMMUNITY_file_hash]]
- 12 edges to [[_COMMUNITY_save_semantic_cache]]
- 6 edges to [[_COMMUNITY_clear_cache]]
- 6 edges to [[_COMMUNITY_test_stat_index_portability.py]]
- 3 edges to [[_COMMUNITY_make_id]]
- 2 edges to [[_COMMUNITY_detect.py]]
- 2 edges to [[_COMMUNITY_extract.py]]
- 2 edges to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_test_extract_cache_location.py]]
- 1 edge to [[_COMMUNITY_test_semantic_cache_out_root.py]]
- 1 edge to [[_COMMUNITY_test_warm_cache_from_another_root_does_not_leak_that_root]]
- 1 edge to [[_COMMUNITY_test_detect.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[cache.py]] - degree 40, connects to 11 communities
- [[save_cached()]] - degree 32, connects to 9 communities
- [[prune_semantic_cache()]] - degree 12, connects to 5 communities
- [[Path_3]] - degree 23, connects to 4 communities
- [[cache_dir()]] - degree 17, connects to 3 communities