---
type: community
cohesion: 0.21
members: 12
---

# TestSubprocessEncoding

**Cohesion:** 0.21 - loosely connected
**Members:** 12 nodes

## Members
- [[dot-_make_completed()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_call_llm_claude_cli_subprocess_encoding()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_subprocess_called_with_utf8_encoding()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_subprocess_does_not_use_text_true_without_encoding()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[dot-test_unicode_chars_survive_subprocess_roundtrip()]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[Build a mock CompletedProcess with a valid JSON envelope.]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[TestSubprocessEncoding]] - code - temp-graphify/tests/test_charmap_encoding.py
- [[Writing a file with → ✅ ≥ then passing its content through _call_claude_cli…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[_call_claude_cli must pass encoding=utf-8 to subprocess.run so that non-ASCII…]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[_call_llm with backend='claude-cli' must also use encoding='utf-8'.]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[subprocess.run must be invoked with encoding='utf-8'.]] - rationale - temp-graphify/tests/test_charmap_encoding.py
- [[text=True without encoding= relies on the locale codec (cp1252 on Windows).…]] - rationale - temp-graphify/tests/test_charmap_encoding.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/TestSubprocessEncoding
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_graphify__init__.py]]

## Top bridge nodes
- [[TestSubprocessEncoding]] - degree 7, connects to 1 community