---
sidebar_position: 1
---

# Catalog

The catalog is a collection of templates. You can view, import, edit, and delete templates in the catalog.

## View the Catalog

### Global Catalog

1. Click the `Operations Hub` menu in the navigation bar and go to the `Catalog` tab.
2. In the `Catalog` tab, you can view the catalogs in the catalog list.
3. You can search for templates in the catalog using the Search box.

![list](/img/v0.4.0/catalog/list-en.png)

### Project Catalog

1. Click the `Application Management` menu in the navigation bar and select the corresponding project.
2. Click the `Catalog` tab to view the project catalog list.
3. You can search for templates in the catalog using the Search box.

![list](/img/v0.4.0/catalog/list-project-en.png)

## Create a Catalog

### Global Catalog

1. Click the `Operations Hub` menu in the navigation bar and go to the `Catalog` tab.
2. Click the `Add` button.
3. Enter the name, description, and source for the catalog. The source address is the address of a Github organization, such as:
	- AWS: https://github.com/terraform-aws-modules
	- Azure: https://github.com/Azure-Terraform
	- Google: https://github.com/terraform-google-modules
4. Click the Save button.

![create](/img/v0.4.0/catalog/create-en.png)

### Project Catalog

1. Click the `Application Management` menu in the navigation bar and select the corresponding project.
2. Click the `Catalog` tab to view the project catalog list and click the `Add` button.
3. Enter the name, description, and source for the catalog. The source address is the address of a Github organization, such as:
	- AWS: https://github.com/terraform-aws-modules
	- Azure: https://github.com/Azure-Terraform
	- Google: https://github.com/terraform-google-modules
4. Click the Save button.

![create](/img/v0.4.0/catalog/create-project-en.png)

> Walrus supports Github organizations containing Terraform module repositories. You can import all templates under that organization into the catalog.

![create-result](/img/v0.4.0/catalog/create-result-en.png)

## Delete a Catalog

You can delete a catalog. Deleting a catalog will delete all templates under that catalog.

### Global Catalog

1. Click the `Operations Hub` menu in the navigation bar and go to the `Catalog` tab.
2. Select the catalog you want to delete.
3. Click the `Delete` button.

### Project Catalog

1. Click the `Application Management` menu in the navigation bar and select the corresponding project.
2. Click the `Catalog` tab to view the project catalog list and select the catalog you want to delete.
3. Click the `Delete` button.
