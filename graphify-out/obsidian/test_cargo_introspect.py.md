---
source_file: "temp-graphify/tests/test_cargo_introspect.py"
type: "code"
community: "introspect_cargo"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/introspect_cargo
---

# test_cargo_introspect.py

## Connections
- [[_write_manifest()]] - `contains` [EXTRACTED]
- [[cargo_introspect.py]] - `imports_from` [EXTRACTED]
- [[introspect_cargo()]] - `imports` [EXTRACTED]
- [[test_cargo_introspect_degenerate_manifests_return_empty_or_skip_bad_deps()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_honors_package_rename_on_internal_dep()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_large_workspace_dependency_chain()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_malformed_toml_reports_parser_error()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_modern_virtual_and_root_package_workspaces()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_old_manifest_keeps_internal_path_dep_and_skips_external()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_package_rename_falls_through_when_unresolved()]] - `contains` [EXTRACTED]
- [[test_cargo_introspect_workspace_internal_dependency_only()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/introspect_cargo