---
type: community
cohesion: 0.03
members: 101
---

# test_install.py

**Cohesion:** 0.03 - loosely connected
**Members:** 101 nodes

## Members
- [[1403 on Windows, Hermes scans %LOCALAPPDATA%hermesskills, so the global…]] - rationale - temp-graphify/tests/test_install.py
- [[2062 end-to-end uninstall strips graphify's own H2 section but leaves a user-…]] - rationale - temp-graphify/tests/test_install.py
- [[2062 a file with only a user ` graphify` H3 (graphify never installed)…]] - rationale - temp-graphify/tests/test_install.py
- [[2062 the strip helper must match graphify's own ` graphify` heading…]] - rationale - temp-graphify/tests/test_install.py
- [[2165 the PreToolUse command in .codexhooks.json must be a command the CLI…]] - rationale - temp-graphify/tests/test_install.py
- [[All installable platform skill files must be present in the installed package.]] - rationale - temp-graphify/tests/test_install.py
- [[Claude platform install writes CLAUDE.md; others do not.]] - rationale - temp-graphify/tests/test_install.py
- [[Codex skill file must reference spawn_agent.]] - rationale - temp-graphify/tests/test_install.py
- [[Codex skill must keep graph-first orientation in the lean-core split. The…]] - rationale - temp-graphify/tests/test_install.py
- [[Copy skill file, write GEMINI.md section, and install BeforeTool hook.]] - rationale - temp-graphify/graphify/install.py
- [[Installing twice does not duplicate the section.]] - rationale - temp-graphify/tests/test_install.py
- [[Installs into an existing AGENTS.md without overwriting other content.]] - rationale - temp-graphify/tests/test_install.py
- [[Kilo runs snippets through double-quoted python -c strings.]] - rationale - temp-graphify/tests/test_install.py
- [[Kilo skill file should use the native Task tool flow.]] - rationale - temp-graphify/tests/test_install.py
- [[Non-Windows hermes destination is unchanged (~.hermesskills).]] - rationale - temp-graphify/tests/test_install.py
- [[OpenClaw rides the shared Agent-tool disk-collect dispatch. The consolidated…]] - rationale - temp-graphify/tests/test_install.py
- [[OpenCode skill file must reference @mention.]] - rationale - temp-graphify/tests/test_install.py
- [[OpenCode's dispatch slot uses @mention, not the Claude Agent-tool example. The…]] - rationale - temp-graphify/tests/test_install.py
- [[Subcommand names the CLI actually dispatches. `graphify`'s dispatcher is an…]] - rationale - temp-graphify/tests/test_install.py
- [[Tests for graphify install --platform routing.]] - rationale - temp-graphify/tests/test_install.py
- [[The bash reminder string must not contain backticks or $(...) (regression test…]] - rationale - temp-graphify/tests/test_install.py
- [[The reminder must be joined to the user's command with ';', not '&&' (1646).…]] - rationale - temp-graphify/tests/test_install.py
- [[Uninstall keeps pre-existing content.]] - rationale - temp-graphify/tests/test_install.py
- [[_agents_install()_1]] - code - temp-graphify/tests/test_install.py
- [[_agents_uninstall()_1]] - code - temp-graphify/tests/test_install.py
- [[_cli_dispatched_commands()]] - code - temp-graphify/tests/test_install.py
- [[_install()]] - code - temp-graphify/tests/test_install.py
- [[_kilo_install()_1]] - code - temp-graphify/tests/test_install.py
- [[_kilo_uninstall()_1]] - code - temp-graphify/tests/test_install.py
- [[cursor install does not overwrite an existing rule file.]] - rationale - temp-graphify/tests/test_install.py
- [[cursor install writes .cursorrulesgraphify.mdc.]] - rationale - temp-graphify/tests/test_install.py
- [[cursor uninstall does nothing if rule was never written.]] - rationale - temp-graphify/tests/test_install.py
- [[cursor uninstall removes the rule file.]] - rationale - temp-graphify/tests/test_install.py
- [[gemini_install()]] - code - temp-graphify/graphify/install.py
- [[opencode install preserves existing .opencodeopencode.json keys.]] - rationale - temp-graphify/tests/test_install.py
- [[opencode install registers the plugin in .opencodeopencode.json.]] - rationale - temp-graphify/tests/test_install.py
- [[opencode install writes .opencodepluginsgraphify.js.]] - rationale - temp-graphify/tests/test_install.py
- [[opencode uninstall removes the plugin file and deregisters from opencode.json.]] - rationale - temp-graphify/tests/test_install.py
- [[test_agents_install_appends_to_existing()]] - code - temp-graphify/tests/test_install.py
- [[test_agents_install_idempotent()]] - code - temp-graphify/tests/test_install.py
- [[test_agents_uninstall_no_op_when_not_installed()]] - code - temp-graphify/tests/test_install.py
- [[test_agents_uninstall_preserves_other_content()]] - code - temp-graphify/tests/test_install.py
- [[test_agents_uninstall_preserves_user_h3_graphify_heading()]] - code - temp-graphify/tests/test_install.py
- [[test_agents_uninstall_removes_section()]] - code - temp-graphify/tests/test_install.py
- [[test_all_skill_files_exist_in_package()]] - code - temp-graphify/tests/test_install.py
- [[test_claude_install_registers_claude_md()]] - code - temp-graphify/tests/test_install.py
- [[test_claw_agents_install_writes_agents_md()]] - code - temp-graphify/tests/test_install.py
- [[test_claw_skill_uses_agent_tool_dispatch()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_agents_install_mentions_dirty_graph_output()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_agents_install_writes_agents_md()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_hook_command_is_a_real_cli_subcommand()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_install_does_not_write_claude_md()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_skill_contains_spawn_agent()]] - code - temp-graphify/tests/test_install.py
- [[test_codex_skill_uses_graphify_with_existing_graph()]] - code - temp-graphify/tests/test_install.py
- [[test_cursor_install_idempotent()]] - code - temp-graphify/tests/test_install.py
- [[test_cursor_install_writes_rule()]] - code - temp-graphify/tests/test_install.py
- [[test_cursor_uninstall_noop_if_not_installed()]] - code - temp-graphify/tests/test_install.py
- [[test_cursor_uninstall_removes_rule()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_install_idempotent()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_install_merges_existing_gemini_md()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_install_writes_gemini_md()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_install_writes_hook()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_uninstall_noop_if_not_installed()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_uninstall_removes_hook()]] - code - temp-graphify/tests/test_install.py
- [[test_gemini_uninstall_removes_section()]] - code - temp-graphify/tests/test_install.py
- [[test_hermes_skill_destination_posix_uses_home()]] - code - temp-graphify/tests/test_install.py
- [[test_hermes_skill_destination_windows_uses_localappdata()]] - code - temp-graphify/tests/test_install.py
- [[test_install.py]] - code - temp-graphify/tests/test_install.py
- [[test_install_claw()]] - code - temp-graphify/tests/test_install.py
- [[test_install_codebuddy()]] - code - temp-graphify/tests/test_install.py
- [[test_install_codex()]] - code - temp-graphify/tests/test_install.py
- [[test_install_default_claude()]] - code - temp-graphify/tests/test_install.py
- [[test_install_droid()]] - code - temp-graphify/tests/test_install.py
- [[test_install_opencode()]] - code - temp-graphify/tests/test_install.py
- [[test_install_trae()]] - code - temp-graphify/tests/test_install.py
- [[test_install_trae_cn()]] - code - temp-graphify/tests/test_install.py
- [[test_install_unknown_platform_exits()]] - code - temp-graphify/tests/test_install.py
- [[test_install_windows()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_install_idempotent()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_install_merges_existing_config()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_install_preserves_existing_jsonc_config()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_install_registers_plugin_in_config()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_install_writes_agents_md()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_install_writes_plugin()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_agents_uninstall_preserves_existing_jsonc_config()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_command_file_exists_in_package()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_install_writes_global_and_project_artifacts()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_skill_avoids_double_quoted_python_c_fstring_dict_keys()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_skill_mentions_task_tool()]] - code - temp-graphify/tests/test_install.py
- [[test_kilo_uninstall_removes_plugin_registration_and_command()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_agents_install_merges_existing_config()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_agents_install_registers_plugin_in_config()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_agents_install_writes_agents_md()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_agents_install_writes_plugin()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_agents_uninstall_removes_plugin()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_plugin_reminder_has_no_backticks()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_plugin_uses_semicolon_not_ampersand()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_skill_contains_mention()]] - code - temp-graphify/tests/test_install.py
- [[test_opencode_skill_uses_opencode_agent_guidance()]] - code - temp-graphify/tests/test_install.py
- [[test_remove_marker_section_matches_exact_heading_only()]] - code - temp-graphify/tests/test_install.py
- [[test_uninstall_untouched_when_only_user_h3_present()]] - code - temp-graphify/tests/test_install.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_installpy
SORT file.name ASC
```

## Connections to other communities
- 27 edges to [[_COMMUNITY_graphify__main__.py]]
- 18 edges to [[_COMMUNITY_main]]
- 7 edges to [[_COMMUNITY_test_codebuddy.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY__replace_or_append_section]]

## Top bridge nodes
- [[test_install.py]] - degree 99, connects to 4 communities
- [[gemini_install()]] - degree 19, connects to 2 communities
- [[test_codex_hook_command_is_a_real_cli_subcommand()]] - degree 4, connects to 1 community
- [[test_cursor_uninstall_removes_rule()]] - degree 4, connects to 1 community
- [[test_cursor_install_idempotent()]] - degree 3, connects to 1 community