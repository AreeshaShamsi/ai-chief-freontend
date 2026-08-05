---
source_file: "temp-graphify/tests/test_chunking.py"
type: "code"
community: "test_chunking.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_chunkingpy
---

# test_chunking.py

## Connections
- [[FileSlice]] - `imports` [EXTRACTED]
- [[Tests for token-aware chunking and parallel chunk execution in graphify.llm.]] - `rationale_for` [EXTRACTED]
- [[_extract_with_adaptive_retry()]] - `imports` [EXTRACTED]
- [[_extraction_system()]] - `imports` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `imports` [EXTRACTED]
- [[_stub_chunk_result()]] - `contains` [EXTRACTED]
- [[_stub_with_finish()]] - `contains` [EXTRACTED]
- [[extract_corpus_parallel()]] - `imports` [EXTRACTED]
- [[llm.py]] - `imports_from` [EXTRACTED]
- [[load_cached()]] - `imports` [EXTRACTED]
- [[no_tokenizer()]] - `contains` [EXTRACTED]
- [[save_semantic_cache()]] - `imports` [EXTRACTED]
- [[test_adaptive_retry_caps_at_max_depth()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_marks_max_depth_giveup_partial()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_marks_single_file_truncation_partial()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_successful_split_is_not_marked_partial()]] - `contains` [EXTRACTED]
- [[test_checkpoint_caches_sliced_document_chunks()]] - `contains` [EXTRACTED]
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - `contains` [EXTRACTED]
- [[test_checkpoint_writes_deep_namespace_in_deep_mode()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_continues_after_chunk_failure()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_merge_order_is_submission_order_not_completion()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_runs_chunks_concurrently()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_token_budget_default_packs_files()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_uses_adaptive_retry()]] - `contains` [EXTRACTED]
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - `contains` [EXTRACTED]
- [[test_estimate_file_tokens_handles_tiktoken_special_token()]] - `contains` [EXTRACTED]
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - `contains` [EXTRACTED]
- [[test_omitted_documents_are_reconciled_and_warned()]] - `contains` [EXTRACTED]
- [[test_out_of_scope_drop_count_is_zero_when_all_in_scope()]] - `contains` [EXTRACTED]
- [[test_out_of_scope_nodes_are_dropped_from_merged_result()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_groups_by_directory()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_packs_small_files_together()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_rejects_non_positive_budget()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_with_special_token_doc_does_not_crash()]] - `contains` [EXTRACTED]
- [[test_truncated_chunk_is_cached_partial_and_missed_on_reload()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_chunkingpy