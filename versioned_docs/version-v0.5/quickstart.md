# Quick Start

> Note:
>
> Walrus is alpha-quality software. It is under rapid development. Subsequent versions may introduce API changes that are not compatible.

## Install Walrus

> Prerequisites:
>
> - A Linux server with no less than 4 CPU cores, 8GiB memory.
> - At least 50GB of free disk space.
> - Docker installed, if not please refer to [the Docker official documentation](https://docs.docker.com/).
> - Server ports 80 and 443 are open.

Run the following command to start Walrus:

```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 -p 30000-30100:30000-30100 --name walrus sealio/walrus:v0.5.1
```

> Note:
>
> The port range `30000-30100` is used to expose the services deployed in the embedded K3S cluster,  allowing you to easily complete this quick start and make the applications accessible. In regular installations, there is no need to expose these ports.

For more detailed installation requirements, please refer to [installation](/deploy/standalone).

## Access UI

1. Access Walrus UI through `https://<server-address>`.

2. Log in to Walrus with the username `admin` and the initial administrator password, and set a new password and Walrus's access address as prompted by the UI.

> Run the following command on the server to get the initial administrator password.

```shell
sudo docker logs walrus 2>&1 | grep "Bootstrap Admin Password"
```

![qs-first-login](/img/v0.5.0/quickstart/qs-first-login-en.png)

3. After logging in, you can set a new password and configure the server address of Walrus.

![qs-set-pwd](/img/v0.5.0/quickstart/qs-set-pwd-en.png)

## Deploy Application

1. Click `Applications` in the navigation bar. You will enter the view of the `local` environment in the `default` project.

> Note:
> - Walrus provides a `local` environment under the `default` project for you to quickly experience the application deployment process. It connects to an embedded K3S cluster. You can opt out of the environment creation by changing Walrus configuration on bootstrap.
> - The embedded K3S cluster connector is only used for testing and is not recommended for production environments. If you need to deploy applications in a production environment, please refer to [HA setup guide](deploy/replication) or configure a Kubernetes cluster connector manually.

2. Click the `Import YAML` button to import a Walrus file.

![qs-create-res](/img/v0.5.0/quickstart/qs-create-res-en.png)

3. Select the `nginx` example from the **Walrus File Hub** on the right.

![qs-create-res-nginx](/img/v0.5.0/quickstart/qs-create-res-nginx-en.png)

4. Click the `Import` button to complete the creation of the resource.
5. After the resource deployment is complete, you can view components, logs, execute terminal commands, access the address of this nginx service, etc.

- Access the endpoint.

![qs-res-access](/img/v0.5.0/quickstart/qs-res-access-en.png)

- View deployment logs.

![qs-logs](/img/v0.5.0/quickstart/qs-logs-en.png)

- View component logs.

![qs-res-logs](/img/v0.5.0/quickstart/qs-res-logs-en.png)

- Access the terminal.

![qs-res-exec](/img/v0.5.0/quickstart/qs-res-exec-en.png)

Congratulations, you have deployed your first application using Walrus!
