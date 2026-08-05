---
source_file: "temp-graphify/graphify/affected.py"
type: "code"
community: "affected_nodes"
location: "L146"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/affected_nodes
---

# affected_nodes()

## Connections
- [[AffectedHit]] - `references` [EXTRACTED]
- [[affected.py]] - `contains` [EXTRACTED]
- [[format_affected()]] - `calls` [EXTRACTED]
- [[test_affected_excludes_shadowed_untracked_closure_caller()]] - `calls` [EXTRACTED]
- [[test_affected_includes_indirect_callers()]] - `calls` [EXTRACTED]
- [[test_affected_includes_self_type_dependents()]] - `calls` [EXTRACTED]
- [[test_affected_member_seed.py]] - `imports` [EXTRACTED]
- [[test_assignment_feeds_affected()]] - `calls` [EXTRACTED]
- [[test_class_affected_reaches_method_bound_caller()]] - `calls` [EXTRACTED]
- [[test_class_level_caller_still_works()]] - `calls` [EXTRACTED]
- [[test_cross_file_affected_includes_importing_dispatcher()]] - `calls` [EXTRACTED]
- [[test_getattr_feeds_affected()]] - `calls` [EXTRACTED]
- [[test_indirect_call_nested_closure_shadow.py]] - `imports` [EXTRACTED]
- [[test_indirect_dispatch.py]] - `imports` [EXTRACTED]
- [[test_indirect_dispatch_assign_return.py]] - `imports` [EXTRACTED]
- [[test_indirect_dispatch_getattr.py]] - `imports` [EXTRACTED]
- [[test_member_method_node_not_reported_as_hit()]] - `calls` [EXTRACTED]
- [[test_method_contains_still_excluded_from_general_walk()]] - `calls` [EXTRACTED]
- [[test_scala_self_type.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/affected_nodes