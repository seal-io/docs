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
        + During initial startup, it can be configured through the `SERVER_SETTING_SERVE_URL="https://ip_or_dns.access.walrus"` environment variable.
    - `Participate in the Improvement Plan` Switch: Sends anonymous data to help Walrus improve product quality and service. You can participate in or opt out of the Improvement Plan according to your wishes.
        + During initial startup, it can be configured through the `SERVER_SETTING_ENBALE_TELEMETRY=true|false` environment variable.
- **Certificate**
    - `Skip certificate authentication`: Skip to verify the insecure certificate, which is usually used for loading [Catalog](./operation/catalog) or [Templates](./operation/templates) from private repository.
        + During initial startup, it can be configured through the `SERVER_SETTING_SKIP_REMOTE_TLS_VERIFY=true|false` environment variable.
- **Template Catalog**
    - `Use built-in catalog` Switch: Indicate to use the built-in [Catalog](./operation/catalog), which is the [Walrus Catalog](https://github.com/walrus-catalog). When enabled, the built-in [Resource Definitions](./operation/resource-definition) will be created.
        + During initial startup, it can be configured through the `SERVER_SETTING_ENABLE_BUILTIN_CATALOG=true|false` environment variable.
    - `Whether to synchronize the tempalte catalog data` Switch: Indicate to synchroinze the [Catalog](./operation/catalog) regularly.
        + During initial startup, it can be configured through the `SERVER_SETTING_ENABLE_SYNC_CATALOG=true|false` environment variable.
- **Enhanced**
    - `OpenAI API Token`: The token required for calling the OpenAI API.
        + During initial startup, it can be configured through the `SERVER_SETTING_OPEN_AI_API_TOKEN="your openai api token"` environment variable.

## Deployment

- **Basic**
    - `Deployer Image`: The container image used by Walrus for resource deployment, like [Terraform Deployer](https://github.com/seal-io/terraform-deployer), [OpenTofu Deployer](https://github.com/seal-io/opentofu-deployer), or other similar container images.
        + During initial startup, it can be configured through the `SERVER_SETTING_DEPLOYER_IMAGE="your deployer docker image"` environment variable.
    - `Deployer Network Mirror URL`: The URL provided mirrors the Terraform/OpenTofu Providers, which effectively improve download speed and avoid version management anxiety. By default, Walrus batteries up [Hermit Crab](https://github.com/seal-io/hermitcrab) as a Provider Mirroring Service, you can simply copy the `https://walrus-mirror-hermitcrab.walrus-system/v1/providers/` from here and paste it.
        + During initial startup, it can be configured through the `SERVER_SETTING_DEPLOYER_NETWORK_MIRROR_URL="https://ip_or_dns.access.terraform_provider.network_mirror"` environment variable.
- **Proxy**
    - `HTTP_PROXY`: Provides a proxy address, proxying non-TLS HTTP outbound traffic. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
        + During initial startup, it can be configured through the `HTTP_PROXY="http_url_1,http_url_2"` environment variable.
    - `HTTPS_PROXY`: Provides a proxy address, proxying TLS HTTP outbound traffic. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
        + During initial startup, it can be configured through the `HTTPS_PROXY="https_url_1,https_url_2"` environment variable.
    - `ALL_PROXY`: Provides a proxy address, proxying all outbound traffic. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
        + During initial startup, it can be configured through the `ALL_PROXY="socks5_url_1,socks5_url_2"` environment variable.
    - `NO_PROXY`: Does not proxy outbound traffic for matching domains and IPs. Separated by commas, supports CIDR and wildcard domain names, such as `10.0.0.0/8,*.example.com`. It applies to the resource deployment execution environment, defaults to the same configuration as the Walrus server.
        + During initial startup, it can be configured through the `NO_PROXY="ip_cidr,wlidcare_dns"` environment variable.

## Task

- **Basic**
    - `Check Connector Status`: Regularly checks the connectivity of the connectors. By default, set to execute once every 5 minutes.
        + During initial startup, it can be configured through the `SERVER_SETTING_CONNECTOR_STATUS_SYNC_CRON_EXPR="0 */5 * ? * *"` environment variable.
    - `Check Resource Component Status`: Regularly checks the resource component. By default, set to execute once every minute.
        + During initial startup, it can be configured through the `SERVER_SETTING_RESOURCE_COMPONENT_STATUS_SYNC_CRON_EXPR="0 */1 * ? * *"` environment variable.
    - `Check Resource Dependency Status`: Regularly checks the resource dependency. By default, set to execute once every 30 seconds.
        + During initial startup, it can be configured through the `SERVER_SETTING_RESOURCE_RELATIONSHIP_CHECK_CRON_EXPR="*/30 * * ? * *"` environment variable.

## * Implicit Configurable Initial Items

Some settings aren't exposed in the UI, called implicit settings. The primary reason why not open implicit settings is that changing these settings may cause some system functions to be abnormal. But, in some scenarios, you need to configure these settings at the initial startup to make Walrus work as expected.

It's recommended to modify these settings after communicating and contact with us.

- `SERVER_SETTING_WORKFLOW_STEP_SERVICE_IMAGE="sealio/curl-jq:v0.0.1"`: Indicate the image used by workflow step service.
- `SERVER_SETTING_SERVE_UI_INDEX="file:///var/lib/walrus/ui"`: Indicate the UI indexing from where.
- `SERVER_SETTING_IMAGE_REGISTRY="docker.io"`: Indicate the image registry.
- `SERVER_SETTING_LOCAL_ENVIRONMENT_MODE="kubernetes"`: Indicate the mode for setting up a local environment in the default project.
- `SERVER_SETTING_WALRUS_FILE_HUB_URL="https://github.com/seal-io/walrus-file-hub"`: Indicate the URL to download Walrus files.
- `SERVER_SETTING_RESOURCE_COMPONENTS_DISCOVER_CRON_EXPR="0 */1 * ? * *"`: Indicate to execute the task of discovering resource components every 1 minute.
