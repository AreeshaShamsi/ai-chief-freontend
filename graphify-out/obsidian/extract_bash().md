---
source_file: "temp-graphify/graphify/extractors/bash.py"
type: "code"
community: "extract_bash"
location: "L71"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/extract_bash
---

# extract_bash()

## Connections
- [[Extract functions, source imports, and cross-function calls from a .sh file.]] - `rationale_for` [EXTRACTED]
- [[Path_13]] - `references` [EXTRACTED]
- [[_bash_assignment_base()]] - `calls` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[bash.py]] - `contains` [EXTRACTED]
- [[e()]] - `indirect_call` [INFERRED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[sanitize_metadata()]] - `calls` [EXTRACTED]
- [[test_extract_bash_attributes_script_invocation_to_function()]] - `calls` [INFERRED]
- [[test_extract_bash_bare_source_missing_file_fabricates_nothing()]] - `calls` [INFERRED]
- [[test_extract_bash_calls_have_extracted_confidence()]] - `calls` [INFERRED]
- [[test_extract_bash_creates_entrypoint_node()]] - `calls` [INFERRED]
- [[test_extract_bash_emits_calls_edges()]] - `calls` [INFERRED]
- [[test_extract_bash_emits_defines_edges()]] - `calls` [INFERRED]
- [[test_extract_bash_emits_raw_calls_and_bash_sources_for_sourced_calls()]] - `calls` [INFERRED]
- [[test_extract_bash_emits_script_invocation_calls()]] - `calls` [INFERRED]
- [[test_extract_bash_emits_source_imports_from()]] - `calls` [INFERRED]
- [[test_extract_bash_entrypoint_no_collision_with_function_named_script()]] - `calls` [INFERRED]
- [[test_extract_bash_finds_functions()]] - `calls` [INFERRED]
- [[test_extract_bash_missing_grammar_returns_error()]] - `calls` [INFERRED]
- [[test_extract_bash_nested_function_calls_recorded()]] - `calls` [INFERRED]
- [[test_extract_bash_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_extract_bash_no_self_loops()]] - `calls` [INFERRED]
- [[test_extract_bash_node_metadata_is_sanitized()]] - `calls` [INFERRED]
- [[test_extract_bash_process_substitution_not_recorded()]] - `calls` [INFERRED]
- [[test_extract_bash_rejects_command_substitution_as_call()]] - `calls` [INFERRED]
- [[test_extract_bash_shadowing_function_is_recorded()]] - `calls` [INFERRED]
- [[test_extract_bash_skip_builtins_in_calls()]] - `calls` [INFERRED]
- [[test_extract_bash_skips_dynamic_script_invocation()]] - `calls` [INFERRED]
- [[test_extract_bash_skips_missing_and_shadowed_script_invocations()]] - `calls` [INFERRED]
- [[test_extract_bash_source_suffix_guard_mid_path_variable()]] - `calls` [INFERRED]
- [[test_extract_bash_source_suffix_guard_rejects_traversal()]] - `calls` [INFERRED]
- [[test_extract_bash_source_suffix_guard_whole_variable_path()]] - `calls` [INFERRED]
- [[test_extract_bash_source_user_defined_emits_calls_not_imports_from()]] - `calls` [INFERRED]
- [[test_extract_bash_source_via_variable_path_no_match_emits_no_dead_edge()]] - `calls` [INFERRED]
- [[test_extract_bash_source_via_variable_path_resolves_to_real_file()]] - `calls` [INFERRED]
- [[test_extract_bash_top_level_call_attributes_to_entrypoint()]] - `calls` [INFERRED]
- [[test_extract_bash_var_source_script_dir_idiom_still_resolves()]] - `calls` [INFERRED]
- [[test_extract_bash_var_source_untracked_var_keeps_script_dir_guess()]] - `calls` [INFERRED]
- [[test_extract_bash_var_source_uses_tracked_assignment_base()]] - `calls` [INFERRED]

#graphify/code #graphify/INFERRED #community/extract_bash