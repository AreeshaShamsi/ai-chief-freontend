---
type: community
cohesion: 0.19
members: 21
---

# extract_terraform

**Cohesion:** 0.19 - loosely connected
**Members:** 21 nodes

## Members
- [[Extract TerraformHCL blocks and the references between them via tree-sitter.…]] - rationale - temp-graphify/graphify/extractors/terraform.py
- [[Facade  registry identity guards for the per-language extractor split (1212).…]] - rationale - temp-graphify/tests/test_extractors_registry.py
- [[Path_34]] - code
- [[Path_106]] - code
- [[Tests for the TerraformHCL extractor (graphifyextract.py, issue 187).]] - rationale - temp-graphify/tests/test_terraform.py
- [[_labels()_10]] - code - temp-graphify/tests/test_terraform.py
- [[_rel_pairs()]] - code - temp-graphify/tests/test_terraform.py
- [[_write()_25]] - code - temp-graphify/tests/test_terraform.py
- [[extract_terraform()]] - code - temp-graphify/graphify/extractors/terraform.py
- [[test_cross_file_references_resolve_after_merge()]] - code - temp-graphify/tests/test_terraform.py
- [[test_depends_on_edge()]] - code - temp-graphify/tests/test_terraform.py
- [[test_empty_and_commentonly_files_are_safe()]] - code - temp-graphify/tests/test_terraform.py
- [[test_every_registry_extractor_is_reexported_from_facade()]] - code - temp-graphify/tests/test_extractors_registry.py
- [[test_extractors_registry.py]] - code - temp-graphify/tests/test_extractors_registry.py
- [[test_file_contains_blocks()]] - code - temp-graphify/tests/test_terraform.py
- [[test_meta_heads_not_emitted()]] - code - temp-graphify/tests/test_terraform.py
- [[test_no_error_and_all_block_types_become_nodes()]] - code - temp-graphify/tests/test_terraform.py
- [[test_reference_edges()]] - code - temp-graphify/tests/test_terraform.py
- [[test_terraform.py]] - code - temp-graphify/tests/test_terraform.py
- [[test_terraform_migrated()]] - code - temp-graphify/tests/test_extractors_registry.py
- [[test_tfvars_key_value_is_safe()]] - code - temp-graphify/tests/test_terraform.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_terraform
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY__make_id]]
- 3 edges to [[_COMMUNITY_extract.py]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY__fixture]]

## Top bridge nodes
- [[extract_terraform()]] - degree 18, connects to 4 communities
- [[test_terraform.py]] - degree 15, connects to 3 communities
- [[test_extractors_registry.py]] - degree 6, connects to 2 communities
- [[test_cross_file_references_resolve_after_merge()]] - degree 4, connects to 1 community