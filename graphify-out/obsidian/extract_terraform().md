---
source_file: "temp-graphify/graphify/extractors/terraform.py"
type: "code"
community: "extract_terraform"
location: "L11"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/extract_terraform
---

# extract_terraform()

## Connections
- [[Extract TerraformHCL blocks and the references between them via tree-sitter.…]] - `rationale_for` [EXTRACTED]
- [[Path_34]] - `references` [EXTRACTED]
- [[_add_node()]] - `calls` [INFERRED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_read()]] - `calls` [INFERRED]
- [[e()]] - `indirect_call` [INFERRED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[terraform.py]] - `contains` [EXTRACTED]
- [[test_cross_file_references_resolve_after_merge()]] - `calls` [INFERRED]
- [[test_depends_on_edge()]] - `calls` [INFERRED]
- [[test_empty_and_commentonly_files_are_safe()]] - `calls` [INFERRED]
- [[test_extractors_registry.py]] - `imports` [EXTRACTED]
- [[test_file_contains_blocks()]] - `calls` [INFERRED]
- [[test_meta_heads_not_emitted()]] - `calls` [INFERRED]
- [[test_no_error_and_all_block_types_become_nodes()]] - `calls` [INFERRED]
- [[test_reference_edges()]] - `calls` [INFERRED]
- [[test_tfvars_key_value_is_safe()]] - `calls` [INFERRED]

#graphify/code #graphify/INFERRED #community/extract_terraform