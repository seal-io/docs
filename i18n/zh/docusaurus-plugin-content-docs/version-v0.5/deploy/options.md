---
sidebar_position: 5
---

# 选项

下面列出了 Walrus 的所有选项。

```shell
sudo docker run --rm -it sealio/walrus:v0.5.1 walrus --help
```

| 名称 | 环境变量 | 默认值 | 用途 | 可否多次配置 |
| :--- | :--- | :---: | :--- | :---: |
| --bind-address | $SERVER_BIND_ADDRESS | `0.0.0.0` | 执行监听操作的 IP 地址。 | |
| --bind-with-dual-stack | $SERVER_BIND_WITH_DUAL_STACK | `true` | 启用双堆栈套接字侦听。 | |
| --enable-tls | $SERVER_ENABLE_TLS | `true` | 启用 HTTPs. | |
| --tls-cert-file | $SERVER_TLS_CERT_FILE |  | HTTPS x509 证书路径。如果有任何 CA 证书，则拼接在该证书文件后。 | |
| --tls-private-key-file | $SERVER_TLS_PRIVATE_KEY_FILE |  | HTTPS x509 私钥路径，匹配 --tls-cert-file。 | |
| --tls-cert-dir | $SERVER_TLS_CERT_DIR | `k8s:///secrets` | HTTPS x509 证书和私钥所在目录。 如果提供了 --tls-cert-file 和 --tls-private-key-file ，则该标志将被忽略。 如果未提供 --tls-cert-file 和 --tls-private-key-file ，则自动签名或自签名的证书和私钥将保存到此标志指定的目录。 "k8s:///secrets"（默认）把证书和私钥保存到工作 Kubernetes 集群中，可以在多个实例之间共享以实现高可用性。 如果您想保存到本地目录，请使用"/path/to/save"，并确保该目录在多个实例之间可写。 | |
| --tls-auto-cert-domains | $SERVER_TLS_AUTO_CERT_DOMAINS | | 接受 ACME HTTP-01 或 TLS-ALPN-01 质询的域，生成 HTTPS x509 证书和私钥，并保存到 --tls-cert-dir 指定的目录中。 如果提供了 --tls-cert-file 和 --tls-key-file ，则该标志将被忽略。| 是 |
| --bootstrap-password | $SERVER_BOOTSTRAP_PASSWORD | | 使用指定而非随机的引导密码。引导密码是首次登录时使用的密码。 | |
| --conn-qps | $SERVER_CONN_QPS | `10` | 与服务器通信时每秒请求数（QPS）限制。 | |
| --conn-burst | $SERVER_CONN_BURST | `20` | 与服务器通信时突发峰值请求个数上限。 | |
| --websocket-conn-max-per-ip | $SERVER_WEBSOCKET_CONN_MAX_PER_IP | `25` | 与服务器通信时每个IP Websocket连接的上限。 | |
| --gopool-worker-factor | $SERVER_GOPOOL_WORKER_FACTOR | `25` | Goroutine 池的因子。池内的 Goroutine 上限由CPU核数乘以该因子得出。 | |
| --kubeconfig | $SERVER_KUBECONFIG | | 工作 Kubernetes 集群的配置路径。Walrus 需要运行在 Kubernetes 集群之上。 | |
| --kube-conn-timeout | $SERVER_KUBE_CONN_TIMEOUT | `5m` | 与工作 Kubernetes 集群通讯时的超时值。 | |
| --kube-conn-qps | $SERVER_KUBE_CONN_QPS | `16` | 与工作 Kubernetes 集群通信时每秒请求数（QPS）限制。 | |
| --kube-conn-burst | $SERVER_KUBE_CONN_BURST | `64` | 与工作 Kubernetes 集群通信时突发峰值请求个数上限。 | |
| --kube-leader-election | $SERVER_KUBE_LEADER_ELECTION | `true` | 是否启用领导选举，通常用于多个 Walrus 实例之间协同工作。 | |
| --kube-leader-lease | $SERVER_KUBE_LEADER_LEASE | `15s` | 保持领导地位的时间。 如果 --kube-leader-election=false，该标志将被忽略。 当网络环境不理想或者不想造成集群频繁访问时，请适当增大该值。 | |
| --kube-leader-renew-timeout | $SERVER_KUBE_LEADER_RENEW_TIMEOUT | `10s` | 放弃之前更新领导权的持续时间必须小于 --kube-leader-lease 的持续时间。如果 --kube-leader-election=false，该标志将被忽略。 当网络环境不理想时，请适当增大该值。 | |
| --data-source-address | $SERVER_DATA_SOURCE_ADDRESS | | 连接数据源的地址，例如 Postgres(postgres://[username[:password]@]host[:port]/dbname[?param1=value1&...&paramN=valueN])。 | |
| --data-source-conn-max-open | $SERVER_DATA_SOURCE_CONN_MAX_OPEN | `15` | 连接数据源的最大连接数。 | |
| --data-source-conn-max-idle | $SERVER_DATA_SOURCE_CONN_MAX_IDLE | `5` | 连接数据源的最大空闲连接数。 | |
| --data-source-conn-max-life | $SERVER_DATA_SOURCE_CONN_MAX_LIFE | `10m` | 连接数据源的最长生命周期。 | |
| --data-source-data-encryption | $SERVER_DATA_SOURCE_DATA_ENCRYPTION | | 用于加密存储在数据源中的用户凭据的算法和密钥（十六进制字符串），例如 aesgcm:3a9b4000d0ad8fbcd01eb922231d395d，aesgcm:b4d1c09dcf62214a05d85548b9217b34da63224d2605938abb6bf384050d2222。 | |
| --cache-source-address | $SERVER_CACHE_SOURCE_ADDRESS | | 连接缓存源的地址，例如 Redis(redis://[username[:password]@]host[:port]/dbname[?param1=value1&...&paramN=valueN])，Redis 集群(rediss://[username[:password]@]host[:port]?addr=host2[:port2]&addr=host3[:port3][&param1=value1&...&paramN=valueN]). | |
| --cache-source-conn-max-open | $SERVER_CACHE_SOURCE_CONN_MAX_OPEN | `0` | 连接缓存源的最大连接数。 | |
| --cache-source-conn-max-idle | $SERVER_CACHE_SOURCE_CONN_MAX_IDLE | `0` | 连接缓存源的最大空闲连接数。 | |
| --cache-source-conn-max-life | $SERVER_CACHE_SOURCE_CONN_MAX_LIFE | `0s` | 连接缓存源的最长生命周期。 | |
| --enable-authn | $SERVER_ENABLE_AUTHN | `true` | 启用身份验证。 | |
| --authn-session-max-idle | $SERVER_AUTHN_SESSION_MAX_IDLE | `30m` | 保持认证会话的最大空闲时间，代表认证cookie的max-age。 | |
| --casdoor-server | $SERVER_CASDOOR_SERVER | | 外部 casdoor 服务器的 URL。| |
| --builtin-catalog-provider | $SERVER_BUILTIN_CATALOG_PROVIDER | `github` | 用于创建内置目录的提供程序类型，从 "github" 或 "gitee" 中选择。 | | 
