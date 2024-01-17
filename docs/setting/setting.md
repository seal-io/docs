---
sidebar_position: 2
---

# System Settings

The system supports the following settings:

- `Server`: Refers to the management configuration of the Walrus server, usually configurations of addresses, parameters, and tokens. To ensure system stability, users should aim to minimize modifications to these settings.
- `Deployment`: Refers to the management configuration for Walrus's resource deployment.
- `Task`: Refers to the execution configuration of Walrus's background tasks.

## Viewing the System Setting List

1. Click on `System` in the navigation bar.

![system-configuration](/img/v0.5.0/settings/ss-config.png)

## Server

- **Basic**
    - `Server Address`: The address for accessing Walrus server, usually filled in when logging into Walrus's UI for the first time.
    - `Participate in the Improvement Plan` Switch: Sends anonymous data to help Walrus improve product quality and service. You can participate in or opt out of the Improvement Plan according to your wishes.
- **Certificate**
    - `Skip certificate authentication`: Skip to verify the insecure certificate, which is usually used for loading [Catalog](./operation/catalog) or [Templates](./operation/templates) from private repository.
- **Resource Definition**
    - `Use built-in resource definition` Switch: Indicate to use the built-in [ResourceDefinition](./operation/resource-definition).
- **Template Catalog**
    - `Use built-in catalog` Switch: Indicate to use the built-in [Catalog](./operation/catalog), which is the [Walrus Catalog](https://github.com/walrus-catalog).
    - `Whether to synchronize the tempalte catalog data` Switch: Indicate to synchroinze the [Catalog](./operation/catalog) regularly.
- **Enhanced**
    - `OpenAI API Token`: The token required for calling the OpenAI API.

## Deployment

- **Basic**
    - `Deployer Image`: The container image used by Walrus for resource deployment, like [Terraform Deployer](https://github.com/seal-io/terraform-deployer), [OpenTofu Deployer](https://github.com/seal-io/opentofu-deployer), or other similar container images.
    - `Deployer Network Mirror URL`: The URL provided mirrors the Terraform/OpenTofu Providers, which effectively improve download speed and avoid version management anxiety. By default, Walrus batteries up [Hermit Crab](https://github.com/seal-io/hermitcrab) as a Provider Mirroring Service, you can simply copy the `https://walrus-mirror-hermitcrab.walrus-system/v1/providers/` here and paste it.
- **Proxy**
    - `HTTP_PROXY`: Provides a proxy address, proxying non-TLS HTTP outbound traffic. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
    - `HTTPS_PROXY`: Provides a proxy address, proxying TLS HTTP outbound traffic. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
    - `ALL_PROXY`: Provides a proxy address, proxying all outbound traffic. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
    - `NO_PROXY`: Does not proxy outbound traffic for matching domains and IPs. Separated by commas, supports CIDR and wildcard domain names, such as `10.0.0.0/8,*.example.com`. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.

## Task

- **Basic**
    - `Check Connector Status`: Regularly checks the connectivity of the connectors. By default, set to execute once every 5 minutes.
    - `Check Resource Component Status`: Regularly checks the resource component. By default, set to execute once every minute.
    - `Check Resource Dependency Status`: Regularly checks the resource dependency. By default, set to execute once every 30 seconds.
