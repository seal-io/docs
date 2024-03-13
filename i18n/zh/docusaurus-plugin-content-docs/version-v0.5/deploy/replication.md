---
sidebar_position: 2
---

# 高可用部署

适用于生产场景。

> 前置条件：
> - 提供Kubernetes集群作为运行集群。
> - Kubernetes集群支持 Ingress。
> - 资源不少于4CPU，8Gi内存的Linux服务器。
> - 至少50GB的空余磁盘空间。
> - 服务器开放80和443端口。

填充以下 YAML 的待填内容，使用 Kubectl Apply 指令即可完成高可用部署。

1. 创建Walrus部署YAML:
```shell
vim walrus.yaml
```

2. 填充以下YAML内容:
```shell
---
apiVersion: v1
kind: Namespace
metadata:
  name: walrus-system
  labels:
    "app.kubernetes.io/part-of": "walrus"
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "entrance"
spec:
  defaultBackend:
    service:
      name: walrus
      port:
        number: 80
---
apiVersion: v1
kind: Secret
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "configuration"
stringData:
  local_environment_mode: "disabled"
  enable_tls: "false"
  db_driver: "postgres"
  db_user: "root"
  db_password: "Root123"
  db_name: "walrus"
---


# Database
#
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: walrus-system
  name: database-script
data:
  "init.sh": |
    #!/usr/bin/env bash

    set -o errexit
    set -o nounset
    set -o pipefail

    if [[ ! -d ${PGDATA} ]]; then
      mkdir -p ${PGDATA}
      chown 999:999 ${PGDATA}
    fi

  "probe.sh": |
    #!/usr/bin/env bash

    set -o errexit
    set -o nounset
    set -o pipefail

    psql --no-password --username=${POSTGRES_USER} --dbname=${POSTGRES_DB} --command="SELECT 1"

---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: database
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "database"
  ports:
    - name: conn
      port: 5432
      targetPort: conn
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  namespace: walrus-system
  name: database
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "database"
spec:
  # When a PVC does not specify a storageClassName,
  # the default StorageClass is used.
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 8Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: walrus-system
  name: database
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "database"
    "app.kubernetes.io/name": "postgres"
spec:
  strategy:
    type: Recreate
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "walrus"
      "app.kubernetes.io/component": "database"
      "app.kubernetes.io/name": "postgres"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "walrus"
        "app.kubernetes.io/component": "database"
        "app.kubernetes.io/name": "postgres"
    spec:
      automountServiceAccountToken: false
      restartPolicy: Always
      initContainers:
        - name: init
          image: postgres:14.8
          imagePullPolicy: IfNotPresent
          command:
            - /script/init.sh
          env:
            - name: PGDATA
              value: /var/lib/postgresql/data/pgdata
          volumeMounts:
            - name: script
              mountPath: /script
            - name: data
              mountPath: /var/lib/postgresql/data
      containers:
        - name: postgres
          image: postgres:14.8
          imagePullPolicy: IfNotPresent
          resources:
            limits:
              cpu: '4'
              memory: '8Gi'
            requests:
              cpu: '500m'
              memory: '512Mi'
          securityContext:
            runAsUser: 999
          ports:
            - name: conn
              containerPort: 5432
          env:
            - name: POSTGRES_USER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_user
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_password
            - name: POSTGRES_DB
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_name
            - name: PGDATA
              value: /var/lib/postgresql/data/pgdata
          startupProbe:
            failureThreshold: 10
            periodSeconds: 5
            exec:
              command:
                - /script/probe.sh
          readinessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 5
            exec:
              command:
                - /script/probe.sh
          livenessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 10
            exec:
              command:
                - /script/probe.sh
          volumeMounts:
            - name: script
              mountPath: /script
            - name: data
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: script
          configMap:
            name: database-script
            defaultMode: 0555
        - name: data
          persistentVolumeClaim:
            claimName: database
---


# Identity Access Manager
#
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: walrus-system
  name: identity-access-manager-script
data:
  "init.sh": |
    #!/usr/bin/env bash

    set -o errexit
    set -o nounset
    set -o pipefail

    # validate database
    set +o errexit
    while true; do
      if psql --command="SELECT 1" "${DB_SOURCE}" >/dev/null 2>&1; then
        break
      fi
      echo "waiting db to be ready ..."
      sleep 2s
    done
    set -o errexit

    # mutate app configuration
    cp -f /conf/app.conf app.conf
    sed -i '/^tableNamePrefix =.*/d' app.conf
    echo "tableNamePrefix = casdoor_" >>app.conf
    sed -i '/^driverName =.*/d' app.conf
    echo "driverName = \"${DB_DRIVER}\"" >>app.conf
    sed -i '/^dataSourceName =.*/d' app.conf
    echo "dataSourceName = \"${DB_SOURCE}\"" >>app.conf
    sed -i '/^sessionConfig =.*/d' app.conf
    echo 'sessionConfig = {"enableSetCookie":true,"cookieName":"casdoor_session_id","cookieLifeTime":3600,"providerConfig":"/var/run/casdoor","gclifetime":3600,"domain":"","secure":false,"disableHTTPOnly":false}' >>app.conf
    sed "s#${DB_PASSWORD}#***#g" app.conf

---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: identity-access-manager
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "identity-access-manager"
  ports:
    - name: http
      port: 8000
      targetPort: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: walrus-system
  name: identity-access-manager
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "identity-access-manager"
    "app.kubernetes.io/name": "casdoor"
spec:
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "walrus"
      "app.kubernetes.io/component": "identity-access-manager"
      "app.kubernetes.io/name": "casdoor"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "walrus"
        "app.kubernetes.io/component": "identity-access-manager"
        "app.kubernetes.io/name": "casdoor"
    spec:
      automountServiceAccountToken: false
      restartPolicy: Always
      initContainers:
        - name: init
          image: sealio/casdoor:v1.344.0-seal.1
          imagePullPolicy: IfNotPresent
          workingDir: /tmp/conf
          command:
            - /script/init.sh
          env:
            - name: DB_DRIVER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_driver
            - name: DB_USER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_user
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_password
            - name: DB_NAME
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_name
            - name: DB_SOURCE
              value: $(DB_DRIVER)://$(DB_USER):$(DB_PASSWORD)@database:5432/$(DB_NAME)?sslmode=disable
          volumeMounts:
            - name: script
              mountPath: /script
            - name: config
              mountPath: /tmp/conf
      containers:
        - name: casdoor
          image: sealio/casdoor:v1.344.0-seal.1
          imagePullPolicy: IfNotPresent
          resources:
            limits:
              cpu: '2'
              memory: '4Gi'
            requests:
              cpu: '500m'
              memory: '512Mi'
          workingDir: /
          command:
            - /casdoor
            - --createDatabase=true
          ports:
            - name: http
              containerPort: 8000
          startupProbe:
            failureThreshold: 10
            periodSeconds: 5

            tcpSocket:
              port: 8000
          readinessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 5
            tcpSocket:
              port: 8000
          livenessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 10
            tcpSocket:
              port: 8000
          volumeMounts:
            - name: config
              mountPath: /conf
            - name: data
              mountPath: /var/run/casdoor
      volumes:
        - name: script
          configMap:
            name: identity-access-manager-script
            defaultMode: 0500
        - name: config
          emptyDir: { }
        - name: data
          emptyDir: { }
---


# Walrus server
#
## RBAC for installing third-party applications.
##
## Since the installation of some third-party software has permission granting operations, 
## it will contain some resource global operation permissions, but only for granting.
##
---
apiVersion: v1
kind: ServiceAccount
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
rules:
  - apiGroups:
      - "apiextensions.k8s.io"
    resources:
      - "customresourcedefinitions"
    verbs:
      - create
      - update
      - get
      - list
      - patch
  - apiGroups:
      - "rbac.authorization.k8s.io"
    resources:
      - "clusterroles"
      - "clusterrolebindings"
      - "roles"
      - "rolebindings"
      - "serviceaccounts"
    verbs:
      - create
      - update
      - get
      - list
      - patch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
subjects:
  - kind: ServiceAccount
    name: walrus
    namespace: walrus-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: walrus
## RBAC for launching Walrus.
##
## As limiting in the walrus-system, it can be safe to make all verbs as "*".
##
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
rules:
  - apiGroups:
      - "authorization.k8s.io"
    resources:
      - "subjectaccessreviews"
      - "selfsubjectaccessreviews"
    verbs:
      - "*"
  - apiGroups:
      - "coordination.k8s.io"
    resources:
      - "leases"
    verbs:
      - "*"
  - apiGroups:
      - "apps"
    resources:
      - "statefulsets"
      - "deployments"
      - "replicasets"
    verbs:
      - "*"
  - apiGroups:
      - "batch"
    resources:
      - "jobs"
    verbs:
      - "*"
  - apiGroups:
      - ""
    resources:
      - "persistentvolumeclaims"
      - "persistentvolumeclaims/finalizers"
      - "secrets"
      - "pods"
      - "pods/log"
      - "events"
      - "services"
      - "configmaps"
      - "serviceaccounts"
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
subjects:
  - kind: ServiceAccount
    name: walrus
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: walrus
## RBAC for enabling workflow
##
## As limiting in the walrus-system, it can be safe to make all verbs as "*".
##
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: walrus-system
  name: walrus-enable-workflow
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
rules:
  - apiGroups:
      - argoproj.io
    resources:
      - "*"
    verbs:
      - "*"
  - apiGroups:
      - ""
    resources:
      - "persistentvolumeclaims"
      - "persistentvolumeclaims/finalizers"
    verbs:
      - "*"
  - apiGroups:
      - ""
    resources:
      - "pods/exec"
    verbs:
      - "*"
  - apiGroups:
      - "policy"
    resources:
      - "poddisruptionbudgets"
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: walrus-system
  name: walrus-enable-workflow
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
subjects:
  - kind: ServiceAccount
    name: walrus
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: walrus-enable-workflow
## RBAC for deploying
##
## As limiting in the walrus-system, it can be safe to make all verbs as "*".
##
---
apiVersion: v1
kind: ServiceAccount
metadata:
  namespace: walrus-system
  name: walrus-deployer
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: walrus-system
  name: walrus-deployer
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
rules:
  - apiGroups:
      - "batch"
    resources:
      - "jobs"
    verbs:
      - "*"
  - apiGroups:
      - ""
    resources:
      - "secrets"
      - "pods"
      - "pods/log"
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: walrus-system
  name: walrus-deployer
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
subjects:
  - kind: ServiceAccount
    name: walrus-deployer
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: walrus-deployer
## RBAC for running workflow
##
## As limiting in the walrus-system, it can be safe to make all verbs as "*".
##
---
apiVersion: v1
kind: ServiceAccount
metadata:
  namespace: walrus-system
  name: walrus-workflow
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: walrus-system
  name: walrus-workflow
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
rules:
  - apiGroups:
      - ""
    resources:
      - "pods"
      - "pods/logs"
      - "secrets"
    verbs:
      - "*"
  - apiGroups:
      - "argoproj.io"
    resources:
      - "*"
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: walrus-system
  name: walrus-workflow
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
subjects:
  - kind: ServiceAccount
    name: walrus-workflow
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: walrus-workflow
## Storage
##
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
spec:
  # When a PVC does not specify a storageClassName,
  # the default StorageClass is used.
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
## Service
##
---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: walrus
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
  sessionAffinity: ClientIP
  ports:
    - name: http
      port: 80
      targetPort: http
## Deployment
##
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
    "app.kubernetes.io/name": "walrus-server"
spec:
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "walrus"
      "app.kubernetes.io/component": "walrus"
      "app.kubernetes.io/name": "walrus-server"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "walrus"
        "app.kubernetes.io/component": "walrus"
        "app.kubernetes.io/name": "walrus-server"
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                topologyKey: "kubernetes.io/hostname"
                labelSelector:
                  matchExpressions:
                    - key: "app.kubernetes.io/component"
                      operator: In
                      values:
                        - "walrus"
                    - key: "app.kubernetes.io/part-of"
                      operator: In
                      values:
                        - "walrus"
                    - key: "app.kubernetes.io/name"
                      operator: In
                      values:
                        - "walrus-server"
      restartPolicy: Always
      serviceAccountName: walrus
      containers:
        - name: walrus-server
          image: sealio/walrus:v0.5.1
          imagePullPolicy: Always
          resources:
            limits:
              cpu: '4'
              memory: '8Gi'
            requests:
              cpu: '500m'
              memory: '512Mi'
          env:
            - name: DB_DRIVER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_driver
            - name: DB_USER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_user
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_password
            - name: DB_NAME
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_name
            - name: SERVER_SETTING_LOCAL_ENVIRONMENT_MODE
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: local_environment_mode
            - name: SERVER_ENABLE_TLS
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: enable_tls
            - name: SERVER_DATA_SOURCE_ADDRESS
              value: $(DB_DRIVER)://$(DB_USER):$(DB_PASSWORD)@database:5432/$(DB_NAME)?sslmode=disable
            - name: SERVER_CASDOOR_SERVER
              value: http://identity-access-manager:8000
          ports:
            - name: http
              containerPort: 80
            - name: https
              containerPort: 443
          startupProbe:
            failureThreshold: 10
            periodSeconds: 5
            httpGet:
              port: 80
              path: /readyz
          readinessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 5
            httpGet:
              port: 80
              path: /readyz
          livenessProbe:
            failureThreshold: 10
            timeoutSeconds: 5
            periodSeconds: 10
            httpGet:
              httpHeaders:
                - name: "User-Agent"
                  value: ""
              port: 80
              path: /livez
          volumeMounts:
            - name: custom-tls
              mountPath: /etc/walrus/ssl
            - name: data
              mountPath: /var/run/walrus
      volumes:
        - name: custom-tls
          secret:
            secretName: walrus-custom-tls
            optional: true
        - name: data
          persistentVolumeClaim:
            claimName: walrus
```

