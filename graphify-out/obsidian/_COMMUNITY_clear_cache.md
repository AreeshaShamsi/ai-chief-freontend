---
type: community
cohesion: 0.18
members: 16
---

# clear_cache

**Cohesion:** 0.18 - loosely connected
**Members:** 16 nodes

## Members
- [[A glob that stopped at the top level would leave every fingerprinted entry…]] - rationale - temp-graphify/tests/test_cache.py
- [[Count files by extension.]] - rationale - temp-graphify/tests/bench_extract.py
- [[Delete all cache entries (ast, semantic, semantic-deep, and legacy flat…]] - rationale - temp-graphify/graphify/cache.py
- [[Path_58]] - code
- [[Run extraction, return (elapsed_seconds, node_count, edge_count).]] - rationale - temp-graphify/tests/bench_extract.py
- [[_count_by_ext()]] - code - temp-graphify/tests/bench_extract.py
- [[_format_languages()]] - code - temp-graphify/tests/bench_extract.py
- [[_run_extraction()]] - code - temp-graphify/tests/bench_extract.py
- [[bench_extract.py]] - code - temp-graphify/tests/bench_extract.py
- [[clear_cache removes all .json files from graphify-outcache (all subdirs).]] - rationale - temp-graphify/tests/test_cache.py
- [[clear_cache sweeps cachesemantic-deep alongside semantic and ast.]] - rationale - temp-graphify/tests/test_cache.py
- [[clear_cache()]] - code - temp-graphify/graphify/cache.py
- [[main()_2]] - code - temp-graphify/tests/bench_extract.py
- [[test_clear_cache()]] - code - temp-graphify/tests/test_cache.py
- [[test_clear_cache_removes_deep_namespace()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_prune_and_clear_reach_fingerprint_subdirs()]] - code - temp-graphify/tests/test_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/clear_cache
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_cache.py]]
- 4 edges to [[_COMMUNITY_test_cache.py]]
- 2 edges to [[_COMMUNITY_save_semantic_cache]]
- 2 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY_collect_files]]
- 1 edge to [[_COMMUNITY_file_hash]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[bench_extract.py]] - degree 9, connects to 4 communities
- [[test_semantic_prune_and_clear_reach_fingerprint_subdirs()]] - degree 7, connects to 4 communities
- [[clear_cache()]] - degree 10, connects to 2 communities
- [[test_clear_cache()]] - degree 4, connects to 2 communities
- [[test_clear_cache_removes_deep_namespace()]] - degree 4, connects to 2 communities