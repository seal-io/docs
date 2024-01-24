# Quick Start

> Note:
>
> Walrus is alpha-quality software. It is under rapid development. Subsequent versions may introduce API changes that are not compatible.

## Deployment

> Prerequisites:
>
> - A Linux server with no less than 4 CPU cores, 8GiB memory.
> - At least 50GB of free disk space.
> - Docker installed, if not please refer to [the Docker official documentation](https://docs.docker.com/).
> - Server ports 80 and 443 are open.

Execute the following command to start the Walrus service:

```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 -p 30000-30100:30000-30100 --name walrus sealio/walrus:{{ VERSION }}
```

> Note:
>
> The port range `30000-30100` is used to expose the service of the application deployed in the local K3s environment. If you do not need to deploy applications in the local K3s environment, you can remove this port range.

For more detailed installation requirements, please refer to [installation](/deploy/standalone).

## Access UI

1. Access Walrus UI through `https://<server-address>`.

2. Login to Walrus with the username `admin` and the initial administrator password, and set a new password and Walrus's access address as prompted by the UI.

> Run the following command on the server to get the initial administrator password.

```shell
sudo docker logs walrus 2>&1 | grep "Bootstrap Admin Password"
```

![qs-first-login](/img/v0.5.0/quickstart/qs-first-login-en.png)

3. After logging in, you can set a new password and configure the access address of Walrus.

![qs-set-pwd](/img/v0.5.0/quickstart/qs-set-pwd-en.png)

## Local Environment

Walrus provides a default `local` environment under the `default` project for you to quickly experience the application deployment process.

![qs-local-env](/img/v0.5.0/quickstart/qs-local-env-en.png)

The `local` environment connects to a local Kubernetes cluster connector created by built-in K3s. You can use it to deploy applications without having to configure a Kubernetes cluster.

> Note:
>
> The embedded K3s cluster connector is only used for testing and is not recommended for production environments. If you need to deploy applications in a production environment, please refer to [HA setup guide](deploy/replication) or configure a Kubernetes cluster connector manually.

![qs-local-connector](/img/v0.5.0/quickstart/qs-local-connector-en.png)

## Deploy Resources

1. In the environment list page, click the `local` environment to enter the environment view.

![qs-env-list](/img/v0.5.0/quickstart/qs-env-list-en.png)

2. Click the `Import YAML` button to import the built-in Walrus File resource.

![qs-create-res](/img/v0.5.0/quickstart/qs-create-res-en.png)

3. Select the `nginx` example from the Walrus File Hub on the right.

![qs-create-res-nginx](/img/v0.5.0/quickstart/qs-create-res-nginx-en.png)

4. Click the `Import` button to complete the creation of the resource.
5. After the resource deployment is complete, you can view components, logs, execute terminal commands, access the address of this nginx service, etc.

- Access the endpoint.

![qs-res-access](/img/v0.5.0/quickstart/qs-res-access-en.png)

- View deployment logs.

![qs-logs](/img/v0.5.0/quickstart/qs-logs-en.png)

- View component logs.

![qs-res-logs](/img/v0.5.0/quickstart/qs-res-logs-en.png)

- Open terminal.

![qs-res-exec](/img/v0.5.0/quickstart/qs-res-exec-en.png)

Congratulations, you have deployed your first application using Walrus!
