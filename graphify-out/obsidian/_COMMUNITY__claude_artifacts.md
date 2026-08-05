---
type: community
cohesion: 0.11
members: 19
---

# _claude_artifacts

**Cohesion:** 0.11 - loosely connected
**Members:** 19 nodes

## Members
- [[Decision A the file_type enum is the full six-value superset.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Every referencesname.md the core points at is actually rendered.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[No reference fragment may duplicate the core build pipeline.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Return the ATX markdown headings in source order, ignoring code fences. A…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[The core must not inline the execution detail of an on-demand reference. The…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[The default code-corpus run must be fully described inside the core.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[The fence-aware heading scanner must skip '' lines inside code fences.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[The query section heading is the lean-core stub; query.md re-homes the rest.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[_claude_artifacts()]] - code - temp-graphify/tests/test_skillgen.py
- [[claude renders exactly the eight on-demand fragments from the design.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[headings()]] - code - temp-graphify/tools/skillgen/gen.py
- [[test_eight_references_render_for_claude()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_enum_is_full_six_value_superset_in_extraction_spec()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_headings_helper_ignores_code_fence_comments()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_lean_core_has_no_reference_only_content()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_lean_core_runs_default_pipeline_with_zero_references()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_query_heading_is_homed_in_core_stub_only()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_reference_pointers_in_core_resolve_to_real_fragments()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_references_contain_no_core_pipeline_content()]] - code - temp-graphify/tests/test_skillgen.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_claude_artifacts
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_test_skillgen.py]]
- 3 edges to [[_COMMUNITY_load_platforms]]
- 1 edge to [[_COMMUNITY_render_all]]
- 1 edge to [[_COMMUNITY_gen.py]]

## Top bridge nodes
- [[_claude_artifacts()]] - degree 10, connects to 3 communities
- [[headings()]] - degree 6, connects to 2 communities
- [[test_query_heading_is_homed_in_core_stub_only()]] - degree 4, connects to 1 community
- [[test_eight_references_render_for_claude()]] - degree 3, connects to 1 community
- [[test_enum_is_full_six_value_superset_in_extraction_spec()]] - degree 3, connects to 1 community