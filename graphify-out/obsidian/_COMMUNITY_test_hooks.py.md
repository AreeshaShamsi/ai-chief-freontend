---
type: community
cohesion: 0.05
members: 50
---

# test_hooks.py

**Cohesion:** 0.05 - loosely connected
**Members:** 50 nodes

## Members
- [[2166 a space must not empty the pin. The install-time allowlist had no space,…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Both hooks must short-circuit in a linked worktree (git-dir != common-dir), and…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Both the launcher and the rebuild body it re-executes must parse, so a quoting…]] - rationale - temp-graphify/tests/test_hooks.py
- [[End-to-end against a real `git worktree` the guard falls through on the…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Extract the `python -c payload` the hook hands to GRAPHIFY_PYTHON. The…]] - rationale - temp-graphify/tests/test_hooks.py
- [[GRAPHIFY_SKIP_HOOK=1 must suppress BOTH hooks. post-checkout previously lacked…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Git for Windows' bundled shell ships no `nohup``setsid`, so the old `nohup ...…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Git for WindowsMSYS hooks can expose fragile pipe handles to spawned…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Hook script must skip shebang extraction for .exe binaries (Windows).]] - rationale - temp-graphify/tests/test_hooks.py
- [[On Windows, `command -v graphify` can return the launcher path WITHOUT its .exe…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Return sys.executable if its path is shell-safe, else an empty string. Applies…]] - rationale - temp-graphify/graphify/hooks.py
- [[Tests for hooks.py - git hook installuninstall.]] - rationale - temp-graphify/tests/test_hooks.py
- [[The .graphify_root snippet must parse so a quoting slip can't ship a hook that…]] - rationale - temp-graphify/tests/test_hooks.py
- [[The detection fallback must emit a message to stderr rather than bare exit 0. A…]] - rationale - temp-graphify/tests/test_hooks.py
- [[The launcher is carried inside a shell double-quoted `-c ...` argument, so it…]] - rationale - temp-graphify/tests/test_hooks.py
- [[The rebuild must honour the persisted scan root rather than hardcoding the repo…]] - rationale - temp-graphify/tests/test_hooks.py
- [[The replacement detaches via Python start_new_session on POSIX and…]] - rationale - temp-graphify/tests/test_hooks.py
- [[The shared rebuild bodies are embedded verbatim into the launcher, so they too…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Widening the allowlist for spaces (2166) must not admit anything that can…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Windows has no signal.SIGALRM, so the 791 rebuild timeout never armed there at…]] - rationale - temp-graphify/tests/test_hooks.py
- [[_launcher_payload()]] - code - temp-graphify/tests/test_hooks.py
- [[_pinned_python()]] - code - temp-graphify/graphify/hooks.py
- [[_worktree_guard_snippet()]] - code - temp-graphify/tests/test_hooks.py
- [[`python -c import graphify` executes the FULL package import — 10s+ on a cold…]] - rationale - temp-graphify/tests/test_hooks.py
- [[git exports GIT_DIR to hooks, so the rev-parse fallback should only run when…]] - rationale - temp-graphify/tests/test_hooks.py
- [[graphify hook-check must not emit additionalContext — Codex Desktop rejects it.]] - rationale - temp-graphify/tests/test_hooks.py
- [[parametrize_9]] - code
- [[pip on Windows puts Scriptsgraphify(.exe) beside ..python.exe (or…]] - rationale - temp-graphify/tests/test_hooks.py
- [[test_hook_check_no_additionalContext()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hook_skips_head_on_exe()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks.py]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_do_not_use_nohup()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_honor_skip_env()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_limit_windows_workers_by_default()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_reuse_git_dir_from_env()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_skip_linked_worktrees()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_use_cross_platform_detach()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_fallback_is_loud_not_silent()]] - code - temp-graphify/tests/test_hooks.py
- [[test_launcher_and_rebuild_body_are_valid_python()]] - code - temp-graphify/tests/test_hooks.py
- [[test_launcher_payload_is_shell_quote_safe()]] - code - temp-graphify/tests/test_hooks.py
- [[test_pinned_python_accepts_paths_containing_spaces()]] - code - temp-graphify/tests/test_hooks.py
- [[test_pinned_python_still_rejects_shell_metacharacters()]] - code - temp-graphify/tests/test_hooks.py
- [[test_probe_prefers_sibling_python_exe_on_windows_layouts()]] - code - temp-graphify/tests/test_hooks.py
- [[test_probes_use_find_spec_not_full_import()]] - code - temp-graphify/tests/test_hooks.py
- [[test_rebuild_bodies_are_shell_quote_safe()]] - code - temp-graphify/tests/test_hooks.py
- [[test_rebuild_bodies_arm_a_timeout_without_sigalrm()]] - code - temp-graphify/tests/test_hooks.py
- [[test_rebuild_bodies_read_graphify_root()]] - code - temp-graphify/tests/test_hooks.py
- [[test_rebuild_bodies_with_graphify_root_are_valid_python()]] - code - temp-graphify/tests/test_hooks.py
- [[test_shebang_read_is_null_byte_safe()]] - code - temp-graphify/tests/test_hooks.py
- [[test_worktree_guard_runs_on_primary_skips_linked()]] - code - temp-graphify/tests/test_hooks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_hookspy
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_install]]
- 11 edges to [[_COMMUNITY_hooks.py]]
- 10 edges to [[_COMMUNITY__hooks_dir]]
- 8 edges to [[_COMMUNITY_test_file_path_allowlist_accepts_windows_backslash_path]]
- 2 edges to [[_COMMUNITY__detached_launch]]

## Top bridge nodes
- [[test_hooks.py]] - degree 69, connects to 5 communities
- [[parametrize_9]] - degree 16, connects to 2 communities
- [[_pinned_python()]] - degree 7, connects to 2 communities