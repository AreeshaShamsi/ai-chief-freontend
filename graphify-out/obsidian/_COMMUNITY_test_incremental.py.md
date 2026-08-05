---
type: community
cohesion: 0.13
members: 25
---

# test_incremental.py

**Cohesion:** 0.13 - loosely connected
**Members:** 25 nodes

## Members
- [[1347 no-op incremental no-cluster extract must not overwrite graph.json.]] - rationale - temp-graphify/tests/test_incremental.py
- [[1521 when an import is deleted from a file, `graphify update` must prune the…]] - rationale - temp-graphify/tests/test_incremental.py
- [[2169 an incremental --code-only --no-cluster run over a mixed corpus must…]] - rationale - temp-graphify/tests/test_incremental.py
- [[2169 an incremental --no-cluster extract of ONE changed file must merge into…]] - rationale - temp-graphify/tests/test_incremental.py
- [[2211 a markdown link(docssetup.md) references edge must stamp target_file…]] - rationale - temp-graphify/tests/test_incremental.py
- [[2213 (defect 1, shared root with 2211) a Python relative import's…]] - rationale - temp-graphify/tests/test_incremental.py
- [[After a full extract run, manifest.json must exist (or run fails before writing…]] - rationale - temp-graphify/tests/test_incremental.py
- [[CompletedProcess_1]] - code
- [[If manifest.json + graph.json exist, incremental mode message is shown.]] - rationale - temp-graphify/tests/test_incremental.py
- [[Integration tests for incremental graphify extract behavior.]] - rationale - temp-graphify/tests/test_incremental.py
- [[Path_77]] - code
- [[Without manifest.json, full scan message is shown (not incremental).]] - rationale - temp-graphify/tests/test_incremental.py
- [[_edges()]] - code - temp-graphify/tests/test_incremental.py
- [[_make_docs_corpus()_1]] - code - temp-graphify/tests/test_incremental.py
- [[_run()_7]] - code - temp-graphify/tests/test_incremental.py
- [[test_extract_no_cluster_incremental_changed_file_preserves_unchanged_files()]] - code - temp-graphify/tests/test_incremental.py
- [[test_extract_no_cluster_incremental_code_only_preserves_doc_nodes()]] - code - temp-graphify/tests/test_incremental.py
- [[test_extract_no_cluster_incremental_noop_preserves_existing_graph()]] - code - temp-graphify/tests/test_incremental.py
- [[test_incremental.py]] - code - temp-graphify/tests/test_incremental.py
- [[test_incremental_md_reference_target_canonicalizes()]] - code - temp-graphify/tests/test_incremental.py
- [[test_incremental_mode_detected_via_manifest()]] - code - temp-graphify/tests/test_incremental.py
- [[test_incremental_python_relative_import_target_canonicalizes()]] - code - temp-graphify/tests/test_incremental.py
- [[test_manifest_written_after_extract()]] - code - temp-graphify/tests/test_incremental.py
- [[test_no_incremental_without_manifest()]] - code - temp-graphify/tests/test_incremental.py
- [[test_update_prunes_a_removed_imports_edge()]] - code - temp-graphify/tests/test_incremental.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_incrementalpy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_extract]]

## Top bridge nodes
- [[test_incremental.py]] - degree 14, connects to 1 community
- [[test_incremental_md_reference_target_canonicalizes()]] - degree 4, connects to 1 community
- [[test_incremental_python_relative_import_target_canonicalizes()]] - degree 4, connects to 1 community