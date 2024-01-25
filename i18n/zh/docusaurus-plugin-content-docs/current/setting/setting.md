---
sidebar_position: 2
---

# 系统设置

系统支持如下设置：

- `服务管理`：指 Walrus 服务端的管理配置，通常是一些地址、参数、令牌的配置。为了保证系统的稳定性，用户应该保证这里的配置尽可能少的被修改。
- `部署管理`：指 Walrus 进行资源部署的管理配置。
- `任务设置`：指 Walrus 后台任务的执行配置。

## 查看系统配置列表

1. 点击导航栏中的`系统设置`。

![system-configuration](/img/v0.5.0/settings/ss-config.png)

## 服务管理

- **基础设置**
    - `服务器地址`：访问 Walrus 服务的地址，通常在第一次登录 Walrus 的 UI 时填入。
        + 在初始启动期间，可以通过`SERVER_SETTING_SERVE_URL="https://ip_or_dns.access.walrus"`环境变量进行配置。
    - `参与改进计划`开关：发送匿名数据，帮助 Walrus 提高产品质量和改善产品服务。您可以根据自身意愿，开启或关闭改进计划。
        + 在初始启动期间，可以通过`SERVER_SETTING_ENBALE_TELEMETRY=true|false`环境变量进行配置。
- **证书设置**
    - `跳过证书认证`：跳过不安全的证书验证，常用于从私有仓库地址加载[模板库](./operation/catalog) 或 [模板](./operation/templates)。
        + 在初始启动期间，可以通过`SERVER_SETTING_SKIP_REMOTE_TLS_VERIFY=true|false`环境变量进行配置。
- **模板库设置**
    - `使用内置模板库`开关：启用内置的[模板库](./operation/catalog)，即[Walrus Catalog](https://github.com/walrus-catalog). 开启后同时会创建内置的[资源定义](./operation/resource-definition)。
        + 在初始启动期间，可以通过`SERVER_SETTING_ENABLE_BUILTIN_CATALOG=true|false`环境变量进行配置。
    - `是否同步模板库`开关：周期性同步[模板库](./operation/catalog)。
        + 在初始启动期间，可以通过`SERVER_SETTING_ENABLE_SYNC_CATALOG=true|false`环境变量进行配置。
- **增强管理**
    - `OpenAI API令牌`：调用 OpenAI API 所需的令牌。
        + 在初始启动期间，可以通过`SERVER_SETTING_OPEN_AI_API_TOKEN="your openai api token"`环境变量进行配置。

## 部署管理

- **基础设置**
    - `部署器镜像`：Walrus 用于资源部署的容器镜像，例如，[Terraform Deployer](https://github.com/seal-io/terraform-deployer)， [OpenTofu Deployer](https://github.com/seal-io/opentofu-deployer) 或其他类似的容器镜像。
        + 在初始启动期间，可以通过`SERVER_SETTING_DEPLOYER_IMAGE="your deployer docker image"`环境变量进行配置。
    - `部署加速地址`：提供代理下载 Terraform/OpenTofu Providers 服务的地址，可以有效提高下载速度并避免版本管理的焦虑。 默认情况下，Walrus 将 [Hermit Crab](https://github.com/seal-io/hermitcrab) 作为代理下载服务，您只需在此处复制 `https://walrus-mirror-hermitcrab.walrus-system/v1/providers/` 并粘贴即可。
        + 在初始启动期间，可以通过`SERVER_SETTING_DEPLOYER_NETWORK_MIRROR_URL="https://ip_or_dns.access.terraform_provider.network_mirror"`环境变量进行配置。
- **代理设置**
    - `HTTP_PROXY`：提供代理地址，代理非 TLS 的 HTTP 出站流量。作用于服务部署执行环境，默认同 Walrus server 配置。
        + 在初始启动期间，可以通过`HTTP_PROXY="http_url_1,http_url_2"`环境变量进行配置。
    - `HTTPS_PROXY`：提供代理地址，代理 TLS 的 HTTP 出站流量。作用于服务部署执行环境，默认同 Walrus server 配置。
        + 在初始启动期间，可以通过`HTTPS_PROXY="https_url_1,https_url_2"`环境变量进行配置。
    - `ALL_PROXY`：提供代理地址，代理所有的出站流量。作用于服务部署执行环境，默认同 Walrus server 配置。
        + 在初始启动期间，可以通过`ALL_PROXY="socks5_url_1,socks5_url_2"`环境变量进行配置。
    - `NO_PROXY`：不代理匹配的域名和 IP 的出站流量，使用逗号分隔，支持 CIDR 和通配符域名，如`10.0.0.0/8,*.example.com`。作用于服务部署执行环境，默认同 Walrus server 配置。
        + 在初始启动期间，可以通过`NO_PROXY="ip_cidr,wlidcare_dns"`环境变量进行配置。

## 任务设置

- **基础任务**
    - `检查连接器状态`：定时检查连接器连通性，出厂设置是 5 分钟执行一次。
        + 在初始启动期间，可以通过`SERVER_SETTING_CONNECTOR_STATUS_SYNC_CRON_EXPR="0 */5 * ? * *"`环境变量进行配置。
    - `检查资源组件状态`：定时检查资源组件，出厂设置是 1 分钟执行一次。
        + 在初始启动期间，可以通过`SERVER_SETTING_RESOURCE_COMPONENT_STATUS_SYNC_CRON_EXPR="0 */1 * ? * *"`环境变量进行配置。
    - `检查资源依赖状态`：定时检查资源依赖，出厂设置是 30 秒执行一次。
        + 在初始启动期间，可以通过`SERVER_SETTING_RESOURCE_RELATIONSHIP_CHECK_CRON_EXPR="*/30 * * ? * *"`环境变量进行配置。

## * 隐式可配置初始化项

某些设置未在 UI 中公开，称为"隐式设置"。不暴露"隐式设置"的主要原因是，更改这些设置可能会导致某些系统功能异常。但是，在某些情况下，您需要在初始启动时配置这些设置，以使 Walrus 按预期工作。

建议与我们沟通联系后修改这些设置。

- `SERVER_SETTING_WORKFLOW_STEP_SERVICE_IMAGE="sealio/curl-jq:v0.0.1"`：指工作流步骤服务使用的镜像。
- `SERVER_SETTING_SERVE_UI_INDEX="file:///var/lib/walrus/ui"`：UI 索引的来源。
- `SERVER_SETTING_IMAGE_REGISTRY="docker.io"`：镜像注册表。
- `SERVER_SETTING_LOCAL_ENVIRONMENT_MODE="kubernetes"`：默认项目中设置本地环境的工作模式。
- `SERVER_SETTING_WALRUS_FILE_HUB_URL="https://github.com/seal-io/walrus-file-hub"`：下载 Walrus 文件的 URL。
- `SERVER_SETTING_RESOURCE_COMPONENTS_DISCOVER_CRON_EXPR="0 */1 * ? * *"`：每1分钟执行一次资源组件的发现任务。
