---
sidebar_position: 4
---

# 如何创建模板

本教程介绍如何创建 Walrus 阿里云 rds-mysql 模板并使用它在阿里云上创建 rds 实例资源。

## 前提条件

1. 一个用于存储模板的 GitHub 仓库。
2. [部署 Walrus](/deploy/standalone)。

## 在 GitHub 上创建仓库

1. 在 GitHub 上创建你自己的新仓库，这里我们使用仓库 [terraform-alicloud-rds-mysql](https://github.com/walrus-catalog/terraform-alicloud-rds-mysql)
2. 将仓库克隆到你的本机。

```bash
git clone git@github.com:walrus-catalog/terraform-alicloud-rds-mysql.git
```

## 创建模板文件
1. 进入克隆的仓库目录。

```bash
cd demo
```

在目录中创建如下文件:

```bash
- terraform-alicloud-rds-mysql
├── icon.svg
├── main.tf
├── modules
├── outputs.tf
├── schema.yaml
├── variables.tf
└── versions.tf
...
```

`main.tf` 文件定义了要创建的资源，这里我们为模板定义了一个阿里云 rds 创建相关的资源.

```bash
locals {
  project_name     = coalesce(try(var.context["project"]["name"], null), "default")
  project_id       = coalesce(try(var.context["project"]["id"], null), "default_id")
  environment_name = coalesce(try(var.context["environment"]["name"], null), "test")
  environment_id   = coalesce(try(var.context["environment"]["id"], null), "test_id")
  resource_name    = coalesce(try(var.context["resource"]["name"], null), "example")
  resource_id      = coalesce(try(var.context["resource"]["id"], null), "example_id")

  namespace = join("-", [local.project_name, local.environment_name])

  tags = {
    "Name" = join("-", [local.namespace, local.resource_name])

    "walrus.seal.io/catalog-name"     = "terraform-alicloud-rds-mysql"
    "walrus.seal.io/project-id"       = local.project_id
    "walrus.seal.io/environment-id"   = local.environment_id
    "walrus.seal.io/resource-id"      = local.resource_id
    "walrus.seal.io/project-name"     = local.project_name
    "walrus.seal.io/environment-name" = local.environment_name
    "walrus.seal.io/resource-name"    = local.resource_name
  }

  architecture = coalesce(var.architecture, "standalone")
}
...
```

`variables.tf` 文件定义了模板中使用的变量，Walrus 将使用这些变量为用户生成模板填写表单。

```bash
variable "infrastructure" {
  ...
  type = object({
    vpc_id              = string
    kms_key_id          = optional(string)
    domain_suffix       = optional(string)
    publicly_accessible = optional(bool, false)
  })
}

#
# Deployment Fields
#

variable "architecture" {
  ...
  type        = string
  default     = "standalone"
  validation {
    condition     = var.architecture == "" || contains(["standalone", "replication"], var.architecture)
    error_message = "Invalid architecture"
  }
}

variable "replication_readonly_replicas" {
  ...
  type        = number
  default     = 1
  validation {
    condition     = var.replication_readonly_replicas == 0 || contains([1, 3, 5], var.replication_readonly_replicas)
    error_message = "Invalid number of read-only replicas"
  }
}
...
```

`outputs.tf` 文件定义了模板中的输出变量。当资源创建成功后，Walrus 将会在资源详情页面显示输出变量。

```bash
#
# Reference
#

output "connection" {
  description = "The connection, a string combined host and port, might be a comma separated string or a single string."
  value       = join(",", local.endpoints)
}

output "connection_readonly" {
  description = "The readonly connection, a string combined host and port, might be a comma separated string or a single string."
  value       = join(",", local.endpoints_readonly)
}

output "address" {
  description = "The address, a string only has host, might be a comma separated string or a single string."
  value       = join(",", local.hosts)
}

output "address_readonly" {
  description = "The readonly address, a string only has host, might be a comma separated string or a single string."
  value       = join(",", local.hosts_readonly)
}

output "port" {
  description = "The port of the resource."
  value       = local.port
}

```

`README.md` 文件是模板的描述。在使用此模板创建资源时，我们可以在模板详情页面查看该模板的具体功能参数及定义。这里我们可以使用工具 [terraform-docs](https://github.com/terraform-docs/terraform-docs)来生成模板的描述。

```markdown
terraform-docs markdown . > README.md
```

生成的 `README.md` 文件如下:

```bash
# Alibaba ApsaraDB RDS for MySQL resource

Terraform module which deploys [MySQL](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql) resource on Alibaba Cloud.

- [x] Support standalone(one read-write HA instance) and replication(one read-write HA instance and multiple read-only instances, for read write splitting).

## Examples

- [Replication](./examples/replication)
- [Standalone](./examples/standalone)

## Contributing

Please read our [contributing guide](./docs/CONTRIBUTING.md) if you're interested in contributing to Walrus template.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0 |
| <a name="requirement_alicloud"></a> [alicloud](#requirement\_alicloud) | >= 1.212.0 |
| <a name="requirement_random"></a> [random](#requirement\_random) | >= 3.5.1 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_alicloud"></a> [alicloud](#provider\_alicloud) | >= 1.212.0 |
| <a name="provider_random"></a> [random](#provider\_random) | >= 3.5.1 |
...
```

## 提交模板版本

```bash
git add .
git commit -m "add template files"
git push -u origin main
```

为模板创建一个标签作为版本。

```bash
git tag v0.1.0
git push --tags
```

## 模板 UI 渲染样式
默认情况下，Walrus 会根据模板中定义的变量自动生成表单组和标签的渲染。您可以通过[自定义模板样式](/operation/template#自定义模板-ui-样式)来自定义表单组和标签的渲染。

## 在 Walrus 上创建模板

1. 在浏览器中打开 Walrus 并登录。
2. 转到 `运维中心` 下的模板管理，使用我们刚刚创建的模板新建一个模板，这里我们将模板命名为 `aliyun-rds`。
![create-template](/img/v0.5.0/tutorials/how-to-create-template/create-template.png)
导入任务完成后，模板将显示在模板列表中，我们可以看到模板版本为刚刚创建的版本`v0.1.0`。
![template-version](/img/v0.5.0/tutorials/how-to-create-template/template-version.png)
3. 在 `运维中心` 的 `连接器`下添加阿里云连接器。
4. 配置阿里云连接器到环境.
5. 使用模板 `aliyun-rds` 创建一个资源， 表单组和标签的渲染是根据上述模板中定义的变量注释自动生成的。
![create-resource](/img/v0.5.0/tutorials/how-to-create-template/create-resource.png)

资源创建后，我们可以在资源详情页面查看资源详情。
![resource-detail](/img/v0.5.0/tutorials/how-to-create-template/resource.png)
阿里云控制台检查 RDS 实例，我们可以看到 RDS 实例已成功创建。
![ecs-instance](/img/v0.5.0/tutorials/how-to-create-template/rds.png)
