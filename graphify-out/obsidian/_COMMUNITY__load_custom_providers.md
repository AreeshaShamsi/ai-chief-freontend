---
type: community
cohesion: 0.12
members: 21
---

# _load_custom_providers

**Cohesion:** 0.12 - loosely connected
**Members:** 21 nodes

## Members
- [[A project-local ..graphifyproviders.json is NOT loaded by default (F1). It…]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[A provider whose base_url uses a non-http(s) scheme is skipped on load (F1).]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[Built-in provider names are protected from being overridden.]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[Custom providers appear after all built-ins in detect_backend() priority.]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[Full round-trip add → list → show → remove via providers.json.]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[Missing pricing field defaults to zero so estimate_cost doesn't blow up.]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[Structural safety check for a custom-provider base_url. A custom provider…]] - rationale - temp-graphify/graphify/llm.py
- [[With explicit opt-in the project-local file is honoured (F1).]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[_custom_providers_path()]] - code - temp-graphify/graphify/llm.py
- [[_load_custom_providers()]] - code - temp-graphify/graphify/llm.py
- [[provider_base_url_ok rejects bad schemes and warns on plaintext-http egress…]] - rationale - temp-graphify/tests/test_provider_registry.py
- [[provider_base_url_ok()]] - code - temp-graphify/graphify/llm.py
- [[test_custom_provider_add_list_show_remove()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_custom_provider_cannot_shadow_builtin()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_custom_provider_pricing_defaults_to_zero()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_detect_backend_custom_provider_after_builtins()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_non_http_provider_base_url_rejected()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_project_local_providers_ignored_without_optin()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_project_local_providers_loaded_with_optin()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_provider_base_url_ok_scheme_and_warnings()]] - code - temp-graphify/tests/test_provider_registry.py
- [[test_provider_registry.py]] - code - temp-graphify/tests/test_provider_registry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_load_custom_providers
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_llm.py]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_test_image_vision.py]]
- 1 edge to [[_COMMUNITY_extract_files_direct]]

## Top bridge nodes
- [[_custom_providers_path()]] - degree 5, connects to 4 communities
- [[provider_base_url_ok()]] - degree 6, connects to 3 communities
- [[_load_custom_providers()]] - degree 9, connects to 1 community
- [[test_provider_registry.py]] - degree 9, connects to 1 community
- [[test_detect_backend_custom_provider_after_builtins()]] - degree 3, connects to 1 community