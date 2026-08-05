---
type: community
cohesion: 0.08
members: 36
---

# test_dedup.py

**Cohesion:** 0.08 - loosely connected
**Members:** 36 nodes

## Members
- [[1851 definer + same-file relabel + cross-file reference. Across every…]] - rationale - temp-graphify/tests/test_dedup.py
- [[2182 determinism, 17532074 precedent the survivor must not depend on…]] - rationale - temp-graphify/tests/test_dedup.py
- [[A cross-reference rewires silently without importing foreign-file metadata.]] - rationale - temp-graphify/tests/test_dedup.py
- [[Chip SKU variants (ASR1603 vs ASR1605) must not be merged (878).]] - rationale - temp-graphify/tests/test_dedup.py
- [[Cross-file labels sharing a long prefix but diverging in a distinguishing token…]] - rationale - temp-graphify/tests/test_dedup.py
- [[M1 vs M1 Pro must not merge (878).]] - rationale - temp-graphify/tests/test_dedup.py
- [[Short labels differing by an insertion (cranel vs cranelr) must not merge…]] - rationale - temp-graphify/tests/test_dedup.py
- [[Tests for graphifydedup.py entity deduplication pipeline.]] - rationale - temp-graphify/tests/test_dedup.py
- [[The cross-repo guard is untouched by 2182 identical concepts from different…]] - rationale - temp-graphify/tests/test_dedup.py
- [[The file-anchored guard only blocks cross-file pairs — near-identical rationale…]] - rationale - temp-graphify/tests/test_dedup.py
- [[When two nodes share both ID and source_file (same-file dedup), no collision…]] - rationale - temp-graphify/tests/test_dedup.py
- [[_make_edges()]] - code - temp-graphify/tests/test_dedup.py
- [[_make_nodes()]] - code - temp-graphify/tests/test_dedup.py
- [[_numeric_tokens_differ compares digit runs as zero-padding-insensitive…]] - rationale - temp-graphify/tests/test_dedup.py
- [[deduplicate_entities accepts dedup_llm_backend without crashing when no…]] - rationale - temp-graphify/tests/test_dedup.py
- [[test_collision_survivor_is_order_independent()]] - code - temp-graphify/tests/test_dedup.py
- [[test_community_boost_aids_merge()]] - code - temp-graphify/tests/test_dedup.py
- [[test_cross_repo_guard_still_raises()]] - code - temp-graphify/tests/test_dedup.py
- [[test_crossfile_concept_merge_deterministic_across_hash_seeds()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup.py]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_does_not_merge_crossfile_shared_prefix_divergence()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_does_not_merge_model_with_suffix()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_does_not_merge_numeric_variants()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_does_not_merge_short_insertion_variants()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_llm_flag_accepted()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_still_merges_samefile_rationale_duplicates()]] - code - temp-graphify/tests/test_dedup.py
- [[test_edges_rewired_after_merge()]] - code - temp-graphify/tests/test_dedup.py
- [[test_exact_duplicates_merged()]] - code - temp-graphify/tests/test_dedup.py
- [[test_numeric_tokens_differ_helper()]] - code - temp-graphify/tests/test_dedup.py
- [[test_reference_collision_is_silent()]] - code - temp-graphify/tests/test_dedup.py
- [[test_same_id_same_source_file_no_warning()]] - code - temp-graphify/tests/test_dedup.py
- [[test_self_loops_dropped_after_merge()]] - code - temp-graphify/tests/test_dedup.py
- [[test_short_low_entropy_not_merged()]] - code - temp-graphify/tests/test_dedup.py
- [[test_single_node_no_crash()]] - code - temp-graphify/tests/test_dedup.py
- [[test_typo_merged()]] - code - temp-graphify/tests/test_dedup.py
- [[test_unrelated_not_merged()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_deduppy
SORT file.name ASC
```

## Connections to other communities
- 33 edges to [[_COMMUNITY_deduplicate_entities]]
- 7 edges to [[_COMMUNITY_dedup.py]]
- 7 edges to [[_COMMUNITY__norm]]
- 4 edges to [[_COMMUNITY__is_variant_pair]]
- 3 edges to [[_COMMUNITY_build]]
- 3 edges to [[_COMMUNITY_test_crossfile_identical_labels_stay_distinct_for_guarded_types]]
- 1 edge to [[_COMMUNITY_test_cross_chunk_id_collision_emits_warning]]
- 1 edge to [[_COMMUNITY_test_cross_file_id_collision_does_not_mix_attributes]]
- 1 edge to [[_COMMUNITY_test_crossfile_one_char_typo_concepts_still_merge]]
- 1 edge to [[_COMMUNITY_test_dedup_does_not_merge_crossfile_document_headings]]
- 1 edge to [[_COMMUNITY_test_dedup_fills_explicit_none_attribute]]
- 1 edge to [[_COMMUNITY_test_dedup_still_merges_crossfile_true_duplicates]]
- 1 edge to [[_COMMUNITY_test_dedup_summary_prints_fuzzy_count_when_no_exact_merges]]
- 1 edge to [[_COMMUNITY_test_dedup_survivor_does_not_inherit_false_origin_ast]]
- 1 edge to [[_COMMUNITY_test_pass2_winner_union_does_not_pull_in_uncompared_same_label_nodes]]

## Top bridge nodes
- [[test_dedup.py]] - degree 70, connects to 15 communities
- [[test_dedup_does_not_merge_model_with_suffix()]] - degree 4, connects to 1 community
- [[test_dedup_does_not_merge_numeric_variants()]] - degree 4, connects to 1 community
- [[test_dedup_does_not_merge_short_insertion_variants()]] - degree 4, connects to 1 community
- [[test_dedup_llm_flag_accepted()]] - degree 4, connects to 1 community