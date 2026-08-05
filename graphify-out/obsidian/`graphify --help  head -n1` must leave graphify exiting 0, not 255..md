---
source_file: "temp-graphify/tests/test_cli_broken_pipe.py"
type: "rationale"
community: "test_cli_broken_pipe.py"
location: "L18"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_cli_broken_pipepy
---

# `graphify --help | head -n1` must leave graphify exiting 0, not 255.

## Connections
- [[test_help_survives_reader_closing_pipe_early()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_cli_broken_pipepy