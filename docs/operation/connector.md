---
sidebar_position: 3
---

# Connectors

Walrus offers connectors on the following two levels:

- **Project Connectors**: Applied to a specific project
- **Global Connectors**: Can be applied to all projects
## View Connector List

### Global Connector List

1. Click on `Operations` in the left-hand sidebar.
2. Click on the `Connectors` tab to view the connectors list.

![connector-list](/img/v0.5.0/operation/connector/op-conn-list-en.png)

### Project Connector List

1. Click on `Applications` in the left-hand sidebar and select the appropriate project.
2. Click on the `Connectors` tab to view the connectors list.

![project-connector-list](/img/v0.5.0/operation/connector/app-proj-conn-list-en.png)

## Viewing Connector Details

1. Click on `Operations` in the left-hand sidebar.
2. Click on the `Connectors` tab to view the connectors list.
3. Find the connector you need to view and click on its name to enter the connector's detail page.

## Create Connector

> Note:
> Since v0.4.0, connector creation needs choose `Applicable Environment Type`, please check [Environment Type](/application/environment#environment-type) for more details.

### Create a Kubernetes Connector

1. Click on `New Connector` in the connectors list and select `Kubernetes`.

![connector-create](/img/v0.5.0/operation/connector/op-add-connector-en.png)

2. Choose `Applicable Environment Type`.
3. Fill out the form and click `Save`.

![connector-create-k8s](/img/v0.5.0/operation/connector/op-conn-create-k8s-en.png)

### Creating a Cloud Provider Connector

1. Click on `New Connector` in the connectors list and select `Cloud Provider`.
2. Choose `Applicable Environment Type`.
3. Fill out the form and click `Save`.

![connector-create-cloud](/img/v0.5.0/operation/connector/op-conn-create-cloud-en.png)

### Creating a Version Control Connector

1. Click on `New Connector` in the connectors list and select `Version Control`.
2. Choose `Applicable Environment Type`.
3. Fill in the form. The provided access token should have the permission to operate the repositories.
4. Click `Save`.

![connector-create-vcs](/img/v0.5.0/operation/connector/op-conn-create-vcs-en.png)

### Creating a Custom Connector

1. Click on `New Connector` in the connectors list and select `Custom`.
2. Choose `Applicable Environment Type`.
3. Fill in the type, which  is the type of third-party platform Terraform Provider, for example: aws, alicloud, etc.
4. Add properties. For example, if the provider is [Artifactory](https://registry.terraform.io/providers/jfrog/artifactory/latest/docs), you need to fill in `url` and `access_token`.

```
provider "artifactory" {
  url           = "${var.artifactory_url}"
  access_token  = "${var.artifactory_access_token}"
}
```

![connector-create-custom](/img/v0.5.0/operation/connector/op-conn-create-custom-en.png)
## Deleting a Connector


1. Click on `Operations` in the left-hand sidebar.
2. Click on the `Connectors` tab to view the connectors list.
3. Find the connector you need to delete.
4. Ensure that no environment depends on this connector before selecting the connector you want to delete, then click the `Delete` button.
5. Click the `Confirm` button to complete the deletion.

![connector-delete](/img/v0.5.0/operation/connector/op-conn-del-en.png)

## Usage

1. Once the connector is successfully created.
2. Add the corresponding connectors in the `Projects` -> `Environment` details.
3. In the `Resources` of environment details, a new resource can use the connector.

> Note:
> - Only administrators/platform engineers have the permission to create global connectors.
> - The scope of project connectors is restricted to the current project. They can only be added to environments created by the current project and cannot be used by other projects.
> - The scope of global connectors applied to all projects. They can be added to any project environment. If you need to restrict the scope, please use project connectors.
