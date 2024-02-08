---
sidebar_position: 4
---

# How to Create a Template

This tutorial explains how to create a Alibaba Cloud rds-mysql template and use it to create a resource of RDS instance(s) on Alibaba Cloud.

## Prerequisites

1. A GitHub Repository for storing the template.
2. [Walrus installed](/deploy/standalone).

## Create a repository on GitHub

1. Create a new repository on GitHub of your own.
 Here we use the repository [terraform-alicloud-rds-mysql](https://github.com/walrus-catalog/terraform-alicloud-rds-mysql)
2. Clone the repository to your local machine.

```bash
git clone git@github.com:walrus-catalog/terraform-alicloud-rds-mysql.git
```

## Create Template Files
1. Go to the cloned repository directory.

```bash
cd demo
```

Create files in the directory as follows:

```bash
- terraform-alicloud-rds-mysql
├── icon.svg
├── main.tf
├── modules
├── outputs.tf
├── schema.yaml
├── variables.tf
└── versions.tf
...
```

The `main.tf` file defines the resources to be created. Here we define resource for the template to create an Alibaba Cloud RDS instance.

```bash
locals {
  project_name     = coalesce(try(var.context["project"]["name"], null), "default")
  project_id       = coalesce(try(var.context["project"]["id"], null), "default_id")
  environment_name = coalesce(try(var.context["environment"]["name"], null), "test")
  environment_id   = coalesce(try(var.context["environment"]["id"], null), "test_id")
  resource_name    = coalesce(try(var.context["resource"]["name"], null), "example")
  resource_id      = coalesce(try(var.context["resource"]["id"], null), "example_id")

  namespace = join("-", [local.project_name, local.environment_name])

  tags = {
    "Name" = join("-", [local.namespace, local.resource_name])

    "walrus.seal.io/catalog-name"     = "terraform-alicloud-rds-mysql"
    "walrus.seal.io/project-id"       = local.project_id
    "walrus.seal.io/environment-id"   = local.environment_id
    "walrus.seal.io/resource-id"      = local.resource_id
    "walrus.seal.io/project-name"     = local.project_name
    "walrus.seal.io/environment-name" = local.environment_name
    "walrus.seal.io/resource-name"    = local.resource_name
  }

  architecture = coalesce(var.architecture, "standalone")
}
...
```

The `variables.tf` file defines the variables used in the template. Walrus will use the variables to generate the form for users to fill in.

```bash
variable "infrastructure" {
  ...
  type = object({
    vpc_id              = string
    kms_key_id          = optional(string)
    domain_suffix       = optional(string)
    publicly_accessible = optional(bool, false)
  })
}

#
# Deployment Fields
#

variable "architecture" {
  ...
  type        = string
  default     = "standalone"
  validation {
    condition     = var.architecture == "" || contains(["standalone", "replication"], var.architecture)
    error_message = "Invalid architecture"
  }
}

variable "replication_readonly_replicas" {
  ...
  type        = number
  default     = 1
  validation {
    condition     = var.replication_readonly_replicas == 0 || contains([1, 3, 5], var.replication_readonly_replicas)
    error_message = "Invalid number of read-only replicas"
  }
}
...
```

The `outputs.tf` file defines the outputs of the template which will be displayed to the user after the resource is created. The outputs of the template of a resource could also be referenced by other resourdes.


```bash
#
# Reference
#

output "connection" {
  description = "The connection, a string combined host and port, might be a comma separated string or a single string."
  value       = join(",", local.endpoints)
}

output "connection_readonly" {
  description = "The readonly connection, a string combined host and port, might be a comma separated string or a single string."
  value       = join(",", local.endpoints_readonly)
}

output "address" {
  description = "The address, a string only has host, might be a comma separated string or a single string."
  value       = join(",", local.hosts)
}

output "address_readonly" {
  description = "The readonly address, a string only has host, might be a comma separated string or a single string."
  value       = join(",", local.hosts_readonly)
}

output "port" {
  description = "The port of the resource."
  value       = local.port
}

```

The `README.md` file is the description of the template. It will be displayed to the user when creating a resource using this template. Here we can use the tool [terraform-docs](https://github.com/terraform-docs/terraform-docs) to generate the description of the template.

```markdown
terraform-docs markdown . > README.md
```

The generated `README.md` file is as follows:

```bash
# Alibaba ApsaraDB RDS for MySQL resource

Terraform module which deploys [MySQL](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql) resource on Alibaba Cloud.

- [x] Support standalone(one read-write HA instance) and replication(one read-write HA instance and multiple read-only instances, for read write splitting).

## Examples

- [Replication](./examples/replication)
- [Standalone](./examples/standalone)

## Contributing

Please read our [contributing guide](./docs/CONTRIBUTING.md) if you're interested in contributing to Walrus template.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0 |
| <a name="requirement_alicloud"></a> [alicloud](#requirement\_alicloud) | >= 1.212.0 |
| <a name="requirement_random"></a> [random](#requirement\_random) | >= 3.5.1 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_alicloud"></a> [alicloud](#provider\_alicloud) | >= 1.212.0 |
| <a name="provider_random"></a> [random](#provider\_random) | >= 3.5.1 |
...
```

## Commit and Tag Version

```bash
git add .
git commit -m "add template files"
git push -u origin main
```

Create a tag for the template version.

```bash
git tag v0.1.0
git push --tags
```

## Template UI Schema
Walrus will render the UI form according to the schema.yaml file. The schema.yaml file defines the form group and labels for the template variables. If the schema.yaml file is not provided, Walrus will generate the form group and labels according to the annotations in the template variables. You can follow the [customizing-template-ui-schema](/operation/template#customizing-template-ui-schema) to customize the form group and labels.

## Create a Template on Walrus

1. Open Walrus in your browser and log in.
2. Go to the `Template` tab under `Operations Hub` and create a template by using the template we just created, here we name the template `aliyun-rds`.
![create-template](/img/v0.5.0/tutorials/how-to-create-template/create-template.png)
After the import task is completed, the template will be displayed in the template list, we can see the template version is `v0.1.0`.
![template-version](/img/v0.5.0/tutorials/how-to-create-template/template-version.png)
3. Add Alibaba Cloud Provider in the `Connectors` tab under `Operations Hub`.
4. Add Connector to the Environment.
5. Create a resource using the template `aliyun-rds`, the form group and labels are generated according to the annotations in the template variables we defined.
![create-resource](/img/v0.5.0/tutorials/how-to-create-template/create-resource.png)

After the resource is created, we can see the details of the resource and the outputs of the template.
![resource-detail](/img/v0.5.0/tutorials/how-to-create-template/resource.png)
Check the RDS instance on Alibaba Cloud console, we can see the RDS instance is created successfully.
![ecs-rds](/img/v0.5.0/tutorials/how-to-create-template/rds.png)
