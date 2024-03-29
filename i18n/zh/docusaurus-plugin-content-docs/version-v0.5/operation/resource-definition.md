---
sidebar_position: 4
---

# 资源定义

资源定义用于声明一种新类型的资源，它描述该资源类型的名称、类型、匹配规则以及在特定条件下的部署和使用的模式。这使得 Walrus 能够有效地理解和管理这种资源类型的生命周期。

## 查看资源定义列表

1. 在左侧边栏中点击`操作中心`。
2. 选择`资源定义`标签以查看资源定义列表。

![definition-list](/img/v0.5.0/operation/definition/op-definition-list.png)

## 查看资源定义详情

1. 在左侧边栏中导航到`操作中心` -> `资源定义`以访问资源定义列表。
2. 找到您希望查看的资源定义并点击其名称以打开其详细页面。
3. 在资源定义详细页面中，您可以查看资源定义的详细信息，包括其匹配规则，输入输出，UI 模式和使用该资源定义创建的资源列表。
4. 在已创建的资源列表中，您可以对资源进行管理操作，例如启动、停止、部署、删除等。列表支持对项目名称和匹配规则进行筛选。

![definition-detail](/img/v0.5.0/operation/definition/op-definition-detail.png)

## 创建资源定义

1. 在资源定义列表中选择`新建资源定义`。
2. 完成表单。`名称`作为资源定义的标识符，`名称`在系统内必须唯一。`类型`表示资源的类型，相同`类型`下可以有多个资源定义。`匹配规则`指定了在特定条件下，这种类型的资源如何与模板对齐。更多信息请参阅[资源定义匹配规则](#resource-definition-matching-rules)。
3. 点击`保存`以完成创建。

![definition-create](/img/v0.5.0/operation/definition/op-definition-create.png)

## 删除资源定义

1. 在左侧边栏中前往`操作中心` -> `资源定义`以查看资源定义列表。
2. 确定您打算删除的资源定义。
3. 在选择删除资源定义之前，请确保没有现有资源依赖于它。然后，点击`删除`按钮。
4. 点击`确认`按钮确认删除。

![definition-delete](/img/v0.5.0/operation/definition/op-definition-del.png)

## 资源定义匹配规则

资源定义的匹配规则决定了部署该类型资源时使用的模板和配置。

### 选择器

单个匹配规则可以包括多个选择器。这些选择器基于相等性，它们的组合通过逻辑与操作（AND）来功能。如果资源满足规则的所有选择器，则与匹配规则对齐，从而在部署过程中应用相关的模板和配置。

例如，带有选择器`项目名称=foo`和`环境名称=dev`的匹配规则匹配`foo`项目的`dev`环境中的资源，而不匹配`test`环境中的资源。

![definition-selector](/img/v0.5.0/operation/definition/op-definition-selector.png)

### 规则优先级

匹配规则不是互斥的。也就是说，多个规则可以匹配单个资源。在这种情况下，将使用优先级最高的规则。优先级由规则中匹配的选择器评分决定，评分总和越高，优先级越高。选择器评分如下：

| 条件类型 | 环境类型 | 项目标签 | 项目名称 | 环境标签 | 环境名称 | 资源标签 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 匹配分数 | 1        | 2        | 4        | 8        | 16       | 32       |

### 模板配置

每个匹配规则中的模板配置在遵循该规则的资源部署期间应用。如果资源定义模式中概述了配置，并且用户在资源属性中设置了配置，

## 资源定义模式

资源定义的模式（输入变量和输出）是从其匹配规则中包含的所有模板的组合模式自动生成的。

例如，考虑一个资源定义，它在其匹配规则中使用模板 A 和 B。

- 模板 A 包括输入`image`和`size`，以及输出`endpoint`和`status`。
- 模板 B 包括输入`image`和`region`，以及输出`endpoint`和`create_time`。

因此，资源定义的模式将包括输入`image`和输出`endpoint`。

### 自定义资源定义的 UI 模式

您可以自定义资源定义的 UI 模式。当您想简化或修改该类型资源的用户配置时，这一点尤其有用。

1. 在左侧边栏中访问`操作中心` -> `资源定义`以查看资源定义列表。
2. 找到所需的资源定义并点击其名称查看其详细信息。
3. 选择`UI模式`标签。
4. 点击右上角的省略号（`...`）按钮并选择`编辑`。
5. 根据需要在 UI 编辑器中修改模式。您可以通过点击`预览`或`模式`在编辑和预览模式之间切换。
6. 点击`保存`以保存您的更改。

![definition-ui-schema](/img/v0.5.0/operation/definition/op-definition-ui-schema.png)
