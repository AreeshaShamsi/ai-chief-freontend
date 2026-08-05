---
type: community
cohesion: 0.03
members: 95
---

# test_chunking.py

**Cohesion:** 0.03 - loosely connected
**Members:** 95 nodes

## Members
- [[1632 merged nodeedge order must be deterministic (submission order), not the…]] - rationale - temp-graphify/tests/test_chunking.py
- [[1870 the checkpoint's allowlist must resolve a FileSlice to its parent path…]] - rationale - temp-graphify/tests/test_chunking.py
- [[1890 a chunk can return a clean, non-empty response that omits some of the…]] - rationale - temp-graphify/tests/test_chunking.py
- [[1894 the per-chunk checkpoint must follow the run's mode — a deep_mode=True…]] - rationale - temp-graphify/tests/test_chunking.py
- [[1895 the 1757 cache guard skips the CACHE write for a node attributed to a…]] - rationale - temp-graphify/tests/test_chunking.py
- [[dot-ok()]] - code - temp-graphify/graphify/multigraph_compat.py
- [[A doc containing a literal tiktoken special token (e.g. endoftext) must not…]] - rationale - temp-graphify/tests/test_chunking.py
- [[A file larger than the budget can't be split — it goes alone in a chunk.]] - rationale - temp-graphify/tests/test_chunking.py
- [[A non-splittable single-file truncation keeps its partial result but marks…]] - rationale - temp-graphify/tests/test_chunking.py
- [[A single chunk raising should be logged but not abort the run. Other chunks'…]] - rationale - temp-graphify/tests/test_chunking.py
- [[A single file that truncates can't be split further — surface a warning and…]] - rationale - temp-graphify/tests/test_chunking.py
- [[A single-file chunk that stays truncated is checkpointed as a PARTIAL entry, so…]] - rationale - temp-graphify/tests/test_chunking.py
- [[A truncation that IS recovered by splitting yields a complete result — it must…]] - rationale - temp-graphify/tests/test_chunking.py
- [[Append a chunk result into the running merged accumulator.]] - rationale - temp-graphify/graphify/llm.py
- [[BaseException]] - code
- [[Build a deterministic fake extraction result for a chunk.]] - rationale - temp-graphify/tests/test_chunking.py
- [[Build a stub extraction result with a controllable finish_reason.]] - rationale - temp-graphify/tests/test_chunking.py
- [[Counter-test a clean run records out_of_scope_dropped == 0 and no warning.]] - rationale - temp-graphify/tests/test_chunking.py
- [[End to end packing a corpus that includes a special-token doc must not raise…]] - rationale - temp-graphify/tests/test_chunking.py
- [[End-to-end extract_corpus_parallel routes through adaptive retry, so a chunk…]] - rationale - temp-graphify/tests/test_chunking.py
- [[Estimate the prompt-token cost of a file or slice under `_read_files` rules.…]] - rationale - temp-graphify/graphify/llm.py
- [[Extract a chunk; if the response is truncated (`finish_reason=length`) or the…]] - rationale - temp-graphify/graphify/llm.py
- [[Extract a corpus in chunks, merging results. Chunking strategy - If…]] - rationale - temp-graphify/graphify/llm.py
- [[Files in the same directory should land in the same chunk when they fit.]] - rationale - temp-graphify/tests/test_chunking.py
- [[Greedily pack filesslices into chunks that fit a token budget. Units are first…]] - rationale - temp-graphify/graphify/llm.py
- [[Heuristically classify an exception as a context-window overflow. Different…]] - rationale - temp-graphify/graphify/llm.py
- [[If everything truncates, retries stop at max_depth — partial result kept with a…]] - rationale - temp-graphify/tests/test_chunking.py
- [[Many small files should land in a single chunk, not one chunk per file.]] - rationale - temp-graphify/tests/test_chunking.py
- [[No retry when finish_reason='stop' — single call, result passes through.]] - rationale - temp-graphify/tests/test_chunking.py
- [[Source paths covered by a chunk, for marking a chunk that truncated to an EMPTY…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for token-aware chunking and parallel chunk execution in graphify.llm.]] - rationale - temp-graphify/tests/test_chunking.py
- [[Union of the ``_partial_files`` carried by each result (survives merges).]] - rationale - temp-graphify/graphify/llm.py
- [[When even the half-chunk truncates, split again. With 8 files and a truncation…]] - rationale - temp-graphify/tests/test_chunking.py
- [[When recursion caps at max_depth with everything still truncated, the merged…]] - rationale - temp-graphify/tests/test_chunking.py
- [[When the next file would push the chunk past the budget, start a new chunk.…]] - rationale - temp-graphify/tests/test_chunking.py
- [[When tiktoken is installed, the estimator should call into it for accurate…]] - rationale - temp-graphify/tests/test_chunking.py
- [[With max_concurrency  1, total wall time should be ~max(chunk times), not the…]] - rationale - temp-graphify/tests/test_chunking.py
- [[With the default token_budget, many tiny files pack into one chunk.]] - rationale - temp-graphify/tests/test_chunking.py
- [[Without tiktoken installed, the estimator falls back to chars4.]] - rationale - temp-graphify/tests/test_chunking.py
- [[_chunk_partial_files()]] - code - temp-graphify/graphify/llm.py
- [[_estimate_file_tokens()]] - code - temp-graphify/graphify/llm.py
- [[_extract_with_adaptive_retry()]] - code - temp-graphify/graphify/llm.py
- [[_looks_like_context_exceeded()]] - code - temp-graphify/graphify/llm.py
- [[_merge_into()]] - code - temp-graphify/graphify/llm.py
- [[_merged_partial_files()]] - code - temp-graphify/graphify/llm.py
- [[_pack_chunks_by_tokens()]] - code - temp-graphify/graphify/llm.py
- [[_stub_chunk_result()]] - code - temp-graphify/tests/test_chunking.py
- [[_stub_with_finish()]] - code - temp-graphify/tests/test_chunking.py
- [[extract_corpus_parallel must accept a cache_root kwarg without raising (import…]] - rationale - temp-graphify/tests/test_semantic_cache_out_root.py
- [[extract_corpus_parallel()]] - code - temp-graphify/graphify/llm.py
- [[finish_reason='length' triggers split-in-half. Both halves succeed on the…]] - rationale - temp-graphify/tests/test_chunking.py
- [[max_concurrency=1 should run sequentially (no thread pool).]] - rationale - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_bisects_on_hollow_ollama_response()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_caps_at_max_depth()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_gives_up_on_single_file_overflow()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_marks_max_depth_giveup_partial()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_marks_single_file_truncation_partial()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_re_raises_unrelated_errors()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_splits_on_context_exceeded()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - code - temp-graphify/tests/test_chunking.py
- [[test_adaptive_retry_successful_split_is_not_marked_partial()]] - code - temp-graphify/tests/test_chunking.py
- [[test_checkpoint_caches_sliced_document_chunks()]] - code - temp-graphify/tests/test_chunking.py
- [[test_checkpoint_writes_deep_namespace_in_deep_mode()]] - code - temp-graphify/tests/test_chunking.py
- [[test_chunking.py]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_continues_after_chunk_failure()]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_merge_order_is_submission_order_not_completion()]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_oversized_markdown_does_not_crash_on_fileslice()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_corpus_parallel_runs_chunks_concurrently()]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_token_budget_default_packs_files()]] - code - temp-graphify/tests/test_chunking.py
- [[test_corpus_parallel_uses_adaptive_retry()]] - code - temp-graphify/tests/test_chunking.py
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - code - temp-graphify/tests/test_chunking.py
- [[test_estimate_file_tokens_handles_tiktoken_special_token()]] - code - temp-graphify/tests/test_chunking.py
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - code - temp-graphify/tests/test_chunking.py
- [[test_extract_corpus_parallel_accepts_cache_root_kwarg()]] - code - temp-graphify/tests/test_semantic_cache_out_root.py
- [[test_extract_corpus_parallel_accepts_str_and_mixed_paths()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_extract_corpus_parallel_ollama_runs_serially()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_image_token_estimate_is_flat()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_looks_like_context_exceeded_ignores_unrelated_errors()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_looks_like_context_exceeded_matches_common_messages()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_omitted_documents_are_reconciled_and_warned()]] - code - temp-graphify/tests/test_chunking.py
- [[test_out_of_scope_drop_count_is_zero_when_all_in_scope()]] - code - temp-graphify/tests/test_chunking.py
- [[test_out_of_scope_nodes_are_dropped_from_merged_result()]] - code - temp-graphify/tests/test_chunking.py
- [[test_pack_chunks_groups_by_directory()]] - code - temp-graphify/tests/test_chunking.py
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - code - temp-graphify/tests/test_chunking.py
- [[test_pack_chunks_packs_small_files_together()]] - code - temp-graphify/tests/test_chunking.py
- [[test_pack_chunks_rejects_non_positive_budget()]] - code - temp-graphify/tests/test_chunking.py
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - code - temp-graphify/tests/test_chunking.py
- [[test_pack_chunks_with_special_token_doc_does_not_crash()]] - code - temp-graphify/tests/test_chunking.py
- [[test_truncated_chunk_is_cached_partial_and_missed_on_reload()]] - code - temp-graphify/tests/test_chunking.py
- [[token_budget=None should fall back to legacy fixed-count chunking.]] - rationale - temp-graphify/tests/test_chunking.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_chunkingpy
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_test_file_slice.py]]
- 10 edges to [[_COMMUNITY_test_llm_backends.py]]
- 9 edges to [[_COMMUNITY_save_semantic_cache]]
- 9 edges to [[_COMMUNITY_llm.py]]
- 7 edges to [[_COMMUNITY_test_image_vision.py]]
- 5 edges to [[_COMMUNITY_cli.py]]
- 4 edges to [[_COMMUNITY_extract_files_direct]]
- 2 edges to [[_COMMUNITY_test_semantic_cache_out_root.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_multigraph_compat.py]]
- 1 edge to [[_COMMUNITY_no_tokenizer]]

## Top bridge nodes
- [[extract_corpus_parallel()]] - degree 32, connects to 9 communities
- [[test_chunking.py]] - degree 43, connects to 5 communities
- [[_extract_with_adaptive_retry()]] - degree 23, connects to 5 communities
- [[_pack_chunks_by_tokens()]] - degree 15, connects to 3 communities
- [[_estimate_file_tokens()]] - degree 10, connects to 3 communities