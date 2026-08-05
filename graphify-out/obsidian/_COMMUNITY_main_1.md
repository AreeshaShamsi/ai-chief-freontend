---
type: community
cohesion: 0.09
members: 26
---

# main

**Cohesion:** 0.09 - loosely connected
**Members:** 26 nodes

## Members
- [[A hand-edit of an always_on.md is caught by --check (the drift guard).]] - rationale - temp-graphify/tests/test_skillgen.py
- [[A single generated file its repo-relative path and exact bytes.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Byte-diff the render against both committed artifacts and expected. Returns a…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Entry point for ``python -m tools.skillgen``.]] - rationale - temp-graphify/tools/skillgen/__main__.py
- [[Map a repo-relative artifact path to its expected snapshot path. The artifact…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Namespace]] - code
- [[On a shallow checkout (no originv8) the validators skip with exit 0. CI sets…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Path_118]] - code
- [[RenderedArtifact]] - code - temp-graphify/tools/skillgen/gen.py
- [[The committed artifacts and the expected snapshot match a fresh render. This…]] - rationale - temp-graphify/tests/test_skillgen.py
- [[The committed codexwindows artifacts match a fresh render and expected.]] - rationale - temp-graphify/tests/test_skillgen.py
- [[Whether originv8 is fetchable in this checkout. The git-show validators…]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Write artifacts to disk under REPO_ROOT. Returns the paths written.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[Write the current render into expected as the blessed snapshot.]] - rationale - temp-graphify/tools/skillgen/gen.py
- [[_expected_path()]] - code - temp-graphify/tools/skillgen/gen.py
- [[_parse_args()]] - code - temp-graphify/tools/skillgen/gen.py
- [[_v8_available()]] - code - temp-graphify/tools/skillgen/gen.py
- [[bless()]] - code - temp-graphify/tools/skillgen/gen.py
- [[check()]] - code - temp-graphify/tools/skillgen/gen.py
- [[main()_11]] - code - temp-graphify/tools/skillgen/gen.py
- [[skillgen__main__.py]] - code - temp-graphify/tools/skillgen/__main__.py
- [[test_always_on_files_are_guarded_by_check()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_check_passes()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_check_passes_for_codex_and_windows()]] - code - temp-graphify/tests/test_skillgen.py
- [[test_git_show_validators_skip_cleanly_without_origin_v8()]] - code - temp-graphify/tests/test_skillgen.py
- [[write_artifacts()]] - code - temp-graphify/tools/skillgen/gen.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/main
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_gen.py]]
- 6 edges to [[_COMMUNITY_load_platforms]]
- 5 edges to [[_COMMUNITY_render_all]]
- 4 edges to [[_COMMUNITY_test_skillgen.py]]
- 2 edges to [[_COMMUNITY_render_always_on]]
- 1 edge to [[_COMMUNITY_render]]
- 1 edge to [[_COMMUNITY_schema_singleton]]
- 1 edge to [[_COMMUNITY_monolith_roundtrip]]

## Top bridge nodes
- [[main()_11]] - degree 14, connects to 6 communities
- [[RenderedArtifact]] - degree 9, connects to 4 communities
- [[test_always_on_files_are_guarded_by_check()]] - degree 6, connects to 3 communities
- [[test_check_passes()]] - degree 5, connects to 3 communities
- [[test_check_passes_for_codex_and_windows()]] - degree 5, connects to 3 communities