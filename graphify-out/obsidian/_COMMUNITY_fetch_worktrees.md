---
type: community
cohesion: 0.14
members: 18
---

# fetch_worktrees

**Cohesion:** 0.14 - loosely connected
**Members:** 18 nodes

## Members
- [[dot-test_detached_head_does_not_leak_into_next_record()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_detect_default_branch_decodes_output_as_utf8()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_empty_output_returns_empty_dict()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_fetch_pr_files_decodes_output_as_utf8()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_fetch_worktrees_decodes_output_as_utf8()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_fixture_is_cp1252_undecodable()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_gh_decodes_output_as_utf8()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_nonzero_returncode_returns_empty_dict()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_normal_case_maps_branch_to_path()]] - code - temp-graphify/tests/test_prs.py
- [[dot-test_subprocess_failure_returns_empty_dict()]] - code - temp-graphify/tests/test_prs.py
- [[A detached HEAD (no branch line) must not associate its path with the next…]] - rationale - temp-graphify/tests/test_prs.py
- [[Guard the fixture's UTF-8 bytes must be undecodable as cp1252, else these…]] - rationale - temp-graphify/tests/test_prs.py
- [[Returns {branch worktree_path}.]] - rationale - temp-graphify/graphify/prs.py
- [[TestFetchWorktrees]] - code - temp-graphify/tests/test_prs.py
- [[TestSubprocessOutputEncoding]] - code - temp-graphify/tests/test_prs.py
- [[fetch_pr_files()]] - code - temp-graphify/graphify/prs.py
- [[fetch_worktrees()]] - code - temp-graphify/graphify/prs.py
- [[prs.py reads ghgitclaude output via subprocess.run(text=True). Without an…]] - rationale - temp-graphify/tests/test_prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/fetch_worktrees
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_prs.py]]
- 6 edges to [[_COMMUNITY_prs.py]]
- 2 edges to [[_COMMUNITY_serve.py]]

## Top bridge nodes
- [[fetch_worktrees()]] - degree 12, connects to 3 communities
- [[fetch_pr_files()]] - degree 6, connects to 3 communities
- [[TestSubprocessOutputEncoding]] - degree 8, connects to 2 communities
- [[TestFetchWorktrees]] - degree 7, connects to 2 communities
- [[dot-test_detect_default_branch_decodes_output_as_utf8()]] - degree 2, connects to 1 community