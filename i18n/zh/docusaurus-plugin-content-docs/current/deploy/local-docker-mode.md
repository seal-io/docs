---
sidebar_position: 4
---

# 本地 Docker 模式

Walrus 能以本地 Docker 模式部署。使用此模式，开发人员可以在其个人计算机上使用 Docker 部署 Walrus file。这使得用户可以在开发阶段使用与生产 Kubernetes 环境一致的应用定义。无需在本地使用 Kubernetes，只需使用 Docker 即可。

## 先决条件

- 已安装 Docker，请参考 [Docker 官方文档](https://docs.docker.com/) 了解如何在您的计算机上设置 Docker。
- （可选）已安装 Docker Desktop，并启用 [Docker Extensions](https://docs.docker.com/desktop/extensions/)。如果适用，将安装 Walrus Docker 扩展。
- 已安装 Walrus CLI，请参考 [CLI 文档](../cli) 了解如何安装 Walrus CLI。

## 安装本地 Walrus

运行以下命令以在本地 Docker 模式下安装 Walrus。

```shell
walrus local install
```

您应该会看到以下输出：

```shell
? Install Walrus docker extension to proceed [y/N] y
Installing...
Checking readiness...
Walrus CLI is configured.
```

您可以使用 `--env(-e)` 参数配置本地 Walrus 的[服务器选项](./options)。例如，要将默认的模板库源设置为 Gitee ，请运行以下命令：

```shell
walrus local install -e SERVER_BUILTIN_CATALOG_PROVIDER=gitee
```

> 注意：由于 Docker 扩展无法配置启动选项，当设置了此参数时，即使在您的 Docker Desktop 中启用了 Docker 扩展，本地 Walrus 也将使用普通的 Docker 容器安装。

## 部署资源

现在，您可以使用 Walrus CLI 开始部署。例如，考虑以下来自 [Walrus 文件中心](https://github.com/seal-io/walrus-file-hub) 的 `nginx` 示例，

```yaml
# nginx.yaml
resources:
  - name: nginx
    type: containerservice
    attributes:
      containers:
        - image: nginx
          profile: run
          ports:
            - internal: 80
              external: 80
          files:
            - path: /usr/share/nginx/html/index.html
              content: |
                <html>
                  <h1>欢迎使用 Walrus！</h1>
                </html>
```

运行以下命令以部署 `nginx` 示例。

```shell
walrus apply -f nginx.yaml --wait
```

您应该会看到以下输出：

```shell
resource default/local/nginx created
resource default/local/nginx is in status: Deploying
resource default/local/nginx is in status: Preparing
resource default/local/nginx is in status: Ready
```

之后，您可以列出资源以验证并获取服务 URL 以访问。

```shell
walrus resource list
```

您应该会看到以下输出：

```shell
 ID                   NAME    ENDPOINTS                                             TYPE               STATUS   CREATED
-------------------- ------- ----------------------------------------------------- ------------------ -------- -----------------------------
 498114759510458370   nginx   [{"name":"80:80/http","url":"http://localhost:80"}]   containerservice   Ready    2024-01-01T00:00:00.000000Z
```

## 卸载本地 Walrus

运行以下命令以在本地 Docker 模式下卸载 Walrus。

```shell
walrus local uninstall
```