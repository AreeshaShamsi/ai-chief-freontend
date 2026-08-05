---
type: community
cohesion: 0.15
members: 26
---

# introspect_cargo

**Cohesion:** 0.15 - loosely connected
**Members:** 26 nodes

## Members
- [[A rename pointing at an external (non-workspace) crate stays a no-op. Guards…]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Any]] - code
- [[Cargo manifest introspection for workspace-internal crate dependencies.]] - rationale - temp-graphify/graphify/cargo_introspect.py
- [[Degenerate but parseable manifests should not invent graph data or crash.]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Large deterministic workspace proves chain extraction scales by shape, not…]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Legacy manifests still resolve path deps and ignore bare-string externals.]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Malformed manifests surface the TOML parser failure, not an arbitrary crash.]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Modern workspace forms cover virtual roots, workspace deps, and root packages.]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Path_5]] - code
- [[Real workspace pin raw graph fields while excluding registry-only deps.]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Renamed workspace-internal deps still produce a `crate_depends_on` edge…]] - rationale - temp-graphify/tests/test_cargo_introspect.py
- [[Return crate nodes and internal dependency edges from Cargo manifests.]] - rationale - temp-graphify/graphify/cargo_introspect.py
- [[_load_toml()]] - code - temp-graphify/graphify/cargo_introspect.py
- [[_member_manifest_paths()]] - code - temp-graphify/graphify/cargo_introspect.py
- [[_write_manifest()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[cargo_introspect.py]] - code - temp-graphify/graphify/cargo_introspect.py
- [[introspect_cargo()]] - code - temp-graphify/graphify/cargo_introspect.py
- [[test_cargo_introspect.py]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_degenerate_manifests_return_empty_or_skip_bad_deps()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_honors_package_rename_on_internal_dep()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_large_workspace_dependency_chain()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_malformed_toml_reports_parser_error()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_modern_virtual_and_root_package_workspaces()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_old_manifest_keeps_internal_path_dep_and_skips_external()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_package_rename_falls_through_when_unresolved()]] - code - temp-graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_workspace_internal_dependency_only()]] - code - temp-graphify/tests/test_cargo_introspect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/introspect_cargo
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[introspect_cargo()]] - degree 17, connects to 2 communities