---
type: community
cohesion: 0.08
members: 53
---

# _rebuild_code

**Cohesion:** 0.08 - loosely connected
**Members:** 53 nodes

## Members
- [[2051 follow-up a node whose source_file is a URLvirtual scheme (gdoc,…]] - rationale - temp-graphify/tests/test_watch.py
- [[dot-__init__()_9]] - code - temp-graphify/graphify/watch.py
- [[dot-absolute_identity()]] - code - temp-graphify/graphify/watch.py
- [[dot-identity()]] - code - temp-graphify/graphify/watch.py
- [[dot-in_watch_root()]] - code - temp-graphify/graphify/watch.py
- [[dot-is_evicted()]] - code - temp-graphify/graphify/watch.py
- [[dot-normalize()]] - code - temp-graphify/graphify/watch.py
- [[dot-rebase_preserved()]] - code - temp-graphify/graphify/watch.py
- [[Best-effort nice + memory cap. Called from inline hook scripts.…]] - rationale - temp-graphify/graphify/watch.py
- [[Collapse nodes sharing an ``id``, last-writer-wins on attributes. Mirrors what…]] - rationale - temp-graphify/graphify/build.py
- [[Concatenate path lists, preserving order and dropping duplicates. Used to…]] - rationale - temp-graphify/graphify/watch.py
- [[Ensure relative rebuild paths have a usable CWD before queuelock setup.…]] - rationale - temp-graphify/graphify/watch.py
- [[Merge fresh extraction with preserved graph entries and evict stale sources.]] - rationale - temp-graphify/graphify/watch.py
- [[Path_56]] - code
- [[Re-run AST extraction + build + optional cluster + report for code files. No…]] - rationale - temp-graphify/graphify/watch.py
- [[Read + unlink ``out_dir.pending_changes`` and return deduplicated paths.…]] - rationale - temp-graphify/graphify/watch.py
- [[Rebase cache-root-relative source paths onto the project root.]] - rationale - temp-graphify/graphify/watch.py
- [[Resolve source_file values across current and legacy graph roots.]] - rationale - temp-graphify/graphify/watch.py
- [[Return current git HEAD commit hash, or None outside a repo. ``cwd`` selects…]] - rationale - temp-graphify/graphify/watch.py
- [[Return plausible absolute locations for a hook-provided changed path. Git hooks…]] - rationale - temp-graphify/graphify/watch.py
- [[Return the effective viz node limit, honoring GRAPHIFY_VIZ_NODE_LIMIT env var.…]] - rationale - temp-graphify/graphify/exporters/html.py
- [[Return the persisted ``--exclude`` patterns for this graph, or .]] - rationale - temp-graphify/graphify/watch.py
- [[Return whether rebuilds should honor VCS ignore files (default True).]] - rationale - temp-graphify/graphify/watch.py
- [[Watch watch_path for new or modified files and auto-update the graph. For code-…]] - rationale - temp-graphify/graphify/watch.py
- [[_StoredSourcePaths]] - code - temp-graphify/graphify/watch.py
- [[_apply_resource_limits()]] - code - temp-graphify/graphify/watch.py
- [[_canonical_graph_for_compare()]] - code - temp-graphify/graphify/watch.py
- [[_canonical_topology_for_compare()]] - code - temp-graphify/graphify/watch.py
- [[_changed_path_candidates()]] - code - temp-graphify/graphify/watch.py
- [[_drain_pending()]] - code - temp-graphify/graphify/watch.py
- [[_git_head()_1]] - code - temp-graphify/graphify/watch.py
- [[_has_non_code()]] - code - temp-graphify/graphify/watch.py
- [[_is_relative_to()]] - code - temp-graphify/graphify/watch.py
- [[_is_remote_source()]] - code - temp-graphify/graphify/watch.py
- [[_json_text()]] - code - temp-graphify/graphify/watch.py
- [[_merge_changed_paths()]] - code - temp-graphify/graphify/watch.py
- [[_node_community_map()_1]] - code - temp-graphify/graphify/watch.py
- [[_read_build_excludes()]] - code - temp-graphify/graphify/watch.py
- [[_read_build_gitignore()]] - code - temp-graphify/graphify/watch.py
- [[_rebase_relative_source_files()]] - code - temp-graphify/graphify/watch.py
- [[_rebuild_code()]] - code - temp-graphify/graphify/watch.py
- [[_reconcile_existing_graph()]] - code - temp-graphify/graphify/watch.py
- [[_relativize_source_files()]] - code - temp-graphify/graphify/watch.py
- [[_report_for_compare()]] - code - temp-graphify/graphify/watch.py
- [[_report_root_label()]] - code - temp-graphify/graphify/watch.py
- [[_stabilize_rebuild_cwd()]] - code - temp-graphify/graphify/watch.py
- [[_topology_from_graph()]] - code - temp-graphify/graphify/watch.py
- [[_viz_node_limit()]] - code - temp-graphify/graphify/exporters/html.py
- [[dedupe_nodes()]] - code - temp-graphify/graphify/build.py
- [[test_rebuild_code_preserves_remote_source_across_repeated_updates()]] - code - temp-graphify/tests/test_watch.py
- [[test_watch_raises_without_watchdog()]] - code - temp-graphify/tests/test_watch.py
- [[watch()]] - code - temp-graphify/graphify/watch.py
- [[watch.py]] - code - temp-graphify/graphify/watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_rebuild_code
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY_test_watch.py]]
- 17 edges to [[_COMMUNITY_Path_1]]
- 9 edges to [[_COMMUNITY_parametrize]]
- 8 edges to [[_COMMUNITY_graphifybuild.py]]
- 7 edges to [[_COMMUNITY_cli.py]]
- 7 edges to [[_COMMUNITY_test_watch_manifest_location.py]]
- 6 edges to [[_COMMUNITY_generate]]
- 6 edges to [[_COMMUNITY__queue_pending]]
- 6 edges to [[_COMMUNITY_skipif]]
- 5 edges to [[_COMMUNITY_dispatch_command]]
- 5 edges to [[_COMMUNITY_label_communities_by_hub]]
- 4 edges to [[_COMMUNITY_test_analyze.py]]
- 4 edges to [[_COMMUNITY_test_build.py]]
- 4 edges to [[_COMMUNITY_test_export.py]]
- 4 edges to [[_COMMUNITY__load_graphifyignore]]
- 4 edges to [[_COMMUNITY__write_build_config]]
- 3 edges to [[_COMMUNITY_detect.py]]
- 3 edges to [[_COMMUNITY_to_json]]
- 3 edges to [[_COMMUNITY__get_extractor]]
- 3 edges to [[_COMMUNITY__seed_semantic_doc_graph]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_write_callflow_html]]
- 2 edges to [[_COMMUNITY_test_cluster.py]]
- 2 edges to [[_COMMUNITY_test_detect.py]]
- 2 edges to [[_COMMUNITY_backup_if_protected]]
- 2 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY_test_reflect.py]]
- 2 edges to [[_COMMUNITY_test_security.py]]
- 2 edges to [[_COMMUNITY__check_shrink]]
- 1 edge to [[_COMMUNITY_paths.py]]

## Top bridge nodes
- [[_rebuild_code()]] - degree 120, connects to 28 communities
- [[watch.py]] - degree 60, connects to 25 communities
- [[Path_56]] - degree 25, connects to 5 communities
- [[watch()]] - degree 13, connects to 4 communities
- [[dedupe_nodes()]] - degree 8, connects to 4 communities