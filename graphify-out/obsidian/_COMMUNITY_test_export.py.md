---
type: community
cohesion: 0.07
members: 63
---

# test_export.py

**Cohesion:** 0.07 - loosely connected
**Members:** 63 nodes

## Members
- [[1324 empty communities (e.g. --no-cluster builds) on a populated graph must…]] - rationale - temp-graphify/tests/test_export.py
- [[1409 an all-punctuation label (e.g. `@`) must not produce a `@.md`-style…]] - rationale - temp-graphify/tests/test_export.py
- [[1409 same guard on the canvas exporter's file-node names.]] - rationale - temp-graphify/tests/test_export.py
- [[1775 a node with source_file=None or label=None must not crash to_html…]] - rationale - temp-graphify/tests/test_export.py
- [[1838 neighbor links dropped an unescaped JSON.stringify(nid) into a quoted…]] - rationale - temp-graphify/tests/test_export.py
- [[A 2-node graph where one node's label is all-punctuation (e.g. a `@` tsconfig…]] - rationale - temp-graphify/tests/test_export.py
- [[A generated `_1` suffix must not collide with a node whose literal label is…]] - rationale - temp-graphify/tests/test_export.py
- [[A node with an overlay entry gets learning_status + learning_stale fields, a…]] - rationale - temp-graphify/tests/test_export.py
- [[Both notes must survive as separate files. On a case-insensitive filesystem a…]] - rationale - temp-graphify/tests/test_export.py
- [[Canvas file-node references for case-only-distinct labels must be distinct…]] - rationale - temp-graphify/tests/test_export.py
- [[Coercion must leave GraphML-native scalars (intfloatboolstr) untouched, only…]] - rationale - temp-graphify/tests/test_export.py
- [[Export graph as GraphML - opens in Gephi, yEd, and any GraphML-compatible tool.…]] - rationale - temp-graphify/graphify/export.py
- [[Extract the RAW_NODES JSON array embedded in the generated HTML.]] - rationale - temp-graphify/tests/test_export.py
- [[Generate an interactive vis.js HTML visualization of the graph. Features node…]] - rationale - temp-graphify/graphify/exporters/html.py
- [[Node file paths in canvas must be vault-root-relative (just fname.md), not…]] - rationale - temp-graphify/tests/test_export.py
- [[Run Leiden community detection. Returns {community_id node_ids}. Community…]] - rationale - temp-graphify/graphify/cluster.py
- [[The CLI calls to_obsidian and to_canvas separately with no shared map, so they…]] - rationale - temp-graphify/tests/test_export.py
- [[Two nodes whose labels differ only by case - on macOSAPFS and WindowsNTFS…]] - rationale - temp-graphify/tests/test_export.py
- [[With no overlay, the HTML is byte-identical whether learning_overlay is omitted…]] - rationale - temp-graphify/tests/test_export.py
- [[_case_collision_graph()]] - code - temp-graphify/tests/test_export.py
- [[_punct_graph()]] - code - temp-graphify/tests/test_export.py
- [[_vis_nodes_from_html()]] - code - temp-graphify/tests/test_export.py
- [[cluster()]] - code - temp-graphify/graphify/cluster.py
- [[make_graph()_2]] - code - temp-graphify/tests/test_export.py
- [[nx.write_graphml only accepts scalars; a dictlist attribute (per-node…]] - rationale - temp-graphify/tests/test_export.py
- [[nx.write_graphml raises ValueError on a None attribute value; to_graphml must…]] - rationale - temp-graphify/tests/test_export.py
- [[test_export.py]] - code - temp-graphify/tests/test_export.py
- [[test_obsidian_canvas_filenames_agree()]] - code - temp-graphify/tests/test_export.py
- [[test_to_canvas_case_only_distinct_labels_get_distinct_files()]] - code - temp-graphify/tests/test_export.py
- [[test_to_canvas_file_paths_relative_to_vault()]] - code - temp-graphify/tests/test_export.py
- [[test_to_canvas_never_emits_punctuation_only_filenames()]] - code - temp-graphify/tests/test_export.py
- [[test_to_canvas_no_communities_still_populates()]] - code - temp-graphify/tests/test_export.py
- [[test_to_cypher_contains_merge_statements()]] - code - temp-graphify/tests/test_export.py
- [[test_to_cypher_creates_file()]] - code - temp-graphify/tests/test_export.py
- [[test_to_graphml_creates_file()]] - code - temp-graphify/tests/test_export.py
- [[test_to_graphml_has_community_attribute()]] - code - temp-graphify/tests/test_export.py
- [[test_to_graphml_preserves_native_scalar_types()]] - code - temp-graphify/tests/test_export.py
- [[test_to_graphml_tolerates_dict_and_list_attribute_values()]] - code - temp-graphify/tests/test_export.py
- [[test_to_graphml_tolerates_none_attribute_values()]] - code - temp-graphify/tests/test_export.py
- [[test_to_graphml_valid_xml()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_annotated_node_gets_learning_status_and_ring()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_contains_legend_with_labels()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_contains_nodes_and_edges()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_contains_search()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_contains_visjs()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_contested_stale_node_gets_dashed_desaturated_ring()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_creates_file()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_handles_null_source_file_and_label()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_member_counts_accepted()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_neighbor_links_have_no_inline_onclick_xss()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_pins_visjs_version_with_sri()]] - code - temp-graphify/tests/test_export.py
- [[test_to_html_unannotated_identical_to_pre_feature()]] - code - temp-graphify/tests/test_export.py
- [[test_to_json_creates_file()]] - code - temp-graphify/tests/test_export.py
- [[test_to_json_nodes_have_community()]] - code - temp-graphify/tests/test_export.py
- [[test_to_json_valid_json()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_case_only_distinct_labels_dont_overwrite()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_generated_suffix_doesnt_overwrite_literal()]] - code - temp-graphify/tests/test_export.py
- [[test_to_obsidian_never_emits_punctuation_only_filenames()]] - code - temp-graphify/tests/test_export.py
- [[to_cypher()]] - code - temp-graphify/graphify/export.py
- [[to_graphml()]] - code - temp-graphify/graphify/export.py
- [[to_html accepts member_counts without raising.]] - rationale - temp-graphify/tests/test_export.py
- [[to_html()]] - code - temp-graphify/graphify/exporters/html.py
- [[vis-network script tag must use a pinned versioned URL with a sha384…]] - rationale - temp-graphify/tests/test_export.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_exportpy
SORT file.name ASC
```

## Connections to other communities
- 24 edges to [[_COMMUNITY_to_json]]
- 23 edges to [[_COMMUNITY_to_obsidian]]
- 14 edges to [[_COMMUNITY_generate]]
- 9 edges to [[_COMMUNITY_backup_if_protected]]
- 8 edges to [[_COMMUNITY_test_cluster.py]]
- 7 edges to [[_COMMUNITY_test_analyze.py]]
- 5 edges to [[_COMMUNITY_build_from_json]]
- 4 edges to [[_COMMUNITY_dispatch_command]]
- 4 edges to [[_COMMUNITY__rebuild_code]]
- 3 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_test_build.py]]
- 2 edges to [[_COMMUNITY_test_cli_export.py]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_test_reflect.py]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY_Graph]]

## Top bridge nodes
- [[cluster()]] - degree 65, connects to 10 communities
- [[to_html()]] - degree 26, connects to 7 communities
- [[test_export.py]] - degree 72, connects to 6 communities
- [[to_graphml()]] - degree 13, connects to 3 communities
- [[to_cypher()]] - degree 8, connects to 3 communities