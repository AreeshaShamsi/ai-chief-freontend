---
type: community
cohesion: 0.04
members: 88
---

# test_reflect.py

**Cohesion:** 0.04 - loosely connected
**Members:** 88 nodes

## Members
- [[--answer-file lets callers pass a longmultiline answer via a file instead of a…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A cited node no longer in the graph is dropped from lessons entirely.]] - rationale - temp-graphify/tests/test_reflect.py
- [[A doc whose source nodes split evenly across communities lands in the…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A fresh dead_end outweighs a stale useful (30d half-life), so the contested…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A label refresh changes LESSONS.md topic headings, so --if-stale must rebuild.]] - rationale - temp-graphify/tests/test_reflect.py
- [[A mixed-signal node appears in a single Contested line, not silently in both a…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A node cited twice within one doc counts as ONE corroborating result, so it…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A node seen only in dead_end docs never appears as a source bucket entry, but…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A same-date useful + dead_end on one node cancel to score 0 - 'evenly split'.]] - rationale - temp-graphify/tests/test_reflect.py
- [[Aggregate parsed memory docs into a deterministic lessons structure. ``now``…]] - rationale - temp-graphify/graphify/reflect.py
- [[Assemble the report's work-memory inputs from sibling artifacts. Reads the…]] - rationale - temp-graphify/graphify/report.py
- [[CompletedProcess_2]] - code
- [[Corroboration (k=2) + sign decide the bucket, not raw frequency A is useful…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Determinism hinges on this sort docs come back oldest-first, filename as…]] - rationale - temp-graphify/tests/test_reflect.py
- [[First run with no graphify-outmemory still succeeds and writes a valid doc.]] - rationale - temp-graphify/tests/test_reflect.py
- [[Neither --answer nor --answer-file - clean argparse error, not a crash.]] - rationale - temp-graphify/tests/test_reflect.py
- [[One save can't mint a 'preferred' lesson; a second distinct result promotes it.]] - rationale - temp-graphify/tests/test_reflect.py
- [[Parse every memory doc under ``memory_dir``, sorted by date then filename. Each…]] - rationale - temp-graphify/graphify/reflect.py
- [[Regression guard the LESSONS.md output must never be re-ingested as a memory…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Render the aggregate into the deterministic LESSONS.md markdown body.]] - rationale - temp-graphify/graphify/reflect.py
- [[Saving the same Q&A more than once must not duplicate lines in the dead-ends …]] - rationale - temp-graphify/tests/test_reflect.py
- [[Tests for `graphify reflect` and the work-memory reflection layer. `graphify…]] - rationale - temp-graphify/tests/test_reflect.py
- [[The header nudges verification, not blind reuse.]] - rationale - temp-graphify/tests/test_reflect.py
- [[The headline guarantee identical memory contents + same `now` - byte-…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Through reflect()CLI with a real graph.json a cited node that isn't in the…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Topic headers render alphabetically, with Uncategorized always last.]] - rationale - temp-graphify/tests/test_reflect.py
- [[True if ``out_path`` exists and is at least as new as every input that feeds it…]] - rationale - temp-graphify/graphify/reflect.py
- [[Two distinct useful results - preferred at k=2, but only tentative at k=3.]] - rationale - temp-graphify/tests/test_reflect.py
- [[Two stale useful + one fresh dead_end a long half-life (≈no decay) lets the 2…]] - rationale - temp-graphify/tests/test_reflect.py
- [[With a real graph.json present, reflect auto-detects it and groups lessons…]] - rationale - temp-graphify/tests/test_reflect.py
- [[_days_before()]] - code - temp-graphify/tests/test_reflect.py
- [[_doc()_1]] - code - temp-graphify/tests/test_reflect.py
- [[_run()_11]] - code - temp-graphify/tests/test_reflect.py
- [[`reflect --if-stale` skips the rebuild when LESSONS.md is already current, and…]] - rationale - temp-graphify/tests/test_reflect.py
- [[aggregate_lessons()]] - code - temp-graphify/graphify/reflect.py
- [[argparse `choices` rejects an unknown outcome before save_query_result runs.]] - rationale - temp-graphify/tests/test_reflect.py
- [[dead_endscorrections are appended in doc order, so their determinism rides on…]] - rationale - temp-graphify/tests/test_reflect.py
- [[half_life=0 turns decay off (full weight), so a stale useful and a fresh…]] - rationale - temp-graphify/tests/test_reflect.py
- [[lessons_fresh()]] - code - temp-graphify/graphify/reflect.py
- [[load_learning_for_report()]] - code - temp-graphify/graphify/report.py
- [[load_memory_docs()]] - code - temp-graphify/graphify/reflect.py
- [[parametrize_22]] - code
- [[render_lessons_md()]] - code - temp-graphify/graphify/reflect.py
- [[test_aggregate_counts_each_outcome()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_node_existence_gate_drops_stale_node_end_to_end()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_reflect_cold_start_writes_empty_lessons()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_reflect_end_to_end()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_reflect_groups_by_community_when_graph_present()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_reflect_if_stale_reruns_when_labels_newer()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_reflect_if_stale_skips_when_fresh()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_reflect_respects_out_flag()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_save_result_reads_answer_from_file()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_save_result_rejects_bad_outcome()]] - code - temp-graphify/tests/test_reflect.py
- [[test_cli_save_result_requires_answer_or_answer_file()]] - code - temp-graphify/tests/test_reflect.py
- [[test_community_grouping_uses_plurality_community()]] - code - temp-graphify/tests/test_reflect.py
- [[test_contested_node_renders_once_under_contested()]] - code - temp-graphify/tests/test_reflect.py
- [[test_corroboration_counts_distinct_docs_not_citations()]] - code - temp-graphify/tests/test_reflect.py
- [[test_corroboration_threshold_promotes_only_repeated_nodes()]] - code - temp-graphify/tests/test_reflect.py
- [[test_dead_ends_and_corrections_collected()]] - code - temp-graphify/tests/test_reflect.py
- [[test_dead_ends_and_corrections_dedupe_by_question()]] - code - temp-graphify/tests/test_reflect.py
- [[test_dead_ends_and_corrections_follow_doc_order()]] - code - temp-graphify/tests/test_reflect.py
- [[test_doc_community_tie_breaks_to_smallest_label()]] - code - temp-graphify/tests/test_reflect.py
- [[test_evenly_split_verdict_when_signals_cancel()]] - code - temp-graphify/tests/test_reflect.py
- [[test_half_life_actually_feeds_decay()]] - code - temp-graphify/tests/test_reflect.py
- [[test_header_is_cautious()]] - code - temp-graphify/tests/test_reflect.py
- [[test_lessons_artifact_cannot_be_globbed_back_into_memory()]] - code - temp-graphify/tests/test_reflect.py
- [[test_lessons_fresh_false_when_graph_newer()]] - code - temp-graphify/tests/test_reflect.py
- [[test_lessons_fresh_false_when_graph_sidecar_newer()]] - code - temp-graphify/tests/test_reflect.py
- [[test_lessons_fresh_false_when_memory_newer()]] - code - temp-graphify/tests/test_reflect.py
- [[test_lessons_fresh_missing_output_is_not_fresh()]] - code - temp-graphify/tests/test_reflect.py
- [[test_lessons_fresh_true_when_output_newer_than_inputs()]] - code - temp-graphify/tests/test_reflect.py
- [[test_load_memory_docs_missing_dir_is_empty()]] - code - temp-graphify/tests/test_reflect.py
- [[test_load_memory_docs_orders_by_date_then_filename()]] - code - temp-graphify/tests/test_reflect.py
- [[test_load_memory_docs_skips_foreign_and_sorts()]] - code - temp-graphify/tests/test_reflect.py
- [[test_min_corroboration_is_honored_not_hardcoded()]] - code - temp-graphify/tests/test_reflect.py
- [[test_negative_only_node_absent_from_sources()]] - code - temp-graphify/tests/test_reflect.py
- [[test_no_community_grouping_without_graph()]] - code - temp-graphify/tests/test_reflect.py
- [[test_node_existence_gate_drops_stale_nodes()]] - code - temp-graphify/tests/test_reflect.py
- [[test_nonpositive_half_life_disables_decay()]] - code - temp-graphify/tests/test_reflect.py
- [[test_recency_decides_contested_verdict()]] - code - temp-graphify/tests/test_reflect.py
- [[test_reflect.py]] - code - temp-graphify/tests/test_reflect.py
- [[test_render_byte_stable_across_independent_aggregations()]] - code - temp-graphify/tests/test_reflect.py
- [[test_render_empty_memory_is_graceful()]] - code - temp-graphify/tests/test_reflect.py
- [[test_render_has_summary_and_sections()]] - code - temp-graphify/tests/test_reflect.py
- [[test_render_includes_by_topic_when_graph_present()]] - code - temp-graphify/tests/test_reflect.py
- [[test_render_is_deterministic()]] - code - temp-graphify/tests/test_reflect.py
- [[test_sources_split_into_preferred_tentative_contested()]] - code - temp-graphify/tests/test_reflect.py
- [[test_topic_sections_alpha_with_uncategorized_last()]] - code - temp-graphify/tests/test_reflect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_reflectpy
SORT file.name ASC
```

## Connections to other communities
- 41 edges to [[_COMMUNITY_reflect.py]]
- 12 edges to [[_COMMUNITY_save_query_result]]
- 7 edges to [[_COMMUNITY_test_analyze.py]]
- 4 edges to [[_COMMUNITY_generate]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_test_export.py]]
- 1 edge to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY_ingest.py]]

## Top bridge nodes
- [[test_reflect.py]] - degree 84, connects to 8 communities
- [[load_learning_for_report()]] - degree 9, connects to 5 communities
- [[load_memory_docs()]] - degree 15, connects to 3 communities
- [[lessons_fresh()]] - degree 11, connects to 3 communities
- [[aggregate_lessons()]] - degree 40, connects to 2 communities