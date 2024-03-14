---
sidebar_position: 3
---

# 集成 CICD 工具

本教程介绍如何通过 Walrus CLI 与您的 CI/CD 工具集成，以实现自动化的部署流程。

## 先决条件

想要跟随本教程，您将需要：
1. 一个 Github 仓库。
2. [安装 Walrus](/deploy/standalone)。

## 创建 API 密钥

首先，您需要创建一个 API 密钥，用于访问 Walrus 服务。

1. 进入`个人中心`的`API 密钥`，点击`添加密钥`，配置名称和密钥的过期时间；
2. 完成后，复制生成的密钥，以备后用。

### Walrus CLI 和 CI/CD 工具集成

我们以 CLI 和 GitHub Actions 集成为例。

1. 进入 GitHub 仓库，在目录 `.github/workflows` 下创建 `ci.yaml` 文件，并在其中定义您的 CI/CD 工作流；
2. 在工作流程中，配置 GitHub Actions 的密钥，包括 `CI_WALRUS_SERVER` 和 `CI_WALRUS_API_KEY`，以便安全地存储敏感信息，`CI_WALRUS_SERVER` 的格式为 `https://host:port`；
3. 以下为 `ci.yaml` 样例：

```yaml
name: ci

on:
  push:
    branches:
      - "main"

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        arch: 
          - amd64
    steps:
      - name: Download CLI
        run: |
          # Install walrus cli
          curl -v -k -o walrus -LO "${{ secrets.CI_WALRUS_SERVER }}/cli?arch=amd64&os=linux"
          chmod +x ./walrus

      - name: Deploy
        run: |
          # Configure Walrus CLI
          ./walrus login --server ${{ secrets.CI_WALRUS_SERVER }} --project web --environment dev --api-key ${{ secrets.CI_WALRUS_API_KEY }}

          # Deploy resources using Walrus files.
          ./walrus apply -f walrus-file.yaml --wait
```

部署完成后可在 Walrus 中查看到对应的资源。更多 CLI 相关操作可以在 CLI 文档中查看。
