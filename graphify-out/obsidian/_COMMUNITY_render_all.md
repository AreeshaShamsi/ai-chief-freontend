---
type: community
cohesion: 0.14
members: 14
---

# render_all

**Cohesion:** 0.14 - loosely connected
**Members:** 14 nodes

## Members
- [[1939 a skill's cache read and write must both name the extraction prompt they…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[A full render carries the always-on files; a --platform render does not.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Generated artifacts use LF newlines and end in exactly one newline.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[No generated artifact carries the package version string.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Regression for 1461 every skill body that describes Step 3 extraction must…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Render the selected platforms (or all), flattened into one artifact list. A…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Rendering twice yields byte-identical output (no timestampsversions).]] - rationale - temp-graphify/tests/test_skillgen.py
- [[render_all()]] - code - temp-graphify/tools/skillgen/gen.py
- [[test_always_on_included_in_full_render_not_per_platform()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_extraction_states_no_api_key_required_for_every_host()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_no_version_or_timestamp_in_output()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_render_is_idempotent()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_render_output_is_lf_only()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_semantic_cache_calls_pass_prompt_file_for_every_split_host()]] - code - temp-graphify/tests/test_skillgen.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/render_all
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_skillgen.py]]
- 7 edges to [[_COMMUNITY_load_platforms]]
- 5 edges to [[_COMMUNITY_main_1]]
- 2 edges to [[_COMMUNITY_render]]
- 1 edge to [[_COMMUNITY__claude_artifacts]]
- 1 edge to [[_COMMUNITY_gen.py]]
- 1 edge to [[_COMMUNITY_render_always_on]]

## Top bridge nodes
- [[render_all()]] - degree 19, connects to 7 communities
- [[test_always_on_included_in_full_render_not_per_platform()]] - degree 4, connects to 2 communities
- [[test_extraction_states_no_api_key_required_for_every_host()]] - degree 4, connects to 2 communities
- [[test_no_version_or_timestamp_in_output()]] - degree 4, connects to 2 communities
- [[test_render_is_idempotent()]] - degree 4, connects to 2 communities