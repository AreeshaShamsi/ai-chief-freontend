---
type: community
cohesion: 0.11
members: 31
---

# hooks.py

**Cohesion:** 0.11 - loosely connected
**Members:** 31 nodes

## Members
- [[NOTE do NOT pass --path-format=absolute — added in git 2.31; older git]] - rationale - temp-graphify/graphify/hooks.py
- [[Check if graphify hooks are installed.]] - rationale - temp-graphify/graphify/hooks.py
- [[Install a single git hook, appending if an existing hook is present.]] - rationale - temp-graphify/graphify/hooks.py
- [[Path_40]] - code
- [[Register the graph.json union merge driver in git config + .gitattributes…]] - rationale - temp-graphify/graphify/hooks.py
- [[Remove graphify post-commit and post-checkout hooks.]] - rationale - temp-graphify/graphify/hooks.py
- [[Remove graphify section from a git hook using startend markers.]] - rationale - temp-graphify/graphify/hooks.py
- [[Remove the merge-driver git config keys and the .gitattributes line.]] - rationale - temp-graphify/graphify/hooks.py
- [[Report whether the merge driver is registered (config + gitattributes).]] - rationale - temp-graphify/graphify/hooks.py
- [[Return the user-editable hooks directory. Husky 9 sets core.hooksPath to…]] - rationale - temp-graphify/graphify/hooks.py
- [[The .gitattributes line assigning the graphify merge driver to graph.json. The…]] - rationale - temp-graphify/graphify/hooks.py
- [[True if a (non-comment) `...graph.json ... merge=graphify` line exists.]] - rationale - temp-graphify/graphify/hooks.py
- [[Walk up to find .git directory.]] - rationale - temp-graphify/graphify/hooks.py
- [[_git_root()]] - code - temp-graphify/graphify/hooks.py
- [[_has_merge_attr()]] - code - temp-graphify/graphify/hooks.py
- [[_install_hook()]] - code - temp-graphify/graphify/hooks.py
- [[_merge_attr_line()]] - code - temp-graphify/graphify/hooks.py
- [[_merge_driver_status()]] - code - temp-graphify/graphify/hooks.py
- [[_register_merge_driver()]] - code - temp-graphify/graphify/hooks.py
- [[_uninstall_hook()]] - code - temp-graphify/graphify/hooks.py
- [[_unregister_merge_driver()]] - code - temp-graphify/graphify/hooks.py
- [[_user_hooks_dir()]] - code - temp-graphify/graphify/hooks.py
- [[hooks.py]] - code - temp-graphify/graphify/hooks.py
- [[status()]] - code - temp-graphify/graphify/hooks.py
- [[test_status_installed()]] - code - temp-graphify/tests/test_hooks.py
- [[test_status_not_installed()]] - code - temp-graphify/tests/test_hooks.py
- [[test_status_shows_both_hooks()]] - code - temp-graphify/tests/test_hooks.py
- [[test_uninstall_no_hook()]] - code - temp-graphify/tests/test_hooks.py
- [[test_uninstall_removes_hook()]] - code - temp-graphify/tests/test_hooks.py
- [[test_uninstall_removes_post_checkout_hook()]] - code - temp-graphify/tests/test_hooks.py
- [[uninstall()]] - code - temp-graphify/graphify/hooks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/hookspy
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_install]]
- 11 edges to [[_COMMUNITY_test_hooks.py]]
- 5 edges to [[_COMMUNITY__hooks_dir]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_graphify__main__.py]]
- 1 edge to [[_COMMUNITY__detached_launch]]
- 1 edge to [[_COMMUNITY_multigraph_compat.py]]

## Top bridge nodes
- [[uninstall()]] - degree 17, connects to 6 communities
- [[status()]] - degree 14, connects to 5 communities
- [[hooks.py]] - degree 18, connects to 4 communities
- [[Path_40]] - degree 12, connects to 2 communities
- [[_register_merge_driver()]] - degree 7, connects to 2 communities