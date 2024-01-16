---
sidebar_position: 4
---

# Dependency Graph

You can view the topology of deployed services and resources through the dependency graph. Walrus provides dependency graphs at two levels: environment and service/resource.

## Environment Dependency Graph

The environment dependency graph includes all services and resources in the environment, as well as their relationships and deployment status.

1. Click `Application Management` in the left navigation bar to enter the project and environment.
2. Click the `Dependency Graph` tab to view the environment dependency graph.

> Note: In the dependency graph, sub-nodes that are "implemented" and "inherited" are hidden by default. They can be expanded by clicking on the "Show Sub-resources" icon in the toolbar.

![environment-graph](/img/v0.4.0/application/graph/app-graph-env-en.png)
## Service/Resource Dependency Graph

The service/resource dependency graph displays all components under the service or resource, as well as their relationships and deployment status.

1. Click `Application Management` in the left navigation bar, enter the project and environment, and go to the service or resource detail page.
2. Under the `Components` tab of component information, click the icon on the right to switch to the graph view.

![service-graph](/img/v0.4.0/application/graph/app-graph-svc-en.png)

## Dependency Graph Node Relations

The relationships between nodes in the dependency graph can be divided into three categories:

- Composition: A component relationship, represented by a solid line and a diamond arrow
- Dependency: Denotes dependency, represented by a dashed line and a V-shaped arrow
- Realization: Realization or inheritance, represented by a dotted line and a triangular arrow

![graph-legend](/img/v0.4.0/application/graph/app-graph-legend-en.png)
## Graph Toolbar

- View to scale
- Refresh view
- Full screen view
- Toggle display or hide sub-nodes

![graph-toolbar](/img/v0.4.0/application/graph/app-graph-toolbar-en.png)

## View Component Logs

1. In the dependency graph, select a node that can perform log operations, click the icon in the upper left corner of the node square, and then click `Log`.
2. You can adjust the size of the log window as needed by stretching it up and down.

![graph-log](/img/v0.4.0/application/graph/app-graph-log-en.png)

## Access Component Terminal

1. In the dependency graph, select a node that can perform terminal operations, click the icon in the upper left corner of the node square, and then click `Terminal`.
2. You can adjust the size of the terminal window as needed by stretching it up and down.

![graph-exec](/img/v0.4.0/application/graph/app-graph-exec-en.png)