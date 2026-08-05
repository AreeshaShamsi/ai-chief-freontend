---
type: community
cohesion: 0.06
members: 67
---

# reflect.py

**Cohesion:** 0.06 - loosely connected
**Members:** 67 nodes

## Members
- [[A corpus with a PREFERRED node (2 useful), a TENTATIVE node (1 useful), a…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A label shared by 1 node id (ambiguous) or absent from the graph (unresolved)…]] - rationale - temp-graphify/tests/test_reflect.py
- [[A node cited by 5 useful results keeps exactly the 5 most-recent in provenance…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Any_8]] - code
- [[Build a lookup from node id AND node label - community label, or None if the…]] - rationale - temp-graphify/graphify/reflect.py
- [[Collapse repeated questions to one entry. Docs are processed oldest-first, so…]] - rationale - temp-graphify/graphify/reflect.py
- [[Content hash of the node's ``source_file``, or '' if unavailable. Coarse on…]] - rationale - temp-graphify/graphify/reflect.py
- [[Deterministic work memory reflection over graphify-outmemory. `graphify…]] - rationale - temp-graphify/graphify/reflect.py
- [[From graph.json build - ``id_set`` id - id (every node id, so an id-form…]] - rationale - temp-graphify/graphify/reflect.py
- [[In a flat layout (graph.json at the project root), the resolver must use the…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Load the sidecar next to ``graph_path`` and return ``{node_id - entry}`` with…]] - rationale - temp-graphify/graphify/reflect.py
- [[Locate a node's ``source_file`` on disk, returning an existing file or None.…]] - rationale - temp-graphify/graphify/reflect.py
- [[Most-recent-first, capped provenance entries for a node. ``prov_map`` is the…]] - rationale - temp-graphify/graphify/reflect.py
- [[Parse an ISO datedatetime to an aware UTC datetime, or None if unparseable.]] - rationale - temp-graphify/graphify/reflect.py
- [[Path_49]] - code
- [[Path_95]] - code
- [[Project the reflect aggregate into the sidecar's ``{version, generated_at,…]] - rationale - temp-graphify/graphify/reflect.py
- [[Regression with a RELATIVE source_file and graph.json under graphify-out, a…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Resolve a cited node (a label OR an id) to a single canonical node id. Returns…]] - rationale - temp-graphify/graphify/reflect.py
- [[SHA256 of file CONTENT only (no path mixed in), so the fingerprint is…]] - rationale - temp-graphify/graphify/reflect.py
- [[Scan ``memory_dir``, write the lessons doc to ``out_path``, return (path, agg).…]] - rationale - temp-graphify/graphify/reflect.py
- [[Split a bucket's scored nodes into preferred  tentative  contested lists.]] - rationale - temp-graphify/graphify/reflect.py
- [[The community a doc belongs to the plurality community of its source nodes.…]] - rationale - temp-graphify/graphify/reflect.py
- [[The set of node ids AND labels in the current graph, or None if unavailable.…]] - rationale - temp-graphify/graphify/reflect.py
- [[Time-decay weight in (0, 1 halves every ``half_life_days``.…]] - rationale - temp-graphify/graphify/reflect.py
- [[True if the node's source file changed (or vanished) since the fingerprint was…]] - rationale - temp-graphify/graphify/reflect.py
- [[Two reflect runs on identical input + fixed `now` produce a byte-identical…]] - rationale - temp-graphify/tests/test_reflect.py
- [[When a committed .graphify_root marker records the project root (e.g. a…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Write ``.graphify_learning.json`` next to ``graph_path`` deterministically.…]] - rationale - temp-graphify/graphify/reflect.py
- [[Write a memory doc with a controlled date so ordering is deterministic to…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Write a minimal graph.json under ``out`` with the given node dicts.]] - rationale - temp-graphify/tests/test_reflect.py
- [[_build_id_label_maps()]] - code - temp-graphify/graphify/reflect.py
- [[_code_fingerprint()]] - code - temp-graphify/graphify/reflect.py
- [[_content_hash()]] - code - temp-graphify/graphify/reflect.py
- [[_decay()]] - code - temp-graphify/graphify/reflect.py
- [[_dedupe_by_question()]] - code - temp-graphify/graphify/reflect.py
- [[_doc_community()]] - code - temp-graphify/graphify/reflect.py
- [[_empty_bucket()]] - code - temp-graphify/graphify/reflect.py
- [[_finalize_sources()]] - code - temp-graphify/graphify/reflect.py
- [[_is_stale()]] - code - temp-graphify/graphify/reflect.py
- [[_load_known_nodes()]] - code - temp-graphify/graphify/reflect.py
- [[_load_node_community()]] - code - temp-graphify/graphify/reflect.py
- [[_overlay_corpus()]] - code - temp-graphify/tests/test_reflect.py
- [[_overlay_graph()]] - code - temp-graphify/tests/test_reflect.py
- [[_parse_dt()]] - code - temp-graphify/graphify/reflect.py
- [[_provenance_for()]] - code - temp-graphify/graphify/reflect.py
- [[_record_node()]] - code - temp-graphify/graphify/reflect.py
- [[_render_bucket()]] - code - temp-graphify/graphify/reflect.py
- [[_resolve_canonical_id()]] - code - temp-graphify/graphify/reflect.py
- [[_resolve_source_path()]] - code - temp-graphify/graphify/reflect.py
- [[_write_raw_doc()]] - code - temp-graphify/tests/test_reflect.py
- [[build_learning_overlay()]] - code - temp-graphify/graphify/reflect.py
- [[datetime]] - code
- [[load_learning_overlay recomputes the file fingerprint unchanged source =…]] - rationale - temp-graphify/tests/test_reflect.py
- [[load_learning_overlay()]] - code - temp-graphify/graphify/reflect.py
- [[reflect with a graph writes .graphify_learning.json next to graph.json with the…]] - rationale - temp-graphify/tests/test_reflect.py
- [[reflect()]] - code - temp-graphify/graphify/reflect.py
- [[reflect.py]] - code - temp-graphify/graphify/reflect.py
- [[test_ambiguous_or_unresolved_citation_is_skipped()]] - code - temp-graphify/tests/test_reflect.py
- [[test_flat_layout_does_not_match_same_named_file_one_dir_up()]] - code - temp-graphify/tests/test_reflect.py
- [[test_loader_marks_entry_stale_when_source_file_changes()]] - code - temp-graphify/tests/test_reflect.py
- [[test_provenance_capped_to_five_most_recent()]] - code - temp-graphify/tests/test_reflect.py
- [[test_relative_source_file_not_spuriously_stale_in_graphify_out_layout()]] - code - temp-graphify/tests/test_reflect.py
- [[test_relative_source_file_resolved_via_graphify_root_marker()]] - code - temp-graphify/tests/test_reflect.py
- [[test_sidecar_is_byte_identical_across_runs()]] - code - temp-graphify/tests/test_reflect.py
- [[test_sidecar_write_classifies_and_keys_by_canonical_id()]] - code - temp-graphify/tests/test_reflect.py
- [[write_learning_sidecar()]] - code - temp-graphify/graphify/reflect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/reflectpy
SORT file.name ASC
```

## Connections to other communities
- 41 edges to [[_COMMUNITY_test_reflect.py]]
- 5 edges to [[_COMMUNITY_save_query_result]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY_test_export.py]]
- 1 edge to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_test_query_induced_edges.py]]
- 1 edge to [[_COMMUNITY_generate]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_serve.py]]
- 1 edge to [[_COMMUNITY_test_analyze.py]]

## Top bridge nodes
- [[load_learning_overlay()]] - degree 18, connects to 8 communities
- [[reflect.py]] - degree 32, connects to 4 communities
- [[reflect()]] - degree 24, connects to 4 communities
- [[Any_8]] - degree 16, connects to 2 communities
- [[build_learning_overlay()]] - degree 9, connects to 2 communities