---
source_file: "temp-graphify/tests/test_hooks.py"
type: "rationale"
community: "test_file_path_allowlist_accepts_windows_backslash_path"
location: "L506"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_file_path_allowlist_accepts_windows_backslash_path
---

# Guard against a naive fix (backslash right before `]`) that forms a `:`-to-`\\`…

## Connections
- [[test_python_detect_allowlists_still_reject_shell_metacharacters()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_file_path_allowlist_accepts_windows_backslash_path