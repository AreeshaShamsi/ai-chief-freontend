---
type: community
cohesion: 0.24
members: 10
---

# render_always_on

**Cohesion:** 0.24 - loosely connected
**Members:** 10 nodes

## Members
- [[Assert each always_on.md reproduces its former constant byte for byte. The…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Each always_on.md reproduces its former __main__.py constant byte for byte.…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Parse the always-on string constants out of a __main__.py blob. Reads the…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Render the six always-on instruction blocks to graphifyalways_on.md. These…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[_always_on_constants()]] - code - temp-graphify/tools/skillgen/gen.py
- [[always_on_roundtrip()]] - code - temp-graphify/tools/skillgen/gen.py
- [[render_always_on yields exactly the six always-on instruction files.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[render_always_on()]] - code - temp-graphify/tools/skillgen/gen.py
- [[test_always_on_renders_six_blocks()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_always_on_roundtrip_is_byte_faithful()]] - code - temp-graphify/tests/test_skillgen.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/render_always_on
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_gen.py]]
- 2 edges to [[_COMMUNITY_test_skillgen.py]]
- 2 edges to [[_COMMUNITY_main_1]]
- 1 edge to [[_COMMUNITY_render]]
- 1 edge to [[_COMMUNITY_render_all]]
- 1 edge to [[_COMMUNITY_load_platforms]]

## Top bridge nodes
- [[render_always_on()]] - degree 8, connects to 4 communities
- [[always_on_roundtrip()]] - degree 6, connects to 2 communities
- [[_always_on_constants()]] - degree 5, connects to 2 communities
- [[test_always_on_roundtrip_is_byte_faithful()]] - degree 5, connects to 1 community
- [[test_always_on_renders_six_blocks()]] - degree 3, connects to 1 community