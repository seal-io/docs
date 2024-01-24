# 快速入门

> 注意：
>
> Walrus 的当前版本处于 alpha 阶段。后续版本可能会引入不兼容的 API 变更。

## 部署

> 前置条件：
>
> - 资源不少于 4CPU，8Gi 内存的 Linux 服务器。
> - 至少 50GB 的空余磁盘空间。
> - 安装 Docker，详细指引参考[Docker 官方文档](https://docs.docker.com/)。
> - 服务器开放 80 和 443 端口。

执行以下命令启动 Walrus 服务：

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 -p 30000-30100:30000-30100 \
  --name walrus \
  -e SERVER_BUILTIN_CATALOG_PROVIDER=gitee \
  sealio/walrus:{{ VERSION }}
```

> 注意：
>
> - 端口范围`30000-30100`用于暴露本地 K3s 环境中部署的应用服务。如果您不需要在本地 K3s 环境中部署应用，可以删除此端口范围。
> - 为了加速国内用户的模板源的访问，我们通过环境变量`SERVER_BUILTIN_CATALOG_PROVIDER`指定模板源地址为 Gitee。如果您的服务器在国外，可以忽略此环境变量。

更多部署要求，请参考[部署](/deploy/standalone)。

## 访问

1. 通过`https://<server-address>`访问 Walrus 的 UI。

2. 以`admin`用户名以及初始管理员密码登陆 Walrus，并根据 UI 提示设置新的密码以及 Walrus 的访问地址。

> 第一次登陆时根据 UI 提示，在服务器上运行以下指令获取初始的管理员密码。

```shell
sudo docker logs walrus 2>&1 | grep "Bootstrap Admin Password"
```

![qs-first-login](/img/v0.5.0/quickstart/qs-first-login.png)

3. 登陆后，您可以设置新密码，以及配置 Walrus 的访问地址。

![qs-set-pwd](/img/v0.5.0/quickstart/qs-set-pwd.png)

## 本地环境

Walrus 为您提供了一个名为`local`的环境，该环境位于`default`项目下，用于快速体验应用部署流程。

![qs-local-env](/img/v0.5.0/quickstart/qs-local-env.png)

`local`环境连接的是内置的 K3s 创建的本地 Kubernetes 集群连接器，您可以使用它部署应用，而无需配置 Kubernetes 集群。

> 注意：
>
> 本地环境的 K3s 集群连接器仅用于测试，不建议在生产环境中使用。如果您需要在生产环境中部署应用，请参考[高可用部署指引](deploy/replication)或手动配置 Kubernetes 集群连接器。

！[qs-local-connector](/img/v0.5.0/quickstart/qs-local-connector.png)

## 部署资源

1. 在环境列表页中，点击前置步骤创建的环境名称，进入环境视图。

![qs-env-list](/img/v0.5.0/quickstart/qs-env-list.png)

2. 点击`导入 YAML`按钮导入 Walrus 内置的 Walrus File 资源 YAML 文件。

![qs-create-res](/img/v0.5.0/quickstart/qs-create-res.png)

3. 从右侧的 Walrus File Hub 中选择`nginx`示例。

![qs-create-res-nginx](/img/v0.5.0/quickstart/qs-create-res-nginx.png)

4. 点击`导入`按钮完成资源的创建。
5. 等待资源的部署完成后，您可以查看组件，日志，执行终端命令，访问该 nginx 服务的地址等。

- 访问端点。

![qs-res-access](/img/v0.5.0/quickstart/qs-res-access.png)

- 查看部署日志。

![qs-logs](/img/v0.5.0/quickstart/qs-logs.png)

- 查看组件日志。

![qs-res-logs](/img/v0.5.0/quickstart/qs-res-logs.png)

- 打开终端。

![qs-res-exec](/img/v0.5.0/quickstart/qs-res-exec.png)

恭喜，您已完成本节快速入门。