使用上述 YAML 进行高可用部署后，Walrus 不会在 default 项目下创建出 local 环境，也不会把部署 Walrus 的 Kubernetes 集群作为 local Kubernetes 连接器使用。

如果希望高可用部署后，部署 Walrus 的 Kubernetes 集群作为 local Kubernetes 连接器使用，即允许 Walrus 对该集群进行管理，则需要做如下修改：

```diff
 apiVersion: v1
 kind: Secret
 metadata:
   namespace: walrus-system
   name: walrus
   labels:
     "app.kubernetes.io/part-of": "walrus"
     "app.kubernetes.io/component": "configuration"
 stringData:
-  local_environment_mode: "disabled"
+  local_environment_mode: "kubernetes"
   enable_tls: "false"
   db_driver: "postgres"
   db_user: "root"
   db_password: "Root123"
   db_name: "walrus"
```

``` diff
 apiVersion: rbac.authorization.k8s.io/v1
 kind: ClusterRoleBinding
 metadata:
   name: walrus
   labels:
     "app.kubernetes.io/part-of": "walrus"
     "app.kubernetes.io/component": "walrus"
 subjects:
   - kind: ServiceAccount
     name: walrus
     namespace: walrus-system
 roleRef:
   apiGroup: rbac.authorization.k8s.io
   kind: ClusterRole
-  name: walrus
+  name: cluster-admin
```

