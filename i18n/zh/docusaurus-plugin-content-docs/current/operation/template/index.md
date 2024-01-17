---
sidebar_position: 1
---

# 模板

模板是预定义的服务框架或架构，它包含了一组相关的资源定义，输入以及输出。

## 类型

Walrus 当前支持的模板类型为 Terraform module，存储于 git 代码仓库。

## 模板源

- 模版库导入

  模板库是模板的集合，添加模板库后，将会自动导入模板库中包含的所有模板。

- 新建独立模板

  通过操作Walrus UI，添加源为 git 仓库的地址的独立模板。

## 模板结构

Walrus 支持与 Terraform module 兼容的模板结构，包含以下文件。

```shell
<path-to-template>
├── README.md
├── main.tf
├── outputs.tf
├── variables.tf
├── schema.yaml
├── icon.svg
```

- main.tf

  Terraform 配置的主文件，其中包含了资源的定义和配置。

- variables.tf

  Terraform 变量的配置文件，在这个文件中，你会定义变量的名称、类型、默认值等信息。

- outputs.tf

  Terraform 输出的配置文件，输出允许你从 Terraform 执行中导出特定的值，以便其他 Terraform 配置、脚本或人工操作可以使用这些值。在这个文件中，你会定义输出的名称以及与之关联的值。

- schema.yaml

  用于定义模版UI样式的配置文件，schema.yaml的内容为openAPI 格式的 UI Schema，包含variables.tf中变量的类型，样式，校验，默认值等自定义配置。

- icon.svg

  模板默认会使用来源的默认分支中根路径中名为 icon 的图片文件作为模板的图标，目前支持的图标文件格式为：`.png`、`.jpg`、`.jpeg`、`.svg`。如果没有找到 icon 文件，会使用默认的图标。

## 自定义模板 UI 样式

Walrus 在 Terraform 变量的基础上通过 UI Schema 扩展了样式定义，有助于在用户界面上生成更加友好的表单。

### 配置方式

#### schema.yaml
可以通过在模板仓库中添加 schema.yaml 来配置UI样式，如果仓库中包含schema.yaml，Walrus将会使用schema.yaml中配置的UI样式。

以下为 schema.yaml 的示例:

```yaml
openapi: 3.0.3
info:
  title: OpenAPI schema for template webservice
components:
  schemas:
    variables:
      required:
        - image
      type: object
      properties:
        image:
          title: Image Name
          type: string
          description: Docker image name
          x-walrus-ui:
            group: Basic
        ports:
          title: Ports
          type: array
          description: Service ports to expose
          default:
            - 80
          items:
            type: number
          x-walrus-ui:
            group: Basic
```

Walrus提供了工具根据terraform module生成schema.yaml文件。

