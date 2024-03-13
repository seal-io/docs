# 命令行界面（CLI）

Walrus CLI 是与 Walrus 服务器交互的命令行界面。

## 下载与安装

Walrus 支持从 GitHub Releases 页面或直接从 Walrus UI 下载 Walrus CLI。

### 从 GitHub 安装 Walrus CLI

前往 [Walrus Releases 页面](https://github.com/seal-io/walrus/releases) 并下载适用于您操作系统的 CLI 二进制文件。

或者，您可以运行以下命令来下载并安装最新版本的 Walrus CLI：
```bash
ARCH=$(uname -m | sed 's/x86_64/amd64/')
OS=$(uname -s | tr '[:upper:]' '[:lower:]')

curl -fLO "https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-${OS}-${ARCH}"
chmod +x "./walrus-cli-${OS}-${ARCH}"
sudo mv "./walrus-cli-${OS}-${ARCH}" /usr/local/bin/walrus
```

### 通过 Walrus UI 安装 Walrus CLI

您可以从 Walrus UI 下载 Walrus CLI。

1. 登录到 Walrus，点击导航栏中的 `下载` 菜单。
2. 下载适用于你操作系统的 CLI。
3. 使 CLI 可执行，并将其移动到系统路径。

## 验证安装

安装完成后，运行 `walrus version` 来检查当前版本并确保安装成功。

## 使用 Walrus CLI

### 获取 API 密钥

1. 登录到 Walrus，点击导航栏中的 `账号` -> `用户信息`。
2. 进入 `API密钥` 标签页，点击 `添加密钥` 按钮。
3. 为密钥设置 `名称` 和 `过期时间`，然后点击 `保存`。
4. 复制生成的令牌并妥善保存以备后用。

### 配置 CLI

1. 在终端中运行 `walrus login`。
2. 输入服务器地址、令牌、项目和环境。令牌是在前一步生成的 API 密钥。
3. 配置完成后，运行 `walrus project list` 验证对服务器的访问并获取项目列表。
4. 在使用 CLI 时，随时使用 `walrus --help` 查看帮助信息。

要了解有关 CLI 命令的更详细解释，请参阅 [CLI 文档](category/cli)。