3. 应用YAML:
```shell
kubectl apply -f walrus.yaml
```

## 配置TLS

### 默认方式，使用 TLS 终止

[TLS 终止](https://en.wikipedia.org/wiki/TLS_termination_proxy)，通常由反向代理服务执行，即集群的 Ingress Service 提供TLS服务。

> 注意：
> - 反向代理服务到Walrus的链路中可使用HTTP请求，并且强化Walrus的会话Cookie`walrus_session`为`Secure: true`以避免中间人攻击。


### 使用系统（非公开受信）的自签证书

由于HTTPs服务证书（链）由非公开受信的CA（Walrus启动创建）签发，用户访问UI前需要在浏览器确认使用风险。

1. 使用 Kubectl Apply 添加NodePort类型的Service。

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "entrance"
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
  sessionAffinity: ClientIP
  type: NodePort
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https

EOF
```

2. 使用 Kubectl Patch 修改Secret里的TLS开关。

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. 使用 Kubectl Delete 删除Ingress。

```shell
kubectl -n walrus-system delete ingress walrus
```

4. 使用 Kubectl Rollout 重启 Walrus。

> 注意：
> - 变更访问方式后，需要在 "系统设置" 内调整 "服务器地址"。 

```shell
kubectl -n walrus-system rollout restart deployment/walrus
```

5. 由于缺少 Ingress 提供访问点，可以通过 kubectl 的 port-forward 能力进行访问。

```shell
sudo kubectl port-forward service/walrus 443:443
```

### 使用 [ACME](https://letsencrypt.org/docs/challenge-types) 挑战生成（公开受信）的证书

> 注意：
> - 如果集群可以通过 CertManager 在 Ingress Controller 的层面进行 ACME 挑战，请参考"使用TLS终止"。

通过 Let's Encrypt 服务来执行挑战，挑战成功后由 Let's Encrypt 颁发一个为期90天的 HTTPs 服务证书（链）。该证书（链）的续约工作，由 Walrus 自动完成。

> 前置条件：
> - 集群支持 LoadBalancer 类型的 Service。
> - 提供一个域名，例如，`walrus.mydomain.com`。

1. 使用 Kubectl Apply 添加LoadBalancer类型的Service。

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "entrance"
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
  sessionAffinity: ClientIP
  type: LoadBalancer
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https

EOF
```

2. 使用 Kubectl Get 指令等待LoadBalancer类型的Service获得一个Ingress IP。

```shell
until [[ -n $(kubectl -n walrus-system get service walrus --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}") ]]; do :; done && \
  kubectl get service walrus -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'

```

3. 在DNS配置面板上，添加上述 A Record 指向上面输出的 IP 地址。

4. 使用 Kubectl Patch 修改Secret里的TLS开关。

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

5. 使用 Kubectl Delete 删除Ingress。

```shell
kubectl -n walrus-system delete ingress walrus
```

6. 使用 Kubectl Patch 修改Walrus的环境变量，以应答ACME挑战。

> 注意：
> - 变更访问方式后，需要在 "系统设置" 内调整 "服务器地址"。 

```shell
export DNS_NAME=""; kubectl -n walrus-system patch deployment walrus --type json -p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_TLS_AUTO_CERT_DOMAINS\",\"value\":\"${DNS_NAME}\"}}]"
```

### 使用自定义的证书

自定义的证书是指，使用公开受信或非公开受信的CA证书，签发的HTTPs服务证书（链）。

> 前置条件：
> - 获取HTTPs服务私钥PEM文件的内容，记作PRIVATE_KEY_FILE_CONTENT。
> - 获取HTTPs服务证书（链）PEM文件的内容，记作CERT_FILE_CONTENT。
> - 如果有（非公开受信的）CA证书，获取对应PEM文件的内容，串联到CERT_FILE_CONTENT后。

1. 使用 Kubectl Apply 指令添加含有自定义证书内容的Secret。

```shell
export PRIVATE_KEY_FILE_CONTENT=""; export CERT_FILE_CONTENT=""; cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Secret
metadata:
  namespace: walrus-system
  name: walrus-custom-tls
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "configuration"
type: kubernetes.io/tls
stringData:
  "tls.crt": "\${CERT_FILE_CONTENT}"
  "tls.key": "\${PRIVATE_KEY_FILE_CONTENT}"

EOF
```

2. 使用 Kubectl Patch 修改Secret里的TLS开关。

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. 使用 Kubectl Delete 删除Ingress。

```shell
kubectl -n walrus-system delete ingress walrus
```

4. 使用 Kubectl Patch 修改Walrus的环境变量，以启用自定义的证书。

> 注意：
> - 变更访问方式后，需要在 "系统设置" 内调整 "服务器地址"。 

```shell
kubectl -n walrus-system patch deployment walrus --type json \
-p '[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_CERT_FILE","value":"/etc/walrus/ssl/tls.crt"}},{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_PRIVATE_KEY_FILE","value":"/etc/walrus/ssl/tls.key"}}]'
```

## 配置数据库

Walrus基于[PostgreSQL](https://www.postgresql.org/)关系型数据库实现数据存储。

默认情况下，Walrus会在运行容器内启动一个 PostgresSQL 的实例，这非常便捷且易于使用，但可能面临使用数据的丢失。为此，用户可以在启动Walrus时，提供外部的PostgreSQL源，以避免使用数据的丢失。

> 注意：
> - 以下指令通过重复添加重名环境变量覆盖前序的变量，可能收到一个来自Kubernetes的警告提示。

1. 使用 Kubectl Patch 修改IdentifyAccessManager的环境变量，以连接外部数据源。

```shell
# use add operation to override existing env.
export DB_SOURCE=""; kubectl -n walrus-system patch deployment identity-access-manager --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/initContainers/0/env/-\",\"value\":{\"name\":\"DB_SOURCE\",\"value\":\"${DB_SOURCE}\"}}]"
```

2. 使用 Kubectl Patch 修改Walrus的环境变量，以连接外部数据源。

```shell
# use add operation to override existing env.
export DB_SOURCE=""; kubectl -n walrus-system patch deployment walrus --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_DATA_SOURCE_ADDRESS\",\"value\":\"${DB_SOURCE}\"}}]"
```
