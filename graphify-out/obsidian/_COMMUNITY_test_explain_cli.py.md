---
type: community
cohesion: 0.12
members: 32
---

# test_explain_cli.py

**Cohesion:** 0.12 - loosely connected
**Members:** 32 nodes

## Members
- [[2009 past the top-20 cutoff, the remaining callers must still be accounted…]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[A file node plus its members is ordinary precedence, not a tie.]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[A node with n_callers callers, spread across `files` (default 3 files, so…]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[BUG1 an explain connection shows the edge's call-SITE line (in the caller's…]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[Baseline the cut count is still announced (pre-existing behavior).]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[No sidecar = no Lesson line; output identical to pre-feature.]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[Pin the exact ` 20` cutoff itself. The other 2009 tests use 30 and 5…]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[Regression guard nodes at or below the 20-connection cutoff keep the pre-2009…]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[Regression tests for `graphify explain` arrow direction (853).]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[The bug reversing node order flipped which file was reported as fact.]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[Two DIFFERENT symbols that happen to share a label, in different files. This is…]] - rationale - temp-graphify/tests/test_explain_cli.py
- [[_run()_3]] - code - temp-graphify/tests/test_explain_cli.py
- [[_run_expect_exit()]] - code - temp-graphify/tests/test_explain_cli.py
- [[_write_ambiguous_graph()]] - code - temp-graphify/tests/test_explain_cli.py
- [[_write_graph()_3]] - code - temp-graphify/tests/test_explain_cli.py
- [[_write_high_degree_graph()]] - code - temp-graphify/tests/test_explain_cli.py
- [[_write_sidecar()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_callee_shows_callers_as_inbound()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_caller_shows_callee_as_outbound()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_ambiguous_answer_does_not_depend_on_node_order()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_ambiguous_label_lists_every_candidate()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_cli.py]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_connection_shows_call_site_line()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_grouping_boundary_at_exactly_21_vs_20_connections()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_groups_cut_callers_by_file_instead_of_dropping_them()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_matches_within_one_file_are_not_ambiguous()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_no_grouping_section_when_under_cutoff()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_no_lesson_line_for_unannotated_node()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_shows_contested_and_stale_lesson()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_shows_preferred_lesson_line()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_source_file_path_prefers_file_level_node()]] - code - temp-graphify/tests/test_explain_cli.py
- [[test_explain_truncation_notice_present_for_high_degree_node()]] - code - temp-graphify/tests/test_explain_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_explain_clipy
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_main]]
- 1 edge to [[_COMMUNITY_graphify__main__.py]]

## Top bridge nodes
- [[test_explain_cli.py]] - degree 22, connects to 1 community
- [[_run()_3]] - degree 14, connects to 1 community
- [[_run_expect_exit()]] - degree 4, connects to 1 community