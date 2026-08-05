---
type: community
cohesion: 0.05
members: 62
---

# llm.py

**Cohesion:** 0.05 - loosely connected
**Members:** 62 nodes

## Members
- [[dot-b64()]] - code - temp-graphify/graphify/llm.py
- [[dot-bedrock_format()]] - code - temp-graphify/graphify/llm.py
- [[A single image destined for a vision request. `raw` is None when the image is…]] - rationale - temp-graphify/graphify/llm.py
- [[Build Bedrock inferenceConfig, honouring GRAPHIFY_LLM_TEMPERATURE. Bedrock's…]] - rationale - temp-graphify/graphify/llm.py
- [[Build the Anthropic `messages.content` value (str, or block list with images).]] - rationale - temp-graphify/graphify/llm.py
- [[Build the Bedrock Converse user content list (raw bytes, not base64).]] - rationale - temp-graphify/graphify/llm.py
- [[Build the OpenAI-compatible user `content` value (str, or part list with…]] - rationale - temp-graphify/graphify/llm.py
- [[Call Anthropic Claude directly (not via OpenAI compat layer).]] - rationale - temp-graphify/graphify/llm.py
- [[Call Azure OpenAI Service via the AzureOpenAI SDK client.]] - rationale - temp-graphify/graphify/llm.py
- [[Construct an AzureOpenAI client with env-driven api_version and timeout.]] - rationale - temp-graphify/graphify/llm.py
- [[Defang known chat-template  jailbreak control tokens in untrusted text.…]] - rationale - temp-graphify/graphify/llm.py
- [[Default retry count is generous (so 429s are absorbed, 1523); env overrides.]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Honour GRAPHIFY_MAX_OUTPUT_TOKENS env var override, else use backend default.]] - rationale - temp-graphify/graphify/llm.py
- [[How many times the provider SDK retries a transient error (notably HTTP 429…]] - rationale - temp-graphify/graphify/llm.py
- [[Label a batch of communities, splitting in half and retrying on parse failure.…]] - rationale - temp-graphify/graphify/llm.py
- [[Opt-in (GRAPHIFY_DISABLE_THINKING) to send ``{thinking {type…]] - rationale - temp-graphify/graphify/llm.py
- [[Package-missing message that works for the recommended `uv tool` install. `uv…]] - rationale - temp-graphify/graphify/llm.py
- [[Parse the JSON returned by `claude -p --output-format json`. Older Claude Code…]] - rationale - temp-graphify/graphify/llm.py
- [[Parse the backend's JSON ``{cid name}`` reply. Raises on non-JSON or a non-…]] - rationale - temp-graphify/graphify/llm.py
- [[Return a tiktoken encoder for accurate token counts, or None if tiktoken is not…]] - rationale - temp-graphify/graphify/llm.py
- [[Return refs with pixel data dropped (for non-vision backends).]] - rationale - temp-graphify/graphify/llm.py
- [[Same 1442 fix for the OpenAI-compatible branch of _call_llm.]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Send a plain-text prompt to `backend` and return the model's text reply. When…]] - rationale - temp-graphify/graphify/llm.py
- [[Text block listing the images so the model emits one node per image. Always…]] - rationale - temp-graphify/graphify/llm.py
- [[The claude backend must be installable via an extra, and the missing-package…]] - rationale - temp-graphify/tests/test_backend_extras.py
- [[The secondary dispatch path (_call_llm, used by the dedup tiebreaker) must…]] - rationale - temp-graphify/tests/test_llm_backends.py
- [[Wrap one file's content in a labelled, hash-stamped untrusted-data block. The…]] - rationale - temp-graphify/graphify/llm.py
- [[_ImageRef]] - code - temp-graphify/graphify/llm.py
- [[_anthropic_content()]] - code - temp-graphify/graphify/llm.py
- [[_azure_client()]] - code - temp-graphify/graphify/llm.py
- [[_backend_pkg_hint()]] - code - temp-graphify/graphify/llm.py
- [[_bedrock_content()]] - code - temp-graphify/graphify/llm.py
- [[_bedrock_inference_config()]] - code - temp-graphify/graphify/llm.py
- [[_call_azure()]] - code - temp-graphify/graphify/llm.py
- [[_call_claude()]] - code - temp-graphify/graphify/llm.py
- [[_call_llm()]] - code - temp-graphify/graphify/llm.py
- [[_claude_cli_envelope()]] - code - temp-graphify/graphify/llm.py
- [[_extras()]] - code - temp-graphify/tests/test_backend_extras.py
- [[_get_tokenizer()]] - code - temp-graphify/graphify/llm.py
- [[_image_notes()]] - code - temp-graphify/graphify/llm.py
- [[_label_batch_with_retry()]] - code - temp-graphify/graphify/llm.py
- [[_neutralise_injection_sentinels()]] - code - temp-graphify/graphify/llm.py
- [[_openai_content()]] - code - temp-graphify/graphify/llm.py
- [[_parse_label_response()]] - code - temp-graphify/graphify/llm.py
- [[_resolve_max_retries()]] - code - temp-graphify/graphify/llm.py
- [[_resolve_max_tokens()]] - code - temp-graphify/graphify/llm.py
- [[_strip_pixels()]] - code - temp-graphify/graphify/llm.py
- [[_thinking_disabled_via_env()]] - code - temp-graphify/graphify/llm.py
- [[_with_image_notes()]] - code - temp-graphify/graphify/llm.py
- [[_wrap_untrusted()]] - code - temp-graphify/graphify/llm.py
- [[llm.py]] - code - temp-graphify/graphify/llm.py
- [[test_anthropic_extra_exists()]] - code - temp-graphify/tests/test_backend_extras.py
- [[test_anthropic_in_all_extra()]] - code - temp-graphify/tests/test_backend_extras.py
- [[test_backend_extras.py]] - code - temp-graphify/tests/test_backend_extras.py
- [[test_backend_pkg_hint_points_at_uv_tool_and_extra()]] - code - temp-graphify/tests/test_backend_extras.py
- [[test_builders_fall_back_to_string_without_pixels()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_llm_claude_cli_branch_honours_timeout()]] - code - temp-graphify/tests/test_claude_cli_backend.py
- [[test_call_llm_claude_client_built_with_timeout_and_retries()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_call_llm_openai_compat_client_built_with_timeout_and_retries()]] - code - temp-graphify/tests/test_llm_backends.py
- [[test_no_images_is_byte_identical()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_openai_content_has_data_uri()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_resolve_max_retries_default_and_env()]] - code - temp-graphify/tests/test_llm_backends.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/llmpy
SORT file.name ASC
```

## Connections to other communities
- 27 edges to [[_COMMUNITY_test_image_vision.py]]
- 21 edges to [[_COMMUNITY_test_llm_backends.py]]
- 14 edges to [[_COMMUNITY_extract_files_direct]]
- 14 edges to [[_COMMUNITY__call_claude_cli]]
- 9 edges to [[_COMMUNITY_test_chunking.py]]
- 8 edges to [[_COMMUNITY_test_file_slice.py]]
- 6 edges to [[_COMMUNITY_cli.py]]
- 6 edges to [[_COMMUNITY__parse_llm_json]]
- 5 edges to [[_COMMUNITY_test_labeling.py]]
- 5 edges to [[_COMMUNITY_graphify__init__.py]]
- 4 edges to [[_COMMUNITY_save_semantic_cache]]
- 4 edges to [[_COMMUNITY__load_custom_providers]]
- 3 edges to [[_COMMUNITY_test_evidence_binding.py]]
- 2 edges to [[_COMMUNITY_prs.py]]
- 1 edge to [[_COMMUNITY_dedup.py]]
- 1 edge to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_test_office_limits.py]]

## Top bridge nodes
- [[llm.py]] - degree 99, connects to 15 communities
- [[_call_llm()]] - degree 24, connects to 8 communities
- [[_call_claude()]] - degree 12, connects to 6 communities
- [[_ImageRef]] - degree 16, connects to 4 communities
- [[_call_azure()]] - degree 8, connects to 4 communities