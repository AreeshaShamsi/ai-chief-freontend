---
type: community
cohesion: 0.08
members: 42
---

# save_semantic_cache

**Cohesion:** 0.08 - loosely connected
**Members:** 42 nodes

## Members
- [[1715 merge_existing=True unions with the prior entry so a file split across…]] - rationale - temp-graphify/tests/test_cache.py
- [[1757 an undispatched file must keep its complete cache entry when a semantic…]] - rationale - temp-graphify/tests/test_cache.py
- [[1757 the per-chunk incremental checkpoint must not let a chunk's mis-…]] - rationale - temp-graphify/tests/test_chunking.py
- [[1916 + 1715 with merge_existing=True (the llm.py checkpoint path), only the…]] - rationale - temp-graphify/tests/test_cache.py
- [[1950 empty-parse gap a chunk that truncates to an empty parse produces NO…]] - rationale - temp-graphify/tests/test_partial_cache.py
- [[A file sliced across chunks an earlier truncated slice must not be dropped…]] - rationale - temp-graphify/tests/test_partial_cache.py
- [[A truncated file produced output this run but is left unstamped in the manifest…]] - rationale - temp-graphify/tests/test_partial_cache.py
- [[Default save_semantic_cache replaces a file's cached entry (the final,…]] - rationale - temp-graphify/tests/test_cache.py
- [[Ordering guard once a file is partial (from an empty-parse truncation, so no…]] - rationale - temp-graphify/tests/test_partial_cache.py
- [[Return cached extraction for this file if hash matches, else None. Cache key…]] - rationale - temp-graphify/graphify/cache.py
- [[Save semantic extraction results to cache, keyed by source_file. Groups nodes…]] - rationale - temp-graphify/graphify/cache.py
- [[Source files known partial those carrying a ``_partial`` item marker, plus any…]] - rationale - temp-graphify/graphify/llm.py
- [[Tag every nodeedgehyperedge in a truncated chunk result with an internal…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for partial-extraction cache promotion. A truncated LLM chunk…]] - rationale - temp-graphify/tests/test_partial_cache.py
- [[True if any nodeedgehyperedge in a per-file group carries the internal…]] - rationale - temp-graphify/graphify/cache.py
- [[_doc()]] - code - temp-graphify/tests/test_partial_cache.py
- [[_group_has_partial_marker()]] - code - temp-graphify/graphify/cache.py
- [[_mark_partial()]] - code - temp-graphify/graphify/llm.py
- [[_partial_source_files must surface a file recorded in _partial_files even when…]] - rationale - temp-graphify/tests/test_partial_cache.py
- [[_partial_source_files()]] - code - temp-graphify/graphify/llm.py
- [[load_cached()]] - code - temp-graphify/graphify/cache.py
- [[merge_existing must not union a pre-fingerprint entry into a write it is about…]] - rationale - temp-graphify/tests/test_cache.py
- [[save_semantic_cache()]] - code - temp-graphify/graphify/cache.py
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - code - temp-graphify/tests/test_chunking.py
- [[test_clean_slice_does_not_repromote_empty_parse_partial()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_group_has_partial_marker()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_intrinsic_partial_marker_makes_entry_a_cache_miss()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_mark_partial_and_partial_source_files()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_merge_existing_accumulates_slices_and_stays_partial()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_non_partial_entry_loads_normally()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_partial_cache.py]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_partial_entry_self_heals_on_complete_reextraction()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_partial_files_carries_empty_parse_truncation()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_partial_source_files_arg_stamps_entry()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_partial_source_files_empty_when_unmarked()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_save_semantic_cache_merge_existing_prunes_only_incoming()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_merge_existing_unions()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_overwrites_by_default()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_rejects_out_of_scope_source_file()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_stamps_partial_file_with_no_items()]] - code - temp-graphify/tests/test_partial_cache.py
- [[test_semantic_cache_merge_existing_never_fuses_legacy_vintage()]] - code - temp-graphify/tests/test_cache.py
- [[test_stamped_manifest_excludes_partial_files()]] - code - temp-graphify/tests/test_partial_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/save_semantic_cache
SORT file.name ASC
```

## Connections to other communities
- 27 edges to [[_COMMUNITY_test_cache.py]]
- 12 edges to [[_COMMUNITY_cache.py]]
- 9 edges to [[_COMMUNITY_test_chunking.py]]
- 8 edges to [[_COMMUNITY_test_semantic_cache_out_root.py]]
- 6 edges to [[_COMMUNITY_file_hash]]
- 6 edges to [[_COMMUNITY_cli.py]]
- 4 edges to [[_COMMUNITY_llm.py]]
- 3 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY_test_extract_cache_location.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_clear_cache]]
- 2 edges to [[_COMMUNITY__run_extract]]
- 2 edges to [[_COMMUNITY_test_stat_index_portability.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY_test_warm_cache_from_another_root_does_not_leak_that_root]]
- 1 edge to [[_COMMUNITY_test_extract_cli.py]]

## Top bridge nodes
- [[save_semantic_cache()]] - degree 56, connects to 12 communities
- [[load_cached()]] - degree 47, connects to 10 communities
- [[test_partial_cache.py]] - degree 22, connects to 4 communities
- [[_partial_source_files()]] - degree 7, connects to 3 communities
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - degree 6, connects to 2 communities