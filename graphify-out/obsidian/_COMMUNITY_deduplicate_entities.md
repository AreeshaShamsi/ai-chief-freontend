---
type: community
cohesion: 0.07
members: 38
---

# deduplicate_entities

**Cohesion:** 0.07 - loosely connected
**Members:** 38 nodes

## Members
- [[(fix A) With 3+ same-ID same-source records, the merged attributes must not…]] - rationale - temp-graphify/tests/test_dedup.py
- [[(fix B) Two provenance-less records sharing an ID must NOT cross-pollinate…]] - rationale - temp-graphify/tests/test_dedup.py
- [[dot-__init__()_4]] - code - temp-graphify/graphify/dedup.py
- [[dot-components()]] - code - temp-graphify/graphify/dedup.py
- [[dot-find()]] - code - temp-graphify/graphify/dedup.py
- [[dot-union()]] - code - temp-graphify/graphify/dedup.py
- [[Batch-resolve ambiguous pairs (score in low, high)) via LLM.]] - rationale - temp-graphify/graphify/dedup.py
- [[Block label-based merging of file-anchored non-code nodes across files (1284).…]] - rationale - temp-graphify/graphify/dedup.py
- [[Deduplicate near-identical entities in a knowledge graph. Args nodes list of…]] - rationale - temp-graphify/graphify/dedup.py
- [[Distinct symbols whose name is a strict prefix-extension of another must not be…]] - rationale - temp-graphify/tests/test_dedup.py
- [[Exact cross-file matches and a punctuation variant collapse to one survivor…]] - rationale - temp-graphify/tests/test_dedup.py
- [[Long labels differing only in embedded numbers (ADRsectionissue ids) must not…]] - rationale - temp-graphify/tests/test_dedup.py
- [[Non-regression an exact-only run still prints `(N exact)` and no fuzzy.]] - rationale - temp-graphify/tests/test_dedup.py
- [[Pick the canonical survivor prefer no chunk suffix, then shorter ID.]] - rationale - temp-graphify/graphify/dedup.py
- [[Rationale nodes are file-anchored like code (1205) parallel modules'…]] - rationale - temp-graphify/tests/test_dedup.py
- [[Three identical-norm concepts across three files every input order must yield…]] - rationale - temp-graphify/tests/test_dedup.py
- [[True when two labels carry different embedded numbers (1284). Long labels that…]] - rationale - temp-graphify/graphify/dedup.py
- [[Two `concept` nodes whose labels are byte-identical after _norm() but live in…]] - rationale - temp-graphify/tests/test_dedup.py
- [[Two labels for one ID from one file the loser's label is discarded, which is…]] - rationale - temp-graphify/tests/test_dedup.py
- [[_UF]] - code - temp-graphify/graphify/dedup.py
- [[_crossfile_fileanchored_blocked()]] - code - temp-graphify/graphify/dedup.py
- [[_llm_tiebreak()]] - code - temp-graphify/graphify/dedup.py
- [[_numeric_tokens_differ()]] - code - temp-graphify/graphify/dedup.py
- [[_pick_winner()]] - code - temp-graphify/graphify/dedup.py
- [[deduplicate_entities()]] - code - temp-graphify/graphify/dedup.py
- [[source_file is absolute in some pipelines and repo-relative in others; the…]] - rationale - temp-graphify/tests/test_dedup.py
- [[test_absolute_source_path_still_defines_id()]] - code - temp-graphify/tests/test_dedup.py
- [[test_crossfile_concept_merge_is_order_independent()]] - code - temp-graphify/tests/test_dedup.py
- [[test_crossfile_concept_merge_is_transitive()]] - code - temp-graphify/tests/test_dedup.py
- [[test_crossfile_identical_concepts_merge_and_rewire()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_does_not_merge_crossfile_rationale_boilerplate()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_does_not_merge_numbered_siblings()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_gapfill_is_order_independent_with_multiple_losers()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_no_attribute_merge_when_source_file_missing()]] - code - temp-graphify/tests/test_dedup.py
- [[test_dedup_summary_still_reports_exact_only()]] - code - temp-graphify/tests/test_dedup.py
- [[test_empty_inputs()]] - code - temp-graphify/tests/test_dedup.py
- [[test_prefix_extension_symbols_not_merged()]] - code - temp-graphify/tests/test_dedup.py
- [[test_same_file_relabel_is_noted()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/deduplicate_entities
SORT file.name ASC
```

## Connections to other communities
- 33 edges to [[_COMMUNITY_test_dedup.py]]
- 12 edges to [[_COMMUNITY_dedup.py]]
- 4 edges to [[_COMMUNITY__is_variant_pair]]
- 4 edges to [[_COMMUNITY_dispatch_command]]
- 3 edges to [[_COMMUNITY_test_minhash.py]]
- 3 edges to [[_COMMUNITY__norm]]
- 3 edges to [[_COMMUNITY_test_crossfile_identical_labels_stay_distinct_for_guarded_types]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_build]]
- 1 edge to [[_COMMUNITY_test_cross_chunk_id_collision_emits_warning]]
- 1 edge to [[_COMMUNITY_test_cross_file_id_collision_does_not_mix_attributes]]
- 1 edge to [[_COMMUNITY_test_crossfile_one_char_typo_concepts_still_merge]]
- 1 edge to [[_COMMUNITY_test_dedup_does_not_merge_crossfile_document_headings]]
- 1 edge to [[_COMMUNITY_test_dedup_fills_explicit_none_attribute]]
- 1 edge to [[_COMMUNITY_test_dedup_still_merges_crossfile_true_duplicates]]
- 1 edge to [[_COMMUNITY_test_dedup_summary_prints_fuzzy_count_when_no_exact_merges]]
- 1 edge to [[_COMMUNITY_test_dedup_survivor_does_not_inherit_false_origin_ast]]
- 1 edge to [[_COMMUNITY_test_pass2_winner_union_does_not_pull_in_uncompared_same_label_nodes]]
- 1 edge to [[_COMMUNITY_llm.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_extract_files_direct]]

## Top bridge nodes
- [[deduplicate_entities()]] - degree 70, connects to 18 communities
- [[_llm_tiebreak()]] - degree 15, connects to 6 communities
- [[_UF]] - degree 9, connects to 2 communities
- [[_numeric_tokens_differ()]] - degree 6, connects to 2 communities
- [[_crossfile_fileanchored_blocked()]] - degree 4, connects to 1 community