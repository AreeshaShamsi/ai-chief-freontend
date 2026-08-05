---
source_file: "temp-graphify/tests/test_cargo_introspect.py"
type: "code"
community: "introspect_cargo"
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/introspect_cargo
---

# _write_manifest()

## Connections
- [[test_cargo_introspect.py]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_degenerate_manifests_return_empty_or_skip_bad_deps()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_honors_package_rename_on_internal_dep()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_large_workspace_dependency_chain()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_malformed_toml_reports_parser_error()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_modern_virtual_and_root_package_workspaces()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_old_manifest_keeps_internal_path_dep_and_skips_external()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_package_rename_falls_through_when_unresolved()]] - `calls` [EXTRACTED]
- [[test_cargo_introspect_workspace_internal_dependency_only()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/introspect_cargo