---
type: community
cohesion: 0.12
members: 31
---

# test_minhash.py

**Cohesion:** 0.12 - loosely connected
**Members:** 31 nodes

## Members
- [[dot-__init__()]] - code - temp-graphify/graphify/_minhash.py
- [[dot-__init__()_1]] - code - temp-graphify/graphify/_minhash.py
- [[dot-insert()]] - code - temp-graphify/graphify/_minhash.py
- [[dot-query()]] - code - temp-graphify/graphify/_minhash.py
- [[dot-update()]] - code - temp-graphify/graphify/_minhash.py
- [[Band-hashing LSH — same API as datasketch.MinHashLSH for the subset used here.]] - rationale - temp-graphify/graphify/_minhash.py
- [[Find (bands, rows) that minimise weighted FP+FN error, without scipy.]] - rationale - temp-graphify/graphify/_minhash.py
- [[MinHash]] - code - temp-graphify/graphify/_minhash.py
- [[MinHash + band-LSH — datasketch-compatible drop-in (no scipy). datasketch.lsh…]] - rationale - temp-graphify/graphify/_minhash.py
- [[MinHash sketch — same API as datasketch.MinHash for the subset used here.]] - rationale - temp-graphify/graphify/_minhash.py
- [[MinHashLSH]] - code - temp-graphify/graphify/_minhash.py
- [[Numerical integration — replaces scipy.integrate.quad for LSH param search.]] - rationale - temp-graphify/graphify/_minhash.py
- [[Tests for graphify_minhash.py — MinHash sketch and band-LSH.]] - rationale - temp-graphify/tests/test_minhash.py
- [[_lsh_integrate()]] - code - temp-graphify/graphify/_minhash.py
- [[_mh_coeffs()]] - code - temp-graphify/graphify/_minhash.py
- [[_minhash.py]] - code - temp-graphify/graphify/_minhash.py
- [[_minhash_for()]] - code - temp-graphify/tests/test_minhash.py
- [[_optimal_lsh_params()]] - code - temp-graphify/graphify/_minhash.py
- [[ndarray]] - code
- [[test_dedup_import_does_not_pull_scipy_or_numpy_testing()]] - code - temp-graphify/tests/test_minhash.py
- [[test_duplicate_insert_raises()]] - code - temp-graphify/tests/test_minhash.py
- [[test_identical_texts_produce_identical_hashvalues()]] - code - temp-graphify/tests/test_minhash.py
- [[test_minhash.py]] - code - temp-graphify/tests/test_minhash.py
- [[test_near_duplicates_are_candidates()]] - code - temp-graphify/tests/test_minhash.py
- [[test_optimal_params_cached()]] - code - temp-graphify/tests/test_minhash.py
- [[test_optimal_params_within_budget()]] - code - temp-graphify/tests/test_minhash.py
- [[test_query_always_returns_self()]] - code - temp-graphify/tests/test_minhash.py
- [[test_similar_texts_share_most_hashvalues()]] - code - temp-graphify/tests/test_minhash.py
- [[test_unrelated_strings_not_candidates()]] - code - temp-graphify/tests/test_minhash.py
- [[test_unrelated_texts_share_few_hashvalues()]] - code - temp-graphify/tests/test_minhash.py
- [[test_update_mutates_hashvalues()]] - code - temp-graphify/tests/test_minhash.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_minhashpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_dedup.py]]
- 3 edges to [[_COMMUNITY_deduplicate_entities]]

## Top bridge nodes
- [[MinHashLSH]] - degree 13, connects to 2 communities
- [[MinHash]] - degree 12, connects to 2 communities
- [[_minhash.py]] - degree 8, connects to 1 community