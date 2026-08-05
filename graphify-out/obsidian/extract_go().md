---
source_file: "temp-graphify/graphify/extractors/go.py"
type: "code"
community: "_make_id"
location: "L82"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/_make_id
---

# extract_go()

## Connections
- [[Extract functions, methods, type declarations, and imports from a .go file.]] - `rationale_for` [EXTRACTED]
- [[Path_21]] - `references` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[e()]] - `indirect_call` [INFERRED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[go.py]] - `contains` [EXTRACTED]
- [[test_go_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_go_embeds_struct_field()]] - `calls` [INFERRED]
- [[test_go_emits_calls()]] - `calls` [INFERRED]
- [[test_go_finds_constructor()]] - `calls` [INFERRED]
- [[test_go_finds_methods()]] - `calls` [INFERRED]
- [[test_go_finds_struct()]] - `calls` [INFERRED]
- [[test_go_has_extracted_calls()]] - `calls` [INFERRED]
- [[test_go_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_go_interface_embedding_emits_embeds()]] - `calls` [INFERRED]
- [[test_go_method_declaration_emits_refs_only_when_name_present()]] - `indirect_call` [INFERRED]
- [[test_go_method_parameter_return_contexts()]] - `calls` [INFERRED]
- [[test_go_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_go_receiver_methods_share_type_node()]] - `calls` [INFERRED]
- [[test_go_receiver_uses_pkg_scope()]] - `calls` [INFERRED]
- [[test_go_struct_named_field_emits_field_context()]] - `calls` [INFERRED]

#graphify/code #graphify/INFERRED #community/_make_id