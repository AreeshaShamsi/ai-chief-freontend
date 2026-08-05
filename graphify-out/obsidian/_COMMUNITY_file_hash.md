---
type: community
cohesion: 0.06
members: 38
---

# file_hash

**Cohesion:** 0.06 - loosely connected
**Members:** 38 nodes

## Members
- [[1656 — word counts are cached against each file's stat signature so detect()…]] - rationale - temp-graphify/tests/test_word_count_cache.py
- [[1894 follow-up to 1527 prune must sweep cachesemantic AND cachesemantic-…]] - rationale - temp-graphify/tests/test_cache.py
- [[1916 guard-rail unscoped callers (allowed_source_files=None) must stay byte-…]] - rationale - temp-graphify/tests/test_cache.py
- [[1989 the stat-index memo must be keyed by the salt (path relative to root)…]] - rationale - temp-graphify/tests/test_word_count_cache.py
- [[A .md file with no frontmatter is hashed by its full content.]] - rationale - temp-graphify/tests/test_cache.py
- [[A pre-1989 entry carrying a bare hash (no salt) is never trusted.]] - rationale - temp-graphify/tests/test_word_count_cache.py
- [[Cache entries written by an older graphify (with absolute source_file inside)…]] - rationale - temp-graphify/tests/test_cache.py
- [[Changing only frontmatter fields in a .md file does not change the hash.]] - rationale - temp-graphify/tests/test_cache.py
- [[Changing the body of a .md file produces a different hash.]] - rationale - temp-graphify/tests/test_cache.py
- [[Different file contents give different hashes.]] - rationale - temp-graphify/tests/test_cache.py
- [[Editing content above a mid-document ``----`` break must change the hash --…]] - rationale - temp-graphify/tests/test_cache.py
- [[Entries written by pre-versioning graphify (flat cache or unversioned…]] - rationale - temp-graphify/tests/test_cache.py
- [[Non-.md files are still hashed by their full content.]] - rationale - temp-graphify/tests/test_cache.py
- [[Normalize path for consistent cache keys across Windows path spellings.]] - rationale - temp-graphify/graphify/cache.py
- [[SHA256 of file contents + path relative to root. Uses a stat-based fastpath…]] - rationale - temp-graphify/graphify/cache.py
- [[Same file gives same hash on repeated calls.]] - rationale - temp-graphify/tests/test_cache.py
- [[Word count with the same (size, mtime_ns) stat-fastpath cache as…]] - rationale - temp-graphify/graphify/cache.py
- [[_normalize_path()]] - code - temp-graphify/graphify/cache.py
- [[cached_files reports deep-namespace entries too.]] - rationale - temp-graphify/tests/test_cache.py
- [[cached_word_count()]] - code - temp-graphify/graphify/cache.py
- [[file_hash()]] - code - temp-graphify/graphify/cache.py
- [[test_cached_files_includes_deep_namespace()]] - code - temp-graphify/tests/test_cache.py
- [[test_file_hash_changes()]] - code - temp-graphify/tests/test_cache.py
- [[test_file_hash_consistent()]] - code - temp-graphify/tests/test_cache.py
- [[test_file_hash_ignores_legacy_unsalted_entry()]] - code - temp-graphify/tests/test_word_count_cache.py
- [[test_file_hash_is_order_independent_across_roots()]] - code - temp-graphify/tests/test_word_count_cache.py
- [[test_legacy_unversioned_ast_entries_not_served()]] - code - temp-graphify/tests/test_cache.py
- [[test_load_cached_passes_through_legacy_absolute_source_file()]] - code - temp-graphify/tests/test_cache.py
- [[test_md_body_change_different_hash()]] - code - temp-graphify/tests/test_cache.py
- [[test_md_edit_above_hr_changes_hash()]] - code - temp-graphify/tests/test_cache.py
- [[test_md_frontmatter_only_change_same_hash()]] - code - temp-graphify/tests/test_cache.py
- [[test_md_no_frontmatter_hashed_normally()]] - code - temp-graphify/tests/test_cache.py
- [[test_non_md_file_hashed_fully()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_unscoped_preserves_dangling_refs_verbatim()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_prune_sweeps_both_namespaces_against_same_live_set()]] - code - temp-graphify/tests/test_cache.py
- [[test_word_count_augments_existing_hash_entry()]] - code - temp-graphify/tests/test_word_count_cache.py
- [[test_word_count_cache.py]] - code - temp-graphify/tests/test_word_count_cache.py
- [[test_word_count_cached_until_file_changes()]] - code - temp-graphify/tests/test_word_count_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/file_hash
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_cache.py]]
- 17 edges to [[_COMMUNITY_test_cache.py]]
- 6 edges to [[_COMMUNITY_save_semantic_cache]]
- 5 edges to [[_COMMUNITY_test_stat_index_portability.py]]
- 2 edges to [[_COMMUNITY_test_extract_cache_location.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_clear_cache]]
- 1 edge to [[_COMMUNITY_test_semantic_cache_out_root.py]]

## Top bridge nodes
- [[file_hash()]] - degree 43, connects to 9 communities
- [[test_cached_files_includes_deep_namespace()]] - degree 5, connects to 3 communities
- [[test_load_cached_passes_through_legacy_absolute_source_file()]] - degree 5, connects to 3 communities
- [[test_save_semantic_cache_unscoped_preserves_dangling_refs_verbatim()]] - degree 5, connects to 3 communities
- [[test_semantic_prune_sweeps_both_namespaces_against_same_live_set()]] - degree 5, connects to 3 communities