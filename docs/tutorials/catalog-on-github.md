---
sidebar_position: 1
---

# Create a Catalog on GitHub

This tutorial explains how to create a template catalog on GitHub, use the catalog to sync templates, and create resource from the templates.

## Prerequisites

To follow this tutorial, you will need:
1. A GitHub organization account
2. [Walrus installed](/deploy/standalone)

## Create the Catalog
Refer to the [GitHub docs](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) for creating a GitHub organization.

### Create Template Repositories on GitHub

1. Log into GitHub, click `New repository` to create a new repository.
2. Give the repository a name like `my-template`.
3. Check the `add a README file` option.
4. Click `Create repository`.
  ![create-template](/img/v0.5.0/tutorials/catalog-on-github/create-template.png)
5. Follow [Terraform module tutorials](https://developer.hashicorp.com/terraform/tutorials/modules) and [Template extension](/operation/template#variable-style-extension) to create a template and commit it to the repository.
  ![template-update](/img/v0.5.0/tutorials/catalog-on-github/template-update.png)
  The created template repository contains a v0.0.1 tagged version with main.tf, variables.tf, outputs.tf and README.md files.
6. Create other template repositories like `my-rds` in the same way.

### Use the Catalog

1. Go to the `Catalog` tab under `Operations Hub`.
2. Click `Add Catalog` and fill in the name and source for the catalog, e.g. template-demo.
![create-catalog](/img/v0.5.0/tutorials/catalog-on-github/create-catalog.png)
3. The my-template and my-rds templates should be available after the import task is completed.
![catalog-list](/img/v0.5.0/tutorials/catalog-on-github/catalog-template.png)

### Create Resource with the templates

1. Go to `Application Management` and select a project and environment.（If you don't have a project and environment, refer to [Create an Environment](/application/environment)）
2. Click `New Resource`, check `Use Template`, then select a template from the catalog in previous step, here we choose `demo-catalog/kubernetes-containerservice`, fill in parameters and click `Create`.
3. Check the resource status until creation is complete.
![create-resource](/img/v0.5.0/tutorials/catalog-on-github/create-resource.png)
