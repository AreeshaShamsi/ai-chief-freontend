---
type: community
cohesion: 0.05
members: 68
---

# _score_nodes

**Cohesion:** 0.05 - loosely connected
**Members:** 68 nodes

## Members
- [[Across many deterministic random graphs and many random multi-term queries, the…]] - rationale - temp-graphify/tests/test_serve.py
- [[Combined query scorer returning the existing ranked `(score, node_id)` list.…]] - rationale - temp-graphify/graphify/serve.py
- [[DiGraph]] - code
- [[DiGraph_2]] - code
- [[End-to-end for 1900 a German question over a graph with German heading-noise…]] - rationale - temp-graphify/tests/test_serve.py
- [[FooBarService at 1000 vs error nodes at 1.0 → only 1 seed chosen.]] - rationale - temp-graphify/tests/test_serve.py
- [[Gbest_seed_by_term are optional and default to None existing callers see…]] - rationale - temp-graphify/tests/test_serve.py
- [[Guard against a per-label multiplicity penalty leaking into _score_nodes…]] - rationale - temp-graphify/tests/test_serve.py
- [[Light wrapper that just builds a NetworkX graph from a real `graphify-…]] - rationale - temp-graphify/tests/bench_query_scoring.py
- [[Many nodes sharing one generic label (e.g. framework `GET` handlers) must…]] - rationale - temp-graphify/tests/test_serve.py
- [[Never return more than max_k seeds even when all scores are close.]] - rationale - temp-graphify/tests/test_serve.py
- [[Per-token winner the single-pass scorer records matches the legacy…]] - rationale - temp-graphify/tests/test_serve.py
- [[Pre-populate the trigram index and IDF cache so the first timed iteration…]] - rationale - temp-graphify/tests/bench_query_scoring.py
- [[Recreates the pre-refactor flow combined scoring plus one…]] - rationale - temp-graphify/tests/bench_query_scoring.py
- [[Reproduces 1445 a vague natural-language query where one term's incidental…]] - rationale - temp-graphify/tests/test_serve.py
- [[Reproducible broad-match DiGraph short constructed labels + edge noise. Labels…]] - rationale - temp-graphify/tests/bench_query_scoring.py
- [[Reproducible broad-match DiGraph short constructed labels + edge noise. Labels…_1]] - rationale - temp-graphify/tests/test_serve.py
- [[Select BFS seed nodes, stopping when score drops too far below the top.…]] - rationale - temp-graphify/graphify/serve.py
- [[Single-pass combined scorer that optionally also records the best seed for each…]] - rationale - temp-graphify/graphify/serve.py
- [[Split text into word tokens, stripping punctuation and diacritics.]] - rationale - temp-graphify/graphify/serve.py
- [[Test-only oracle for the legacy per-term `_pick_seeds(terms=...)` loop. Re-…]] - rationale - temp-graphify/tests/test_serve.py
- [[The per-term guarantee loop must honor the same per-label cap, so it can't add…]] - rationale - temp-graphify/tests/test_serve.py
- [[The seeds produced by `_pick_seeds(qs.ranked, G=G, best_seed_by_term=…]] - rationale - temp-graphify/tests/test_serve.py
- [[When all scores are within 20% of the top, keep up to 3 seeds.]] - rationale - temp-graphify/tests/test_serve.py
- [[When the trigram prefilter falls back to a full-graph scan, the single-pass…]] - rationale - temp-graphify/tests/test_serve.py
- [[_bench()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_build_random_graph()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_legacy_score_and_pick()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_legacy_traversal_count()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_load_real_graph()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_make_random_scoring_graph()]] - code - temp-graphify/tests/test_serve.py
- [[_optimized_score_and_pick()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_pick_seeds()]] - code - temp-graphify/graphify/serve.py
- [[_reference_best_seed_by_term()]] - code - temp-graphify/tests/test_serve.py
- [[_resolve_scenarios()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_row()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_run_scenario()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_score_nodes()]] - code - temp-graphify/graphify/serve.py
- [[_score_query()]] - code - temp-graphify/graphify/serve.py
- [[_search_tokens()]] - code - temp-graphify/graphify/serve.py
- [[_verify_equality()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[_warm_caches()]] - code - temp-graphify/tests/bench_query_scoring.py
- [[`GET``Get``get` are the same generic label and must dedup together.]] - rationale - temp-graphify/tests/test_serve.py
- [[`_query_graph_text` must invoke `_score_query` exactly once per query,…]] - rationale - temp-graphify/tests/test_serve.py
- [[`_score_query(..., collect_per_term_seeds=False).ranked` is the byte-for- byte…]] - rationale - temp-graphify/tests/test_serve.py
- [[`collect_per_term_seeds=False` returns empty `best_seed_by_term` and does not…]] - rationale - temp-graphify/tests/test_serve.py
- [[bench_query_scoring.py]] - code - temp-graphify/tests/bench_query_scoring.py
- [[main()_3]] - code - temp-graphify/tests/bench_query_scoring.py
- [[parametrize_25]] - code
- [[test_pick_seeds_close_scores_keeps_multiple()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_dedup_key_is_case_and_diacritic_normalized()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_dedups_homonymous_generic_labels()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_diversity_recovers_starved_term()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_dominant_identifier_gives_one_seed()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_empty()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_german_query_seeds_content_node_not_heading_noise()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_per_term_guarantee_does_not_reintroduce_generic_dupe()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_respects_max_k()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_single()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_with_optimized_best_seed_matches_legacy_semantics()]] - code - temp-graphify/tests/test_serve.py
- [[test_pick_seeds_without_diversity_args_is_unchanged()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_makes_exactly_one_score_query_call()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_scores_identical_labels_equally()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_query_best_seed_by_term_matches_legacy_singleton_scoring()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_query_collect_per_term_seeds_false_omits_tracking()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_query_matches_legacy_across_random_deterministic_graphs()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_query_matches_legacy_under_full_scan_fallback()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_query_ranked_matches_score_nodes_byte_identical()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_score_nodes
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY_test_serve.py]]
- 11 edges to [[_COMMUNITY_serve.py]]
- 7 edges to [[_COMMUNITY_Graph]]
- 5 edges to [[_COMMUNITY__find_node]]
- 3 edges to [[_COMMUNITY__query_terms]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY__write_graph]]

## Top bridge nodes
- [[_score_nodes()]] - degree 28, connects to 6 communities
- [[_score_query()]] - degree 22, connects to 4 communities
- [[_pick_seeds()]] - degree 20, connects to 3 communities
- [[bench_query_scoring.py]] - degree 19, connects to 3 communities
- [[_search_tokens()]] - degree 15, connects to 3 communities