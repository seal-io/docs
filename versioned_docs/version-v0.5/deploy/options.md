---
sidebar_position: 5
---

# Options

List all options of Walrus as below.

```shell
sudo docker run --rm -it sealio/walrus:v0.5.1 walrus --help
```

| Name | Environment Variable | Default | Usage | Configure Multiple Times? |
| :--- | :--- | :---: | :--- | :---: |
| --bind-address | $SERVER_BIND_ADDRESS | `0.0.0.0` | The IP address on which to listen. | |
| --bind-with-dual-stack | $SERVER_BIND_WITH_DUAL_STACK | `true` | Enable dual stack socket listening. | |
| --enable-tls | $SERVER_ENABLE_TLS | `true` | Enable HTTPs. | |
| --tls-cert-file | $SERVER_TLS_CERT_FILE |  | The file containing the default x509 certificate for HTTPS. If any CA certs, concatenated after server cert file. | |
| --tls-private-key-file | $SERVER_TLS_PRIVATE_KEY_FILE |  | The file containing the default x509 private key matching --tls-cert-file. | |
| --tls-cert-dir | $SERVER_TLS_CERT_DIR | `k8s:///secrets` | The directory where the TLS certs are located. If --tls-cert-file and --tls-private-key-file are provided, this flag will be ignored. If --tls-cert-file and --tls-private-key-file are not provided, the certificate and key of auto-signed or self-signed are saved to where this flag specified. By default, the keypair are saved to the hosted Kubernetes cluster with 'k8s:///secrets', which can be shared between multiple instances for high availability. If you wanna saving to the local directory, use '/path/to/save' please, and make sure the directory is writable between multiple instances. | |
| --tls-auto-cert-domains | $SERVER_TLS_AUTO_CERT_DOMAINS | | The domains to accept ACME HTTP-01 or TLS-ALPN-01 challenge to generate HTTPS x509 certificate and private key, and saved to the directory specified by --tls-cert-dir. If --tls-cert-file and --tls-key-file are provided, this flag will be ignored. | Y |
| --bootstrap-password | $SERVER_BOOTSTRAP_PASSWORD | | The password to bootstrap instead of random generating. | |
| --conn-qps | $SERVER_CONN_QPS | `10` | The qps(maximum average number per second) when dialing the server. | |
| --conn-burst | $SERVER_CONN_BURST | `20` | The burst(maximum number at the same moment) when dialing the server. | |
| --websocket-conn-max-per-ip | $SERVER_WEBSOCKET_CONN_MAX_PER_IP | `25` | The maximum number of websocket connections per IP. | |
| --gopool-worker-factor | $SERVER_GOPOOL_WORKER_FACTOR | `25` | The gopool worker factor determines the number of tasks of the goroutine worker pool,it is calculated by the number of CPU cores multiplied by this factor. | |
| --kubeconfig | $SERVER_KUBECONFIG | | The configuration path of the worker kubernetes cluster. | |
| --kube-conn-timeout | $SERVER_KUBE_CONN_TIMEOUT | `5m` | The timeout for dialing the worker kubernetes cluster. | |
| --kube-conn-qps | $SERVER_KUBE_CONN_QPS | `16` | The qps(maximum average number per second) when dialing the worker kubernetes cluster. | |
| --kube-conn-burst | $SERVER_KUBE_CONN_BURST | `64` | The burst(maximum number at the same moment) when dialing the worker kubernetes cluster. | |
| --kube-leader-election | $SERVER_KUBE_LEADER_ELECTION | `true` | The config to determines whether or not to use leader election, leader election is primarily used in multi-instance deployments. | |
| --kube-leader-lease | $SERVER_KUBE_LEADER_LEASE | `15s` | The duration to keep the leadership. If --kube-leader-election=false, this flag will be ignored. When the network environment is not ideal or do not want to cause frequent access to the cluster, please increase the value appropriately. | |
| --kube-leader-renew-timeout | $SERVER_KUBE_LEADER_RENEW_TIMEOUT | `10s` | The duration to renew the leadership before give up, must be less than the duration of --kube-leader-lease.If --kube-leader-election=false, this flag will be ignored. When the network environment is not ideal, please increase the value appropriately. | |
| --data-source-address | $SERVER_DATA_SOURCE_ADDRESS | | The addresses for connecting data source, e.g. Postgres(postgres://[username[:password]@]host[:port]/dbname[?param1=value1&...&paramN=valueN]). | |
| --data-source-conn-max-open | $SERVER_DATA_SOURCE_CONN_MAX_OPEN | `15` | The maximum opening connections for connecting data source. | |
| --data-source-conn-max-idle | $SERVER_DATA_SOURCE_CONN_MAX_IDLE | `5` | The maximum idling connections for connecting data source. | |
| --data-source-conn-max-life | $SERVER_DATA_SOURCE_CONN_MAX_LIFE | `10m` | The maximum lifetime for connecting data source. | |
| --data-source-data-encryption | $SERVER_DATA_SOURCE_DATA_ENCRYPTION | | The algorithm and key(in-hex string) for encrypting the user credentials storing in data source, e.g. aesgcm:3a9b4000d0ad8fbcd01eb922231d395d, aesgcm:b4d1c09dcf62214a05d85548b9217b34da63224d2605938abb6bf384050d2222. | |
| --cache-source-address | $SERVER_CACHE_SOURCE_ADDRESS | | The addresses for connecting cache source, e.g. Redis(redis://[username[:password]@]host[:port]/dbname[?param1=value1&...&paramN=valueN]), Redis Cluster(rediss://[username[:password]@]host[:port]?addr=host2[:port2]&addr=host3[:port3][&param1=value1&...&paramN=valueN]). | |
| --cache-source-conn-max-open | $SERVER_CACHE_SOURCE_CONN_MAX_OPEN | `0` | The maximum opening connections for connecting cache source. | |
| --cache-source-conn-max-idle | $SERVER_CACHE_SOURCE_CONN_MAX_IDLE | `0` | The maximum idling connections for connecting cache source. | |
| --cache-source-conn-max-life | $SERVER_CACHE_SOURCE_CONN_MAX_LIFE | `0s` | The maximum lifetime for connecting cache source. | |
| --enable-authn | $SERVER_ENABLE_AUTHN | `true` | Enable authentication. | |
| --authn-session-max-idle | $SERVER_AUTHN_SESSION_MAX_IDLE | `30m` | The maximum idling duration for keeping authenticated session, it represents the max-age of authenticated cookie. | |
| --casdoor-server | $SERVER_CASDOOR_SERVER | | The URL for connecting external casdoor server. | |
| --builtin-catalog-provider | $SERVER_BUILTIN_CATALOG_PROVIDER | `github` | Specify the provider type for creating builtin catalogs, select from 'github' or 'gitee'. | | 
