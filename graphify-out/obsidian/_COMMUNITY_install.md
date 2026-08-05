---
type: community
cohesion: 0.10
members: 30
---

# install

**Cohesion:** 0.10 - loosely connected
**Members:** 30 nodes

## Members
- [[2166 end to end the emitted hooks must carry the real interpreter, not ''.]] - rationale - temp-graphify/tests/test_hooks.py
- [[2166 git runs the merge driver through a shell, so a pinned path with a space…]] - rationale - temp-graphify/tests/test_hooks.py
- [[A legitimate POSIX core.hooksPath (Husky-style) must still install.]] - rationale - temp-graphify/tests/test_hooks.py
- [[A pre-existing .gitattributes entry must survive install (no clobber).]] - rationale - temp-graphify/tests/test_hooks.py
- [[End-to-end the files written to .githooks must be nohup-free (1161).]] - rationale - temp-graphify/tests/test_hooks.py
- [[Hook scripts must embed sys.executable so the hook works without the graphify…]] - rationale - temp-graphify/tests/test_hooks.py
- [[Install graphify post-commit and post-checkout hooks in the nearest git repo.]] - rationale - temp-graphify/graphify/hooks.py
- [[No core.hooksPath - normal .githooks install, no rejection.]] - rationale - temp-graphify/tests/test_hooks.py
- [[Running install twice must not duplicate the .gitattributes line.]] - rationale - temp-graphify/tests/test_hooks.py
- [[_make_git_repo()]] - code - temp-graphify/tests/test_hooks.py
- [[install()]] - code - temp-graphify/graphify/hooks.py
- [[install() must set merge.graphify. via git config and add the .gitattributes…]] - rationale - temp-graphify/tests/test_hooks.py
- [[test_default_hooks_dir_unaffected()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_appends_to_existing_hook()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_creates_hook()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_creates_post_checkout_hook()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_embeds_pinned_interpreter()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_idempotent()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_is_executable()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_merge_driver_idempotent()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_pins_interpreter_path_with_spaces()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_post_checkout_is_executable()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_preserves_existing_gitattributes()]] - code - temp-graphify/tests/test_hooks.py
- [[test_install_registers_merge_driver()]] - code - temp-graphify/tests/test_hooks.py
- [[test_installed_hooks_contain_no_nohup()]] - code - temp-graphify/tests/test_hooks.py
- [[test_merge_driver_quotes_interpreter_with_spaces()]] - code - temp-graphify/tests/test_hooks.py
- [[test_no_git_repo_raises()]] - code - temp-graphify/tests/test_hooks.py
- [[test_posix_custom_hookspath_still_works()]] - code - temp-graphify/tests/test_hooks.py
- [[test_uninstall_removes_merge_driver_keeps_other_attrs()]] - code - temp-graphify/tests/test_hooks.py
- [[uninstall() must unset merge.graphify. and remove only the graphify…]] - rationale - temp-graphify/tests/test_hooks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/install
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_test_hooks.py]]
- 17 edges to [[_COMMUNITY_hooks.py]]
- 10 edges to [[_COMMUNITY__hooks_dir]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[install()]] - degree 34, connects to 5 communities
- [[_make_git_repo()]] - degree 30, connects to 3 communities
- [[test_posix_custom_hookspath_still_works()]] - degree 5, connects to 2 communities
- [[test_uninstall_removes_merge_driver_keeps_other_attrs()]] - degree 5, connects to 2 communities
- [[test_default_hooks_dir_unaffected()]] - degree 4, connects to 1 community