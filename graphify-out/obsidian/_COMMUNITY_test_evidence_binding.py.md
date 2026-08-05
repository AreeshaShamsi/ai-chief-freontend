---
type: community
cohesion: 0.17
members: 21
---

# test_evidence_binding.py

**Cohesion:** 0.17 - loosely connected
**Members:** 21 nodes

## Members
- [[Downgrade code-typed nodes whose symbol name has no evidence in the source the…]] - rationale - temp-graphify/graphify/llm.py
- [[Drive extract_files_direct with a faked backend returning ``nodes``.]] - rationale - temp-graphify/tests/test_evidence_binding.py
- [[Identifier tokens from a node label, stripped of a trailing callargs…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for semantic evidence-binding in graphify.llm. A code node the model…]] - rationale - temp-graphify/tests/test_evidence_binding.py
- [[_bind_node_evidence()]] - code - temp-graphify/graphify/llm.py
- [[_by_label()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[_label_identifiers()]] - code - temp-graphify/graphify/llm.py
- [[_run()_2]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_bind_node_evidence_returns_downgrade_count()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_document_and_sourceless_nodes_are_never_flagged()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_downgrade_emits_stderr_summary()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_evidence_binding.py]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_evidence_binding_handles_absolute_source_file()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_evidence_binding_handles_file_slice()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_existing_lower_confidence_is_not_overwritten()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_fabricated_code_symbol_is_downgraded()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_label_identifiers_helper()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_node_attributed_to_undispatched_file_is_left_to_out_of_scope()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_qualified_and_prettified_labels_do_not_false_positive()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_uncheckable_short_label_is_not_flagged()]] - code - temp-graphify/tests/test_evidence_binding.py
- [[test_unverified_flag_does_not_fail_validation()]] - code - temp-graphify/tests/test_evidence_binding.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_evidence_bindingpy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_test_multigraph_diagnostics.py]]
- 3 edges to [[_COMMUNITY_llm.py]]
- 2 edges to [[_COMMUNITY_test_file_slice.py]]
- 2 edges to [[_COMMUNITY_test_image_vision.py]]
- 2 edges to [[_COMMUNITY_extract_files_direct]]
- 2 edges to [[_COMMUNITY_validate_extraction]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]

## Top bridge nodes
- [[test_evidence_binding.py]] - degree 22, connects to 5 communities
- [[_bind_node_evidence()]] - degree 9, connects to 3 communities
- [[_run()_2]] - degree 10, connects to 1 community
- [[_label_identifiers()]] - degree 4, connects to 1 community
- [[test_evidence_binding_handles_file_slice()]] - degree 3, connects to 1 community