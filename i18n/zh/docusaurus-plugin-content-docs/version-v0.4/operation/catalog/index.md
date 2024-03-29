---
sidebar_position: 1
---

# 模板库

模板库是模板的集合，您可以在模板库中查看、导入、编辑、删除模板。

Walrus 提供了以下两种层级的模板库：
- 项目模版库：应用于某个项目的模板库，项目模板库中的模板可以在当前项目中使用。
- 全局模版库：可应用于所有项目的模板库，全局模板库中的模板可以在所有项目中使用。

## 查看模板库

### 全局模板库

1. 点击导航栏中的`运维中心`菜单，进入`模板库`标签页。
2. 在`模板库`标签页中，您可以查看模板库中的模板。
3. 您可以通过`搜索`框搜索模板库中的模板。

![list](/img/v0.4.0/catalog/list.png)

### 项目模板库

1. 点击左侧导航栏中的`应用管理`菜单，选择进入相应项目。
2. 点击`模版库`标签页，查看项目模板库列表。
3. 您可以通过`搜索`框搜索模板库中的模板。

![list](/img/v0.4.0/catalog/list-project.png)

## 新增模板库

### 全局模板库

1. 点击导航栏中的`运维中心`菜单，进入`模板库`标签页。
2. 点击`添加模板库`按钮。
3. 输入模板库的名称、描述、来源。其中，来源地址是一个 Github 组织的地址，例如 `https://github.com/terraform-aliyun-modules`。
4. 点击`保存`按钮。

![create](/img/v0.4.0/catalog/create.png)

### 项目模板库

1. 点击左侧导航栏中的`应用管理`菜单，选择进入相应项目。
2. 点击`添加模板库`按钮。
3. 输入模板库的名称、描述、来源。其中，来源地址是一个 Github 组织的地址，例如 `https://github.com/terraform-aliyun-modules`。
4. 点击`保存`按钮。

![create](/img/v0.4.0/catalog/create-project.png)

> Walrus 支持包含 Terraform 模块仓库的 Github 组织，您可以在模板库中导入该组织下的所有模板。
> ![create-result](/img/v0.4.0/catalog/create-result.png)

## 删除模板库

您可以删除模板库，删除模板库会删除该模板库下的所有模板。

### 全局模板库

1. 点击导航栏中的`运维中心`菜单，进入`模板库`标签页。
2. 选中您需要删除的模板库。
3. 点击`删除`按钮。

### 项目模板库

1. 点击左侧导航栏中的`应用管理`菜单，选择进入相应项目。
2. 点击`模版库`标签页，选中您需要删除的模板库。
3. 点击`删除`按钮。
