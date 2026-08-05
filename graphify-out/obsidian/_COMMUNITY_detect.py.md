---
type: community
cohesion: 0.03
members: 102
---

# detect.py

**Cohesion:** 0.03 - loosely connected
**Members:** 102 nodes

## Members
- [[NOTE aws_credentialsgcloud_credentialsservice_account moved to the]] - rationale - temp-graphify/graphify/detect.py
- [[1948 a file stamped in an earlier run, then omitted from ``files`` on a later…]] - rationale - temp-graphify/tests/test_detect.py
- [[2221 (portablerelative-key manifest) a manifest whose keys were written in…]] - rationale - temp-graphify/tests/test_detect.py
- [[2221 exact repro legacy manifest saved WITHOUT root (absolute keys), then…]] - rationale - temp-graphify/tests/test_detect.py
- [[A previously-indexed file that becomes excluded (still on disk) must land in…]] - rationale - temp-graphify/tests/test_detect.py
- [[A prosenote file (.md.rst...) whose stem is a multi-word topic slug is…]] - rationale - temp-graphify/graphify/detect.py
- [[A row for a file that still exists on disk but left the scan corpus (newly…]] - rationale - temp-graphify/tests/test_detect.py
- [[A schema-drifted manifest whose entry stores mtime as a nested dict (instead of…]] - rationale - temp-graphify/tests/test_detect.py
- [[After a full-scan save prunes the excluded row, later incremental runs report…]] - rationale - temp-graphify/tests/test_detect.py
- [[Back-compat callers that don't pass ``root`` still get the legacy absolute-…]] - rationale - temp-graphify/tests/test_detect.py
- [[Code files must be stamped in the manifest regardless of semantic cache.]] - rationale - temp-graphify/tests/test_detect.py
- [[Counterpart a manifest row whose file is gone from disk stays in deleted_files.]] - rationale - temp-graphify/tests/test_detect.py
- [[End-to-end a manifest written at one root must be readable from a different…]] - rationale - temp-graphify/tests/test_detect.py
- [[Extract structural nodes (sheets, named tables, column headers) from an .xlsx…]] - rationale - temp-graphify/graphify/detect.py
- [[Files in failed chunks have no semantic cache entry; save_manifest must leave…]] - rationale - temp-graphify/tests/test_detect.py
- [[Files outside ``root`` (e.g. symlinked external corpora) are stored absolute so…]] - rationale - temp-graphify/tests/test_detect.py
- [[Genuine deletions keep being pruned when scan_corpus is passed.]] - rationale - temp-graphify/tests/test_detect.py
- [[Heuristic does this text file read like an academic paper]] - rationale - temp-graphify/graphify/detect.py
- [[In-root symlinks must store under the symlink's own name, not the resolved…]] - rationale - temp-graphify/tests/test_detect.py
- [[Inverse of func`_to_relative_for_storage`. Re-anchor a stored key against…]] - rationale - temp-graphify/graphify/detect.py
- [[Legacy absolute-keyed manifests still load correctly when ``root`` is supplied…]] - rationale - temp-graphify/tests/test_detect.py
- [[Legacy float manifests must re-extract when mtime moves BACKWARDS (1859). Pre-…]] - rationale - temp-graphify/tests/test_detect.py
- [[Like detect(), but returns only new or modified files since the last run.…]] - rationale - temp-graphify/graphify/detect.py
- [[Load the manifest from a previous run. Returns {} on any error. When ``root``…]] - rationale - temp-graphify/graphify/detect.py
- [[MD5 of file contents streamed in 64KB chunks — for change detection only.]] - rationale - temp-graphify/graphify/detect.py
- [[Match an anchored gitignore pattern without letting ```` cross ````.]] - rationale - temp-graphify/graphify/detect.py
- [[NFC-normalize a path string used as a manifest key. On macOS, ``os.walk`` …]] - rationale - temp-graphify/graphify/detect.py
- [[Non-regression for the fix above legacy float branch still skips when the…]] - rationale - temp-graphify/tests/test_detect.py
- [[Out-of-root entries (--include sources, symlinked corpora) are never walked by…]] - rationale - temp-graphify/tests/test_detect.py
- [[Path_7]] - code
- [[Re-tokenize an `env -S``--split-string` packed command, prepending the operand…]] - rationale - temp-graphify/graphify/detect.py
- [[Resolve ``$GIT_DIRinfoexclude`` for the repo rooted at ``vcs_root``.…]] - rationale - temp-graphify/graphify/detect.py
- [[Return ``key`` as a forward-slash relative path from ``root``. Keys outside…]] - rationale - temp-graphify/graphify/detect.py
- [[Return whether ``root`` has any direct symlinked child. Kept for callers that…]] - rationale - temp-graphify/graphify/detect.py
- [[Rewrite a saved manifest so every key is in NFD form, simulating a manifest…]] - rationale - temp-graphify/tests/test_detect.py
- [[Save current file mtimes + content hashes for change detection. kind=ast —…]] - rationale - temp-graphify/graphify/detect.py
- [[Stat + MD5 a single file; returns None on OSError (e.g. deleted mid-run).]] - rationale - temp-graphify/graphify/detect.py
- [[Strip leading env(1) options and var assignments, return the trailing command…]] - rationale - temp-graphify/graphify/detect.py
- [[True for `.env.example`  `.envrc.sample` style committed templates (2184).]] - rationale - temp-graphify/graphify/detect.py
- [[True for genuine programming-language source — the only category exempt from…]] - rationale - temp-graphify/graphify/detect.py
- [[True if a generic secret keyword appears load-bearing in the filename. Secret-…]] - rationale - temp-graphify/graphify/detect.py
- [[True when ``path`` resolves to a target inside ``root``.]] - rationale - temp-graphify/graphify/detect.py
- [[Walk upward from start; return the first directory containing a VCS marker.]] - rationale - temp-graphify/graphify/detect.py
- [[Without scan_corpus (changed_paths hooks, skill runbooks, 917) a subset save…]] - rationale - temp-graphify/tests/test_detect.py
- [[_auto_follow_symlinks()]] - code - temp-graphify/graphify/detect.py
- [[_env_command_args()]] - code - temp-graphify/graphify/detect.py
- [[_find_vcs_root()]] - code - temp-graphify/graphify/detect.py
- [[_generic_keyword_hit()]] - code - temp-graphify/graphify/detect.py
- [[_git_info_exclude()]] - code - temp-graphify/graphify/detect.py
- [[_is_env_template()]] - code - temp-graphify/graphify/detect.py
- [[_is_graphable_source()]] - code - temp-graphify/graphify/detect.py
- [[_is_prose_note()]] - code - temp-graphify/graphify/detect.py
- [[_looks_like_paper()]] - code - temp-graphify/graphify/detect.py
- [[_match_anchored_ignore_pattern()]] - code - temp-graphify/graphify/detect.py
- [[_md5_file()]] - code - temp-graphify/graphify/detect.py
- [[_nfc()]] - code - temp-graphify/graphify/detect.py
- [[_os_path()]] - code - temp-graphify/graphify/detect.py
- [[_resolves_under_root()]] - code - temp-graphify/graphify/detect.py
- [[_rewrite_manifest_keys_nfd()]] - code - temp-graphify/tests/test_detect.py
- [[_split_env_s()]] - code - temp-graphify/graphify/detect.py
- [[_stat_and_hash()]] - code - temp-graphify/graphify/detect.py
- [[_to_absolute_from_storage()]] - code - temp-graphify/graphify/detect.py
- [[_to_relative_for_storage()]] - code - temp-graphify/graphify/detect.py
- [[``load_manifest(root=...)`` re-anchors stored relative keys so the in-memory…]] - rationale - temp-graphify/tests/test_detect.py
- [[``save_manifest(root=...)`` writes forward-slash relative keys.]] - rationale - temp-graphify/tests/test_detect.py
- [[detect.py]] - code - temp-graphify/graphify/detect.py
- [[detect_incremental must forward follow_symlinks so symlinked sub-trees appear…]] - rationale - temp-graphify/tests/test_detect.py
- [[detect_incremental()]] - code - temp-graphify/graphify/detect.py
- [[load_manifest()]] - code - temp-graphify/graphify/detect.py
- [[manifest.py]] - code - temp-graphify/graphify/manifest.py
- [[r1655 — files whose absolute path exceeds Windows MAX_PATH (260) must still…]] - rationale - temp-graphify/tests/test_long_path_hashing.py
- [[rReturn an OS path string safe for open()stat() on Windows long paths. On…]] - rationale - temp-graphify/graphify/detect.py
- [[save_manifest()]] - code - temp-graphify/graphify/detect.py
- [[test_detect_incremental_exclusion_stable_across_runs()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_legacy_float_reextracts_on_backwards_mtime()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_legacy_float_skips_when_mtime_matches()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_portable_across_paths()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_propagates_follow_symlinks()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_reports_excluded_not_deleted()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_still_reports_real_deletions()]] - code - temp-graphify/tests/test_detect.py
- [[test_detect_incremental_survives_dict_valued_mtime()]] - code - temp-graphify/tests/test_detect.py
- [[test_hashing_still_works_and_stabilizes()]] - code - temp-graphify/tests/test_long_path_hashing.py
- [[test_load_manifest_absolutizes_relative_keys()]] - code - temp-graphify/tests/test_detect.py
- [[test_load_manifest_passes_through_legacy_absolute_keys()]] - code - temp-graphify/tests/test_detect.py
- [[test_long_path_hashing.py]] - code - temp-graphify/tests/test_long_path_hashing.py
- [[test_manifest_nfc_keys_legacy_absolute()]] - code - temp-graphify/tests/test_detect.py
- [[test_manifest_nfc_keys_survive_macos_path_forms()]] - code - temp-graphify/tests/test_detect.py
- [[test_os_path_adds_prefix_on_win32()]] - code - temp-graphify/tests/test_long_path_hashing.py
- [[test_os_path_idempotent_on_win32()]] - code - temp-graphify/tests/test_long_path_hashing.py
- [[test_os_path_noop_on_posix()]] - code - temp-graphify/tests/test_long_path_hashing.py
- [[test_save_manifest_clear_semantic_erases_stale_hash_for_omitted_file()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_full_scan_keeps_out_of_root_rows()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_full_scan_prunes_excluded_but_alive_row()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_full_scan_still_prunes_missing_file()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_in_root_symlink_roundtrips()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_out_of_root_keeps_absolute()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_relativizes_keys_when_root_given()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_skips_semantic_hash_for_files_without_cache()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_subset_save_preserves_untouched_rows()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_without_filter_unchanged_for_code()]] - code - temp-graphify/tests/test_detect.py
- [[test_save_manifest_without_root_keeps_absolute_keys()]] - code - temp-graphify/tests/test_detect.py
- [[xlsx_extract_structure()]] - code - temp-graphify/graphify/detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/detectpy
SORT file.name ASC
```

## Connections to other communities
- 44 edges to [[_COMMUNITY_test_detect.py]]
- 14 edges to [[_COMMUNITY_test_office_limits.py]]
- 12 edges to [[_COMMUNITY__load_graphifyignore]]
- 11 edges to [[_COMMUNITY_classify_file]]
- 5 edges to [[_COMMUNITY_paths.py]]
- 4 edges to [[_COMMUNITY_convert_office_file]]
- 3 edges to [[_COMMUNITY_cli.py]]
- 3 edges to [[_COMMUNITY_google_workspace.py]]
- 3 edges to [[_COMMUNITY__rebuild_code]]
- 2 edges to [[_COMMUNITY_generate]]
- 2 edges to [[_COMMUNITY_cache.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_test_manifest_ingest.py]]
- 2 edges to [[_COMMUNITY_test_watch_manifest_location.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_extract_astro]]
- 1 edge to [[_COMMUNITY__stale_graph_sources]]
- 1 edge to [[_COMMUNITY_test_vue_extraction.py]]
- 1 edge to [[_COMMUNITY_test_watch.py]]
- 1 edge to [[_COMMUNITY_build]]
- 1 edge to [[_COMMUNITY_test_query_induced_edges.py]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_collect_files]]

## Top bridge nodes
- [[detect.py]] - degree 65, connects to 16 communities
- [[save_manifest()]] - degree 34, connects to 5 communities
- [[Path_7]] - degree 32, connects to 5 communities
- [[detect_incremental()]] - degree 25, connects to 4 communities
- [[_resolves_under_root()]] - degree 6, connects to 3 communities