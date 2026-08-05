---
type: community
cohesion: 0.04
members: 64
---

# test_cache.py

**Cohesion:** 0.04 - loosely connected
**Members:** 64 nodes

## Members
- [[1916 (ghost variant) a node group whose source_file does not exist is…]] - rationale - temp-graphify/tests/test_cache.py
- [[1916 a hyperedge whose member list intersects the skipped ids is dropped…]] - rationale - temp-graphify/tests/test_cache.py
- [[1916 an edge in an ALLOWED file's group referencing a node grouped under an…]] - rationale - temp-graphify/tests/test_cache.py
- [[A CRLF checkout of the same spec must not look like a prompt change — otherwise…]] - rationale - temp-graphify/tests/test_cache.py
- [[A ``--- text`` line is skipped; the next whole ``---`` line closes.]] - rationale - temp-graphify/tests/test_cache.py
- [[A document opening with a ``----`` thematic break has no frontmatter; a later…]] - rationale - temp-graphify/tests/test_cache.py
- [[A skill snippet substitutes SPEC_PATH by hand. If it lands on a path that isn't…]] - rationale - temp-graphify/tests/test_cache.py
- [[After file content changes, load_cached returns None.]] - rationale - temp-graphify/tests/test_cache.py
- [[An AST entry written by version X must not be served after upgrading to version…]] - rationale - temp-graphify/tests/test_cache.py
- [[Check semantic extraction cache for a list of absolute file paths. Returns…]] - rationale - temp-graphify/graphify/cache.py
- [[Deep entries must not satisfy mode=None reads (and plain entries must not…]] - rationale - temp-graphify/tests/test_cache.py
- [[End-to-end portability a cache entry written at one root can be consumed at a…]] - rationale - temp-graphify/tests/test_cache.py
- [[Entries written before fingerprinting have unknowable vintage. They are still…]] - rationale - temp-graphify/tests/test_cache.py
- [[Fingerprinted entries live under cachesemanticp{fp}, never flat.]] - rationale - temp-graphify/tests/test_cache.py
- [[For well-formed frontmatter the stripped body must stay byte-identical to the…]] - rationale - temp-graphify/tests/test_cache.py
- [[Omitting mode writes exactly the historical cachesemantic layout — forward-…]] - rationale - temp-graphify/tests/test_cache.py
- [[Once a file is re-extracted under the current prompt, its fingerprinted entry…]] - rationale - temp-graphify/tests/test_cache.py
- [[Return a short stable fingerprint of an extraction prompt. ``prompt`` is either…]] - rationale - temp-graphify/graphify/cache.py
- [[Save then load returns the same result dict.]] - rationale - temp-graphify/tests/test_cache.py
- [[Strip YAML frontmatter from Markdown content, returning only the body.]] - rationale - temp-graphify/graphify/cache.py
- [[Tests for graphifycache.py.]] - rationale - temp-graphify/tests/test_cache.py
- [[The fingerprint is stable for identical prompts and differs when the prompt…]] - rationale - temp-graphify/tests/test_cache.py
- [[The prompt fingerprint nests inside the deep namespace (1894), so the two…]] - rationale - temp-graphify/tests/test_cache.py
- [[The prompt-file fingerprint is memoized per (path, size, mtime); an edited spec…]] - rationale - temp-graphify/tests/test_cache.py
- [[The reported bug (1939) after the extraction prompt changes, an unchanged…]] - rationale - temp-graphify/tests/test_cache.py
- [[The stored placeholder form must restore to the exact absolute-derived id the…]] - rationale - temp-graphify/tests/test_cache.py
- [[_body_content correctly strips YAML frontmatter.]] - rationale - temp-graphify/tests/test_cache.py
- [[_body_content returns content unchanged when no frontmatter present.]] - rationale - temp-graphify/tests/test_cache.py
- [[_body_content()]] - code - temp-graphify/graphify/cache.py
- [[``--- text`` and ``----`` lines inside opened frontmatter are not the close;…]] - rationale - temp-graphify/tests/test_cache.py
- [[``--- title`` on the first line is prose, not an open delimiter.]] - rationale - temp-graphify/tests/test_cache.py
- [[``load_cached`` returns the same absolute-path shape that a fresh extraction…]] - rationale - temp-graphify/tests/test_cache.py
- [[check_semantic_cache()]] - code - temp-graphify/graphify/cache.py
- [[mode='deep' saves under cachesemantic-deep and reads back from it.]] - rationale - temp-graphify/tests/test_cache.py
- [[prompt_fingerprint()]] - code - temp-graphify/graphify/cache.py
- [[test_ast_cache_invalidated_on_version_bump()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_dash_text_line_is_not_close_delimiter()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_dash_title_start_is_not_frontmatter()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_hr_start_is_not_frontmatter()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_later_proper_close_skips_dash_text_lines()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_no_frontmatter()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_strips_frontmatter()]] - code - temp-graphify/tests/test_cache.py
- [[test_body_content_well_formed_output_byte_identical()]] - code - temp-graphify/tests/test_cache.py
- [[test_cache.py]] - code - temp-graphify/tests/test_cache.py
- [[test_cache_miss_on_change()]] - code - temp-graphify/tests/test_cache.py
- [[test_cache_portable_across_roots()]] - code - temp-graphify/tests/test_cache.py
- [[test_cache_roundtrip()]] - code - temp-graphify/tests/test_cache.py
- [[test_cached_ids_round_trip_under_the_same_root()]] - code - temp-graphify/tests/test_cache.py
- [[test_load_cached_absolutizes_source_file()]] - code - temp-graphify/tests/test_cache.py
- [[test_prompt_file_reflects_edited_spec()]] - code - temp-graphify/tests/test_cache.py
- [[test_prompt_fingerprint_ignores_line_endings()]] - code - temp-graphify/tests/test_cache.py
- [[test_prompt_fingerprint_stable_and_prompt_sensitive()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_drops_edges_to_ghost_file_nodes()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_drops_edges_to_out_of_scope_nodes()]] - code - temp-graphify/tests/test_cache.py
- [[test_save_semantic_cache_drops_hyperedges_touching_skipped_nodes()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_deep_invisible_to_plain_reads_and_vice_versa()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_deep_mode_roundtrip_under_deep_namespace()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_fingerprinted_entry_beats_legacy()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_legacy_entries_served_with_warning()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_mode_none_layout_unchanged()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_prompt_and_mode_compose()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_prompt_change_invalidates()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_prompt_namespaced_layout()]] - code - temp-graphify/tests/test_cache.py
- [[test_semantic_cache_unreadable_prompt_file_warns_and_falls_back()]] - code - temp-graphify/tests/test_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_cachepy
SORT file.name ASC
```

## Connections to other communities
- 27 edges to [[_COMMUNITY_save_semantic_cache]]
- 25 edges to [[_COMMUNITY_cache.py]]
- 17 edges to [[_COMMUNITY_file_hash]]
- 5 edges to [[_COMMUNITY_test_warm_cache_from_another_root_does_not_leak_that_root]]
- 4 edges to [[_COMMUNITY_clear_cache]]
- 2 edges to [[_COMMUNITY_test_semantic_cache_out_root.py]]
- 2 edges to [[_COMMUNITY__fixture]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_test_stat_index_portability.py]]

## Top bridge nodes
- [[test_cache.py]] - degree 77, connects to 6 communities
- [[check_semantic_cache()]] - degree 22, connects to 6 communities
- [[_body_content()]] - degree 11, connects to 2 communities
- [[test_semantic_cache_deep_mode_roundtrip_under_deep_namespace()]] - degree 5, connects to 2 communities
- [[test_semantic_cache_mode_none_layout_unchanged()]] - degree 5, connects to 2 communities