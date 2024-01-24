---
sidebar_position: 2
---

# 离线部署

适用于离线安装场景。

> 前置条件：
> - 提供内网容器镜像仓库，例如Harbor。
> - 提供内网Git代码库，例如GitLab。
> - 开放Walrus所在服务器到镜像仓库和Git服务器的访问。

## 准备离线镜像
从 [Walrus Releases](https://github.com/seal-io/walrus/releases) 
获取 `walrus-images.txt`、`walrus-save-images.sh` 和 `walrus-load-images.sh` 三个文件用于下载离线镜像并推送到内网镜像仓库。

1. 使用 `walrus-save-images.sh` 在可以联网的Docker主机下载离线镜像，参考命令如下：
```shell
./walrus-save-images.sh --image-list walrus-images.txt
```

2. 将保存的离线镜像包 `walrus-images.tar.gz` 和 `walrus-load-images.sh` 上传到可以访问内网镜像仓库的Docker主机，使用 `walrus-load-images.sh` 上传离线镜像，内网镜像仓库以Harbor为例（如果不是Harbor，需要提前在镜像仓库中创建 `sealio` 项目），参考命令如下：
```shell
docker login registry.example.com --username admin --password Harbor12345
./walrus-load-images.sh --registry registry.example.com --harbor-user admin --harbor-password Harbor12345
```

## 准备离线模板库
将 [Builtin模板库](https://github.com/walrus-catalog) 的所有Repo都Fork或Import到内网Git仓库。

可以参考以下脚本，批量将 `walrus-catalog` 的所有Repo克隆下来后，上传到内网Git仓库，每个Repo需要对应的一个内网仓库，如对应一个GitLab Project。
```shell
#!/bin/bash

# Walrus catalog org
ORG_NAME="walrus-catalog"

# Get all repos in the Walrus catalog org
REPOS=$(curl -s "https://api.github.com/orgs/$ORG_NAME/repos" | jq -r '.[] | select(.archived == false) | .name')

for REPO_NAME in $REPOS; do
  # Clone repo
  git clone "https://github.com/$ORG_NAME/$REPO_NAME"
done

echo "All done!"
```

## 离线安装Walrus
### 单实例部署
根据内网镜像仓库的地址，修改 [单实例部署](../deploy/standalone.md) 中的镜像地址，并新增 `SERVER_SETTING_IMAGE_REGISTRY` 和 `SERVER_SETTING_DEPLOYER_IMAGE` 环境变量，指向使用内网镜像仓库和离线Deployer镜像，参考命令如下：

```shell
sudo docker run -d --privileged --restart=always --name walrus \
  -p 80:80 -p 443:443 \
  -e SERVER_SETTING_IMAGE_REGISTRY='registry.example.com' \
  -e SERVER_SETTING_DEPLOYER_IMAGE='registry.example.com/sealio/terraform-deployer:v0.1.4-airgap'  \
  registry.example.com/sealio/walrus:{{ VERSION }}
```

如果内网镜像仓库为私有仓库，需要配置认证信息才能拉取镜像，则需要额外的配置，步骤如下。

Walrus的单实例部署使用了内置的K3s作为Walrus的底层K8s运行环境，如果需要设置K3s使用私有仓库拉取镜像，需要挂载 `registries.yaml` 文件到Walrus容器中：

1. 在要运行Walrus容器的主机上，创建 `registries.yaml` 文件：
```shell
mkdir -p /etc/walrus/k3s
vim /etc/walrus/k3s/registries.yaml
```

填充以下YAML内容，替换为实际的镜像仓库地址、认证用户名和密码。如果私有镜像仓库采用不受信任的TLS证书，需要使用 `insecure_skip_verify` 参数跳过证书验证，如果不需要则移除：
```yaml
mirrors:
  docker.io:
    endpoint:
      - "https://registry.example.com"
  registry.example.com:
    endpoint:
      - "https://registry.example.com"
configs:
  "registry.example.com":
    auth:
      username: xxxxxx # This is the registry username
      password: xxxxxx # This is the registry password
    tls:
      insecure_skip_verify: true
```

2. 在运行Walrus容器时，将 `registries.yaml` 挂载到Walrus容器中，参考命令如下：
```shell
sudo docker run -d --privileged --restart=always --name walrus \
  -p 80:80 -p 443:443 \
  -e SERVER_SETTING_IMAGE_REGISTRY='registry.example.com' \
  -e SERVER_SETTING_DEPLOYER_IMAGE='registry.example.com/sealio/terraform-deployer:v0.1.4-airgap'  \
  -v /etc/walrus/k3s/registries.yaml:/etc/rancher/k3s/registries.yaml \
  registry.example.com/sealio/walrus:{{ VERSION }}
```

3. Walrus容器运行起来后，进入Walrus容器验证私有镜像仓库配置是否生效：
```shell
docker exec -it walrus bash
cat /var/lib/k3s/agent/etc/containerd/config.toml
```

详情可参考K3s官方文档 [K3s私有镜像仓库配置](https://docs.k3s.io/installation/private-registry)。

4. 访问Walrus UI，初始登录后，访问 `https://<WALRUS_URL>/v1/settings`，验证 `ImageRegistry` 和 `DeployerImage` 设置是否生效。

### 高可用部署

根据内网镜像仓库的地址，修改 [高可用部署](../deploy/replication.md) 中的镜像地址，并为Walrus Deployment新增 `SERVER_SETTING_IMAGE_REGISTRY` 和 `SERVER_SETTING_DEPLOYER_IMAGE` 环境变量，指向使用内网镜像仓库和离线Deployer镜像，参考配置如下：
```shell
vim walrus.yaml
```
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: walrus
  namespace: walrus-system
spec:
  ...
  template:
    ...
    spec:
      containers:
        - name: walrus-server
          image: sealio/walrus:{{ VERSION }}
          ...
          env:
            - name: SERVER_SETTING_IMAGE_REGISTRY
              value: registry.example.com
            - name: SERVER_SETTING_DEPLOYER_IMAGE
              value: registry.example.com/sealio/terraform-deployer:v0.1.4-airgap
...
```
```shell
kubectl apply -f walrus.yaml
```

如果内网镜像仓库为私有仓库，需要配置认证信息才能拉取镜像，则需要额外的配置，步骤如下。

1. 要从私有仓库拉取镜像，Kubernetes需要凭据。 先创建凭据Secret：
```shell
kubectl create secret docker-registry registry-credential \
  --docker-server=<你的镜像仓库地址> \
  --docker-username=<你的用户名> \
  --docker-password=<你的密码> \
  --docker-email=<你的邮箱地址>
```

2. 修改 [高可用部署](../deploy/replication.md) 中的YAML，为几个 `Deployment` 资源添加 `imagePullSecrets` 参数，然后按照高可用部署的步骤部署Walrus。使创建Pod时kubelet可以拉取私有仓库的镜像：
```shell
vim walrus.yaml
```
```yaml
apiVersion: apps/v1
kind: Deployment
...
spec:
  ...
  template:
    ...
    spec:
      containers:
      ... 
      imagePullSecrets:
      - name: registry-credential
...
```
```shell
kubectl apply -f walrus.yaml
```

4. 访问Walrus UI，初始登录后，访问 `https://<WALRUS_URL>/v1/settings`，验证 `ImageRegistry` 和 `DeployerImage` 设置是否生效。

## 设置Walrus使用内网模板库
1. 关闭使用内置模板库：

进入 `系统设置` 的 `服务管理`，编辑 `模板库设置`，关闭 `使用内置模板库` 的开关，保存。

2. 如果内网的Git模板库采用不受信任的TLS证书，关闭Walrus对模板库的证书认证（可选）：

进入 `系统设置` 的 `服务管理`，编辑 `证书设置` ，开启 `跳过证书认证` 的开关，保存。

3. 删除内置模板库，添加内网模板库：

进入 `运维中心` 的 `模板库`，勾选 `builtin` 模板库，选择删除。

然后选择添加模板库，输入模板库的名称、描述、来源。来源地址填写离线模板库的完整git organization/group地址，例如 `https://github.com/walrus-catalog`，确定保存。

![create](/img/v0.4.0/catalog/create.png)

确认内网模板库正常刷新，切换到 `运维中心` - `模板`，验证模板正常加载。

> 注意：
> - 离线环境下OpenAI相关功能（AI编写模板）不可用。
> - 如果需要自定义连接器，即自定义Terraform Provider，需要配置自定义Provider的Mirror，参考`https://developer.hashicorp.com/terraform/cli/commands/providers/mirror`。
