---
type: community
cohesion: 0.05
members: 43
---

# extract_objc

**Cohesion:** 0.05 - loosely connected
**Members:** 43 nodes

## Members
- [[@selector(doThing) must resolve to `-doThing` exactly, not be suppressed by a…]] - rationale - temp-graphify/tests/test_languages.py
- [[@selector(doThing) with two doThing methods must emit zero calls edges.]] - rationale - temp-graphify/tests/test_languages.py
- [[@selector(uniqueMethod) with exactly one match produces a calls edge.]] - rationale - temp-graphify/tests/test_languages.py
- [[A compound message `self ax by` resolves to the compound method def (1475).]] - rationale - temp-graphify/tests/test_languages.py
- [[A macro-free header still parses exactly as before (regression).]] - rationale - temp-graphify/tests/test_languages.py
- [[A substring-colliding sibling must neither be falsely matched nor suppress the…]] - rationale - temp-graphify/tests/test_languages.py
- [[Accessing a property not defined in the current class produces zero accesses…]] - rationale - temp-graphify/tests/test_languages.py
- [[Extract interfaces, implementations, protocols, methods, and imports from…]] - rationale - temp-graphify/graphify/extractors/objc.py
- [[Path_25]] - code
- [[Two classes each declaring -name self.name in A must NOT fan out to B's -name.]] - rationale - temp-graphify/tests/test_languages.py
- [[`+ (…)shared` is a class method and must be labeled +shared, not -shared…]] - rationale - temp-graphify/tests/test_languages.py
- [[`@import Foundation;`  `@import UIKit.UIView;` produce imports edges (1475).]] - rationale - temp-graphify/tests/test_languages.py
- [[`@protocol Derived Base` must emit an implements edge Derived-Base.…]] - rationale - temp-graphify/tests/test_languages.py
- [[`NSArrayProduct  ` must reference the element type Product (and the…]] - rationale - temp-graphify/tests/test_languages.py
- [[`NS_ASSUME_NONNULL_BEGIN` before `@interface` made tree-sitter-objc fail to…]] - rationale - temp-graphify/tests/test_languages.py
- [[`Unknown alloc init` with no such class must not produce a resolved…]] - rationale - temp-graphify/tests/test_languages.py
- [[`self speak` inside Dog.fetch must produce a calls edge. The method-body…]] - rationale - temp-graphify/tests/test_languages.py
- [[extract_objc()]] - code - temp-graphify/graphify/extractors/objc.py
- [[self.name dot-syntax resolves to an accesses edge within the same class.]] - rationale - temp-graphify/tests/test_languages.py
- [[test_objc_alloc_init_unknown_class_no_resolved_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_class_method_labeled_with_plus()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_compound_selector_call_resolves()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_dot_syntax_no_fanout_two_same_named_properties()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_dot_syntax_property_accesses_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_dot_syntax_substring_sibling_exact_match()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_dot_syntax_unresolvable_property_zero_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_finds_imports()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_finds_interface()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_finds_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_finds_subclass()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_generic_property_type_extracted()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_inherits_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_macro_free_header_unchanged()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_module_import_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_ns_assume_nonnull_macro_does_not_break_parsing()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_property_type_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_protocol_adopts_protocol()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_resolves_self_method_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_selector_expression_calls_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_selector_no_fanout_two_same_named_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_selector_substring_method_exact_match()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_splits_inherits_and_implements()]] - code - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_objc
SORT file.name ASC
```

## Connections to other communities
- 25 edges to [[_COMMUNITY_test_languages.py]]
- 6 edges to [[_COMMUNITY__edge_labels]]
- 5 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY_extract.py]]
- 2 edges to [[_COMMUNITY__read_text]]
- 1 edge to [[_COMMUNITY__get_extractor]]

## Top bridge nodes
- [[extract_objc()]] - degree 37, connects to 5 communities
- [[test_objc_generic_property_type_extracted()]] - degree 4, connects to 2 communities
- [[test_objc_macro_free_header_unchanged()]] - degree 4, connects to 2 communities
- [[test_objc_ns_assume_nonnull_macro_does_not_break_parsing()]] - degree 4, connects to 2 communities
- [[test_objc_protocol_adopts_protocol()]] - degree 4, connects to 2 communities