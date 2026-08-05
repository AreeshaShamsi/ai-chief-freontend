---
type: community
cohesion: 0.13
members: 17
---

# _hooks_dir

**Cohesion:** 0.13 - loosely connected
**Members:** 17 nodes

## Members
- [[A Windows-style core.hooksPath must raise (loud failure), not silently create a…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Append git-legal duplicate keyssections (as VS Code writes them).]] - rationale - temp-graphify/tests/test_hooks.py
- [[Path_74]] - code
- [[Raise if a hooks path looks like a Windows absolute path (1385). On POSIXWSL…]] - rationale - temp-graphify/graphify/hooks.py
- [[Return the git hooks directory, respecting core.hooksPath if set (e.g. Husky).…]] - rationale - temp-graphify/graphify/hooks.py
- [[With duplicate keys present, a custom core.hooksPath must still be honored (no…]] - rationale - temp-graphify/tests/test_hooks.py
- [[_append_duplicate_config_entries()]] - code - temp-graphify/tests/test_hooks.py
- [[_hooks_dir()]] - code - temp-graphify/graphify/hooks.py
- [[_reject_windows_path()]] - code - temp-graphify/graphify/hooks.py
- [[_set_hookspath()]] - code - temp-graphify/tests/test_hooks.py
- [[git legally allows duplicate keys and repeated sections in .gitconfig; a…]] - rationale - temp-graphify/tests/test_hooks.py
- [[test_hooks_dir_accepts_absolute_git_hooks_path()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_dir_duplicate_config_keys_honor_custom_hookspath()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_dir_no_warning_on_duplicate_config_keys()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_dir_rejects_multiline_git_output()]] - code - temp-graphify/tests/test_hooks.py
- [[test_hooks_dir_resolves_relative_git_hooks_path()]] - code - temp-graphify/tests/test_hooks.py
- [[test_windows_hookspath_rejected_no_junk_dir_on_posix()]] - code - temp-graphify/tests/test_hooks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_hooks_dir
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_install]]
- 10 edges to [[_COMMUNITY_test_hooks.py]]
- 5 edges to [[_COMMUNITY_hooks.py]]

## Top bridge nodes
- [[_hooks_dir()]] - degree 13, connects to 3 communities
- [[test_hooks_dir_duplicate_config_keys_honor_custom_hookspath()]] - degree 6, connects to 2 communities
- [[test_windows_hookspath_rejected_no_junk_dir_on_posix()]] - degree 6, connects to 2 communities
- [[_set_hookspath()]] - degree 5, connects to 2 communities
- [[test_hooks_dir_no_warning_on_duplicate_config_keys()]] - degree 5, connects to 2 communities