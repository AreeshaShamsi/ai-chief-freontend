---
source_file: "temp-graphify/graphify/manifest_ingest.py"
type: "code"
community: "test_manifest_ingest.py"
location: "L51"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_manifest_ingestpy
---

# extract_package_manifest()

## Connections
- [[Any_5]] - `references` [EXTRACTED]
- [[Parse a package manifest into a canonical package node + ``depends_on`` edges.]] - `rationale_for` [EXTRACTED]
- [[Path_44]] - `references` [EXTRACTED]
- [[_get_extractor()]] - `indirect_call` [INFERRED]
- [[_pkg_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `imports` [EXTRACTED]
- [[manifest_ingest.py]] - `contains` [EXTRACTED]
- [[test_apm_parses_name_and_deps()]] - `calls` [EXTRACTED]
- [[test_gomod_parses_module_and_requires()]] - `calls` [EXTRACTED]
- [[test_malformed_manifest_does_not_crash()]] - `calls` [EXTRACTED]
- [[test_manifest_ingest.py]] - `imports` [EXTRACTED]
- [[test_pom_parses_artifact_and_deps()]] - `calls` [EXTRACTED]
- [[test_pyproject_parses_pep508_deps()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_manifest_ingestpy