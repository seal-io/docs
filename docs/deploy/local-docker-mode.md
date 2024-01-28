---
sidebar_position: 4
---

# Local Docker Mode

Walrus can be deployed in local Docker mode. Using this mode, developers can deploy Walrus files on Docker locally on their PCs. This allows for consistent application specification, matching the one applied to a production Kubernetes environment. No need to run Kubernetes locally—just utilize Docker.

## Prerequisites

- Docker installed, if not please refer to [Docker's official documentation](https://docs.docker.com/) for how to set up Docker on your machine.
- (Optional and preferred) Docker Desktop installed with [Docker Extensions](https://docs.docker.com/desktop/extensions/) enabled.
- Walrus CLI installed, if not please refer to [CLI documentation](../cli) for how to install Walrus CLI.


## Install Local Walrus

Run the following command to install Walrus in local docker mode.

```shell
walrus local install
```

You should see the following output:

```shell
? Install Walrus docker extension to proceed [y/N] y
Installing...
Checking readiness...
Walrus CLI is configured.
```

## Deploy Resources

Now you can start deployments using Walrus CLI. For example, given the following `nginx` example from the [Walrus File Hub](https://github.com/seal-io/walrus-file-hub),

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
                  <h1>Welcome to Walrus!</h1>
                </html>
```

Run the following command to deploy the `nginx` example.

```shell
walrus apply -f nginx.yaml --wait
```

You should see the following output:

```shell
resource default/local/nginx created
resource default/local/nginx is in status: Deploying
resource default/local/nginx is in status: Preparing
resource default/local/nginx is in status: Ready
```

After that, you can list the resources to verify and get the service URL to access.

```shell
walrus resource list
```

You should see the following output:

```shell
 ID                   NAME    ENDPOINTS                                             TYPE               STATUS   CREATED
-------------------- ------- ----------------------------------------------------- ------------------ -------- -----------------------------
 498114759510458370   nginx   [{"name":"80:80/http","url":"http://localhost:80"}]   containerservice   Ready    2024-01-01T00:00:00.000000Z
```

## Uninstall Local Walrus

Run the following command to uninstall Walrus in local docker mode.

```shell
walrus local uninstall
```