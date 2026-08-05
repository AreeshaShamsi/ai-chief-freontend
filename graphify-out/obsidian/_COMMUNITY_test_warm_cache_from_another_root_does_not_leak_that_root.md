---
type: community
cohesion: 0.18
members: 11
---

# test_warm_cache_from_another_root_does_not_leak_that_root

**Cohesion:** 0.18 - loosely connected
**Members:** 11 nodes

## Members
- [[2257 extract corpus under root A (populating the cache), copy the tree AND…]] - rationale - temp-graphify/tests/test_cache.py
- [[A corpus covering every idpath carrier a cache entry can hold. Deliberately…]] - rationale - temp-graphify/tests/test_cache.py
- [[A relative ``root`` (what save_semantic_cache forwards) must not be used as an…]] - rationale - temp-graphify/tests/test_cache.py
- [[Node ids + edge endpoint pairs — the granularity 2257 is about. Deliberately…]] - rationale - temp-graphify/tests/test_cache.py
- [[Path_62]] - code
- [[The stat-index locationanchor are chosen once per process via module globals…]] - rationale - temp-graphify/tests/test_cache.py
- [[_graph_ids()]] - code - temp-graphify/tests/test_cache.py
- [[_portability_corpus()]] - code - temp-graphify/tests/test_cache.py
- [[_reset_stat_index()]] - code - temp-graphify/tests/test_cache.py
- [[test_relative_root_does_not_reanchor_an_already_canonical_id()]] - code - temp-graphify/tests/test_cache.py
- [[test_warm_cache_from_another_root_does_not_leak_that_root()]] - code - temp-graphify/tests/test_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_warm_cache_from_another_root_does_not_leak_that_root
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_cache.py]]
- 1 edge to [[_COMMUNITY_test_stat_index_portability.py]]
- 1 edge to [[_COMMUNITY_save_semantic_cache]]
- 1 edge to [[_COMMUNITY_cache.py]]

## Top bridge nodes
- [[test_relative_root_does_not_reanchor_an_already_canonical_id()]] - degree 5, connects to 3 communities
- [[test_warm_cache_from_another_root_does_not_leak_that_root()]] - degree 6, connects to 2 communities
- [[_portability_corpus()]] - degree 4, connects to 1 community
- [[_graph_ids()]] - degree 3, connects to 1 community
- [[_reset_stat_index()]] - degree 3, connects to 1 community