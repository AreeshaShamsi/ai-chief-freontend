---
source_file: "temp-graphify/graphify/detect.py"
type: "code"
community: "detect.py"
location: "L1630"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/detectpy
---

# save_manifest()

## Connections
- [[Path_7]] - `references` [EXTRACTED]
- [[Save current file mtimes + content hashes for change detection. kind=ast —…]] - `rationale_for` [EXTRACTED]
- [[_nfc()]] - `calls` [EXTRACTED]
- [[_rebuild_code()]] - `calls` [EXTRACTED]
- [[_stat_and_hash()]] - `indirect_call` [INFERRED]
- [[_to_relative_for_storage()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[load_manifest()]] - `calls` [EXTRACTED]
- [[manifest.py]] - `imports` [EXTRACTED]
- [[test_atomic_writes.py]] - `imports` [EXTRACTED]
- [[test_detect.py]] - `imports` [EXTRACTED]
- [[test_detect_incremental_exclusion_stable_across_runs()]] - `calls` [EXTRACTED]
- [[test_detect_incremental_portable_across_paths()]] - `calls` [EXTRACTED]
- [[test_detect_incremental_propagates_follow_symlinks()]] - `calls` [EXTRACTED]
- [[test_detect_incremental_reports_excluded_not_deleted()]] - `calls` [EXTRACTED]
- [[test_detect_incremental_still_reports_real_deletions()]] - `calls` [EXTRACTED]
- [[test_manifest_nfc_keys_legacy_absolute()]] - `calls` [EXTRACTED]
- [[test_manifest_nfc_keys_survive_macos_path_forms()]] - `calls` [EXTRACTED]
- [[test_save_manifest_clear_semantic_erases_stale_hash_for_omitted_file()]] - `calls` [EXTRACTED]
- [[test_save_manifest_full_scan_keeps_out_of_root_rows()]] - `calls` [EXTRACTED]
- [[test_save_manifest_full_scan_prunes_excluded_but_alive_row()]] - `calls` [EXTRACTED]
- [[test_save_manifest_full_scan_still_prunes_missing_file()]] - `calls` [EXTRACTED]
- [[test_save_manifest_in_root_symlink_roundtrips()]] - `calls` [EXTRACTED]
- [[test_save_manifest_out_of_root_keeps_absolute()]] - `calls` [EXTRACTED]
- [[test_save_manifest_relativizes_keys_when_root_given()]] - `calls` [EXTRACTED]
- [[test_save_manifest_skips_semantic_hash_for_files_without_cache()]] - `calls` [EXTRACTED]
- [[test_save_manifest_subset_save_preserves_untouched_rows()]] - `calls` [EXTRACTED]
- [[test_save_manifest_without_filter_unchanged_for_code()]] - `calls` [EXTRACTED]
- [[test_save_manifest_without_root_keeps_absolute_keys()]] - `calls` [EXTRACTED]
- [[test_save_manifest_writes_atomically()]] - `calls` [EXTRACTED]
- [[watch.py]] - `imports` [EXTRACTED]
- [[write_json_atomic()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/detectpy