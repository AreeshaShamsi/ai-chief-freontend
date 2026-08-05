---
type: community
cohesion: 0.04
members: 58
---

# extract_bash

**Cohesion:** 0.04 - loosely connected
**Members:** 58 nodes

## Members
- [[2172 `${VAR}` must resolve against the variable's tracked base. 2079 always…]] - rationale - temp-graphify/tests/test_extract.py
- [[A variable-built source path with no matching file on disk must emit no import…]] - rationale - temp-graphify/tests/test_extract.py
- [[An untracked variable (assigned from the environment, or not assigned in this…]] - rationale - temp-graphify/tests/test_extract.py
- [[Bash extractor must route node metadata through sanitize_metadata so HTML-…]] - rationale - temp-graphify/tests/test_extract.py
- [[Calls made inside a nested (inner) function body must be collected.]] - rationale - temp-graphify/tests/test_extract.py
- [[Entrypoint node must have a distinct ID from a function also named 'script'.…]] - rationale - temp-graphify/tests/test_extract.py
- [[Every bash file produces a `bash_entrypoint` node distinct from the file node,…]] - rationale - temp-graphify/tests/test_extract.py
- [[Extract functions, source imports, and cross-function calls from a .sh file.]] - rationale - temp-graphify/graphify/extractors/bash.py
- [[Path_13]] - code
- [[Resolve a top-level assignment's value to a directory, or None if untracked.…]] - rationale - temp-graphify/graphify/extractors/bash.py
- [[The 2171 bare-name branch keeps the existence gate a name that resolves to no…]] - rationale - temp-graphify/tests/test_extract.py
- [[The canonical script-dir idiom must keep working (2079 regression guard).]] - rationale - temp-graphify/tests/test_extract.py
- [[Top-level function call attaches to the entrypoint node, not orphaned.]] - rationale - temp-graphify/tests/test_extract.py
- [[User-defined function shadowing an external command (installfindetc.) must…]] - rationale - temp-graphify/tests/test_extract.py
- [[When 'source' is a user-defined function, 'source .file.sh' must emit a calls…]] - rationale - temp-graphify/tests/test_extract.py
- [[_bash_assignment_base()]] - code - temp-graphify/graphify/extractors/bash.py
- [[`$(build)` must not be recorded as a call edge to build().]] - rationale - temp-graphify/tests/test_extract.py
- [[`(helper)` (process substitution) must not be recorded as a call edge.]] - rationale - temp-graphify/tests/test_extract.py
- [[`source $CONFIG_FILE` strips to an empty suffix — nothing literal is left to…]] - rationale - temp-graphify/tests/test_extract.py
- [[`source ${DIR}libx.sh` (the `dirname ${BASH_SOURCE0}` idiom) must…]] - rationale - temp-graphify/tests/test_extract.py
- [[`source ${D}..secret.sh` must hit the ``..`` guard. The target file exists…]] - rationale - temp-graphify/tests/test_extract.py
- [[`source lib${X}.sh` keeps an expansion in the suffix, so the ``$``-in-suffix…]] - rationale - temp-graphify/tests/test_extract.py
- [[extract_bash must surface the data cross-file resolution needs a…]] - rationale - temp-graphify/tests/test_extract.py
- [[extract_bash returns error dict when tree-sitter-bash not installed (mocked).]] - rationale - temp-graphify/tests/test_extract.py
- [[extract_bash()]] - code - temp-graphify/graphify/extractors/bash.py
- [[parametrize_4]] - code
- [[test_extract_bash_attributes_script_invocation_to_function()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_bare_source_missing_file_fabricates_nothing()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_calls_have_extracted_confidence()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_creates_entrypoint_node()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_emits_calls_edges()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_emits_defines_edges()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_emits_raw_calls_and_bash_sources_for_sourced_calls()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_emits_script_invocation_calls()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_emits_source_imports_from()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_entrypoint_no_collision_with_function_named_script()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_finds_functions()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_missing_grammar_returns_error()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_nested_function_calls_recorded()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_no_dangling_edges()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_no_self_loops()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_node_metadata_is_sanitized()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_process_substitution_not_recorded()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_rejects_command_substitution_as_call()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_shadowing_function_is_recorded()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_skip_builtins_in_calls()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_skips_dynamic_script_invocation()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_skips_missing_and_shadowed_script_invocations()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_source_suffix_guard_mid_path_variable()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_source_suffix_guard_rejects_traversal()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_source_suffix_guard_whole_variable_path()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_source_user_defined_emits_calls_not_imports_from()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_source_via_variable_path_no_match_emits_no_dead_edge()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_source_via_variable_path_resolves_to_real_file()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_top_level_call_attributes_to_entrypoint()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_var_source_script_dir_idiom_still_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_var_source_untracked_var_keeps_script_dir_guess()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_var_source_uses_tracked_assignment_base()]] - code - temp-graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_bash
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY_test_extract.py]]
- 7 edges to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY__read_text]]
- 1 edge to [[_COMMUNITY_test_security.py]]

## Top bridge nodes
- [[extract_bash()]] - degree 43, connects to 4 communities
- [[test_extract_bash_skip_builtins_in_calls()]] - degree 3, connects to 2 communities
- [[_bash_assignment_base()]] - degree 4, connects to 1 community
- [[test_extract_bash_bare_source_missing_file_fabricates_nothing()]] - degree 3, connects to 1 community
- [[test_extract_bash_creates_entrypoint_node()]] - degree 3, connects to 1 community