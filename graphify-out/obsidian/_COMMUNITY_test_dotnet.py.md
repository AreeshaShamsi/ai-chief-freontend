---
type: community
cohesion: 0.05
members: 72
---

# test_dotnet.py

**Cohesion:** 0.05 - loosely connected
**Members:** 72 nodes

## Members
- [[1899 a ProjectReference to a project OUTSIDE the scan root must not leak the…]] - rationale - temp-graphify/tests/test_dotnet.py
- [[A ViewModel .cs with invalid UTF-8 bytes must not abort extract_xaml the…]] - rationale - temp-graphify/tests/test_dotnet.py
- [[A property value that matches an ordinary method's name must not become an…]] - rationale - temp-graphify/tests/test_dotnet.py
- [[Content=Tag= holding a string that equals a real handler's name must not…]] - rationale - temp-graphify/tests/test_dotnet.py
- [[Extract WPFXAML structure, bindings, xClass, and event handler references.]] - rationale - temp-graphify/graphify/extract.py
- [[Extract directives, component refs, and @code methods from .razor.cshtml.]] - rationale - temp-graphify/graphify/extractors/razor.py
- [[Extract packages, project refs, and target framework from a…]] - rationale - temp-graphify/graphify/extract.py
- [[Extract projects and inter-project dependencies from a .slnx file. .slnx is the…]] - rationale - temp-graphify/graphify/extract.py
- [[Path_29]] - code
- [[Reject XML that declares DTDs or entities. Stdlib ``xml.etree.ElementTree``…]] - rationale - temp-graphify/graphify/extract.py
- [[Tests for .NET project file extraction (.sln, .csproj, .xaml, .razor).]] - rationale - temp-graphify/tests/test_dotnet.py
- [[The code-behind.cs scan prunes noise dirs (node_modules.venv.git...) during…]] - rationale - temp-graphify/tests/test_dotnet.py
- [[_event_targets()]] - code - temp-graphify/tests/test_dotnet.py
- [[_labels()_2]] - code - temp-graphify/tests/test_dotnet.py
- [[_project_xml_is_safe()]] - code - temp-graphify/graphify/extract.py
- [[_relations()]] - code - temp-graphify/tests/test_dotnet.py
- [[_view_model_edges()]] - code - temp-graphify/tests/test_dotnet.py
- [[_xaml_inferred_viewmodel_names()]] - code - temp-graphify/graphify/extract.py
- [[extract_csproj()]] - code - temp-graphify/graphify/extract.py
- [[extract_razor()]] - code - temp-graphify/graphify/extractors/razor.py
- [[extract_slnx()]] - code - temp-graphify/graphify/extract.py
- [[extract_xaml()]] - code - temp-graphify/graphify/extract.py
- [[test_code_extensions()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_csproj_finds_packages()]] - code - temp-graphify/tests/test_languages.py
- [[test_csproj_finds_project_references()]] - code - temp-graphify/tests/test_languages.py
- [[test_csproj_finds_sdk()]] - code - temp-graphify/tests/test_languages.py
- [[test_csproj_finds_target_framework()]] - code - temp-graphify/tests/test_languages.py
- [[test_csproj_invalid_xml()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_csproj_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_csproj_out_of_root_reference_id_is_portable()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_csproj_packages()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_csproj_project_references()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_csproj_sdk()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_csproj_target_framework()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_dotnet.py]] - code - temp-graphify/tests/test_dotnet.py
- [[test_extract_preserves_xaml_viewmodel_edge_after_id_remap()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_extract_xaml_viewmodel_resolution_stays_inside_cache_root()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_razor_code_methods()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_razor_components()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_razor_finds_code_block_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_razor_finds_component_references()]] - code - temp-graphify/tests/test_languages.py
- [[test_razor_finds_inherits()]] - code - temp-graphify/tests/test_languages.py
- [[test_razor_finds_using_directives()]] - code - temp-graphify/tests/test_languages.py
- [[test_razor_inherits()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_razor_missing_file()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_razor_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_razor_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_razor_page_route()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_razor_using_and_inject()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_sln_extracts_projects()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_sln_project_dependency()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_slnx_contains_edges()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_slnx_extracts_projects()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_slnx_invalid_xml()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_slnx_missing_file()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_slnx_project_dependency()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_ambiguous_viewmodel_names_emit_no_edge()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_class_resolves_to_codebehind_partial_class()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_cs_scan_prunes_noise_dirs_and_stays_bounded()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_design_instance_datacontext_links_real_viewmodel_class()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_element_datacontext_links_real_viewmodel_class()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_event_match_requires_handler_signature()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_events_resolve_to_codebehind_methods()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_extracts_binding_paths_commands_and_converters()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_infers_viewmodel_by_name_only_without_datacontext()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_links_communitytoolkit_generated_members_and_event_to_command()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_named_controls_and_bindings()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_non_event_attribute_value_does_not_fabricate_event()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_prism_autowire_false_does_not_infer_from_filename()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_prism_autowire_infers_viewmodel_from_filename()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_viewmodel_resolution_respects_graphifyignore()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_xaml_viewmodel_with_non_utf8_codebehind_does_not_crash()]] - code - temp-graphify/tests/test_dotnet.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_dotnetpy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_languages.py]]
- 12 edges to [[_COMMUNITY_extract.py]]
- 8 edges to [[_COMMUNITY__make_id]]
- 7 edges to [[_COMMUNITY__relations]]
- 6 edges to [[_COMMUNITY__labels]]
- 5 edges to [[_COMMUNITY_Path]]
- 4 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY__get_extractor]]
- 1 edge to [[_COMMUNITY_test_pascal.py]]
- 1 edge to [[_COMMUNITY__load_graphifyignore]]

## Top bridge nodes
- [[extract_xaml()]] - degree 34, connects to 6 communities
- [[test_dotnet.py]] - degree 52, connects to 4 communities
- [[extract_csproj()]] - degree 17, connects to 4 communities
- [[extract_slnx()]] - degree 11, connects to 3 communities
- [[extract_razor()]] - degree 19, connects to 2 communities