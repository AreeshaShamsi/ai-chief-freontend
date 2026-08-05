---
source_file: "temp-graphify/tests/test_cache.py"
type: "rationale"
community: "test_warm_cache_from_another_root_does_not_leak_that_root"
location: "L310"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_warm_cache_from_another_root_does_not_leak_that_root
---

# The stat-index location/anchor are chosen once per process via module globals…

## Connections
- [[_reset_stat_index()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_warm_cache_from_another_root_does_not_leak_that_root