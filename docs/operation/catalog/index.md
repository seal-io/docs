---
sidebar_position: 1
---

# Catalog

A catalog serves as a centralized registry for managing templates. It allows you to conveniently view, import, edit, and delete templates. Each catalog corresponds to an organization (or group) in version control providers such as GitHub, GitLab, and Gitee, containing multiple template repositories.

Walrus provides the following two levels of catalog:

- **Project Catalog**: A catalog applicable to a specific project, where templates in the project catalog can be used within the current project.
- **Global Catalog**: A catalog that can be applied to all projects, where templates in the global catalog can be used across all projects.

## View the Catalog

### Global Catalog

1. Click the `Operations` menu in the navigation bar and go to the `Catalogs` tab.
2. In the `Catalogs` tab, you can view the catalog list.

![list](/img/v0.5.0/operation/catalog/list-catalog-en.png)

### Project Catalog

1. Click the `Applications` menu in the navigation bar and go to a project's view.
2. Click the `Catalogs` tab to view the project catalog list.

![list](/img/v0.5.0/operation/catalog/list-project-catalog-en.png)

## Create Catalog

### Global Catalog

1. Click the `Operations` menu in the navigation bar and go to the `Catalogs` tab.
2. Click the `Add Catalog` button.
3. Enter the name, description, and source for the catalog. The source address is the address of an organization(or group) in the version control system, such as:
	- AWS: https://github.com/terraform-aws-modules
	- Azure: https://github.com/Azure-Terraform
	- Google: https://github.com/terraform-google-modules
4. Click the Save button.

![create](/img/v0.6.0/operation/catalog/create.png)

### Project Catalog

1. Click the `Applications` menu in the navigation bar and go to a project's view.
2. Click the `Catalogs` tab to view the project catalog list and click the `Add Catalog` button.
3. Enter the name, description, and source for the catalog. Walrus supports three version control provider types: GitHub, GitLab and Gitee. The source address is the address of an organization(or group) in the version control system, such as:
	- AWS: https://github.com/terraform-aws-modules
	- Azure: https://github.com/Azure-Terraform
	- Google: https://github.com/terraform-google-modules
4. Click the Save button.

![create](/img/v0.6.0/operation/catalog/create-project.png)

## Delete Catalog

You can delete a catalog. Deleting a catalog will remove all templates of that catalog in Walrus.

### Global Catalog

1. Click the `Operations` menu in the navigation bar and go to the `Catalogs` tab.
2. Select the catalog you want to delete.
3. Click the `Delete` button.

### Project Catalog

1. Click the `Applications` menu in the navigation bar and go to a project's view.
2. Click the `Catalogs` tab to view the project catalog list and select the catalog you want to delete.
3. Click the `Delete` button.

### Supported Version Control System Providers 

Walrus supports the following version control system providers for catalogs: GitHub, GitLab and Gitee.