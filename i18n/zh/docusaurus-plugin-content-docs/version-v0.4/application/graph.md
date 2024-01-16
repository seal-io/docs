---
sidebar_position: 4
---

# 依赖图

您可以通过依赖图查看部署的服务和资源的拓扑结构。Walrus 提供两个级别的依赖图：环境和服务/资源。

## 环境依赖图

环境依赖图包括环境中的所有服务和资源及其关系和部署状态。

1. 点击左侧导航栏的 `应用管理` 进入项目和环境。
2. 点击 `依赖图` 标签查看环境依赖图。

> 注意：在依赖图中，默认隐藏了“已实现”和“已继承”的子节点。可以通过点击工具栏中的“显示子资源”图标来展开它们。

![environment-graph](/img/v0.4.0/application/graph/app-graph-env.png)
## 服务/资源依赖图

服务/资源依赖图显示了服务或资源下的所有组件及其关系和部署状态。

1. 点击左侧导航栏的 `应用管理`，进入项目和环境，并转到服务或资源的详细页面。
2. 在组件信息的 `组件` 标签下，点击右侧图标切换到图形视图。

![service-graph](/img/v0.4.0/application/graph/app-graph-svc.png)

## 依赖图节点关系

依赖图中节点之间的关系可以分为三类：

- 组合：组件关系，由实线和钻石箭头表示
- 依赖：表示依赖关系，由虚线和V形箭头表示
- 实现：实现或继承，由点线和三角形箭头表示

![graph-legend](/img/v0.4.0/application/graph/app-graph-legend.png)
## 图工具栏

- 视图适中
- 刷新视图
- 全屏查看
- 子节点显示、隐藏切换

![graph-toolbar](/img/v0.4.0/application/graph/app-graph-toolbar.png)

## 查看组件日志

1. 在依赖图中，选择一个可以执行日志操作的节点，点击节点方框左上角的图标，然后点击 `日志`。
2. 您可以通过上下拉伸来调整日志窗口的大小。

![graph-log](/img/v0.4.0/application/graph/app-graph-log.png)

## 访问组件终端

1. 在依赖图中，选择一个可以执行终端操作的节点，点击节点方框左上角的图标，然后点击 `终端`。
2. 您可以通过上下拉伸来调整终端窗口的大小。

![graph-exec](/img/v0.4.0/application/graph/app-graph-exec.png)