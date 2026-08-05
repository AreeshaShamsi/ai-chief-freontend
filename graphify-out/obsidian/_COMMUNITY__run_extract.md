---
type: community
cohesion: 0.12
members: 18
---

# _run_extract

**Cohesion:** 0.12 - loosely connected
**Members:** 18 nodes

## Members
- [[1894 repro over a warm manifest + warm standard semantic cache, `extract…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[1925 `graphify extract --code-only` with a MISSING manifest.json must not…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[1939 cache-check --prompt-file only counts entries produced by that same…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[1948 caller-side guard an incremental run that only re-dispatches the CHANGED…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[GRAPHIFY_FORCE=1 behaves like --force (env parity with `update`).]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[_recording_extractor()]] - code - temp-graphify/tests/test_extract_cli.py
- [[_run_extract()]] - code - temp-graphify/tests/test_extract_cli.py
- [[cache-check --mode deep consults cachesemantic-deep; without the flag it…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[extract accepts --force a warm tree re-dispatches every semantic file (cache…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[extract_corpus_parallel stand-in that records each dispatch.]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[test_cache_check_mode_deep_reads_deep_namespace()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_cache_check_prompt_file_scopes_hits_to_that_prompt()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_explicit_exclude_replaces_persisted_setting_with_custom_out()]] - code - temp-graphify/tests/test_extract_code_only_cli.py
- [[test_extract_force_flag_redispatches_and_stamps_manifest()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_graphify_force_env_redispatches()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_mode_deep_dispatches_over_warm_cache()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_incremental_partial_run_preserves_untouched_semantic_hash()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_missing_manifest_code_only_preserves_semantic_layer()]] - code - temp-graphify/tests/test_extract_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_run_extract
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_test_extract_cli.py]]
- 4 edges to [[_COMMUNITY__make_corpus]]
- 2 edges to [[_COMMUNITY_save_semantic_cache]]
- 1 edge to [[_COMMUNITY_main]]
- 1 edge to [[_COMMUNITY_test_extract_code_only_cli.py]]

## Top bridge nodes
- [[_run_extract()]] - degree 12, connects to 2 communities
- [[test_extract_force_flag_redispatches_and_stamps_manifest()]] - degree 5, connects to 2 communities
- [[test_extract_graphify_force_env_redispatches()]] - degree 5, connects to 2 communities
- [[test_extract_mode_deep_dispatches_over_warm_cache()]] - degree 5, connects to 2 communities
- [[test_cache_check_mode_deep_reads_deep_namespace()]] - degree 4, connects to 2 communities