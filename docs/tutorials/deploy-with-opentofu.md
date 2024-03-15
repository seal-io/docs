---
sidebar_position: 6
---

# Deploy with OpenTofu

This tutorial demonstrates how to deploy a resource using Walrus with [OpenTofu](https://opentofu.org/manifesto/).

## Why using OpenTofu?

Since v1.6.0, Hashicorp [switched Terraform license from MPL to BUSL](https://github.com/hashicorp/terraform/pull/33678), OpenTofu forked from MPL-licensed Terraform at August 25, 2023 and maintains in the Linux Foundation to keep open source.

In short, OpenTofu is a painless replacement of Terraform.

## Switch OpenTofu

By default, Walrus uses the latest MPL-licensed Terraform version, that is v1.5.7, to complete the resource deployment. To reduce the Terraform Provider downloading time-cost during each deployment, we adopt a container image modified from the original [Hashicorp/Terraform image](https://hub.docker.com/r/hashicorp/terraform), which contains some commonly used and required Terraform Providers. If you are interested in this, you can browse [seal-io/terraform-deployer](https://github.com/seal-io/terraform-deployer) for more information.

Let's back to how to switch OpenTofu. Assume that you have already walked through our [Quick Start](../quickstart), now you can navigate to the `System Settings` and select the `Deployment` tab as below.

![list-setting](/img/v0.5.0/tutorials/deploy-with-opentofu/list-setting.png)

You can replace the `Deployer Image` to our [OpenTofu Deployer](https://hub.docker.com/r/sealio/opentofu-deployer/tags), for example, input `sealio/opentofu-deployer:v1.6.0-seal.1`, the first GA OpenTofu release.

![configure-deployer](/img/v0.5.0/tutorials/deploy-with-opentofu/configure-deployer.png)

## Deploy Resource

Now, you can go back to the local Environment under the default Project, and enjoy the OpenTofu.

You can select a Resource and execute (re)Deploy as shown.

![redeploy](/img/v0.5.0/tutorials/deploy-with-opentofu/redeploy.png)

Let's take a look at the deployment logs.

![view-logs](/img/v0.5.0/tutorials/deploy-with-opentofu/view-logs.png)

### Build Specific OpenTofu Version

If you need to use a specific version of OpenTofu, you can build your specific version of OpenTofu Deployer following this [Dockerfile](https://github.com/seal-io/opentofu-deployer/blob/main/Dockerfile).

## How to Avoid Version Management Anxiety?

As we mentioned above, the default OpenTofu Deployer is same as Terraform Deployer, which embeds some commonly used and required Terraform Providers in it. These batteries help Walrus finish the deployment quickly.

But everything has two sides, the implied mirroring Providers are version locking. This means that if the local version cannot match a certain version (range maybe) requirement, we will get an error from OpenTofu.

For this reason, Walrus provides a `Deployer Network Mirror URL` [Setting](../settings) to allow you to configure mirroring Terraform/OpenTofu Providers from a nearby service through networking.

![configure-network-mirror](/img/v0.5.0/tutorials/deploy-with-opentofu/configure-network-mirror.png)

### Try Hermit Crab

Defaultly, Walrus batteries up a Provider Mirroring Service, named [Hermit Crab](https://github.com/seal-io/hermitcrab), you can simply copy the `https://walrus-mirror-hermitcrab.walrus-system/v1/providers/` from here and paste it.

With Hermit Crab, it will be a little slower to download the new version package, but you will get the same efficiency as implied mirroring later, and there is no need to worry about version changes.

Finally, welcome to OpenTofu, a more positive community.
