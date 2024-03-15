---
sidebar_position: 1
---

# 部署多云应用

本教程介绍如何利用资源定义，屏蔽复杂配置，完成多云应用的部署。

## 先决条件

在开始前，请准备相关资源并完成以下配置工作。

### Connector Configuration

1. 进入 `default` 项目 > `连接器` > 点击`新建连接器`，选择`云厂商`类型的连接器，输入名称 alibaba，适用环境类型选择`生产`，类型选择`Alibaba`，输入其他信息完成配置。
2. 再次点击新建连接器，输入名称 aws， 适用环境类型选择`生产`，类型选择`AWS`，输入其他信息完成配置。

### 环境准备

1. 进入 `default` 项目 > `环境` > 点击`新建环境`，输入名称 production，关联刚才新建的名为 alibaba 的连接器，用作生产部署环境。
2. 再次新建环境，输入名称 dr，关联刚才新建的名为 aws 的连接器，用作云灾备环境。
3. 加上 `defualt` 项目中自带的 `local` 环境。我们现在一共有三个环境：`local，production，dr`。

![environment-list-cn](/img/v0.6.0/tutorials/deploy-multi-cloud-application/environment-list-cn.png)

### 下载 Walrus CLI

1. 根据文档安装好 [Walrus CLI](/cli)

## 部署多云应用

### 新建资源定义

1. 点击左侧导航栏中的`运维中心`。
2. 点击`资源定义`标签页，点击`新建资源定义`，输入资源定义名称 demo-mysql，输入类型 demo-mysql。
3. 新建匹配规则 dev 用来表示开发环境的匹配规则和使用模板，添加选择器，这里选择环境名称，输入名称 local，模板使用 `builtin/kubernetes-mysql` 的最新版本，在预定义配置部分配好 cpu 和 memory 资源。
4. 新建匹配规则 production 用来表示生产环境，添加选择器，这里选择环境名称，输入 production，模板使用 `builtin/alicloud-rds-mysql` 的最新版本，在预定义配置部分配好 `Vpc Id`，这样用户在使用该资源定义创建资源时，就无需再填写 `Vpc Id`，其他根据实际情况配置。
5. 新建匹配规则 dr 用来表示灾备环境，添加选择器，这里选择环境名称，输入 dr，模板使用 `builtin/aws-rds-mysql` 的最新版本，在预定义配置部分配好 `Vpc Id`，其他根据实际情况配置。

配置完成后包含以下匹配规则。

资源定义匹配规则一。

![resource-definition-rule1](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-rule1-cn.png)

资源定义匹配规则二。

![resource-definition-rule2](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-rule2-cn.png)

资源定义匹配规则三。

![resource-definition-rule3](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-rule3-cn.png)


6. 自定义 UI 样式配置，完成匹配规则配置后，Walrus 会根据配置的规则和预定义配置，智能渲染出 UI 样式，管理员可以根据需求定制 UI 样式。
7. 进去资源定义 demo-mysql > `UI Schema`标签页，点击`预览`可看到自动生成的 UI 样式。点击`编辑`，我们这里删除复杂配置(`replication_readonly_replicas`，`storage`），留下常用配置支持用户快速启动。

![resource-definition-ui-schema-edit](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-ui-schema-edit-cn.png)

8. 以下是配置完成的 UI 样式。

![resource-definition-ui-schema-preview](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-ui-schema-preview-cn.png)

### 部署多云应用

使用上面配置好的资源定义，就可以支持我们创建多云应用了。

1. 进入`应用管理` > `local` 环境 > 点击`新建资源`。
2. 输入资源名称，资源类型选择我们刚新建的资源类型 `demo-mysql`，输入架构，数据库版本等配置，点击`保存`并部署就可完成部署了。
3. 进入 `production` 环境 > 点击`新建资源`，同样选择资源类型 `demo-mysql`，输入配置完成部署。
4. 进入 `dr` 环境 > 点击`新建资源`，同样选择资源类型 `demo-mysql`，输入配置完成部署。
5. 三个环境都创建了 `demo-mysql` 类型的资源，`local` 环境连接了 kubernetes 连接器，`production` 环境连接了 alibaba 连接器，`dr` 环境连接了 aws 连接器，可以看到不同环境根据当前环境动态的创建了对应的资源。

`local` 环境在 kubernetes 集群中创建了 mysql 容器。

![resource-local-mysql](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-local-mysql-cn.png)

`production` 环境在 alibaba 云中创建了 rds 服务。

![resource-production-mysql](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-production-mysql-cn.png)

`dr` 环境在 aws 云中创建了对应的 rds 服务。

![resource-dr-mysql](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-dr-mysql-cn.png)

### 通过 Walrus File 部署多云应用

除了通过 UI 部署多态应用，还可以通过 Walrus file 达到同样的效果。

1. 准备 app.yaml，内容如下：

```yaml
version: v1
resources:
  - name: mysql
    type: mysql
    attributes:
      architecture: standalone
      database: mydb
      engine_version: "8.0"
      username: rdsuser
```

2. 运行命令部署到不同环境。

```bash
# 部署到local环境
walrus apply -f app.yaml -p default -e local

# 部署到production环境
walrus apply -f app.yaml -p default -e production

# 部署到dr环境
walrus apply -f app.yaml -p default -e dr
```

通过 CLI 部署可以实现通过复用同一个 Walrus File，部署多态应用到不同环境。

至此，我们完成了配置资源定义实现简化应用部署，部署多云应用。
