---
type: community
cohesion: 0.08
members: 39
---

# paths.py

**Cohesion:** 0.08 - loosely connected
**Members:** 39 nodes

## Members
- [[Atomically replace ``path`` with content written by ``write_fn(f)``. Writes a…]] - rationale - temp-graphify/graphify/paths.py
- [[Atomically write ``obj`` as JSON to ``path``, streaming the encode into the…]] - rationale - temp-graphify/graphify/paths.py
- [[Atomically write ``text`` (UTF-8) to ``path``. See func`_atomic_replace`.]] - rationale - temp-graphify/graphify/paths.py
- [[Classify a source path as a test path (case-insensitive, segment-aware). Shared…]] - rationale - temp-graphify/graphify/paths.py
- [[Load a graphify graph.json into a networkx graph, accepting both writers. The…]] - rationale - temp-graphify/graphify/paths.py
- [[On Windows os.replace raises PermissionError when the destination is briefly…]] - rationale - temp-graphify/tests/test_atomic_writes.py
- [[Path_46]] - code
- [[Pick the candidate whose source file is closest to the call site.…]] - rationale - temp-graphify/graphify/paths.py
- [[Resolve an ambiguous bare-name call to one candidate, or ``None``. Shared god-…]] - rationale - temp-graphify/graphify/paths.py
- [[Single source of truth for the graphify output-directory name. The output…]] - rationale - temp-graphify/graphify/paths.py
- [[Tests for atomic JSON writes (graph.json  manifest.json). A crash, kill, or…]] - rationale - temp-graphify/tests/test_atomic_writes.py
- [[Tests for graphify.paths — the shared test-path classifier (1553).]] - rationale - temp-graphify/tests/test_paths.py
- [[_atomic_replace()]] - code - temp-graphify/graphify/paths.py
- [[_is_test_path()]] - code - temp-graphify/graphify/paths.py
- [[_path_proximity_winner()]] - code - temp-graphify/graphify/paths.py
- [[disambiguate_ambiguous_candidates()]] - code - temp-graphify/graphify/paths.py
- [[load_node_link_graph()]] - code - temp-graphify/graphify/paths.py
- [[parametrize_21]] - code
- [[paths.py]] - code - temp-graphify/graphify/paths.py
- [[test_atomic_writes.py]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_disambiguate_bails_on_two_nontest_candidates()]] - code - temp-graphify/tests/test_paths.py
- [[test_disambiguate_drops_test_candidate_for_nontest_call_site()]] - code - temp-graphify/tests/test_paths.py
- [[test_disambiguate_path_proximity_same_dir()]] - code - temp-graphify/tests/test_paths.py
- [[test_disambiguate_test_call_site_prefers_test_local()]] - code - temp-graphify/tests/test_paths.py
- [[test_is_test_path_negative()]] - code - temp-graphify/tests/test_paths.py
- [[test_is_test_path_positive()]] - code - temp-graphify/tests/test_paths.py
- [[test_paths.py]] - code - temp-graphify/tests/test_paths.py
- [[test_save_manifest_writes_atomically()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_to_json_writes_atomically_no_tmp_leftover()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_json_atomic_ensure_ascii_false_preserves_utf8()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_json_atomic_roundtrip()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_text_atomic_new_file_respects_umask()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_text_atomic_preserves_existing_mode()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_text_atomic_preserves_existing_on_failure()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_text_atomic_windows_permission_fallback()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_text_atomic_writes_and_leaves_no_tmp()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[test_write_text_atomic_writes_through_symlink()]] - code - temp-graphify/tests/test_atomic_writes.py
- [[write_json_atomic()]] - code - temp-graphify/graphify/paths.py
- [[write_text_atomic()]] - code - temp-graphify/graphify/paths.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/pathspy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_cli.py]]
- 5 edges to [[_COMMUNITY_dispatch_command]]
- 5 edges to [[_COMMUNITY_detect.py]]
- 4 edges to [[_COMMUNITY_to_json]]
- 3 edges to [[_COMMUNITY_test_benchmark.py]]
- 2 edges to [[_COMMUNITY_graphify__main__.py]]
- 2 edges to [[_COMMUNITY_callflow_html.py]]
- 2 edges to [[_COMMUNITY_extract.py]]
- 2 edges to [[_COMMUNITY_test_security.py]]
- 2 edges to [[_COMMUNITY_symbol_resolution.py]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_cache.py]]
- 1 edge to [[_COMMUNITY_load_graph]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_default_graph_json]]
- 1 edge to [[_COMMUNITY__stale_graph_sources]]
- 1 edge to [[_COMMUNITY_prs.py]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY_security.py]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_transcribe.py]]
- 1 edge to [[_COMMUNITY__rebuild_code]]
- 1 edge to [[_COMMUNITY_test_symbol_resolution.py]]

## Top bridge nodes
- [[paths.py]] - degree 30, connects to 18 communities
- [[load_node_link_graph()]] - degree 10, connects to 6 communities
- [[write_json_atomic()]] - degree 16, connects to 4 communities
- [[disambiguate_ambiguous_candidates()]] - degree 13, connects to 4 communities
- [[test_atomic_writes.py]] - degree 16, connects to 2 communities