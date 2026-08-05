---
type: community
cohesion: 0.22
members: 13
---

# Window

**Cohesion:** 0.22 - loosely connected
**Members:** 13 nodes

## Members
- [[dot-Save_Click()]] - code - temp-graphify/tests/fixtures/sample.xaml.cs
- [[dot-UserNameChanged()]] - code - temp-graphify/tests/fixtures/sample.xaml.cs
- [[dot-Window_Loaded()]] - code - temp-graphify/tests/fixtures/sample.xaml.cs
- [[Button_1]] - concept - temp-graphify/tests/fixtures/sample.xaml
- [[MainWindow]] - code - temp-graphify/tests/fixtures/sample.xaml.cs
- [[RoutedEventArgs]] - code
- [[SaveButton_1]] - code - temp-graphify/tests/fixtures/sample.xaml
- [[TextBox]] - concept - temp-graphify/tests/fixtures/sample.xaml
- [[UserName]] - concept - temp-graphify/tests/fixtures/sample.xaml
- [[UserNameBox]] - code - temp-graphify/tests/fixtures/sample.xaml
- [[Window_1]] - code - temp-graphify/tests/fixtures/sample.xaml
- [[Window_2]] - code
- [[sample.xaml]] - code - temp-graphify/tests/fixtures/sample.xaml

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Window
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Window]]
- 1 edge to [[_COMMUNITY_Demo.ViewModels]]
- 1 edge to [[_COMMUNITY_DataProcessor_1]]
- 1 edge to [[_COMMUNITY_ToolkitViewModel]]

## Top bridge nodes
- [[Window_1]] - degree 7, connects to 2 communities
- [[MainWindow]] - degree 6, connects to 1 community
- [[UserName]] - degree 2, connects to 1 community