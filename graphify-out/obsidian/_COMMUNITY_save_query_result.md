---
type: community
cohesion: 0.09
members: 32
---

# save_query_result

**Cohesion:** 0.09 - loosely connected
**Members:** 32 nodes

## Members
- [[A plain markdown file with no frontmatter is skipped, not crashed on.]] - rationale - temp-graphify/tests/test_reflect.py
- [[An outcome signal is written to both frontmatter (for `reflect`) and an …]] - rationale - temp-graphify/tests/test_ingest.py
- [[Backward compatible a result without an outcome looks exactly as before.]] - rationale - temp-graphify/tests/test_ingest.py
- [[Parse the frontmatter of a memory doc into a dict, or None if it has none.…]] - rationale - temp-graphify/graphify/reflect.py
- [[Reverse the double-quoted escaping that ingest._yaml_str applies.]] - rationale - temp-graphify/graphify/reflect.py
- [[Save a Q&A result as markdown so it gets extracted into the graph on next…]] - rationale - temp-graphify/graphify/ingest.py
- [[Tests for graphify.ingest.save_query_result]] - rationale - temp-graphify/tests/test_ingest.py
- [[The issue's worked example session 1 records a win and a dead end; session 2…]] - rationale - temp-graphify/tests/test_reflect.py
- [[_yaml_unescape()]] - code - temp-graphify/graphify/reflect.py
- [[parse_memory_doc reads back exactly what save_query_result wrote, including an…]] - rationale - temp-graphify/tests/test_reflect.py
- [[parse_memory_doc()]] - code - temp-graphify/graphify/reflect.py
- [[save - parse preserves tricky characters in the question, the correction, and…]] - rationale - temp-graphify/tests/test_reflect.py
- [[save_query_result()]] - code - temp-graphify/graphify/ingest.py
- [[test_answer_in_body()]] - code - temp-graphify/tests/test_ingest.py
- [[test_correction_in_frontmatter_and_body()]] - code - temp-graphify/tests/test_ingest.py
- [[test_file_created()]] - code - temp-graphify/tests/test_ingest.py
- [[test_filename_format()]] - code - temp-graphify/tests/test_ingest.py
- [[test_frontmatter_question()]] - code - temp-graphify/tests/test_ingest.py
- [[test_frontmatter_type()]] - code - temp-graphify/tests/test_ingest.py
- [[test_ingest.py]] - code - temp-graphify/tests/test_ingest.py
- [[test_invalid_outcome_rejected()]] - code - temp-graphify/tests/test_ingest.py
- [[test_memory_dir_created()]] - code - temp-graphify/tests/test_ingest.py
- [[test_no_outcome_means_no_outcome_section()]] - code - temp-graphify/tests/test_ingest.py
- [[test_outcome_in_frontmatter_and_body()]] - code - temp-graphify/tests/test_ingest.py
- [[test_parse_handles_crlf()]] - code - temp-graphify/tests/test_reflect.py
- [[test_parse_returns_none_for_foreign_doc()]] - code - temp-graphify/tests/test_reflect.py
- [[test_parse_round_trips_a_saved_doc()]] - code - temp-graphify/tests/test_reflect.py
- [[test_reflect_writes_lessons_file()]] - code - temp-graphify/tests/test_reflect.py
- [[test_round_trip_survives_backslash_newline_and_quoted_node()]] - code - temp-graphify/tests/test_reflect.py
- [[test_second_session_benefits_from_the_first()]] - code - temp-graphify/tests/test_reflect.py
- [[test_source_nodes_capped_at_10()]] - code - temp-graphify/tests/test_ingest.py
- [[test_source_nodes_included()]] - code - temp-graphify/tests/test_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/save_query_result
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_test_reflect.py]]
- 5 edges to [[_COMMUNITY_reflect.py]]
- 4 edges to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[save_query_result()]] - degree 26, connects to 4 communities
- [[parse_memory_doc()]] - degree 11, connects to 2 communities
- [[test_second_session_benefits_from_the_first()]] - degree 4, connects to 2 communities
- [[test_reflect_writes_lessons_file()]] - degree 3, connects to 2 communities
- [[test_ingest.py]] - degree 15, connects to 1 community