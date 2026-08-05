---
source_file: "temp-graphify/graphify/cache.py"
type: "code"
community: "save_semantic_cache"
location: "L772"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/save_semantic_cache
---

# load_cached()

## Connections
- [[Path_3]] - `references` [EXTRACTED]
- [[Return cached extraction for this file if hash matches, else None. Cache key…]] - `rationale_for` [EXTRACTED]
- [[_absolutize_ids_in()]] - `calls` [EXTRACTED]
- [[_absolutize_source_files_in()]] - `calls` [EXTRACTED]
- [[_extract_single_file()]] - `calls` [EXTRACTED]
- [[_resolve_prompt_fp()]] - `calls` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[cache_dir()]] - `calls` [EXTRACTED]
- [[check_semantic_cache()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `imports` [EXTRACTED]
- [[file_hash()]] - `calls` [EXTRACTED]
- [[save_semantic_cache()]] - `calls` [EXTRACTED]
- [[test_ast_cache_invalidated_on_version_bump()]] - `calls` [EXTRACTED]
- [[test_cache.py]] - `imports` [EXTRACTED]
- [[test_cache_miss_on_change()]] - `calls` [EXTRACTED]
- [[test_cache_portable_across_roots()]] - `calls` [EXTRACTED]
- [[test_cache_roundtrip()]] - `calls` [EXTRACTED]
- [[test_cached_ids_round_trip_under_the_same_root()]] - `calls` [EXTRACTED]
- [[test_checkpoint_caches_sliced_document_chunks()]] - `calls` [EXTRACTED]
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - `calls` [EXTRACTED]
- [[test_checkpoint_writes_deep_namespace_in_deep_mode()]] - `calls` [EXTRACTED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[test_clean_slice_does_not_repromote_empty_parse_partial()]] - `calls` [EXTRACTED]
- [[test_default_cache_round_trips_via_extract()]] - `calls` [EXTRACTED]
- [[test_extract_cache_location.py]] - `imports` [EXTRACTED]
- [[test_intrinsic_partial_marker_makes_entry_a_cache_miss()]] - `calls` [EXTRACTED]
- [[test_legacy_unversioned_ast_entries_not_served()]] - `calls` [EXTRACTED]
- [[test_load_cached_absolutizes_source_file()]] - `calls` [EXTRACTED]
- [[test_load_cached_passes_through_legacy_absolute_source_file()]] - `calls` [EXTRACTED]
- [[test_merge_existing_accumulates_slices_and_stays_partial()]] - `calls` [EXTRACTED]
- [[test_non_partial_entry_loads_normally()]] - `calls` [EXTRACTED]
- [[test_normal_file_still_cached()]] - `calls` [EXTRACTED]
- [[test_partial_cache.py]] - `imports` [EXTRACTED]
- [[test_partial_entry_self_heals_on_complete_reextraction()]] - `calls` [EXTRACTED]
- [[test_partial_source_files_arg_stamps_entry()]] - `calls` [EXTRACTED]
- [[test_relative_root_does_not_reanchor_an_already_canonical_id()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_merge_existing_prunes_only_incoming()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_merge_existing_unions()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_overwrites_by_default()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_rejects_out_of_scope_source_file()]] - `calls` [EXTRACTED]
- [[test_save_stamps_partial_file_with_no_items()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_merge_existing_never_fuses_legacy_vintage()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_out_root.py]] - `imports` [EXTRACTED]
- [[test_semantic_cache_survives_version_bump()]] - `calls` [EXTRACTED]
- [[test_truncated_chunk_is_cached_partial_and_missed_on_reload()]] - `calls` [EXTRACTED]
- [[test_zero_node_no_cache.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/save_semantic_cache