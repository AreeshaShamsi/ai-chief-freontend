---
type: community
cohesion: 0.07
members: 41
---

# cli.py

**Cohesion:** 0.07 - loosely connected
**Members:** 41 nodes

## Members
- [[A path inside the configured output dir, e.g. ``out_path(cache)``.…]] - rationale - temp-graphify/graphify/paths.py
- [[Atomically claim a one-time strict block for this session. Returns True only on…]] - rationale - temp-graphify/graphify/cli.py
- [[Check for pending semantic update flag and notify the user if set. Cron-safe…]] - rationale - temp-graphify/graphify/watch.py
- [[Clone a GitHub repo to a local cache dir and return the path. Clones into…]] - rationale - temp-graphify/graphify/cli.py
- [[Drop nodesedgeshyperedges owned by ``stale_sources`` from graph.json in…]] - rationale - temp-graphify/graphify/cli.py
- [[Guard the strict deny only block a read of a file the graph actually indexes.…]] - rationale - temp-graphify/graphify/cli.py
- [[Manifest-safe files dict only stamp semantic files that actually produced…]] - rationale - temp-graphify/graphify/cli.py
- [[Path_6]] - code
- [[Record that graphify oriented the agent recently, next to the queried graph.…]] - rationale - temp-graphify/graphify/cli.py
- [[Reject oversized graph files before parsing (CLI exit-on-fail flavor).…]] - rationale - temp-graphify/graphify/cli.py
- [[Relabel colliding-basename file nodes on a raw node-dict list, in place…]] - rationale - temp-graphify/graphify/build.py
- [[Remove the internal ``_partial`` marker from every item in ``result``. Call…]] - rationale - temp-graphify/graphify/llm.py
- [[Resolve strict mode GRAPHIFY_HOOK_STRICT env overrides the baked-in flag…]] - rationale - temp-graphify/graphify/cli.py
- [[Return rival candidates when the winning match tier spans several source files.…]] - rationale - temp-graphify/graphify/serve.py
- [[Return the semantic-extraction system prompt, optionally in deep mode.]] - rationale - temp-graphify/graphify/llm.py
- [[Return user-facing accepted API-key variable names.]] - rationale - temp-graphify/graphify/llm.py
- [[Shell-agnostic PreToolUse guard (522). Reads the tool-call JSON from stdin…]] - rationale - temp-graphify/graphify/cli.py
- [[True if a queryexplainpath ran within GRAPHIFY_HOOK_STRICT_TTL (default…]] - rationale - temp-graphify/graphify/cli.py
- [[_clone_repo()]] - code - temp-graphify/graphify/cli.py
- [[_default_graph_path()]] - code - temp-graphify/graphify/cli.py
- [[_enforce_graph_size_cap_or_exit()]] - code - temp-graphify/graphify/cli.py
- [[_extraction_system()]] - code - temp-graphify/graphify/llm.py
- [[_format_backend_env_keys()]] - code - temp-graphify/graphify/llm.py
- [[_hook_strict_enabled()]] - code - temp-graphify/graphify/cli.py
- [[_mark_session_denied()]] - code - temp-graphify/graphify/cli.py
- [[_prune_graph_json_sources()]] - code - temp-graphify/graphify/cli.py
- [[_query_stamp_fresh()]] - code - temp-graphify/graphify/cli.py
- [[_reenter_main()]] - code - temp-graphify/graphify/cli.py
- [[_run_hook_guard()]] - code - temp-graphify/graphify/cli.py
- [[_stamped_manifest_files()]] - code - temp-graphify/graphify/cli.py
- [[_strip_partial_markers()]] - code - temp-graphify/graphify/llm.py
- [[_target_is_indexed()]] - code - temp-graphify/graphify/cli.py
- [[_touch_query_stamp()]] - code - temp-graphify/graphify/cli.py
- [[check_update()]] - code - temp-graphify/graphify/watch.py
- [[cli.py]] - code - temp-graphify/graphify/cli.py
- [[disambiguate_file_labels_in_nodes()]] - code - temp-graphify/graphify/build.py
- [[find_node_ambiguity()]] - code - temp-graphify/graphify/serve.py
- [[graphify command dispatch — every non-install subcommand. Extracted verbatim…]] - rationale - temp-graphify/graphify/cli.py
- [[out_path()]] - code - temp-graphify/graphify/paths.py
- [[test_strict_enabled_env_precedence()]] - code - temp-graphify/tests/test_hook_strict.py
- [[test_strip_partial_markers_removes_internal_key()]] - code - temp-graphify/tests/test_partial_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/clipy
SORT file.name ASC
```

## Connections to other communities
- 22 edges to [[_COMMUNITY_dispatch_command]]
- 8 edges to [[_COMMUNITY_paths.py]]
- 7 edges to [[_COMMUNITY__rebuild_code]]
- 6 edges to [[_COMMUNITY_save_semantic_cache]]
- 6 edges to [[_COMMUNITY_llm.py]]
- 5 edges to [[_COMMUNITY_graphify__main__.py]]
- 5 edges to [[_COMMUNITY_extract_files_direct]]
- 5 edges to [[_COMMUNITY_test_chunking.py]]
- 4 edges to [[_COMMUNITY_graphifybuild.py]]
- 4 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 4 edges to [[_COMMUNITY__stale_graph_sources]]
- 4 edges to [[_COMMUNITY_to_json]]
- 4 edges to [[_COMMUNITY_test_watch.py]]
- 3 edges to [[_COMMUNITY_generate]]
- 3 edges to [[_COMMUNITY_test_build.py]]
- 3 edges to [[_COMMUNITY_test_export.py]]
- 3 edges to [[_COMMUNITY_detect.py]]
- 3 edges to [[_COMMUNITY_test_multigraph_diagnostics.py]]
- 3 edges to [[_COMMUNITY_serve.py]]
- 3 edges to [[_COMMUNITY__fixture]]
- 2 edges to [[_COMMUNITY_main]]
- 2 edges to [[_COMMUNITY_test_analyze.py]]
- 2 edges to [[_COMMUNITY_test_benchmark.py]]
- 2 edges to [[_COMMUNITY_label_communities_by_hub]]
- 2 edges to [[_COMMUNITY_test_detect.py]]
- 2 edges to [[_COMMUNITY_backup_if_protected]]
- 2 edges to [[_COMMUNITY_to_obsidian]]
- 2 edges to [[_COMMUNITY_hooks.py]]
- 2 edges to [[_COMMUNITY__load_custom_providers]]
- 2 edges to [[_COMMUNITY__call_claude_cli]]
- 2 edges to [[_COMMUNITY_test_reflect.py]]
- 2 edges to [[_COMMUNITY_reflect.py]]
- 2 edges to [[_COMMUNITY_test_security.py]]
- 2 edges to [[_COMMUNITY_test_extract_cli.py]]
- 2 edges to [[_COMMUNITY_test_llm_backends.py]]
- 1 edge to [[_COMMUNITY_affected_nodes]]
- 1 edge to [[_COMMUNITY_test_corrupt_graph_json.py]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_build]]
- 1 edge to [[_COMMUNITY_test_merge_graphs_cli.py]]
- 1 edge to [[_COMMUNITY_file_hash]]
- 1 edge to [[_COMMUNITY_cache.py]]
- 1 edge to [[_COMMUNITY_test_cache.py]]
- 1 edge to [[_COMMUNITY_write_callflow_html]]
- 1 edge to [[_COMMUNITY_introspect_cargo]]
- 1 edge to [[_COMMUNITY_test_cluster.py]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_install]]
- 1 edge to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_save_query_result]]
- 1 edge to [[_COMMUNITY_test_labeling.py]]
- 1 edge to [[_COMMUNITY_validate_extraction]]
- 1 edge to [[_COMMUNITY_prs.py]]
- 1 edge to [[_COMMUNITY_test_querylog.py]]
- 1 edge to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY_load_validated_semantic_fragment]]
- 1 edge to [[_COMMUNITY__find_node]]
- 1 edge to [[_COMMUNITY_Graph]]
- 1 edge to [[_COMMUNITY__score_nodes]]
- 1 edge to [[_COMMUNITY__write_build_config]]
- 1 edge to [[_COMMUNITY_to_wiki]]
- 1 edge to [[_COMMUNITY_test_install.py]]
- 1 edge to [[_COMMUNITY_test_extract_timing_flag_emits_stage_timings]]
- 1 edge to [[_COMMUNITY_dedup.py]]
- 1 edge to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_test_image_vision.py]]
- 1 edge to [[_COMMUNITY_default_graph_json]]
- 1 edge to [[_COMMUNITY_test_transcribe.py]]

## Top bridge nodes
- [[cli.py]] - degree 119, connects to 58 communities
- [[_extraction_system()]] - degree 15, connects to 7 communities
- [[_format_backend_env_keys()]] - degree 9, connects to 5 communities
- [[out_path()]] - degree 11, connects to 4 communities
- [[_stamped_manifest_files()]] - degree 9, connects to 4 communities