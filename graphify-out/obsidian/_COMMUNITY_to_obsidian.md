---
type: community
cohesion: 0.07
members: 46
---

# to_obsidian

**Cohesion:** 0.07 - loosely connected
**Members:** 46 nodes

## Members
- [[1236 follow-up the fix landed in to_obsidian but not to_canvas, so `graphify…]] - rationale - temp-graphify/tests/test_obsidian_dangling_member.py
- [[1452 a community's node cards are laid out in the same ceil(sqrt(n))-column…]] - rationale - temp-graphify/tests/test_export.py
- [[1506 exporting into an existing vault must not overwrite a user's note that…]] - rationale - temp-graphify/tests/test_export.py
- [[1896 follow-on a node that disappears and later returns must be writable…]] - rationale - temp-graphify/tests/test_export.py
- [[1896 re-exporting into the same vault must delete graphify's own notes for…]] - rationale - temp-graphify/tests/test_export.py
- [[2205 follow-up the `dot-` prefix only applies when a word char survives the…]] - rationale - temp-graphify/tests/test_export.py
- [[2205 Obsidian hides notes whose names start with `.` — `.env` must become…]] - rationale - temp-graphify/tests/test_export.py
- [[A community whose members are all dangling should still not crash.]] - rationale - temp-graphify/tests/test_obsidian_dangling_member.py
- [[A re-run overwrites graphify's own prior notes (via the manifest) but leaves a…]] - rationale - temp-graphify/tests/test_export.py
- [[Export graph as an Obsidian Canvas file - communities as groups, nodes as…]] - rationale - temp-graphify/graphify/export.py
- [[Export graph as an Obsidian vault - one .md file per node with wikilinks,…]] - rationale - temp-graphify/graphify/export.py
- [[Filename stem for an Obsidian note  canvas card from a node label. Strips…]] - rationale - temp-graphify/graphify/export.py
- [[Map each node_id to a unique note filename, appending a numeric suffix on…]] - rationale - temp-graphify/graphify/export.py
- [[No regression a freshempty dir still gets every note + .obsidiangraph.json.]] - rationale - temp-graphify/tests/test_export.py
- [[Regression test for issue 1236 to_obsidian must not crash with KeyError when…]] - rationale - temp-graphify/tests/test_obsidian_dangling_member.py
- [[Regression tests for issue 1094 to_obsidian  to_canvas must cap filenames to…]] - rationale - temp-graphify/tests/test_obsidian_filename_cap.py
- [[Two community labels differing only by case must each get their own…]] - rationale - temp-graphify/tests/test_export.py
- [[Two real nodes plus a community that references a third, non-existent id.]] - rationale - temp-graphify/tests/test_obsidian_dangling_member.py
- [[_dedup_node_filenames()]] - code - temp-graphify/graphify/export.py
- [[_four_node_two_community_graph()]] - code - temp-graphify/tests/test_export.py
- [[_graph()_1]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[_graph_with_dangling_member()]] - code - temp-graphify/tests/test_obsidian_dangling_member.py
- [[_max_name_bytes()]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[_obsidian_safe_stem()]] - code - temp-graphify/graphify/export.py
- [[_two_node_graph()]] - code - temp-graphify/tests/test_export.py
- [[test_canvas_dangling_community_member_does_not_crash()]] - code - temp-graphify/tests/test_obsidian_dangling_member.py
- [[test_canvas_long_label_file_ref_capped()]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_community_of_only_dangling_members()]] - code - temp-graphify/tests/test_obsidian_dangling_member.py
- [[test_obsidian_dangling_community_member_does_not_crash()]] - code - temp-graphify/tests/test_obsidian_dangling_member.py
- [[test_obsidian_dangling_member.py]] - code - temp-graphify/tests/test_obsidian_dangling_member.py
- [[test_obsidian_distinct_long_labels_sharing_prefix_do_not_collide()]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_filename_cap.py]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_long_ascii_label_does_not_crash()]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_long_cjk_label_byte_cap()]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_safe_stem_all_dots_label_falls_back_to_unnamed()]] - code - temp-graphify/tests/test_export.py
- [[test_obsidian_wikilink_resolves_after_truncation()]] - code - temp-graphify/tests/test_obsidian_filename_cap.py
- [[test_to_canvas_node_grid_matches_box_columns()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_community_notes_case_collision()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_empty_dir_writes_full_vault()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_leading_dot_labels_are_not_hidden_filenames()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_preserves_existing_user_notes_and_obsidian_config()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_removed_node_returning_is_writable_again()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_rerun_prunes_removed_nodes()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_rerun_updates_own_notes_but_not_user_files()]] - code - temp-graphify/tests/test_export.py
- [[to_canvas()]] - code - temp-graphify/graphify/export.py
- [[to_obsidian()]] - code - temp-graphify/graphify/export.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/to_obsidian
SORT file.name ASC
```

## Connections to other communities
- 23 edges to [[_COMMUNITY_test_export.py]]
- 12 edges to [[_COMMUNITY_to_json]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_generate]]
- 1 edge to [[_COMMUNITY_test_build.py]]

## Top bridge nodes
- [[to_obsidian()]] - degree 33, connects to 6 communities
- [[to_canvas()]] - degree 19, connects to 4 communities
- [[_obsidian_safe_stem()]] - degree 7, connects to 2 communities
- [[test_to_canvas_node_grid_matches_box_columns()]] - degree 4, connects to 2 communities
- [[test_to_obsidian_community_notes_case_collision()]] - degree 4, connects to 2 communities