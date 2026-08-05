---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_chunking.py"
location: "L2189"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_chunkingpy
---

# extract_corpus_parallel()

## Connections
- [[Extract a corpus in chunks, merging results. Chunking strategy - If…]] - `rationale_for` [EXTRACTED]
- [[Path_43]] - `references` [EXTRACTED]
- [[_merge_into()]] - `calls` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[expand_oversized_files()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[save_semantic_cache()]] - `calls` [EXTRACTED]
- [[test_checkpoint_caches_sliced_document_chunks()]] - `calls` [EXTRACTED]
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - `calls` [EXTRACTED]
- [[test_checkpoint_writes_deep_namespace_in_deep_mode()]] - `calls` [EXTRACTED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[test_corpus_parallel_continues_after_chunk_failure()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_merge_order_is_submission_order_not_completion()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_oversized_markdown_does_not_crash_on_fileslice()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_runs_chunks_concurrently()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_token_budget_default_packs_files()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_uses_adaptive_retry()]] - `calls` [EXTRACTED]
- [[test_extract_corpus_parallel_accepts_cache_root_kwarg()]] - `indirect_call` [INFERRED]
- [[test_extract_corpus_parallel_accepts_str_and_mixed_paths()]] - `calls` [EXTRACTED]
- [[test_extract_corpus_parallel_ollama_parallel_env_restores_concurrency()]] - `calls` [EXTRACTED]
- [[test_extract_corpus_parallel_ollama_runs_serially()]] - `calls` [EXTRACTED]
- [[test_omitted_documents_are_reconciled_and_warned()]] - `calls` [EXTRACTED]
- [[test_out_of_scope_drop_count_is_zero_when_all_in_scope()]] - `calls` [EXTRACTED]
- [[test_out_of_scope_nodes_are_dropped_from_merged_result()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_out_root.py]] - `imports` [EXTRACTED]
- [[test_str_path_entry_points_handle_edge_cases()]] - `calls` [EXTRACTED]
- [[test_truncated_chunk_is_cached_partial_and_missed_on_reload()]] - `calls` [EXTRACTED]
- [[unit_path()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_chunkingpy