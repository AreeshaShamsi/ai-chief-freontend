---
type: community
cohesion: 0.05
members: 63
---

# main

**Cohesion:** 0.05 - loosely connected
**Members:** 63 nodes

## Members
- [[2169 an INCREMENTAL --no-cluster run merges the existing graph forward, so…]] - rationale - temp-graphify/tests/test_incomplete_build_guard.py
- [[2169 an incremental --no-cluster run must hard-fail on an unparseable…]] - rationale - temp-graphify/tests/test_incomplete_build_guard.py
- [[F4 query CLI must refuse to parse a graph.json that exceeds the cap.]] - rationale - temp-graphify/tests/test_query_cli.py
- [[A pre-fix ~.ampskillsgraphify install is removed on the next install.]] - rationale - temp-graphify/tests/test_install.py
- [[A present-but-unparseable existing graph.json (corrupt or mid-write) could be…]] - rationale - temp-graphify/tests/test_incomplete_build_guard.py
- [[A single directed `calls` edge on an (on-disk) undirected graph.json, the…]] - rationale - temp-graphify/tests/test_query_cli.py
- [[Console entry point. Wraps the CLI so that when a downstream consumer closes…]] - rationale - temp-graphify/graphify/__main__.py
- [[Global `graphify antigravity install` must write to ~.geminiconfigskills…]] - rationale - temp-graphify/tests/test_install.py
- [[Global `graphify antigravity uninstall` must remove from…]] - rationale - temp-graphify/tests/test_install.py
- [[Handle a downstream reader that closed the pipe early. Redirect stdout to…]] - rationale - temp-graphify/graphify/__main__.py
- [[Patch export.to_json to record the ``force`` it was called with and return a…]] - rationale - temp-graphify/tests/test_incomplete_build_guard.py
- [[Project-scope amp install lands in .agentsskills, an Amp project search root.]] - rationale - temp-graphify/tests/test_install.py
- [[Same edge, seeded from the caller side — must stay correct too.]] - rationale - temp-graphify/tests/test_query_cli.py
- [[Tests for graphify query CLI context filtering.]] - rationale - temp-graphify/tests/test_query_cli.py
- [[Tests for the incomplete-build shrink-guard on `graphify extract`. A full build…]] - rationale - temp-graphify/tests/test_incomplete_build_guard.py
- [[The user-scope `graphify uninstall` enumeration removes the amp skill.]] - rationale - temp-graphify/tests/test_install.py
- [[_arm_extract()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[_arm_no_cluster()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[_make_docs_corpus()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[_seed_existing_graph()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[_seed_to_json_recorder()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[_silence_broken_pipe()]] - code - temp-graphify/graphify/__main__.py
- [[_write_calls_graph()]] - code - temp-graphify/tests/test_query_cli.py
- [[_write_graph()_6]] - code - temp-graphify/tests/test_query_cli.py
- [[`graphify --help` must list devin in the platform list and in the per-platform…]] - rationale - temp-graphify/tests/test_devin.py
- [[`graphify amp install` (user scope) must drop the skill into an Amp search…]] - rationale - temp-graphify/tests/test_install.py
- [[`graphify amp uninstall` removes the user-scope skill and AGENTS.md section.]] - rationale - temp-graphify/tests/test_install.py
- [[`graphify query` must render `calls` edges caller-callee regardless of which…]] - rationale - temp-graphify/tests/test_query_cli.py
- [[main()]] - code - temp-graphify/graphify/__main__.py
- [[test_allow_partial_forces_write_despite_incomplete()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_amp_install_cleans_legacy_amp_skills_dir()]] - code - temp-graphify/tests/test_install.py
- [[test_amp_project_install_lands_in_dot_agents()]] - code - temp-graphify/tests/test_install.py
- [[test_amp_user_install_lands_in_config_agents()]] - code - temp-graphify/tests/test_install.py
- [[test_amp_user_uninstall_removes_skill_and_agents()]] - code - temp-graphify/tests/test_install.py
- [[test_antigravity_global_install_writes_gemini_config_skills()]] - code - temp-graphify/tests/test_install.py
- [[test_antigravity_global_uninstall_removes_gemini_config_skill()]] - code - temp-graphify/tests/test_install.py
- [[test_antigravity_install_project_writes_project_skill()]] - code - temp-graphify/tests/test_install.py
- [[test_antigravity_uninstall_project_removes_project_skill_only()]] - code - temp-graphify/tests/test_install.py
- [[test_claude_subcommand_project_install_and_uninstall_are_project_scoped()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_subcommand_project_install_and_uninstall_are_project_scoped()]] - code - temp-graphify/tests/test_install.py
- [[test_complete_extraction_keeps_force_write()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_devin_in_main_help_text()]] - code - temp-graphify/tests/test_devin.py
- [[test_incomplete_build_guard.py]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_install_help_does_not_install_default()]] - code - temp-graphify/tests/test_install.py
- [[test_install_positional_platform_opencode()]] - code - temp-graphify/tests/test_install.py
- [[test_install_project_claude_writes_project_scope()]] - code - temp-graphify/tests/test_install.py
- [[test_install_project_codex_writes_skill_and_agents()]] - code - temp-graphify/tests/test_install.py
- [[test_no_cluster_allow_partial_overwrites()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_no_cluster_incomplete_build_fails_closed_on_malformed_existing_graph()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_no_cluster_incomplete_build_refuses_to_shrink()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_no_cluster_incremental_incomplete_build_carries_existing_nodes()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_no_cluster_incremental_malformed_existing_graph_refuses_merge()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_partial_extraction_refuses_to_shrink_existing_graph()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_partial_extraction_writes_when_not_shrinking()]] - code - temp-graphify/tests/test_incomplete_build_guard.py
- [[test_query_cli.py]] - code - temp-graphify/tests/test_query_cli.py
- [[test_query_cli_explicit_context_filter()]] - code - temp-graphify/tests/test_query_cli.py
- [[test_query_cli_heuristic_context_filter()]] - code - temp-graphify/tests/test_query_cli.py
- [[test_query_cli_preserves_calls_direction_when_seeded_on_callee()]] - code - temp-graphify/tests/test_query_cli.py
- [[test_query_cli_preserves_calls_direction_when_seeded_on_caller()]] - code - temp-graphify/tests/test_query_cli.py
- [[test_query_cli_rejects_oversized_graph()]] - code - temp-graphify/tests/test_query_cli.py
- [[test_uninstall_all_removes_amp_user_skill()]] - code - temp-graphify/tests/test_install.py
- [[test_uninstall_project_removes_project_skill_only()]] - code - temp-graphify/tests/test_install.py
- [[test_uninstall_project_without_platform_removes_project_installs()]] - code - temp-graphify/tests/test_install.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/main
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_test_install.py]]
- 9 edges to [[_COMMUNITY_test_devin.py]]
- 7 edges to [[_COMMUNITY_test_affected_cli.py]]
- 6 edges to [[_COMMUNITY_test_multigraph_diagnostics.py]]
- 5 edges to [[_COMMUNITY_graphify__main__.py]]
- 5 edges to [[_COMMUNITY_test_codebuddy.py]]
- 5 edges to [[_COMMUNITY__make_corpus]]
- 3 edges to [[_COMMUNITY_test_extract_cli.py]]
- 3 edges to [[_COMMUNITY_test_path_cli.py]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_test_explain_cli.py]]
- 2 edges to [[_COMMUNITY_test_install_references.py]]
- 1 edge to [[_COMMUNITY_test_agents_platform.py]]
- 1 edge to [[_COMMUNITY__run_extract]]
- 1 edge to [[_COMMUNITY_test_extract_timing_flag_emits_stage_timings]]
- 1 edge to [[_COMMUNITY_test_god_nodes_cli.py]]
- 1 edge to [[_COMMUNITY_test_merge_chunks_validation.py]]
- 1 edge to [[_COMMUNITY_test_query_induced_edges.py]]

## Top bridge nodes
- [[main()]] - degree 86, connects to 18 communities
- [[test_incomplete_build_guard.py]] - degree 16, connects to 1 community
- [[test_query_cli.py]] - degree 9, connects to 1 community
- [[_silence_broken_pipe()]] - degree 3, connects to 1 community
- [[test_devin_in_main_help_text()]] - degree 3, connects to 1 community