1. 进入[Walrsu Release](https://github.com/seal-io/walrus/releases) 下载walrus-cli。
2. 运行命令授权 `chmod +x walrus-cli`。
3. 运行命令生成schema.yaml `walrus-cli schema generate --dir=${dir for module}`。

#### Walrus UI 配置

当仓库中不包含schema.yaml文件，Walrus将根据variables.tf文件自动配置UI样式，可以在模板的UI Schema中看到系统生成的样式。

### 配置项

UI Schema 基于 OpenAPI 3.0 文件结构，通过 Yaml 格式来编写，其中包括 OpenAPI Schema 基础结构部分和 OpenAPI Extensions 扩展部分，两者结合实现定义扩展样式。

### OpenAPI Schema 基础配置

| 名称        | 描述                                                              |
| ----------- | ----------------------------------------------------------------- |
| title       | 变量显示的名称                                                    |
| type        | 变量类型                                                          |
| description | 变量描述                                                          |
| default     | 变量默认值                                                        |
| format      | 支持配置 password，根据 format 针对 string 类型变量使用密码输入框 |
| enum        | 变量值可选范围                                                    |
| readOnly    | 限制该变量值不能修改                                              |
| writeOnly   | 限制该变量为只写变量                                              |
| minimum     | 限制 number、integer 类型变量的最小值                             |
| maximum     | 限制 number、integer 类型变量的最大值                             |
| minLength   | 限制 string 类型变量的最小长度                                    |
| maxLength   | 限制 string 类型变量的最大长度                                    |
| required    | 配置 Object 类型变量的必须子变量，值为包含子变量名称的数组        |
| properties  | 用于 object 类型的子变量配置                                      |
| items       | 用于 array 类型变量的元素配置                                     |

### x-walrus-ui 扩展配置

OpenAPI 支持通过以 x-作为前缀的附加属性，walrus 支持通过 x-walrus-ui 附加扩展更多样式配置。

| 名称      | description            |
| --------- | ---------------------- |
| group     | 变量分组               |
| hidden    | 是否隐藏该变量         |
| immutable | 变量是否支持修改       |
| showIf    | 变量显示条件           |
| widget    | 配置使用 Walrus 的控件 |

### Walrus 扩展控件

Walrus内置扩展控件可以在widget中配置，UI将会根据配置的展示样式。

| 名称       | description |
| ---------- | ----------- |
| YamlEditor | Yaml编辑器  |
| TextArea   | 多行输入框  |

## 运行时上下文

在模板中可以通过context变量来获得项目，环境，资源相关的运行时上下文信息，需要您在模板中声明context变量，部署时Walrus 会自动注入context变量的值。声明方式如下：

```hcl
variable "context" {
  description = <<-EOF
Receive contextual information. When Walrus deploys, Walrus will inject specific contextual information into this field.

Examples:
context:
  project:
    name: string
    id: string
  environment:
    name: string
    id: string
  resource:
    name: string
    id: string
EOF
  type        = map(any)
  default     = {}
}
```

上下文信息如下：

| 上下文       | 上下文子属性   | 类型    | 描述                                             |
| ----------- | ------------ | ------ | -------------------------------------------------|
| project     | name         | 字符串 | 资源所属项目名称                                    |
| project     | id           | 字符串 | 资源所属项目 ID                                    |
| environment | name         | 字符串 | 资源所属环境名称                                    |
| environment | id           | 字符串 | 资源所属环境 ID                                    |
| environment | namespace    | 字符串 | Walrus 管理的 namesapce，在 Kubernetes 环境中可用   |
| resource    | name         | 字符串 | 资源名称                                          |
| resource    | id           | 字符串 | 资源 ID                                           |

## 输出

Walrus 会抓取 Terraform 文件中定义的输出，部署完成后，输出将显示在服务的输出页中。

![resource-outputs](/img/v0.5.0/operation/template/resource-outputs.png)

### 可访问 URL

Walrus 支持抓取用户自定义访问 URL。

> 注意：
> - 当返回 URL 的主机名（通常以 IP 地址的形式）与 Walrus 的本地 IP 地址相同时，Walrus 会将本地 IP 地址替换为 [服务器地址（设置）](../setting) 中的主机名。
> - 采用上述变换，您将能够访问从嵌入式 Kubernetes 集群公开的资源。

![resource-endpoints](/img/v0.5.0/operation/template/resource-endpoints.png)

把输出名称为 `endpoints` 或者 `walrus_endpoints` （如下配置），Walrus 将会把这些数组作为 *访问URL* 展示。

```hcl
output "endpoints" {
  value = {
    grafana_console    = "http://localhost:3000"
    prometheus_console = "http://localhost:9090"
  }
}
```

作为可捕获的结果，`endpoints` 或 `walrus_endpoints` 的值类型必须是字符串[映射](https://developer.hashicorp.com/terraform/language/expressions/types#map)，例如，JSON 形式为 `{"grafana_console":"http://localhost:3000","prometheus_console":"http://localhost:9090”}`。 由于 Terraform 不支持声明输出类型，如果需要显式类型转换，请尝试 [tomap](https://developer.hashicorp.com/terraform/language/functions/tomap) 函数。
