---
type: community
cohesion: 0.07
members: 39
---

# _load_graphifyignore

**Cohesion:** 0.07 - loosely connected
**Members:** 39 nodes

## Members
- [[build must not match srcbuild.]] - rationale - temp-graphify/tests/test_detect.py
- [[inbox must not match srcinbox — only inbox at the anchor root.]] - rationale - temp-graphify/tests/test_detect.py
- [[inbox must still match inbox at the anchor root (positive case).]] - rationale - temp-graphify/tests/test_detect.py
- [[srcinbox must match srcinbox but not xsrcinbox.]] - rationale - temp-graphify/tests/test_detect.py
- [[A ! re-include cannot un-ignore a file whose parent dir is excluded (882).]] - rationale - temp-graphify/tests/test_detect.py
- [[A ! re-include must still un-ignore a file when no ancestor is excluded (882).]] - rationale - temp-graphify/tests/test_detect.py
- [[A shared _cache must not change _is_ignored results, including negation. Builds…]] - rationale - temp-graphify/tests/test_detect.py
- [[If the ancestor dir itself is re-included, its children should not be blocked…]] - rationale - temp-graphify/tests/test_detect.py
- [[Parse one raw line from a .graphifyignore file per gitignore spec. - Strip…]] - rationale - temp-graphify/graphify/detect.py
- [[Read .gitignore.graphifyignore directly inside d (not its ancestors). Merges…]] - rationale - temp-graphify/graphify/detect.py
- [[Read .graphifyignore files and return (anchor_dir, pattern) pairs. Patterns are…]] - rationale - temp-graphify/graphify/detect.py
- [[Return True if the path should be ignored per .graphifyignore patterns. Uses…]] - rationale - temp-graphify/graphify/detect.py
- [[Return True if this directory name looks like a venv, cache, or dep dir.]] - rationale - temp-graphify/graphify/detect.py
- [[Siblings under the same subtree must share the cached parent result (1235).…]] - rationale - temp-graphify/tests/test_detect.py
- [[The gate itself name alone is not enough, and an unverifiable call (no parent)…]] - rationale - temp-graphify/tests/test_detect.py
- [[True only when d has actual virtualenvconda structure on disk.…]] - rationale - temp-graphify/graphify/detect.py
- [[True only when d holds files a coverage tool actually generated. ``coverage``…]] - rationale - temp-graphify/graphify/detect.py
- [[_has_coverage_artifacts()]] - code - temp-graphify/graphify/detect.py
- [[_has_venv_markers()]] - code - temp-graphify/graphify/detect.py
- [[_is_ignored()]] - code - temp-graphify/graphify/detect.py
- [[_is_noise_dir()]] - code - temp-graphify/graphify/detect.py
- [[_load_dir_own_ignore()]] - code - temp-graphify/graphify/detect.py
- [[_load_graphifyignore()]] - code - temp-graphify/graphify/detect.py
- [[_parse_gitignore_line()]] - code - temp-graphify/graphify/detect.py
- [[_xaml_csharp_class_nodes()]] - code - temp-graphify/graphify/extract.py
- [[inbox (no leading ) must still match srcinbox anywhere in the tree.]] - rationale - temp-graphify/tests/test_detect.py
- [[infoexclude is loaded at lowest priority, so a later .gitignore `!` negation…]] - rationale - temp-graphify/tests/test_detect.py
- [[test_anchored_dir_matches_at_root()]] - code - temp-graphify/tests/test_detect.py
- [[test_anchored_dir_not_matched_at_depth()]] - code - temp-graphify/tests/test_detect.py
- [[test_anchored_file_not_matched_at_depth()]] - code - temp-graphify/tests/test_detect.py
- [[test_anchored_multi_segment_pattern()]] - code - temp-graphify/tests/test_detect.py
- [[test_git_info_exclude_ranks_below_gitignore_negation()]] - code - temp-graphify/tests/test_detect.py
- [[test_is_ignored_cache_evaluates_each_dir_once()]] - code - temp-graphify/tests/test_detect.py
- [[test_is_ignored_cache_matches_uncached_results()]] - code - temp-graphify/tests/test_detect.py
- [[test_is_noise_dir_coverage_is_evidence_gated()]] - code - temp-graphify/tests/test_detect.py
- [[test_negation_ancestor_itself_reincluded()]] - code - temp-graphify/tests/test_detect.py
- [[test_negation_cannot_rescue_file_under_excluded_dir()]] - code - temp-graphify/tests/test_detect.py
- [[test_negation_works_when_no_ancestor_excluded()]] - code - temp-graphify/tests/test_detect.py
- [[test_unanchored_dir_still_matches_at_depth()]] - code - temp-graphify/tests/test_detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_load_graphifyignore
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_test_detect.py]]
- 12 edges to [[_COMMUNITY_detect.py]]
- 6 edges to [[_COMMUNITY_collect_files]]
- 4 edges to [[_COMMUNITY_extract.py]]
- 4 edges to [[_COMMUNITY__rebuild_code]]
- 3 edges to [[_COMMUNITY_test_extract.py]]
- 2 edges to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY_test_languages.py]]
- 1 edge to [[_COMMUNITY_test_dotnet.py]]

## Top bridge nodes
- [[_load_graphifyignore()]] - degree 26, connects to 6 communities
- [[_is_ignored()]] - degree 23, connects to 6 communities
- [[_is_noise_dir()]] - degree 11, connects to 5 communities
- [[_xaml_csharp_class_nodes()]] - degree 8, connects to 4 communities
- [[_load_dir_own_ignore()]] - degree 6, connects to 2 communities