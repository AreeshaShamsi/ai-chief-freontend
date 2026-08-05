---
type: community
cohesion: 0.06
members: 62
---

# extract_python

**Cohesion:** 0.06 - loosely connected
**Members:** 62 nodes

## Members
- [[NOTE must run before compile() or linker will fail]] - rationale - temp-graphify/tests/test_rationale.py
- [[A docstring longer than the 80-char cap must be shortened at a word boundary,…]] - rationale - temp-graphify/tests/test_rationale.py
- [[A file with a `revision` variable but no Alembic markers keeps its docstring.]] - rationale - temp-graphify/tests/test_rationale.py
- [[A multi-line docstring's line break + indentation must not survive as a run of…]] - rationale - temp-graphify/tests/test_rationale.py
- [[AST-resolved call edges are deterministic and should be EXTRACTED1.0.]] - rationale - temp-graphify/tests/test_extract.py
- [[Adversarial case ``textwrap.shorten`` alone collapses to just the placeholder…]] - rationale - temp-graphify/tests/test_rationale.py
- [[All edge sources must reference a known node (targets may be external imports).]] - rationale - temp-graphify/tests/test_extract.py
- [[Analyzer.process() calls run_analysis() - cross class→function calls edge.]] - rationale - temp-graphify/tests/test_extract.py
- [[Call-graph pass must produce INFERRED calls edges.]] - rationale - temp-graphify/tests/test_extract.py
- [[Extract classes, functions, and imports from a .py file via tree-sitter AST.]] - rationale - temp-graphify/graphify/extract.py
- [[Function docstrings inside upgradedowngrade should still be captured.]] - rationale - temp-graphify/tests/test_rationale.py
- [[Non-regression a docstring well under 80 chars must pass through byte-for-…]] - rationale - temp-graphify/tests/test_rationale.py
- [[Non-regression a short `` NOTE`` comment must pass through byte-for-byte,…]] - rationale - temp-graphify/tests/test_rationale.py
- [[Path_94]] - code
- [[Regression for 1050 @property  @staticmethod  @classmethod methods were…]] - rationale - temp-graphify/tests/test_rationale.py
- [[Same adversarial case as the Python site a `` WHY`` comment whose content…]] - rationale - temp-graphify/tests/test_rationale.py
- [[Same caller→callee pair must appear only once even if called multiple times.]] - rationale - temp-graphify/tests/test_extract.py
- [[Same invariant as the Python site a long `` WHY`` comment must be shortened…]] - rationale - temp-graphify/tests/test_rationale.py
- [[Same invariant as the Python site a truncated label must never end on a lone…]] - rationale - temp-graphify/tests/test_rationale.py
- [[Tests for rationaledocstring extraction in extract.py.]] - rationale - temp-graphify/tests/test_rationale.py
- [[Trivial docstrings under 20 chars should not become rationale nodes.]] - rationale - temp-graphify/tests/test_rationale.py
- [[When the old 80-char cut happened to land on a ., the Obsidian exporter…]] - rationale - temp-graphify/tests/test_rationale.py
- [[_write_py()]] - code - temp-graphify/tests/test_rationale.py
- [[_write_ts()]] - code - temp-graphify/tests/test_rationale.py
- [[contains  method  inherits  imports edges must always be EXTRACTED.]] - rationale - temp-graphify/tests/test_extract.py
- [[extract_python()]] - code - temp-graphify/graphify/extract.py
- [[run_analysis() calls compute_score() - must appear as a calls edge.]] - rationale - temp-graphify/tests/test_extract.py
- [[test_alembic_function_docstrings_still_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_alembic_module_docstring_suppressed()]] - code - temp-graphify/tests/test_rationale.py
- [[test_calls_deduplication()]] - code - temp-graphify/tests/test_extract.py
- [[test_calls_edges_are_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_calls_edges_emitted()]] - code - temp-graphify/tests/test_extract.py
- [[test_class_docstring_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_decorated_method_node_id_is_class_qualified()]] - code - temp-graphify/tests/test_rationale.py
- [[test_django_migration_module_docstring_suppressed()]] - code - temp-graphify/tests/test_rationale.py
- [[test_docstring_newline_and_indentation_collapsed_to_single_space()]] - code - temp-graphify/tests/test_rationale.py
- [[test_docstring_opening_with_unbroken_long_token_keeps_content()]] - code - temp-graphify/tests/test_rationale.py
- [[test_extract_python_no_dangling_edges()]] - code - temp-graphify/tests/test_extract.py
- [[test_function_docstring_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_generated_file_module_docstring_suppressed()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_adr_in_string_literal_not_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_adr_reference_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_adr_reference_normalized_and_deduped()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_block_comment_rationale_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_rationale_comment_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_rationale_comment_opening_with_unbroken_long_token_keeps_content()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_rationale_label_never_ends_with_bare_period_when_truncated()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_rationale_label_truncates_on_word_boundary()]] - code - temp-graphify/tests/test_rationale.py
- [[test_js_short_rationale_comment_unchanged()]] - code - temp-graphify/tests/test_rationale.py
- [[test_long_docstring_label_truncates_on_word_boundary()]] - code - temp-graphify/tests/test_rationale.py
- [[test_method_calls_module_function()]] - code - temp-graphify/tests/test_extract.py
- [[test_module_docstring_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_non_migration_revision_var_not_suppressed()]] - code - temp-graphify/tests/test_rationale.py
- [[test_rationale.py]] - code - temp-graphify/tests/test_rationale.py
- [[test_rationale_comment_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_rationale_confidence_is_extracted()]] - code - temp-graphify/tests/test_rationale.py
- [[test_rationale_for_edges_present()]] - code - temp-graphify/tests/test_rationale.py
- [[test_run_analysis_calls_compute_score()]] - code - temp-graphify/tests/test_extract.py
- [[test_short_docstring_ignored()]] - code - temp-graphify/tests/test_rationale.py
- [[test_short_docstring_label_unchanged()]] - code - temp-graphify/tests/test_rationale.py
- [[test_structural_edges_are_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_truncated_docstring_never_ends_with_bare_period()]] - code - temp-graphify/tests/test_rationale.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_python
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_extract.py]]
- 10 edges to [[_COMMUNITY_extract_js]]
- 4 edges to [[_COMMUNITY_test_indirect_dispatch.py]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_extract.py]]
- 2 edges to [[_COMMUNITY_test_indirect_dispatch_assign_return.py]]
- 2 edges to [[_COMMUNITY_test_indirect_dispatch_getattr.py]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY__read_text]]

## Top bridge nodes
- [[extract_python()]] - degree 45, connects to 8 communities
- [[test_rationale.py]] - degree 36, connects to 4 communities
- [[test_decorated_method_node_id_is_class_qualified()]] - degree 5, connects to 1 community
- [[test_js_rationale_comment_opening_with_unbroken_long_token_keeps_content()]] - degree 4, connects to 1 community
- [[test_js_rationale_label_never_ends_with_bare_period_when_truncated()]] - degree 4, connects to 1 community