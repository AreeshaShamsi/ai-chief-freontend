---
type: community
cohesion: 0.16
members: 24
---

# CsharpNameResolver

**Cohesion:** 0.16 - loosely connected
**Members:** 24 nodes

## Members
- [[dot-__init__()_5]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-_namespace()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-_resolve_alias()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-_scope_chain()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-_scopes_for()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-_using_in_scope()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-resolve_label()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-resolve_qualified()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[dot-resolve_type_name()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[Arbitrate all C ``inherits````implements````references`` targets. The…]] - rationale - temp-graphify/graphify/extractors/csharp.py
- [[C cross-file resolution. The config-driven C extractor (``extract_csharp``…]] - rationale - temp-graphify/graphify/extractors/csharp.py
- [[CsharpNameResolver]] - code - temp-graphify/graphify/extractors/csharp.py
- [[Namespaceusingalias-aware C simple-name resolution. Factored out of…]] - rationale - temp-graphify/graphify/extractors/csharp.py
- [[Path_15]] - code
- [[Re-point resolvable C ``using`` import edges to canonical internal nodes.…]] - rationale - temp-graphify/graphify/extractors/csharp.py
- [[Resolve a simple type name to a definition node id, with a verdict. Returns…]] - rationale - temp-graphify/graphify/extractors/csharp.py
- [[Return deterministic ``(namespace, name) - node_id`` C type definitions.]] - rationale - temp-graphify/graphify/extractors/csharp.py
- [[_build_csharp_type_def_index()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[_is_cs_file()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[_metadata()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[_resolve_cross_file_csharp_imports()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[_resolve_csharp_type_references()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[_strip_trailing_csharp_generic_args()]] - code - temp-graphify/graphify/extractors/csharp.py
- [[csharp.py]] - code - temp-graphify/graphify/extractors/csharp.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/CsharpNameResolver
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_extract.py]]
- 3 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY__key]]

## Top bridge nodes
- [[csharp.py]] - degree 12, connects to 3 communities
- [[_resolve_csharp_type_references()]] - degree 9, connects to 3 communities
- [[CsharpNameResolver]] - degree 14, connects to 2 communities
- [[_resolve_cross_file_csharp_imports()]] - degree 7, connects to 2 communities