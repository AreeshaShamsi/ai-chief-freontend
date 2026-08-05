---
type: community
cohesion: 0.07
members: 47
---

# claude_install

**Cohesion:** 0.07 - loosely connected
**Members:** 47 nodes

## Members
- [[A hook relocated to .claudesettings.local.json is removed on uninstall.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[A non-UTF-8 CLAUDE.local.md must not abort uninstall (it has no marker to…]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Appends to an existing CLAUDE.md without clobbering it.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Creates CLAUDE.md when none exists.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Global skill deletes land inside the sandbox home, never the real one. Since…]] - rationale - temp-graphify/tests/test_home_sandbox.py
- [[Instructions relocated to .claudeCLAUDE.local.md are removed on uninstall.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Regression tests for the repo-wide HOME sandbox (issue 2168). The autouse…]] - rationale - temp-graphify/tests/test_home_sandbox.py
- [[Removes the graphify section after it was installed.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Running claude_install twice does not duplicate the PreToolUse hook.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Running install twice does not duplicate the section.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Second install prints the 'already configured' message.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Tests for graphify claude install  uninstall commands.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Uninstall keeps non-graphify content in CLAUDE.local.md.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Uninstall keeps pre-existing content outside the graphify section.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Uninstall on a CLAUDE.md without graphify section prints a message and exits…]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Uninstall when no CLAUDE.md exists prints a message and exits cleanly.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[When the section lives in both CLAUDE.md and a local variant, both are cleaned.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[Write the graphify section to the local CLAUDE.md.]] - rationale - temp-graphify/graphify/install.py
- [[Written section includes the three rules.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[claude_install also writes .claudesettings.json with PreToolUse hook.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[claude_install()]] - code - temp-graphify/graphify/install.py
- [[claude_uninstall removes the PreToolUse hook from settings.json.]] - rationale - temp-graphify/tests/test_claude_md.py
- [[claude_uninstall()]] - code - temp-graphify/graphify/install.py
- [[test_claude_config_dir_escape_hatch_is_cleared()]] - code - temp-graphify/tests/test_home_sandbox.py
- [[test_claude_md.py]] - code - temp-graphify/tests/test_claude_md.py
- [[test_expanduser_is_sandboxed()]] - code - temp-graphify/tests/test_home_sandbox.py
- [[test_global_uninstall_is_captured_by_sandbox()]] - code - temp-graphify/tests/test_home_sandbox.py
- [[test_home_sandbox.py]] - code - temp-graphify/tests/test_home_sandbox.py
- [[test_install_appends_to_existing_claude_md()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_install_contains_expected_rules()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_install_creates_claude_md()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_install_creates_settings_json()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_install_idempotent_message()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_install_is_idempotent()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_install_settings_json_idempotent()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_path_home_is_sandboxed()]] - code - temp-graphify/tests/test_home_sandbox.py
- [[test_uninstall_cleans_both_standard_and_local()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_no_op_when_no_file()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_no_op_when_not_installed()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_preserves_other_content()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_preserves_other_content_in_local_md()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_removes_hook_from_settings_local_json()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_removes_section()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_removes_section_from_dot_claude_local_md()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_removes_section_from_root_claude_local_md()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_removes_settings_hook()]] - code - temp-graphify/tests/test_claude_md.py
- [[test_uninstall_tolerates_unreadable_local_md()]] - code - temp-graphify/tests/test_claude_md.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/claude_install
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_graphify__main__.py]]
- 1 edge to [[_COMMUNITY__replace_or_append_section]]
- 1 edge to [[_COMMUNITY_test_codebuddy.py]]
- 1 edge to [[_COMMUNITY_test_uninstall_scope.py]]

## Top bridge nodes
- [[claude_uninstall()]] - degree 23, connects to 3 communities
- [[claude_install()]] - degree 25, connects to 2 communities
- [[test_claude_md.py]] - degree 20, connects to 1 community
- [[test_home_sandbox.py]] - degree 6, connects to 1 community