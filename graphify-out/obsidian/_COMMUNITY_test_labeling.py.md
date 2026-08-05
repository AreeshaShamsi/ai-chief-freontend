---
type: community
cohesion: 0.09
members: 45
---

# test_labeling.py

**Cohesion:** 0.09 - loosely connected
**Members:** 45 nodes

## Members
- [[2073 --no-label must not write .graphify_labels.json with 'Community N'…]] - rationale - temp-graphify/tests/test_labeling.py
- [[2073 an already-polluted sidecar (a placeholder for one community, a genuine…]] - rationale - temp-graphify/tests/test_labeling.py
- [[CLI entry point resolve a backend, name communities, and degrade to…]] - rationale - temp-graphify/graphify/llm.py
- [[Concurrency must not change the result same cid-name map either way.]] - rationale - temp-graphify/tests/test_labeling.py
- [[One prompt line per community (largest first), sampling up to ``top_k``…]] - rationale - temp-graphify/graphify/llm.py
- [[Return a complete ``{cid name}`` map using ``backend`` for naming. Communities…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for LLM-backed community labeling (issue 1097). Backend calls are mocked…]] - rationale - temp-graphify/tests/test_labeling.py
- [[Two disconnected components - two stable communities, each hub-labelled by its…]] - rationale - temp-graphify/tests/test_labeling.py
- [[_community_label_lines()]] - code - temp-graphify/graphify/llm.py
- [[_graph()]] - code - temp-graphify/tests/test_labeling.py
- [[_many_communities()]] - code - temp-graphify/tests/test_labeling.py
- [[_peak_tracker()]] - code - temp-graphify/tests/test_labeling.py
- [[_placeholder_community_labels()]] - code - temp-graphify/graphify/llm.py
- [[_two_community_graph()]] - code - temp-graphify/tests/test_labeling.py
- [[_wide_graph()]] - code - temp-graphify/tests/test_labeling.py
- [[generate_community_labels()]] - code - temp-graphify/graphify/llm.py
- [[god_nodes() returns listdict with an 'id' key, not bare ids.]] - rationale - temp-graphify/tests/test_labeling.py
- [[label_communities()]] - code - temp-graphify/graphify/llm.py
- [[ollamaclaude-cli must stay serial regardless of --max-concurrency.]] - rationale - temp-graphify/tests/test_labeling.py
- [[test_cluster_only_heals_persisted_placeholder_but_reuses_genuine()]] - code - temp-graphify/tests/test_labeling.py
- [[test_cluster_only_no_label_does_not_persist_placeholders()]] - code - temp-graphify/tests/test_labeling.py
- [[test_empty_communities_returns_placeholders()]] - code - temp-graphify/tests/test_labeling.py
- [[test_generate_community_labels_degrades_on_error()]] - code - temp-graphify/tests/test_labeling.py
- [[test_generate_community_labels_no_backend()]] - code - temp-graphify/tests/test_labeling.py
- [[test_generate_community_labels_success()]] - code - temp-graphify/tests/test_labeling.py
- [[test_gods_as_dicts_do_not_crash()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_cli_missing_only_preserves_existing_labels()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_cli_passes_model_override()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_accumulates_token_usage()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_all_batches_fail_raises()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_batch_size_controls_batch_count()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_batches_when_over_batch_size()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_counts_tokens_for_failed_batch()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_forces_serial_for_ollama()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_happy_path()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_malformed_raises()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_max_communities_caps_total()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_parallel_matches_sequential()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_partial_batch_failure_keeps_successful_batches()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_partial_reply_fills_placeholder()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_passes_model_override()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_runs_batches_concurrently()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_salvages_truncated_reply()]] - code - temp-graphify/tests/test_labeling.py
- [[test_label_communities_strips_code_fences()]] - code - temp-graphify/tests/test_labeling.py
- [[test_labeling.py]] - code - temp-graphify/tests/test_labeling.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_labelingpy
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_llm.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_extract_files_direct]]

## Top bridge nodes
- [[generate_community_labels()]] - degree 11, connects to 4 communities
- [[test_labeling.py]] - degree 34, connects to 1 community
- [[label_communities()]] - degree 24, connects to 1 community
- [[_community_label_lines()]] - degree 3, connects to 1 community
- [[_placeholder_community_labels()]] - degree 3, connects to 1 community