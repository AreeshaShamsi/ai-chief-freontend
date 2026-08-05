---
type: community
cohesion: 0.05
members: 79
---

# generate

**Cohesion:** 0.05 - loosely connected
**Members:** 79 nodes

## Members
- [[IMPORTANT resolve endpoints using source_file only; never infer from…]] - rationale - temp-graphify/graphify/analyze.py
- [[AMBIGUOUS edges must have confidence_score = 0.4.]] - rationale - temp-graphify/tests/test_confidence.py
- [[Append the `` Work-memory lessons`` section, or nothing when empty.]] - rationale - temp-graphify/graphify/report.py
- [[Community detection on NetworkX graphs. Uses Leiden (graspologic) if available,…]] - rationale - temp-graphify/graphify/cluster.py
- [[Context manager to suppress stdoutstderr during library calls. graspologic's…]] - rationale - temp-graphify/graphify/cluster.py
- [[Cross-file edges between real codedoc entities, ranked by a composite surprise…]] - rationale - temp-graphify/graphify/analyze.py
- [[EXTRACTED edges must have confidence_score == 1.0.]] - rationale - temp-graphify/tests/test_confidence.py
- [[End-to-end pipeline test detect → extract → build → cluster → analyze → report…]] - rationale - temp-graphify/tests/test_pipeline.py
- [[For single-source corpora find edges that bridge different communities. These…]] - rationale - temp-graphify/graphify/analyze.py
- [[Generate questions the graph is uniquely positioned to answer. Based on…]] - rationale - temp-graphify/graphify/analyze.py
- [[Graph analysis god nodes (most connected), surprising connections (cross-…]] - rationale - temp-graphify/graphify/analyze.py
- [[INFERRED edges must have confidence_score between 0.0 and 1.0.]] - rationale - temp-graphify/tests/test_confidence.py
- [[Mirrors export.safe_name so community hub filenames and report wikilinks always…]] - rationale - temp-graphify/graphify/report.py
- [[No learning input = no section; report identical to pre-feature.]] - rationale - temp-graphify/tests/test_report.py
- [[Path_91]] - code
- [[Report summary line should include avg confidence for INFERRED edges.]] - rationale - temp-graphify/tests/test_confidence.py
- [[Return True if this node is a file-level hub node (e.g. 'client', 'models') or…]] - rationale - temp-graphify/graphify/analyze.py
- [[Return True if this node is a manually-injected semantic concept node rather…]] - rationale - temp-graphify/graphify/analyze.py
- [[Return a minimal extraction dict with one edge of each confidence type.]] - rationale - temp-graphify/tests/test_confidence.py
- [[Run a second Leiden pass on a community subgraph to split it further.]] - rationale - temp-graphify/graphify/cluster.py
- [[Run community detection. Returns {node_id community_id}. Tries Leiden…]] - rationale - temp-graphify/graphify/cluster.py
- [[Run the full pipeline on the fixtures directory. Returns a dict of outputs.]] - rationale - temp-graphify/tests/test_pipeline.py
- [[Second run on unchanged corpus should produce identical nodeedge counts.]] - rationale - temp-graphify/tests/test_pipeline.py
- [[Surprising connections section shows confidence score next to INFERRED edges.]] - rationale - temp-graphify/tests/test_confidence.py
- [[Tests for confidence_score on edges.]] - rationale - temp-graphify/tests/test_confidence.py
- [[When a work-memory overlay (preferred sources) and query-scoped dead-ends are…]] - rationale - temp-graphify/tests/test_report.py
- [[_cross_community_surprises()]] - code - temp-graphify/graphify/analyze.py
- [[_cross_file_surprises()]] - code - temp-graphify/graphify/analyze.py
- [[_is_concept_node()]] - code - temp-graphify/graphify/analyze.py
- [[_is_file_node()]] - code - temp-graphify/graphify/analyze.py
- [[_learning_section()]] - code - temp-graphify/graphify/report.py
- [[_make_extraction()]] - code - temp-graphify/tests/test_confidence.py
- [[_partition()]] - code - temp-graphify/graphify/cluster.py
- [[_safe_community_name()]] - code - temp-graphify/graphify/report.py
- [[_split_community()]] - code - temp-graphify/graphify/cluster.py
- [[_suppress_output()]] - code - temp-graphify/graphify/cluster.py
- [[confidence_score survives build_from_json → to_json → JSON parse round-trip.]] - rationale - temp-graphify/tests/test_confidence.py
- [[generate()]] - code - temp-graphify/graphify/report.py
- [[graphifyanalyze.py]] - code - temp-graphify/graphify/analyze.py
- [[graphifycluster.py]] - code - temp-graphify/graphify/cluster.py
- [[make_inputs()]] - code - temp-graphify/tests/test_report.py
- [[report.py]] - code - temp-graphify/graphify/report.py
- [[run_pipeline()]] - code - temp-graphify/tests/test_pipeline.py
- [[score_all()]] - code - temp-graphify/graphify/cluster.py
- [[suggest_questions()]] - code - temp-graphify/graphify/analyze.py
- [[test_ambiguous_edges_score_at_most_04()]] - code - temp-graphify/tests/test_confidence.py
- [[test_confidence.py]] - code - temp-graphify/tests/test_confidence.py
- [[test_confidence_score_round_trip()]] - code - temp-graphify/tests/test_confidence.py
- [[test_extracted_edges_have_score_1()]] - code - temp-graphify/tests/test_confidence.py
- [[test_import_cycles_section_absent_for_documents_only_corpus()]] - code - temp-graphify/tests/test_report.py
- [[test_import_cycles_section_present_for_code_corpus()]] - code - temp-graphify/tests/test_report.py
- [[test_inferred_edges_score_in_range()]] - code - temp-graphify/tests/test_confidence.py
- [[test_is_concept_node_empty_source()]] - code - temp-graphify/tests/test_analyze.py
- [[test_is_concept_node_real_file()]] - code - temp-graphify/tests/test_analyze.py
- [[test_pipeline.py]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_all_nodes_have_community()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_detection_finds_code_and_docs()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_extraction_confidence_labels()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_graph_has_edges()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_incremental_update()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_no_self_loops()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_report_mentions_top_god_node()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_pipeline_runs_end_to_end()]] - code - temp-graphify/tests/test_pipeline.py
- [[test_report.py]] - code - temp-graphify/tests/test_report.py
- [[test_report_contains_ambiguous_section()]] - code - temp-graphify/tests/test_report.py
- [[test_report_contains_communities()]] - code - temp-graphify/tests/test_report.py
- [[test_report_contains_corpus_check()]] - code - temp-graphify/tests/test_report.py
- [[test_report_contains_god_nodes()]] - code - temp-graphify/tests/test_report.py
- [[test_report_contains_header()]] - code - temp-graphify/tests/test_report.py
- [[test_report_contains_surprising_connections()]] - code - temp-graphify/tests/test_report.py
- [[test_report_hubs_are_plain_text_by_default()]] - code - temp-graphify/tests/test_report.py
- [[test_report_hubs_use_wikilinks_when_obsidian()]] - code - temp-graphify/tests/test_report.py
- [[test_report_inferred_tag_with_score()]] - code - temp-graphify/tests/test_confidence.py
- [[test_report_shows_avg_confidence_for_inferred()]] - code - temp-graphify/tests/test_confidence.py
- [[test_report_shows_raw_cohesion_scores()]] - code - temp-graphify/tests/test_report.py
- [[test_report_shows_token_cost()]] - code - temp-graphify/tests/test_report.py
- [[test_report_work_memory_section_absent_without_overlay()]] - code - temp-graphify/tests/test_report.py
- [[test_report_work_memory_section_present_with_overlay_and_dead_ends()]] - code - temp-graphify/tests/test_report.py
- [[test_suggest_questions_excludes_rationale_nodes_from_isolated_count()]] - code - temp-graphify/tests/test_analyze.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/generate
SORT file.name ASC
```

## Connections to other communities
- 39 edges to [[_COMMUNITY_test_analyze.py]]
- 15 edges to [[_COMMUNITY_build_from_json]]
- 14 edges to [[_COMMUNITY_to_json]]
- 14 edges to [[_COMMUNITY_test_export.py]]
- 8 edges to [[_COMMUNITY_test_cluster.py]]
- 6 edges to [[_COMMUNITY__rebuild_code]]
- 5 edges to [[_COMMUNITY_test_semantic_similarity.py]]
- 4 edges to [[_COMMUNITY_graphifybuild.py]]
- 4 edges to [[_COMMUNITY_test_reflect.py]]
- 3 edges to [[_COMMUNITY_cli.py]]
- 3 edges to [[_COMMUNITY_dispatch_command]]
- 3 edges to [[_COMMUNITY_label_communities_by_hub]]
- 2 edges to [[_COMMUNITY_test_build.py]]
- 2 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 2 edges to [[_COMMUNITY_detect.py]]
- 2 edges to [[_COMMUNITY_test_cli_export.py]]
- 2 edges to [[_COMMUNITY_test_detect.py]]
- 2 edges to [[_COMMUNITY_to_obsidian]]
- 2 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_test_swift_builtin_noise.py]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]
- 1 edge to [[_COMMUNITY_test_watch.py]]
- 1 edge to [[_COMMUNITY_Graph]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_collect_files]]
- 1 edge to [[_COMMUNITY_reflect.py]]

## Top bridge nodes
- [[test_pipeline.py]] - degree 29, connects to 11 communities
- [[graphifyanalyze.py]] - degree 31, connects to 9 communities
- [[suggest_questions()]] - degree 16, connects to 8 communities
- [[run_pipeline()]] - degree 23, connects to 7 communities
- [[score_all()]] - degree 20, connects to 7 communities