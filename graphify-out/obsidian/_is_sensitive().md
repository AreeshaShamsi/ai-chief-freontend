---
source_file: "temp-graphify/graphify/detect.py"
type: "code"
community: "test_detect.py"
location: "L259"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_detectpy
---

# _is_sensitive()

## Connections
- [[Path_7]] - `references` [EXTRACTED]
- [[Return True if this file likely contains secrets and should be skipped.]] - `rationale_for` [EXTRACTED]
- [[_generic_keyword_hit()]] - `calls` [EXTRACTED]
- [[_is_env_template()]] - `calls` [EXTRACTED]
- [[_is_graphable_source()]] - `calls` [EXTRACTED]
- [[_is_prose_note()]] - `calls` [EXTRACTED]
- [[_stale_graph_sources()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[test_detect.py]] - `imports` [EXTRACTED]
- [[test_sensitive_bare_keyword_prose_still_dropped()]] - `calls` [EXTRACTED]
- [[test_sensitive_dir_carveout_does_not_bypass_name_screens()]] - `calls` [EXTRACTED]
- [[test_sensitive_dir_carveout_still_drops_tfvars_values_store()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_password_policy_discussion()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_passwords_py()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_root_file_named_credentials()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_ruby_code_modules()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_source_under_secrets_dir()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_token_economics_note()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_tokenize_py()]] - `calls` [EXTRACTED]
- [[test_sensitive_does_not_flag_tokenizer_py()]] - `calls` [EXTRACTED]
- [[test_sensitive_env_template_inside_secrets_dir_still_dropped()]] - `calls` [EXTRACTED]
- [[test_sensitive_filter_indexes_env_templates()]] - `calls` [EXTRACTED]
- [[test_sensitive_filter_indexes_topic_prose_and_source()]] - `calls` [EXTRACTED]
- [[test_sensitive_filter_still_excludes_real_env_files()]] - `calls` [EXTRACTED]
- [[test_sensitive_filter_still_excludes_real_secrets()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_api_token_txt()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_credentials_json()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_dotfile_token()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_everything_under_credential_store_dirs()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_keyword_at_end_of_long_name()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_my_private_key_txt()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_oauth_token_json()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_plural_tokens_txt()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_secrets_dir()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_ssh_dir()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_token_txt()]] - `calls` [EXTRACTED]
- [[test_sensitive_flags_underscore_secret()]] - `calls` [EXTRACTED]
- [[test_sensitive_secret_handler_txt()]] - `calls` [EXTRACTED]
- [[test_sensitive_still_flags_data_secret_stores()]] - `calls` [EXTRACTED]
- [[test_sensitive_still_flags_data_under_secrets_dir()]] - `calls` [EXTRACTED]
- [[test_sensitive_token_config_yaml()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_detectpy