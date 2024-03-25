---
sidebar_position: 5
---

# 连接器

Walrus提供了以下两种层级的连接器：

- 项目连接器：应用于某个项目
- 全局连接器：可应用于所有项目
## 查看连接器列表

### 全局连接器列表

1. 点击左侧导航栏中的`运维中心`。
2. 点击`连接器`标签页，查看连接器列表。

![connector-list](/img/v0.5.0/operation/connector/op-conn-list-en.png)

### 项目连接器列表

1. 点击左侧导航栏中的`应用管理`，选择进入相应项目。
2. 点击`连接器`标签页，查看连接器列表。

![project-connector-list](/img/v0.5.0/operation/connector/app-proj-conn-list-en.png)

## 查看连接器详情

1. 点击左侧导航栏中的`运维中心` -> `连接器` 进入到连接器列表。
2. 找到您需要查看的连接器并点击其名称，即进入连接器的详情页。

## 创建连接器

> 注意:
> 自v0.4.0起，创建连接器时需要选择`适用环境类型`，请查看[环境类型](/application/environment#environment-type)以了解更多信息。

### 创建 Kubernetes 连接器

1. 在连接器列表点击`新建连接器`，选择`Kubernetes`。

![connector-create](/img/v0.5.0/operation/connector/op-add-connector-en.png)

2. 选择`适用环境类型`。
3. 填写表单，`保存`成功后即可创建 Kubernetes 连接器。

![connector-create-k8s](/img/v0.5.0/operation/connector/op-conn-create-k8s-en.png)

### 创建云厂商连接器

1. 在连接器列表点击`新建连接器`，选择`云厂商`。
2. 选择`适用环境类型`。
3. 填写表单，`保存`成功后即可创建云厂商。

![connector-create-cloud](/img/v0.5.0/operation/connector/op-conn-create-cloud-en.png)

#### 创建 Azure 云厂商连接器

1. 在 [Azure 门户](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps/RegisteredApps/Overview) 中或使用 Azure CLI 创建服务主体。

```shell
az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/20000000-0000-0000-0000-000000000000"
```

2. 在连接器列表点击`新建连接器`，选择`云厂商`。
3. 在类型中选择`Azure`，使用服务主体的配置填写表单：

- `Subscription ID`：Azure 订阅 ID。
- `Tenant ID`：Azure 租户 ID。
- `Client ID`：Azure 服务主体的客户端 ID。
- `Client Secret`：Azure 服务主体的客户端密钥。

![connector-create-azure](/img/v0.6.0/operation/connector/op-conn-create-azure.png)

#### 创建 Google 云厂商连接器

1. 在 Google Cloud Console 中创建服务账号或选择现有服务账号。
2. 下载服务账号的密钥文件。
3. 在连接器列表点击`新建连接器`，选择`云厂商`。
4. 在类型中选择`Google`，使用服务账号的配置填写表单：

- `Project`：Google Cloud 项目 ID。
- `Region`：Google Cloud 项目所在地区。
- `Zone`：Google Cloud 项目所在区域。所有区域都属于一个地区。
- `Credentials`：服务账号的 JSON 密钥文件。

![connector-create-gcp](/img/v0.6.0/operation/connector/op-conn-create-gcp.png)

### 创建版本控制连接器

1. 在连接器列表点击`新建连接器`，选择`版本控制`。
2. 选择`适用环境类型`。
3. 选择类型，目前支持 GitHub，填写相应的 `Access token`，需要开启 repo 的操作权限。
4. 填写表单`保存`成功可创建版本控制连接器。

![connector-create-vcs](/img/v0.5.0/operation/connector/op-conn-create-vcs-en.png)

### 创建自定义连接器

1. 在连接器列表点击`新建连接器`，选择`自定义`。
2. 选择`适用环境类型`。
3. 类型为第三方平台 Terraform Provider 的类型，如：AWS, AliCloud。
4. 添加属性，例如：Provider 为 [Artifactory](https://registry.terraform.io/providers/jfrog/artifactory/latest/docs)，则需填写 `url` 和 `access_token`。

```
provider "artifactory" {
  url           = "${var.artifactory_url}"
  access_token  = "${var.artifactory_access_token}"
}
```

![connector-create-custom](/img/v0.5.0/operation/connector/op-conn-create-custom-en.png)
## 删除连接器

1. 点击左侧导航栏中的`运维中心` -> `连接器` 查看到连接器列表。
2. 找到您需要删除的连接器。
3. 确保没有环境依赖于该连接器后，勾选您需要删除的连接器，点击`删除`按钮。
5. 点击`确定`按钮完成删除。

![connector-delete](/img/v0.5.0/operation/connector/op-conn-del-en.png)

## 使用方法

1. 连接器创建成功后。
2. 在`项目`->`环境`详情中添加相应的连接器。
3. 在环境详情的`资源`中`新建资源`即可使用连接器。

> 注意：
> - 仅管理员/平台工程师拥有创建全局连接器的权限。
> - 项目连接器的作用范围为当前所在项目，仅可被添加到当前项目所创建的环境中，其他项目无使用权限。
> - 全局连接器的作用范围为所有项目，可以被添加到任何项目的环境中，若需要限制作用范围，请使用项目连接器。
