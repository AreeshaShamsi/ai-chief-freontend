---
type: community
cohesion: 0.05
members: 52
---

# test_install_references.py

**Cohesion:** 0.05 - loosely connected
**Members:** 52 nodes

## Members
- [[A bundle dir that exists but has no references subdir is a malformed package…]] - rationale - temp-graphify/tests/test_install_references.py
- [[A monolith platform install removes any orphan references left behind.]] - rationale - temp-graphify/tests/test_install_references.py
- [[A progressive host whose bundle has not shipped installs the monolith.…]] - rationale - temp-graphify/tests/test_install_references.py
- [[A progressive platform install drops references alongside SKILL.md.]] - rationale - temp-graphify/tests/test_install_references.py
- [[Build the wheel and return the set of arcnames inside it. Fails loudly (not…]] - rationale - temp-graphify/tests/test_install_references.py
- [[Direction-aware skill-version mismatch warning (1568). `_check_skill_version`…]] - rationale - temp-graphify/tests/test_skill_version_warning.py
- [[End-to-end every references pointer in gemini's installed SKILL.md resolves.…]] - rationale - temp-graphify/tests/test_install_references.py
- [[Find a progressive host whose bundle dir has not shipped in this build. The…]] - rationale - temp-graphify/tests/test_install_references.py
- [[If SKILL.md links references but the dir is gone, warn to repair.]] - rationale - temp-graphify/tests/test_install_references.py
- [[One .graphify_version stamp versions SKILL.md + references together.]] - rationale - temp-graphify/tests/test_install_references.py
- [[Parse a version string into a comparable integer tuple (``0.9.2`` - ``(0, 9,…]] - rationale - temp-graphify/graphify/__main__.py
- [[Path]] - code
- [[Path_100]] - code
- [[Reinstall swaps references in place, dropping a stale fragment.]] - rationale - temp-graphify/tests/test_install_references.py
- [[Stage a fake references bundle in claude's slot, then restore the real one.…]] - rationale - temp-graphify/tests/test_install_references.py
- [[Tests for the progressive-disclosure references sidecar install path. The real…]] - rationale - temp-graphify/tests/test_install_references.py
- [[The built wheel must carry every skill body, reference, and always-on block.…]] - rationale - temp-graphify/tests/test_install_references.py
- [[Uninstall rmtrees references before the dir walk so the tree is cleared.]] - rationale - temp-graphify/tests/test_install_references.py
- [[Unreadable version probes should not crash startup.]] - rationale - temp-graphify/tests/test_install_references.py
- [[Warn if the installed skill is from an older graphify version.]] - rationale - temp-graphify/graphify/__main__.py
- [[_build_wheel_names()]] - code - temp-graphify/tests/test_install_references.py
- [[_check_skill_version()]] - code - temp-graphify/graphify/__main__.py
- [[_first_unbuilt_progressive_host()]] - code - temp-graphify/tests/test_install_references.py
- [[_install()_1]] - code - temp-graphify/tests/test_install_references.py
- [[_make_skill()]] - code - temp-graphify/tests/test_skill_version_warning.py
- [[_version_tuple()]] - code - temp-graphify/graphify/__main__.py
- [[amp is progressive its corrected user dir also gets the references sidecar.…]] - rationale - temp-graphify/tests/test_install_references.py
- [[antigravity and kimi reuse claude's split bundle, so they go progressive too.…]] - rationale - temp-graphify/tests/test_install_references.py
- [[claude's real bundle ships a lean SKILL.md plus the references sidecar.]] - rationale - temp-graphify/tests/test_install_references.py
- [[fake_bundle()]] - code - temp-graphify/tests/test_install_references.py
- [[package-data must declare the references + always-on globs that ship the…]] - rationale - temp-graphify/tests/test_install_references.py
- [[test_amp_user_install_carries_references()]] - code - temp-graphify/tests/test_install_references.py
- [[test_built_wheel_ships_the_full_skill_payload()]] - code - temp-graphify/tests/test_install_references.py
- [[test_check_skill_version_ignores_permission_error()]] - code - temp-graphify/tests/test_install_references.py
- [[test_check_skill_version_warns_on_missing_references()]] - code - temp-graphify/tests/test_install_references.py
- [[test_claude_install_ships_lean_core_and_references()]] - code - temp-graphify/tests/test_install_references.py
- [[test_claude_twins_ride_the_claude_bundle()]] - code - temp-graphify/tests/test_install_references.py
- [[test_gemini_install_references_all_resolve()]] - code - temp-graphify/tests/test_install_references.py
- [[test_hard_fail_when_bundle_dir_present_but_references_missing()]] - code - temp-graphify/tests/test_install_references.py
- [[test_install_references.py]] - code - temp-graphify/tests/test_install_references.py
- [[test_install_stages_references_sidecar()]] - code - temp-graphify/tests/test_install_references.py
- [[test_matching_version_is_silent()]] - code - temp-graphify/tests/test_skill_version_warning.py
- [[test_monolith_install_clears_orphan_references()]] - code - temp-graphify/tests/test_install_references.py
- [[test_pyproject_declares_references_globs()]] - code - temp-graphify/tests/test_install_references.py
- [[test_reinstall_replaces_references_atomically()]] - code - temp-graphify/tests/test_install_references.py
- [[test_single_version_stamp_covers_skill_and_references()]] - code - temp-graphify/tests/test_install_references.py
- [[test_skill_newer_than_package_recommends_upgrade_not_install()]] - code - temp-graphify/tests/test_skill_version_warning.py
- [[test_skill_older_than_package_recommends_install()]] - code - temp-graphify/tests/test_skill_version_warning.py
- [[test_skill_version_warning.py]] - code - temp-graphify/tests/test_skill_version_warning.py
- [[test_unbuilt_bundle_host_falls_back_to_monolith()]] - code - temp-graphify/tests/test_install_references.py
- [[test_uninstall_removes_references_then_walks_dirs()]] - code - temp-graphify/tests/test_install_references.py
- [[test_version_tuple_orders_numerically()]] - code - temp-graphify/tests/test_skill_version_warning.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_install_referencespy
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_graphify__main__.py]]
- 2 edges to [[_COMMUNITY_main]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY__fixture]]

## Top bridge nodes
- [[test_install_references.py]] - degree 23, connects to 3 communities
- [[_check_skill_version()]] - degree 10, connects to 1 community
- [[test_skill_version_warning.py]] - degree 7, connects to 1 community
- [[_version_tuple()]] - degree 3, connects to 1 community
- [[fake_bundle()]] - degree 3, connects to 1 community