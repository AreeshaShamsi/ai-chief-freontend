---
type: community
cohesion: 0.12
members: 22
---

# _key

**Cohesion:** 0.12 - loosely connected
**Members:** 22 nodes

## Members
- [[Normalize a classmethod label to a comparison key (drop punctuation).]] - rationale - temp-graphify/graphify/ruby_resolution.py
- [[Resolve C member calls (``recv.Method()``) to the receiver's declared type…]] - rationale - temp-graphify/graphify/extract.py
- [[Resolve Java member calls against the receiver's declared type. Explicit type…]] - rationale - temp-graphify/graphify/extract.py
- [[Resolve Ruby ``Class.new`` and typed ``var.method`` calls by receiver type.…]] - rationale - temp-graphify/graphify/ruby_resolution.py
- [[Resolve cross-file C++ member calls (``f.bar()``, ``f-bar()``, ``Foobar()``,…]] - rationale - temp-graphify/graphify/extract.py
- [[Resolve cross-file Objective-C message sends (``recv sel``) to the real…]] - rationale - temp-graphify/graphify/extract.py
- [[Resolve cross-file Python qualified class-method calls (``ClassName.method()``)…]] - rationale - temp-graphify/graphify/extract.py
- [[Resolve cross-file Swift member calls (``recv.method()``) to the real…]] - rationale - temp-graphify/graphify/extract.py
- [[Resolve cross-file TSJS member calls via constructor-injection type tables…]] - rationale - temp-graphify/graphify/extract.py
- [[Type-aware cross-file resolution for Ruby member calls. Ruby has no type…]] - rationale - temp-graphify/graphify/ruby_resolution.py
- [[_is_type_like_definition()]] - code - temp-graphify/graphify/extractors/resolution.py
- [[_key()]] - code - temp-graphify/graphify/ruby_resolution.py
- [[_resolve_cpp_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_resolve_csharp_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_resolve_java_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_resolve_objc_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_resolve_python_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_resolve_swift_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_resolve_typescript_member_calls()]] - code - temp-graphify/graphify/extract.py
- [[_ruby_raw_calls()]] - code - temp-graphify/graphify/ruby_resolution.py
- [[resolve_ruby_member_calls()]] - code - temp-graphify/graphify/ruby_resolution.py
- [[ruby_resolution.py]] - code - temp-graphify/graphify/ruby_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_key
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY_CsharpNameResolver]]
- 1 edge to [[_COMMUNITY_test_query_induced_edges.py]]

## Top bridge nodes
- [[_is_type_like_definition()]] - degree 9, connects to 2 communities
- [[_resolve_csharp_member_calls()]] - degree 5, connects to 2 communities
- [[_key()]] - degree 10, connects to 1 community
- [[ruby_resolution.py]] - degree 5, connects to 1 community
- [[resolve_ruby_member_calls()]] - degree 5, connects to 1 community