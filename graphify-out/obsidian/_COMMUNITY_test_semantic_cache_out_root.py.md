---
type: community
cohesion: 0.16
members: 18
---

# test_semantic_cache_out_root.py

**Cohesion:** 0.16 - loosely connected
**Members:** 18 nodes

## Members
- [[A checkpoint saved with cache_root can be retrieved by check_semantic_cache…]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[Count .json files under a cache dir (recursively, excluding .tmp).]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[Passing root=out_root (the old broken behaviour) silently writes 0 entries; the…]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[Path_97]] - code
- [[Regression tests for 1990 and 1991. 1990 — `graphify extract --out` saves…]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[When cache_root differs from root, cache files must land under cache_root.]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[When cache_root is omitted, cache files still land under root (unchanged).]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[When root=corpus and cache_root=out, source_file resolution must use corpus as…]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[With cache_root set, no graphify-out dir should be created inside corpus.]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[_count_cache_files()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[_semantic_dir()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_checkpoint_with_cache_root_is_found_by_check_semantic_cache()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_final_save_with_out_root_populates_cache()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_final_save_with_wrong_root_emits_warning()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_save_semantic_cache_backward_compat_no_cache_root()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_save_semantic_cache_no_corpus_graphify_out_created()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_save_semantic_cache_writes_to_cache_root_not_corpus()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_semantic_cache_out_root.py]] - code - temp-graphify/tests/test_semantic_cache_out_root.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_semantic_cache_out_rootpy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_save_semantic_cache]]
- 2 edges to [[_COMMUNITY_test_cache.py]]
- 2 edges to [[_COMMUNITY_test_chunking.py]]
- 1 edge to [[_COMMUNITY_cache.py]]
- 1 edge to [[_COMMUNITY_file_hash]]

## Top bridge nodes
- [[test_semantic_cache_out_root.py]] - degree 16, connects to 5 communities
- [[test_checkpoint_with_cache_root_is_found_by_check_semantic_cache()]] - degree 4, connects to 2 communities
- [[test_final_save_with_out_root_populates_cache()]] - degree 5, connects to 1 community
- [[test_save_semantic_cache_backward_compat_no_cache_root()]] - degree 5, connects to 1 community
- [[test_save_semantic_cache_writes_to_cache_root_not_corpus()]] - degree 5, connects to 1 community