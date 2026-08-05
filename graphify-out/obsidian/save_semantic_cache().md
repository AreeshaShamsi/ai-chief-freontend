---
source_file: "temp-graphify/graphify/cache.py"
type: "code"
community: "save_semantic_cache"
location: "L1111"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/save_semantic_cache
---

# save_semantic_cache()

## Connections
- [[Path_3]] - `references` [EXTRACTED]
- [[Save semantic extraction results to cache, keyed by source_file. Groups nodes…]] - `rationale_for` [EXTRACTED]
- [[_group_has_partial_marker()]] - `calls` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[extract_corpus_parallel()]] - `calls` [EXTRACTED]
- [[llm.py]] - `imports` [EXTRACTED]
- [[load_cached()]] - `calls` [EXTRACTED]
- [[save_cached()]] - `calls` [EXTRACTED]
- [[test_cache.py]] - `imports` [EXTRACTED]
- [[test_cache_check_mode_deep_reads_deep_namespace()]] - `calls` [EXTRACTED]
- [[test_cache_check_prompt_file_scopes_hits_to_that_prompt()]] - `calls` [EXTRACTED]
- [[test_cached_files_includes_deep_namespace()]] - `calls` [EXTRACTED]
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - `calls` [EXTRACTED]
- [[test_checkpoint_with_cache_root_is_found_by_check_semantic_cache()]] - `calls` [EXTRACTED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[test_clean_slice_does_not_repromote_empty_parse_partial()]] - `calls` [EXTRACTED]
- [[test_clear_cache_removes_deep_namespace()]] - `calls` [EXTRACTED]
- [[test_extract_cli.py]] - `imports` [EXTRACTED]
- [[test_final_save_with_out_root_populates_cache()]] - `calls` [EXTRACTED]
- [[test_final_save_with_wrong_root_emits_warning()]] - `calls` [EXTRACTED]
- [[test_intrinsic_partial_marker_makes_entry_a_cache_miss()]] - `calls` [EXTRACTED]
- [[test_merge_existing_accumulates_slices_and_stays_partial()]] - `calls` [EXTRACTED]
- [[test_non_partial_entry_loads_normally()]] - `calls` [EXTRACTED]
- [[test_partial_cache.py]] - `imports` [EXTRACTED]
- [[test_partial_entry_self_heals_on_complete_reextraction()]] - `calls` [EXTRACTED]
- [[test_partial_source_files_arg_stamps_entry()]] - `calls` [EXTRACTED]
- [[test_prompt_file_reflects_edited_spec()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_backward_compat_no_cache_root()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_drops_edges_to_ghost_file_nodes()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_drops_edges_to_out_of_scope_nodes()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_drops_hyperedges_touching_skipped_nodes()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_merge_existing_prunes_only_incoming()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_merge_existing_unions()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_no_corpus_graphify_out_created()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_overwrites_by_default()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_rejects_out_of_scope_source_file()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_unscoped_preserves_dangling_refs_verbatim()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_writes_to_cache_root_not_corpus()]] - `calls` [EXTRACTED]
- [[test_save_stamps_partial_file_with_no_items()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_deep_invisible_to_plain_reads_and_vice_versa()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_deep_mode_roundtrip_under_deep_namespace()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_fingerprinted_entry_beats_legacy()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_legacy_entries_served_with_warning()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_merge_existing_never_fuses_legacy_vintage()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_mode_none_layout_unchanged()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_normalizes_absolute_source_file()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_normalizes_backslash_poisoned_source_file()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_out_root.py]] - `imports` [EXTRACTED]
- [[test_semantic_cache_prompt_and_mode_compose()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_prompt_change_invalidates()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_prompt_namespaced_layout()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_unreadable_prompt_file_warns_and_falls_back()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_and_clear_reach_fingerprint_subdirs()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_sweeps_both_namespaces_against_same_live_set()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/save_semantic_cache