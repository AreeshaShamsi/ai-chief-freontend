---
source_file: "temp-graphify/graphify/cache.py"
type: "code"
community: "file_hash"
location: "L324"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/file_hash
---

# file_hash()

## Connections
- [[Path_3]] - `references` [EXTRACTED]
- [[SHA256 of file contents + path relative to root. Uses a stat-based fastpath…]] - `rationale_for` [EXTRACTED]
- [[_body_content()]] - `calls` [EXTRACTED]
- [[_ensure_stat_index()]] - `calls` [EXTRACTED]
- [[_normalize_path()]] - `calls` [EXTRACTED]
- [[cache.py]] - `contains` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[load_cached()]] - `calls` [EXTRACTED]
- [[save_cached()]] - `calls` [EXTRACTED]
- [[test_cache.py]] - `imports` [EXTRACTED]
- [[test_cache_hits_survive_corpus_move()]] - `calls` [EXTRACTED]
- [[test_cache_keys_stay_relative_for_out_of_cwd_corpus()]] - `calls` [EXTRACTED]
- [[test_cached_files()]] - `calls` [EXTRACTED]
- [[test_cached_files_includes_deep_namespace()]] - `calls` [EXTRACTED]
- [[test_deleted_entries_are_pruned_on_flush()]] - `calls` [EXTRACTED]
- [[test_extract_cache_location.py]] - `imports` [EXTRACTED]
- [[test_file_hash_changes()]] - `calls` [EXTRACTED]
- [[test_file_hash_consistent()]] - `calls` [EXTRACTED]
- [[test_file_hash_ignores_legacy_unsalted_entry()]] - `calls` [EXTRACTED]
- [[test_file_hash_is_order_independent_across_roots()]] - `calls` [EXTRACTED]
- [[test_legacy_absolute_index_migrates_gracefully()]] - `calls` [EXTRACTED]
- [[test_legacy_unversioned_ast_entries_not_served()]] - `calls` [EXTRACTED]
- [[test_load_cached_passes_through_legacy_absolute_source_file()]] - `calls` [EXTRACTED]
- [[test_md_body_change_different_hash()]] - `calls` [EXTRACTED]
- [[test_md_edit_above_hr_changes_hash()]] - `calls` [EXTRACTED]
- [[test_md_frontmatter_only_change_same_hash()]] - `calls` [EXTRACTED]
- [[test_md_no_frontmatter_hashed_normally()]] - `calls` [EXTRACTED]
- [[test_non_md_file_hashed_fully()]] - `calls` [EXTRACTED]
- [[test_out_of_root_key_round_trips_absolute()]] - `calls` [EXTRACTED]
- [[test_save_cached_in_root_symlink_keeps_symlink_name()]] - `calls` [EXTRACTED]
- [[test_save_cached_relativizes_source_file()]] - `calls` [EXTRACTED]
- [[test_save_semantic_cache_unscoped_preserves_dangling_refs_verbatim()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_deep_mode_roundtrip_under_deep_namespace()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_mode_none_layout_unchanged()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_out_root.py]] - `imports` [EXTRACTED]
- [[test_semantic_cache_prompt_namespaced_layout()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_and_clear_reach_fingerprint_subdirs()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_handles_deleted_file()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_keeps_live_unchanged_entries()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_removes_orphan_entries()]] - `calls` [EXTRACTED]
- [[test_semantic_prune_sweeps_both_namespaces_against_same_live_set()]] - `calls` [EXTRACTED]
- [[test_word_count_augments_existing_hash_entry()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/file_hash