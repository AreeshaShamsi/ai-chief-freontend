---
source_file: "temp-graphify/tests/test_security.py"
type: "code"
community: "test_security.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_securitypy
---

# test_security.py

## Connections
- [[Tests for graphifysecurity.py - URL validation, safe fetch, path guards, label…]] - `rationale_for` [EXTRACTED]
- [[_make_mock_response()]] - `contains` [EXTRACTED]
- [[_max_graph_file_bytes()]] - `imports` [EXTRACTED]
- [[_sanitize_metadata_string()]] - `imports` [EXTRACTED]
- [[_sanitize_metadata_value()]] - `imports` [EXTRACTED]
- [[check_graph_file_size_cap()]] - `imports` [EXTRACTED]
- [[safe_fetch()]] - `imports` [EXTRACTED]
- [[safe_fetch_text()]] - `imports` [EXTRACTED]
- [[sanitize_label()]] - `imports` [EXTRACTED]
- [[sanitize_metadata()]] - `imports` [EXTRACTED]
- [[security.py]] - `imports_from` [EXTRACTED]
- [[test_graph_size_cap_at_boundary_passes()]] - `contains` [EXTRACTED]
- [[test_graph_size_cap_default_is_512_mib()]] - `contains` [EXTRACTED]
- [[test_graph_size_cap_error_message_includes_size_and_cap()]] - `contains` [EXTRACTED]
- [[test_graph_size_cap_missing_file_silently_returns()]] - `contains` [EXTRACTED]
- [[test_graph_size_cap_over_limit_raises()]] - `contains` [EXTRACTED]
- [[test_graph_size_cap_under_limit_returns_none()]] - `contains` [EXTRACTED]
- [[test_graph_size_cap_unreadable_directory_silently_returns()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_default_when_blank()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_default_when_unset()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_gb_suffix_is_binary()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_mb_suffix_is_binary()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_nonpositive_falls_back()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_plain_integer()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_suffix_is_case_insensitive()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_tolerates_space_before_suffix()]] - `contains` [EXTRACTED]
- [[test_max_graph_bytes_unparseable_falls_back()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_raises_on_non_2xx()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_raises_on_size_exceeded()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_rejects_file_url()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_rejects_ftp_url()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_returns_bytes()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_text_decodes_utf8()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_text_replaces_bad_bytes()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_caps_at_256()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_none_returns_empty()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_passthrough_html_chars()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_safe_passthrough()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_strips_control_chars()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_bool_not_coerced_to_int()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_drops_empty_key()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_none_returns_empty_dict()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_recursive_nested()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_sanitizes_keys()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_string_caps_length()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_string_coerces_non_string()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_string_escapes_html()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_string_escapes_quotes()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_string_strips_control_chars()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_value_caps_list_length()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_value_converts_tuple_to_list()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_value_preserves_simple_types()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_value_recurses_into_dict()]] - `contains` [EXTRACTED]
- [[test_sanitize_metadata_value_recurses_into_list()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_allows_inside_base()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_blocks_traversal()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_default_base_discovers_output_dir()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_default_base_honours_graphify_out_override()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_raises_if_file_missing()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_requires_base_exists()]] - `contains` [EXTRACTED]
- [[test_validate_url_accepts_http()]] - `contains` [EXTRACTED]
- [[test_validate_url_accepts_https()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_data()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_empty_scheme()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_file()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_ftp()]] - `contains` [EXTRACTED]
- [[validate_graph_path()]] - `imports` [EXTRACTED]
- [[validate_url()]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_securitypy