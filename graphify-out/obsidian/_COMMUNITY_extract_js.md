---
type: community
cohesion: 0.04
members: 95
---

# extract_js

**Cohesion:** 0.04 - loosely connected
**Members:** 95 nodes

## Members
- [[A directory with no index file should fall through to the return as-is…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Alias → bare path → .svelte.ts. Two layers of resolution must compose…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Ambient TS declaration files (foo.d.ts) — bare import `.foo.d` should resolve…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Bare module specifiers (no leading dot, no alias match) must still fall through…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Common patterns foo.shared.ts, foo.config.ts, foo.compile.ts,…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Dynamic import edge source should be the enclosing function, not the file.]] - rationale - temp-graphify/tests/test_languages.py
- [[Dynamic import() calls inside functions should produce imports_from edges.]] - rationale - temp-graphify/tests/test_languages.py
- [[Dynamic imports should have EXTRACTED confidence (they are deterministic string…]] - rationale - temp-graphify/tests/test_languages.py
- [[Dynamic template literals (with ${}) must not produce an imports_from edge.]] - rationale - temp-graphify/tests/test_languages.py
- [[Edge case `.eslintrc` and similar dotfiles. Path('.eslintrc').suffix returns…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[End-to-end sanity for the multi-dot pattern via the import handler.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[External  truly missing paths fall back to the input — preserves pre-716…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Extract classes, functions, arrow functions, and imports from a…]] - rationale - temp-graphify/graphify/extract.py
- [[Functions without dynamic imports should not get spurious imports_from edges.]] - rationale - temp-graphify/tests/test_languages.py
- [[If `.js` exists and `.ts` does not, keep the `.js` rewrite from triggering —…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[If `foo.svelte` IS a real markup file, importing `.foo.svelte` must resolve to…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[JS variant of the rune file pattern a `.svelte.js` file (used in JavaScript-…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Path_75]] - code
- [[Real .svelte file imports must still resolve when the .svelte file exists (i.e.…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Real-world repro a TS file uses `await import('.foo')` (no extension) to…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Real-world repro a project has both `auth.ts` (file) and `auth` (directory of…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Regression guard `from '.foo'` where '.foo' doesn't exist but '.foo-…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Resolve a JSTS module path or specifier to a local source file. With a Path…]] - rationale - temp-graphify/graphify/extractors/resolution.py
- [[Sanity `from '.foo.shared.ts'` (explicit) still wins over implicit.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Static template literals (no ${}) should resolve the same as a plain string.]] - rationale - temp-graphify/tests/test_languages.py
- [[Svelte 5 rune file import written as .svelte, real file is .svelte.ts.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Svelte 5 `from '.foo.svelte'` may actually point at `foo.svelte.ts` (a rune-…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[TS ESM convention imports written as .js but the actual file is .ts.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Tests for 716 — TypeScript bare-path imports, Svelte 5 rune file imports…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[The 716 reproducer TS file imports a sibling without an extension.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[The most common case — import with explicit .ts extension — must continue to…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[The other branch of the dynamic-import handler — alias resolution — also needs…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[The regex pass for `import('...')` in .svelte files must also use the new…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[Vite resolver order .ts wins over .svelte for ambiguous bare paths.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[When both `.svelte.ts` and `.svelte.js` exist (hybrid project mid- migration,…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[_import_targets()_1]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[_resolve_js_module_path()]] - code - temp-graphify/graphify/extractors/resolution.py
- [[_write()_7]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[`$libfoo` (alias + bare path) — both layers must work together.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[`.foosub` where .foosubindex.ts exists — nested subpath. Common pattern…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[`const f = function(){}` (function expression, not arrow) must be captured.]] - rationale - temp-graphify/tests/test_extract.py
- [[`from '$libqueue'` where queue is a directory under srclib.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[`from '.queue'` must resolve to `.queueindex.ts`.]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[`import type { X } from '.foo'` — type-only imports must go through the same…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[`import { foo, bar } from '.module'` should emit per-symbol `imports` edges to…]] - rationale - temp-graphify/tests/test_import_extension_resolution.py
- [[extract_js()]] - code - temp-graphify/graphify/extract.py
- [[test_alias_directory_import_resolves_to_index_ts()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_alias_import_with_bare_path_resolves()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_bare_path_import_resolves_in_ts_file()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_directory_import_resolves_to_index_ts()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_dot_svelte_import_resolves_to_dot_svelte_ts()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_dynamic_import_bare_path_resolves()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_end_to_end_multi_dot_import_resolves()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_explicit_svelte_import_still_works()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_explicit_ts_import_still_works()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_external_module_unchanged()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_extract_js_const_function_expression()]] - code - temp-graphify/tests/test_extract.py
- [[test_import_extension_resolution.py]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_named_imports_emit_symbol_edges_after_resolution()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_ambient_d_ts_via_bare_path()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_bare_path_to_svelte()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_bare_path_to_ts()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_bare_path_to_tsx()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_chain_alias_and_extension_compose()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_directory_prefers_index_ts_over_index_js()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_directory_to_index_ts()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_directory_without_index_returns_unchanged()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_does_not_match_partial_directory_name()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_does_not_treat_dotfile_as_extension()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_file_wins_over_sibling_directory()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_handles_subpath_into_directory_with_index()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_js_to_ts_when_real_file_is_ts()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_jsx_to_tsx_when_real_file_is_tsx()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_multi_dot_helper_file()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_multi_dot_with_explicit_extension_still_works()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_prefers_ts_over_svelte_when_both_exist()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_real_js_stays_js_when_ts_does_not_exist()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_real_svelte_file_wins_over_svelte_ts_sibling()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_returns_existing_path_unchanged()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_returns_unchanged_when_nothing_matches()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_svelte_prefers_svelte_ts_over_svelte_js()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_svelte_to_svelte_js_for_javascript_rune_files()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_resolve_svelte_to_svelte_ts_for_rune_files()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_ts_dynamic_import_alias_with_bare_path_resolves()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_ts_dynamic_import_bare_path_resolves()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[test_ts_dynamic_import_confidence()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_dynamic_import_extracts_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_dynamic_import_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_dynamic_import_source_is_function()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_dynamic_template_literal_skipped()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_no_dynamic_import_in_sync_fn()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_static_template_literal_resolved()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_this_field_receiver_not_same_file_collision()]] - code - temp-graphify/tests/test_languages.py
- [[test_type_only_import_with_bare_path_resolves()]] - code - temp-graphify/tests/test_import_extension_resolution.py
- [[this.db.query() should NOT match an unrelated query() in the same file (1316).]] - rationale - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_js
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_test_extract.py]]
- 14 edges to [[_COMMUNITY_extract.py]]
- 10 edges to [[_COMMUNITY_extract_python]]
- 9 edges to [[_COMMUNITY_test_languages.py]]
- 6 edges to [[_COMMUNITY_test_multilang.py]]
- 3 edges to [[_COMMUNITY_test_js_exported_scalar_bindings.py]]
- 2 edges to [[_COMMUNITY__read_text]]
- 2 edges to [[_COMMUNITY_build]]
- 2 edges to [[_COMMUNITY_test_cjs_module_extension.py]]
- 2 edges to [[_COMMUNITY__labels]]
- 2 edges to [[_COMMUNITY__edges_with_relation]]
- 2 edges to [[_COMMUNITY_test_typescript_module_extensions.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_test_build.py]]
- 1 edge to [[_COMMUNITY_test_barrel_local_exports_still_extracted]]
- 1 edge to [[_COMMUNITY_test_barrel_reexport_emits_imports_from]]
- 1 edge to [[_COMMUNITY_test_extract_js_member_require_emits_property_symbol]]
- 1 edge to [[_COMMUNITY_test_extract_tsx_finds_helpers_and_component]]
- 1 edge to [[_COMMUNITY__relations]]
- 1 edge to [[_COMMUNITY__call_pairs]]

## Top bridge nodes
- [[extract_js()]] - degree 80, connects to 21 communities
- [[_resolve_js_module_path()]] - degree 35, connects to 2 communities
- [[test_import_extension_resolution.py]] - degree 44, connects to 1 community
- [[test_dynamic_import_bare_path_resolves()]] - degree 4, connects to 1 community
- [[test_extract_js_const_function_expression()]] - degree 3, connects to 1 community