---
sidebar_position: 6
---

# 使用 OpenTofu 进行部署

本教程演示如何使用 Walrus 和 [OpenTofu](https://opentofu.org/manifesto/) 来部署资源。

## 为什么使用 OpenTofu？

自 v1.6.0 起，Hashicorp [将 Terraform 许可证从 MPL 切换为 BUSL](https://github.com/hashicorp/terraform/pull/33678)，OpenTofu 于 2023 年 8 月 25 日从 MPL 许可的 Terraform 分叉，并在 Linux 基金会中维护以保持开源。

简而言之，OpenTofu 是 Terraform 的轻松替代品。

## 切换 OpenTofu

默认情况下，Walrus 使用 MPL 许可的最新 Terraform 版本 v1.5.7 来完成资源部署。 为了减少每次部署时下载Terraform Provider的时间成本，我们采用了在原始[Hashicorp/Terraform镜像]((https://hub.docker.com/r/hashicorp/terraform))的基础上修改的容器镜像，其中包含了一些常用且必需的Terraform Provider。 如果您对此感兴趣，可以浏览 [seal-io/terraform-deployer](https://github.com/seal-io/terraform-deployer) 了解更多信息。

让我们回到如何切换 OpenTofu。 假设您已经完成了我们的[快速入门](../quickstart)，现在您可以导航到 `系统设置` 并选择 `部署` 选项卡，如下所示。

![list-setting](/img/v0.5.0/tutorials/deploy-with-opentofu/list-setting.png)

You can replace the `Deployer Image` to our [OpenTofu Deployer](https://hub.docker.com/r/sealio/opentofu-deployer/tags), for example, input `sealio/opentofu-deployer:v1.6.0-seal.1`.

您可以将 `部署器镜像` 替换为我们的 [OpenTofu Deployer](https://hub.docker.com/r/sealio/opentofu-deployer/tags)，例如，输入 `sealio/opentofu-deployer:v1.6.0-seal.1`，第一个官宣的 OpenTofu 版本。

![configure-deployer](/img/v0.5.0/tutorials/deploy-with-opentofu/configure-deployer.png)

## 部署资源

现在，您可以回到默认Project下的本地环境，并享受OpenTofu了。

您可以选择资源并执行（重新）部署，如图所示。

![redeploy](/img/v0.5.0/tutorials/deploy-with-opentofu/redeploy.png)

我们来看看部署日志。

![view-logs](/img/v0.5.0/tutorials/deploy-with-opentofu/view-logs.png)

### 构建特定的 OpenTofu 版本

如果您需要使用特定版本的 OpenTofu，您可以按照此 [Dockerfile](https://github.com/seal-io/opentofu-deployer/blob/main/Dockerfile) 构建您自己的特定版本的 OpenTofu Deployer。

## 如何避免版本管理焦虑？

正如我们上面提到的，默认的 OpenTofu Deployer 和 Terraform Deployer 一样，它嵌入了一些常用且必需的 Terraform Provider。这些电池帮助 Walrus 快速完成部署。

但凡事都有两个方面，隐含的镜像Provider是版本锁定的。 这意味着如果本地版本无法满足某个版本（可能是范围）的要求，我们将从 OpenTofu 收到错误。

因此，Walrus 提供了 `部署器加速地址`[设置](../settings)，允许您配置通过网络从附近的服务代理下载 Terraform/OpenTofu Provider。

![configure-network-mirror](/img/v0.5.0/tutorials/deploy-with-opentofu/configure-network-mirror.png)

### 尝试 Hermit Crab

默认情况下，Walrus 会提供一个名为 [Hermit Crab](https://github.com/seal-io/hermitcrab) 的 Provider 代理下载服务，您只需从此处复制 `https://walrus-mirror-hermitcrab.walrus-system/v1/providers/` 并粘贴即可。

使用Hermit Crab，下载新版本包会慢一点，但稍后你会得到与隐含镜像相同的效率，并且无需担心版本变化。

最后，欢迎使用 OpenTofu，这会是一个更积极的社区。
