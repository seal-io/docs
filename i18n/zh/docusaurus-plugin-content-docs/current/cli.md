# CLI

Walrus CLI 是与 Walrus Server 交互的命令行工具。

## 下载安装

Walrus 支持从 Github Releases 页面下载 Walrus CLI，同时也启动 Walrus Server 后从 Walrus Server 下载。

### 从 Github Repository 下载安装 Walrus CLI

#### 在 Mac 上安装 Walrus CLI

- arm64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-darwin-arm64
chmod +x ./walrus-cli-darwin-arm64
sudo mv ./walrus-cli-darwin-arm64 /usr/local/bin/walrus
sudo chown root: /usr/local/bin/walrus
```

- amd64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-darwin-amd64
chmod +x ./walrus-cli-darwin-amd64
sudo mv ./walrus-cli-darwin-amd64 /usr/local/bin/walrus
sudo chown root: /usr/local/bin/walrus
```

#### 在 Linux 上安装 Walrus CLI

- arm64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-linux-arm64
chmod +x ./walrus-cli-linux-arm64
sudo mv ./walrus-cli-linux-arm64 /usr/local/bin/walrus
sudo install -o root -g root -m 0755 walrus /usr/local/bin/walrus
```

- amd64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-linux-amd64
chmod +x ./walrus-cli-linux-amd64
sudo mv ./walrus-cli-linux-amd64 /usr/local/bin/walrus
sudo install -o root -g root -m 0755 walrus /usr/local/bin/walrus
```

### 从 Walrus Server 下载安装

Walrus Server 支持下载当前 Server 对应版本的 CLI。

1. 在 Walrus 左侧菜单栏找到 `Download`。
2. 进入下载页面，下载所需的 CLI。
3. 参考上文中 Mac 和 Linux 从 Github Release 安装运行的命令。

以 Mac arm64 为例，下载完成后运行。

```bash
chmod +x ./walrus-cli-darwin-arm64
sudo mv ./walrus-cli-darwin-arm64 /usr/local/bin/walrus
sudo chown root: /usr/local/bin/walrus
```

## 验证安装

安装完成后运行 `walrus version` 查看当前版本，可获取版本说明安装正常。

## 快速配置

1. 进入 Walrus Server，点击左侧导航栏中的`账号`。
2. 进入 `API 密钥`，点击 `添加密钥`，复制密钥。
3. 命令行运行 `walrus login`，输入服务器地址，密钥，项目，环境。
4. 完成配置后运行 `walrus project list` 验证可访问服务器获取项目列表。
5. Walrus CLI 在使用过程可以通过 `walrus --help` 随时查看帮助。
6. 更多 CLI 子命令解释查看 CLI 详细文档。

