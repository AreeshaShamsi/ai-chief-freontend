---
type: community
cohesion: 0.12
members: 30
---

# run_language_resolvers

**Cohesion:** 0.12 - loosely connected
**Members:** 30 nodes

## Members
- [[Append a resolver to the global registry and return it (for inline use).]] - rationale - temp-graphify/graphify/resolver_registry.py
- [[LanguageResolver]] - code - temp-graphify/graphify/resolver_registry.py
- [[One cross-file, language-specific resolution pass. ``resolve`` has the…]] - rationale - temp-graphify/graphify/resolver_registry.py
- [[Path_50]] - code
- [[Registry for cross-file, language-specific resolution passes. Some…]] - rationale - temp-graphify/graphify/resolver_registry.py
- [[Return a copy of the registered resolvers, in registration order.]] - rationale - temp-graphify/graphify/resolver_registry.py
- [[Run every resolver whose suffix appears in ``paths``. Behaviorally identical to…]] - rationale - temp-graphify/graphify/resolver_registry.py
- [[Sanity check for the gap this resolver closes the per-file extractor alone…]] - rationale - temp-graphify/tests/test_pascal_resolution.py
- [[TDerivedGadget inherits only from TBaseGadget. TOtherGadget declares an…]] - rationale - temp-graphify/tests/test_pascal_resolution.py
- [[Tests for cross-file PascalDelphi inherited-method-call resolution. The per-…]] - rationale - temp-graphify/tests/test_pascal_resolution.py
- [[Tests for the language resolver registry (graphify.resolver_registry). The…]] - rationale - temp-graphify/tests/test_language_resolvers.py
- [[_call_edge()]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[_find_raw_call()]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[_labels()_7]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[_make_resolver()]] - code - temp-graphify/tests/test_language_resolvers.py
- [[register()]] - code - temp-graphify/graphify/resolver_registry.py
- [[registered_resolvers()]] - code - temp-graphify/graphify/resolver_registry.py
- [[resolver_registry.py]] - code - temp-graphify/graphify/resolver_registry.py
- [[run_language_resolvers()]] - code - temp-graphify/graphify/resolver_registry.py
- [[test_calls_resolve_across_files_via_inherits_chain()]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[test_cross_file_calls_do_not_cross_unrelated_classes()]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[test_default_registry_contains_swift_then_python()]] - code - temp-graphify/tests/test_language_resolvers.py
- [[test_failing_resolver_is_isolated()]] - code - temp-graphify/tests/test_language_resolvers.py
- [[test_language_resolvers.py]] - code - temp-graphify/tests/test_language_resolvers.py
- [[test_pascal_resolution.py]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[test_pascal_resolver_registered()]] - code - temp-graphify/tests/test_pascal_resolution.py
- [[test_resolver_mutates_edges_in_place()]] - code - temp-graphify/tests/test_language_resolvers.py
- [[test_resolver_runs_only_when_suffix_present()]] - code - temp-graphify/tests/test_language_resolvers.py
- [[test_resolvers_run_in_given_order()]] - code - temp-graphify/tests/test_language_resolvers.py
- [[test_single_file_extraction_reports_unresolved_inherited_call()]] - code - temp-graphify/tests/test_pascal_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/run_language_resolvers
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_extract.py]]
- 4 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_test_pascal.py]]
- 1 edge to [[_COMMUNITY_make_id]]

## Top bridge nodes
- [[run_language_resolvers()]] - degree 11, connects to 2 communities
- [[test_pascal_resolution.py]] - degree 11, connects to 2 communities
- [[LanguageResolver]] - degree 10, connects to 1 community
- [[resolver_registry.py]] - degree 7, connects to 1 community
- [[test_single_file_extraction_reports_unresolved_inherited_call()]] - degree 5, connects to 1 community