---
type: community
cohesion: 0.18
members: 23
---

# test_stat_index_portability.py

**Cohesion:** 0.18 - loosely connected
**Members:** 23 nodes

## Members
- [[2197 an item whose source_file is absolute is persisted root-relative posix,…]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[2199 — stat-index.json must be portable and self-pruning. The on-disk stat…]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[A Windows-shaped absolute source_file (backslash separators) must be slash-…]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[A pre-2199 index keyed by absolute paths still HITS on the unmoved root, and…]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[Path_102]] - code
- [[Run A under tmpa, copy the corpus (with graphify-out) to tmpb run B must be…]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[The stat-index locationanchor are chosen once per process via module globals…_1]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[When an old absolute key and a new relative key resolve to the same file, the…]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[Wrap Path.read_bytes with a call counter (file_hash's content read).]] - rationale - temp-graphify/tests/test_stat_index_portability.py
- [[_count_read_bytes()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[_fail_compute()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[_flush_stat_index()]] - code - temp-graphify/graphify/cache.py
- [[_read_index()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[_reset_stat_index()_2]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[_stat_index_path()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_cache_hits_survive_corpus_move()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_deleted_entries_are_pruned_on_flush()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_legacy_absolute_index_migrates_gracefully()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_out_of_root_key_round_trips_absolute()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_relative_key_wins_over_colliding_legacy_absolute()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_semantic_cache_normalizes_absolute_source_file()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_semantic_cache_normalizes_backslash_poisoned_source_file()]] - code - temp-graphify/tests/test_stat_index_portability.py
- [[test_stat_index_portability.py]] - code - temp-graphify/tests/test_stat_index_portability.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_stat_index_portabilitypy
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_cache.py]]
- 5 edges to [[_COMMUNITY_file_hash]]
- 2 edges to [[_COMMUNITY_save_semantic_cache]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_test_warm_cache_from_another_root_does_not_leak_that_root]]
- 1 edge to [[_COMMUNITY_test_extract_cache_location.py]]
- 1 edge to [[_COMMUNITY_test_cache.py]]

## Top bridge nodes
- [[_flush_stat_index()]] - degree 10, connects to 3 communities
- [[test_stat_index_portability.py]] - degree 15, connects to 2 communities
- [[test_semantic_cache_normalizes_absolute_source_file()]] - degree 5, connects to 2 communities
- [[test_cache_hits_survive_corpus_move()]] - degree 9, connects to 1 community
- [[test_legacy_absolute_index_migrates_gracefully()]] - degree 8, connects to 1 community