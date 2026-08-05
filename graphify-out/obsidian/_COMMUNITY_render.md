---
type: community
cohesion: 0.09
members: 30
---

# render

**Cohesion:** 0.09 - loosely connected
**Members:** 30 nodes

## Members
- [[1757 generated monoliths pass the dispatched-file allowlist when replacing…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[dot-hooks_target()]] - code - temp-graphify/tools/skillgen/gen.py
- [[dot-reference_sources()]] - code - temp-graphify/tools/skillgen/gen.py
- [[Every platform now carries one unified frontmatter description, byte for byte.…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Fill the agents-md hooks template's per-host slots for this platform. The…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Fill the shared core template's per-platform slots for this platform.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Force LF newlines and exactly one trailing newline.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[One render unit parsed from platforms.toml.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Platform]] - code - temp-graphify/tools/skillgen/gen.py
- [[Read a fragment file under fragments, normalised to LF newlines.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Render every committed artifact for one platform. A split platform yields the…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Render the YAML frontmatter from the platform's name and description. Only…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Resolve the rendered-name - source-fragment map for this split platform.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[The agents skill body is amp's body verbatim (it re-homes amp's bundle). The…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[The four 1392 data-losscorrectness fixes are present in both monoliths. The…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[The prose file name the lean-core hooks pointer names for this host.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[_normalise()]] - code - temp-graphify/tools/skillgen/gen.py
- [[_read_fragment()]] - code - temp-graphify/tools/skillgen/gen.py
- [[_render_agents_md_hooks()]] - code - temp-graphify/tools/skillgen/gen.py
- [[_render_core()]] - code - temp-graphify/tools/skillgen/gen.py
- [[_render_frontmatter()]] - code - temp-graphify/tools/skillgen/gen.py
- [[aider and devin render one inline body, no split and no references dir.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[devin renders inline, so its 4+-field frontmatter is preserved verbatim.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[render()]] - code - temp-graphify/tools/skillgen/gen.py
- [[test_agents_body_matches_amp_modulo_hooks_wording()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_descriptions_are_unified()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_devin_keeps_its_multi_field_frontmatter()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_monoliths_carry_the_1392_runbook_fixes()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_monoliths_render_inline_single_file_no_references()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_monoliths_scope_semantic_cache_writes_to_uncached_files()]] - code - temp-graphify/tests/test_skillgen.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/render
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_load_platforms]]
- 7 edges to [[_COMMUNITY_gen.py]]
- 6 edges to [[_COMMUNITY_test_skillgen.py]]
- 4 edges to [[_COMMUNITY_monolith_roundtrip]]
- 2 edges to [[_COMMUNITY_render_all]]
- 2 edges to [[_COMMUNITY_schema_singleton]]
- 1 edge to [[_COMMUNITY_render_always_on]]
- 1 edge to [[_COMMUNITY_main_1]]

## Top bridge nodes
- [[render()]] - degree 20, connects to 6 communities
- [[Platform]] - degree 13, connects to 5 communities
- [[_read_fragment()]] - degree 7, connects to 2 communities
- [[_normalise()]] - degree 6, connects to 2 communities
- [[test_agents_body_matches_amp_modulo_hooks_wording()]] - degree 4, connects to 2 communities