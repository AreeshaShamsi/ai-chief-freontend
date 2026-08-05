---
type: community
cohesion: 0.15
members: 22
---

# test_extract_cli.py

**Cohesion:** 0.15 - loosely connected
**Members:** 22 nodes

## Members
- [[--no-cluster's exclusion-only early exit must still scrub the excluded file's…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[A code-only corpus must run with no LLM API key. Regression graphify extract…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[A corpus with only code — no docspapersimages.]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Clear every env var that detect_backend() or _get_backend_api_key() reads.]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Post-1897 state the excluded file IS manifest-listed. It must be pruned from…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Seed a graph with nodes for x.py, drop x.py from the manifest (pre-1897…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Tests for `graphify extract` CLI dispatch path in graphify.__main__.]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Unit test for the 1897 helper relative (fresh) and absolute (cache-hit)…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[_clear_backend_keys()]] - code - temp-graphify/tests/test_extract_cli.py
- [[_code_only_corpus()]] - code - temp-graphify/tests/test_extract_cli.py
- [[_node_sources()]] - code - temp-graphify/tests/test_extract_cli.py
- [[_two_file_corpus()]] - code - temp-graphify/tests/test_extract_cli.py
- [[`extract --out DIR` routes every artifact to DIRgraphify-out and the scanned…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[parametrize_5]] - code
- [[test_extract_cli.py]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_codeonly_succeeds_without_api_key()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_out_keeps_project_root_clean()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_incremental_extract_prunes_excluded_file_listed_in_manifest()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_incremental_extract_prunes_newly_excluded_file_not_in_manifest()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_no_cluster_incremental_prunes_newly_excluded_file()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_pathless_postgres_extract_initializes_empty_detection()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_stamped_manifest_files_normalizes_both_sides()]] - code - temp-graphify/tests/test_extract_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_extract_clipy
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY__run_extract]]
- 8 edges to [[_COMMUNITY__make_corpus]]
- 3 edges to [[_COMMUNITY_main]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_test_extract_timing_flag_emits_stage_timings]]
- 1 edge to [[_COMMUNITY_graphify__main__.py]]
- 1 edge to [[_COMMUNITY_save_semantic_cache]]

## Top bridge nodes
- [[test_extract_cli.py]] - degree 33, connects to 6 communities
- [[_clear_backend_keys()]] - degree 9, connects to 2 communities
- [[test_incremental_extract_prunes_excluded_file_listed_in_manifest()]] - degree 6, connects to 1 community
- [[test_incremental_extract_prunes_newly_excluded_file_not_in_manifest()]] - degree 6, connects to 1 community
- [[test_no_cluster_incremental_prunes_newly_excluded_file()]] - degree 6, connects to 1 community