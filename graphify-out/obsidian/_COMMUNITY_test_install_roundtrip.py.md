---
type: community
cohesion: 0.08
members: 29
---

# test_install_roundtrip.py

**Cohesion:** 0.08 - loosely connected
**Members:** 29 nodes

## Members
- [[A leftover references.tmp from a crashed install is cleared on the next install.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[A pre-progressive install (SKILL.md, no references) gains references on…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[Drive the high-level install() entry point with home + cwd in tmp_path.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[Full per-platform install + uninstall round-trip suite. Every platform graphify…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[If a host loses its bundle, the next install clears the orphan references.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[If copytree blows up mid-stage, no half-written references is left visible.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[Install then uninstall every platform's SKILL.md at its real destination.…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[Run _copy_skill_file with home + cwd redirected into tmp_path, restoring cwd.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[Stage a controllable references bundle in claude's slot. Lets a test flip a…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[The public install() entry point round-trips a progressive and a monolith host.…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[True if this platform's references bundle ships in the package right now.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[VS Code Copilot Chat round trip at ~.copilotskillsgraphify + instructions…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[_copy_in_tmp()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[_has_real_bundle()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[_install_via_entrypoint()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[amp's project-scope skill lands under .agentsskills, an Amp search root.]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[amp's user-scope skill lands under ~.configagentsskills (the fix), not…]] - rationale - temp-graphify/tests/test_install_roundtrip.py
- [[fake_progressive_bundle()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[parametrize_13]] - code
- [[test_amp_project_install_at_agents_path()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_amp_user_install_at_corrected_agents_path()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_failed_copytree_leaves_no_partial_references()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_install_entrypoint_roundtrip_for_progressive_and_monolith()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_install_roundtrip.py]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_interrupted_references_staging_self_heals()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_monolith_to_progressive_upgrade()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_progressive_to_monolith_downgrade_clears_references()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_skill_roundtrip_at_real_destination()]] - code - temp-graphify/tests/test_install_roundtrip.py
- [[test_vscode_install_uninstall_roundtrip()]] - code - temp-graphify/tests/test_install_roundtrip.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_install_roundtrippy
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_graphify__main__.py]]
- 1 edge to [[_COMMUNITY__fixture]]

## Top bridge nodes
- [[test_install_roundtrip.py]] - degree 16, connects to 2 communities
- [[fake_progressive_bundle()]] - degree 3, connects to 1 community