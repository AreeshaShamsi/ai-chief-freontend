---
source_file: "temp-graphify/tests/test_serve.py"
type: "code"
community: "_score_nodes"
location: "L1224"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_score_nodes
---

# test_query_graph_text_makes_exactly_one_score_query_call()

## Connections
- [[_make_random_scoring_graph()]] - `calls` [EXTRACTED]
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[_score_nodes()]] - `indirect_call` [INFERRED]
- [[_score_query()]] - `indirect_call` [INFERRED]
- [[`_query_graph_text` must invoke `_score_query` exactly once per query,…]] - `rationale_for` [EXTRACTED]
- [[test_serve.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_score_nodes