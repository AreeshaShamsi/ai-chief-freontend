---
type: community
cohesion: 0.10
members: 27
---

# _find_node

**Cohesion:** 0.10 - loosely connected
**Members:** 27 nodes

## Members
- [[A graph large enough that the selectivity guard lets the fast-path fire for…]] - rationale - temp-graphify/tests/test_serve.py
- [[Character trigrams of `text`; for 3-char text the whole string is the key.]] - rationale - temp-graphify/graphify/serve.py
- [[Concatenate every field _score_nodes  _find_node match a query against, so one…]] - rationale - temp-graphify/graphify/serve.py
- [[Disable the prefilter so a call exercises the original full-node scan.]] - rationale - temp-graphify/tests/test_serve.py
- [[Lazily build and cache a trigram - node-position postings map on the graph.…]] - rationale - temp-graphify/graphify/serve.py
- [[Node IDs whose text could contain any `needle` as a substring, via the trigram…]] - rationale - temp-graphify/graphify/serve.py
- [[Return node IDs whose label or ID matches the search term (diacritic-…]] - rationale - temp-graphify/graphify/serve.py
- [[_find_node()]] - code - temp-graphify/graphify/serve.py
- [[_force_full_scan()]] - code - temp-graphify/tests/test_serve.py
- [[_get_trigram_index()]] - code - temp-graphify/graphify/serve.py
- [[_make_big_graph()]] - code - temp-graphify/tests/test_serve.py
- [[_node_search_text()]] - code - temp-graphify/graphify/serve.py
- [[_trigram_candidates()]] - code - temp-graphify/graphify/serve.py
- [[_trigrams()]] - code - temp-graphify/graphify/serve.py
- [[test_find_node_label_tokens_branch_covered_by_index()]] - code - temp-graphify/tests/test_serve.py
- [[test_find_node_matches_full_punctuated_unicode_label()]] - code - temp-graphify/tests/test_serve.py
- [[test_find_node_matches_punctuated_file_label_exactly()]] - code - temp-graphify/tests/test_serve.py
- [[test_find_node_prefilter_is_identical_to_full_scan()]] - code - temp-graphify/tests/test_serve.py
- [[test_find_node_resolves_when_label_and_norm_label_diverge()]] - code - temp-graphify/tests/test_serve.py
- [[test_find_node_source_file_path_prefers_file_level_node()]] - code - temp-graphify/tests/test_serve.py
- [[test_node_search_text_includes_all_matched_fields()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_prefilter_is_identical_to_full_scan()]] - code - temp-graphify/tests/test_serve.py
- [[test_trigram_candidates_falls_back_on_common_term()]] - code - temp-graphify/tests/test_serve.py
- [[test_trigram_candidates_falls_back_on_short_token()]] - code - temp-graphify/tests/test_serve.py
- [[test_trigram_candidates_fast_path_fires_for_rare_term()]] - code - temp-graphify/tests/test_serve.py
- [[test_trigram_index_cached_and_rebuilt_per_graph()]] - code - temp-graphify/tests/test_serve.py
- [[test_trigrams_basic()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_find_node
SORT file.name ASC
```

## Connections to other communities
- 21 edges to [[_COMMUNITY_test_serve.py]]
- 8 edges to [[_COMMUNITY_serve.py]]
- 5 edges to [[_COMMUNITY__score_nodes]]
- 4 edges to [[_COMMUNITY_Graph]]
- 2 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY__communities_from_graph]]
- 1 edge to [[_COMMUNITY__query_terms]]

## Top bridge nodes
- [[_find_node()]] - degree 15, connects to 5 communities
- [[_get_trigram_index()]] - degree 10, connects to 4 communities
- [[_trigram_candidates()]] - degree 10, connects to 3 communities
- [[_node_search_text()]] - degree 7, connects to 3 communities
- [[test_score_nodes_prefilter_is_identical_to_full_scan()]] - degree 5, connects to 3 communities