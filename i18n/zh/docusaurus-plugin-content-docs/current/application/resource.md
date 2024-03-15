---
sidebar_position: 3
---

# 资源

## 查看资源列表

资源属于一个环境，您可以在环境视图中查看该环境下的资源列表。

1. 点击左侧导航栏中的`应用管理`。
2. 默认情况下，您将进入第一个环境的视图。您可以通过顶级面包屑切换查看不同项目或环境下的资源。您也可以通过面包屑设置默认环境。
3. 在`资源`标签页中，您可以查看该环境下的资源列表。您可以通过顶级面包屑切换查看不同项目或环境下的资源。

![resource-list](/img/v0.6.0/application/resource/resource-list.png)

## 查看资源详情

1. 进入环境视图的`资源`标签页。
2. 找到您需要查看的资源，点击其名称进入详情页面。

在资源详情页面，您可以查看资源的基本信息、组件列表、依赖图等， 您也可以查看最新的运行记录，或者对资源进行编辑。

![resource-detail](/img/v0.6.0/application/resource/resource-detail.png)

## 创建资源

1. 进入环境视图的`资源`标签页。
2. 点击`新建`，选择`资源`。
3. 选择资源类型。如果您想从模板创建资源，启用`使用模板`选项，然后选择模板和版本。关于资源类型的更多信息，请参阅[资源定义](/operation/resource-definition)。
4. 输入`名称`、`描述`和`标签`。名称在同一环境下应唯一。
5. 填写配置表单，配置项取决于您选择的模板或资源类型。
6. 点击`保存并部署`按钮。

![resource-create](/img/v0.6.0/application/resource/resource-create.png)

## 创建资源草稿

您可以创建资源的草稿。

1. 进入环境视图的`资源`标签页。
2. 点击`新建`，选择`资源`。
3. 选择资源类型。如果您想从模板创建资源，启用`使用模板`选项，然后选择模板和版本。
4. 输入`名称`、`描述`和`标签`。名称在同一环境下应唯一。
5. 填写配置表单，配置项取决于您选择的模板或资源类型。
6. 点击`保存并部署`按钮右侧的向下箭头。
7. 点击`保存草稿`。

![resource-create-draft](/img/v0.6.0/application/resource/resource-create-draft.png)

## 创建资源预览

您可以在资源创建或者编辑时选择保存预览资源的变更，预览操作可以帮助您更好的在了解当前部署操作带来的资源的变更情况。

1. 进入环境视图的`资源`标签页。
2. 点击`新建`，选择`资源`。
3. 选择资源类型。如果您想从模板创建资源，启用`使用模板`选项，然后选择模板和版本。
4. 输入`名称`、`描述`和`标签`。名称在同一环境下应唯一。
5. 填写配置表单，配置项取决于您选择的模板或资源类型。
6. 点击`保存并部署`按钮右侧的向下箭头。
7. 点击`保存并预览`。

![resource-create-preview](/img/v0.6.0/application/resource/resource-create-preview.png)

处于预览状态的资源不会真正部署到环境中， 您可以在最新的运行记录中查看预览的资源组件的的变更情况。

![resource-component-change](/img/v0.6.0/application/resource/resource-component-change.png)

当确认无误后，您可以点击`应用`按钮，将本次预览的变更应用到资源中。

## 编辑资源

1. 进入环境视图的`资源`标签页。
2. 找到您需要编辑的资源，点击`编辑`。
3. 根据需要修改配置，然后点击`保存并部署`按钮。编辑后资源将进行一次部署。

## 资源依赖性

资源可以通过使用输出引用相互依赖。被引用的实体将在依赖实体之前部署并在之后删除。

例如，如果一个 Web 服务依赖于 MySQL 资源，该 Web 服务可以在其环境变量中引用 MySQL 端点，格式为`${res.my-db-name.address}`。
输出引用的格式为：`${res.<资源名称>.<资源输出名称>}`。

![resource-ref](/img/v0.6.0/application/resource/resource-ref.png)

## 回滚资源

1. 进入环境视图的`资源`标签页。
2. 找到您需要回滚的资源。
3. 点击操作下拉按钮，选择`回滚`。

![resource-rollback](/img/v0.6.0/application/resource/resource-rollback.png)

