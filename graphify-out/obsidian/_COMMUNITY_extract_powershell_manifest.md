---
type: community
cohesion: 0.12
members: 17
---

# extract_powershell_manifest

**Cohesion:** 0.12 - loosely connected
**Members:** 17 nodes

## Members
- [[All imports_from edge sources must exist in the node set.]] - rationale - temp-graphify/tests/test_languages.py
- [[Extract module dependency edges from a PowerShell .psd1 manifest file. .psd1…]] - rationale - temp-graphify/graphify/extractors/powershell.py
- [[ModuleVersion values ('5.0', '1.0.0') must NOT appear as import targets.]] - rationale - temp-graphify/tests/test_languages.py
- [[NestedModules = @('Helpers.psm1', 'Logger.psm1') produces edges for both.]] - rationale - temp-graphify/tests/test_languages.py
- [[Path_28]] - code
- [[RequiredModules hashtable form @{{ ModuleName='Pester' }} produces an…]] - rationale - temp-graphify/tests/test_languages.py
- [[RequiredModules string form 'PSReadLine' produces an imports_from edge.]] - rationale - temp-graphify/tests/test_languages.py
- [[RootModule = 'MyModule.psm1' produces an imports_from edge to 'mymodule'.]] - rationale - temp-graphify/tests/test_languages.py
- [[extract_powershell_manifest()]] - code - temp-graphify/graphify/extractors/powershell.py
- [[test_powershell_psd1_has_file_node()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_nested_modules()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_no_moduleversion_as_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_required_modules_hashtable()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_required_modules_string()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_root_module()]] - code - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_powershell_manifest
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_languages.py]]
- 4 edges to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_extract_powershell]]

## Top bridge nodes
- [[extract_powershell_manifest()]] - degree 15, connects to 2 communities
- [[test_powershell_psd1_nested_modules()]] - degree 3, connects to 1 community
- [[test_powershell_psd1_no_dangling_edges()]] - degree 3, connects to 1 community
- [[test_powershell_psd1_no_moduleversion_as_edge()]] - degree 3, connects to 1 community
- [[test_powershell_psd1_required_modules_hashtable()]] - degree 3, connects to 1 community