4. 选择您需要回滚到的历史运行版本。
5. 确认回滚操作的配置更改，点击`回滚`按钮完成回滚操作。

![resource-rollback2](/img/v0.6.0/application/resource/resource-rollback2.png)

> 您也可以在回滚时，选择是否预览回滚的变更。

## 克隆资源

1. 进入环境视图的`资源`标签页。
2. 选择您需要克隆的资源，点击`克隆`按钮。

![resource-clone](/img/v0.6.0/application/resource/resource-clone.png)

3. 选择克隆的目标环境。
4. 如果需要调整克隆资源的配置，点击您想要修改的区块，在弹出窗口中修改配置，然后点击`确认`按钮。
5. 点击`保存并部署`按钮以完成克隆。

![resource-clone-edit](/img/v0.6.0/application/resource/resource-clone-edit.png)

## 删除资源

资源删除操作将删除资源及其所有组件，远端组件资源也将被删除。

1. 进入环境视图的`资源`标签页。
2. 找到您需要删除的资源。
3. 确保没有其他资源依赖于它。点击`删除`按钮。
4. 在弹出窗口中，您可以选择是否清理组件。如果您取消选择`清理所有组件`，资源的组件将被保留，但将不再由 Walrus 管理。
5. 点击`确认`按钮以完成删除。

![resource-del](/img/v0.6.0/application/resource/resource-del.png)

## 启动资源

资源启动操作将启动资源的所有组件，用于恢复已停止的资源或者将草稿资源部署到环境中。

1. 进入环境视图的`资源`标签页。
2. 选择资源的状态为 `Stopped` 或者 `Undeployed`，找到您需要启动的资源。
3. 点击`启动`按钮。

![resource-start](/img/v0.6.0/application/resource/resource-start.png)

## 停止资源

资源停止操作将停止资源的所有组件， 与删除资源不同，停止资源不会删除资源在 walrus 中的配置。

1. 进入环境视图的`资源`标签页。
2. 选择处于 `Ready` 的资源停止。

![resource-stop](/img/v0.6.0/application/resource/resource-stop.png)

3. 点击`停止`按钮，在弹出窗口中确认停止操作。

> 注意：资源是否可以停止取决于资源的标签。如果资源的标签中包含`walrus.seal.io/stoppable: "true"`，则该资源可以停止。默认情况下，处于开发或者预发布环境的资源在创建时会自动添加该标签。您可以在创建资源的时候主动声明该标签，以便在生产环境中停止资源。

![resource-stop2](/img/v0.6.0/application/resource/resource-stop2.png)


## 组件

组件是资源部署生成的实体。在资源的详情页面，您可以查看其组件，包括组件名称、类型、状态、创建时间等。您可以根据需要操作组件，如查看日志、连接到终端等。

### 查看组件日志

> 注意：查看日志操作仅适用于特定类型的组件。

1. 进入资源详情页面查看组件列表。
2. 找到您需要查看日志的组件，点击`查看日志`操作。

![resource-res-logs](/img/v0.6.0/application/resource/resource-component-logs.png)

### 通过终端连接到组件

> 注意：终端操作仅适用于特定类型的组件。

1. 进入资源详情页面查看组件列表。
2. 找到您需要连接到终端的组件，点击`终端`操作。

![resource-res-exec](/img/v0.6.0/application/resource/resource-component-terminal.png)

### 查看组件的依赖图

进入资源详情页面，选择切换到图形视图，以查看当前资源下的依赖图。

有关依赖图的更多详细信息，请参阅[依赖图](/application/graph)。

![resource-res-graph-view](/img/v0.6.0/application/resource/resource-component-graph.png)

![resource-res-graph](/img/v0.6.0/application/resource//resource-component-graph2.png)

## 运行记录

资源的每次部署、回滚、启动、停止等操作都会生成一条运行记录。您可以在资源详情页面查看所有的运行记录，以及查看运行记录的详细信息。

![resource-run-list](/img/v0.6.0/application/resource/resource-run-list.png)

运行记录记录了运行记录的状态、开始时间、结束时间、操作类型、操作人以及资源组件的变更情况、 资源配置、日志以及变更历史等。点击详情操作按钮，您可以查看运行记录的详细信息。

![resource-run-detail](/img/v0.6.0/application/resource/resource-run-detail.png)

