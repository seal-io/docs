---
sidebar_position: 4
---

# Resource Definitions

A resource definition specifies a new type of resource, detailing its name, type, matching rules, and schema for deployment
and usage under certain conditions. This enables Walrus to understand and manage the lifecycle of this resource type effectively.

## Viewing the Resource Definition List

1. Click on `Operation Hub` in the left-hand sidebar.
2. Select the `Resource Definitions` tab to view the list of resource definitions.

![connector-list](/img/v0.4.0/operation/definition/op-definition-list-en.png)

## Viewing Resource Definition Details

1. Navigate to `Operation Hub` -> `Resource Definitions` in the left-hand sidebar to access the list of resource definitions.
2. Locate the resource definition you wish to view and click on its name to open its detailed page.

## Creating a Resource Definition

1. Select `New Resource Definition` in the list of resource definitions.
2. Complete the form. `Name` serves as the identifier of the resource definition, while `Type` denotes the resource's type. Both `Name` and
   `Type` must be unique within the system. `Matching Rules` specify how resources of this type align with templates under
   certain conditions. For more information, refer to [Resource Definition Matching Rules](#resource-definition-matching-rules).
3. Click `Save` to finalize the creation.

![connector-create-k8s](/img/v0.4.0/operation/definition/op-definition-create-en.png)

## Deleting a Resource Definition

1. Go to `Operation Hub` -> `Resource Definitions` in the left-hand sidebar to view the list of resource definitions.
2. Identify the resource definition you intend to delete.
3. Before selecting the resource definition for deletion, ensure no existing resources depend on it. Then, click the `Delete` button.
4. Confirm the deletion by clicking the `Confirm` button.

![connector-delete](/img/v0.4.0/operation/definition/op-definition-del-en.png)

## Resource Definition Matching Rules

The matching rules for resource definitions dictate the template and configuration used when deploying that type of
resource.

### Selectors

A single matching rule can include multiple selectors. These selectors are based on equality, and their combination functions through a logical AND operation. A resource aligns with a matching rule if it meets all of the rule's selectors, leading to the application of the associated template and configuration during deployment.

For instance, a matching rule with selectors `Project Name=foo` and `Environment Name=dev` matches a resource in
the `foo` project's `dev` environment, whereas it doesn't match a resource in the `test` environment.

### Rule Precedence

Matching rules are not required to be exclusive. That is, multiple rules can match a single resource.
In such scenarios, the first matched rule is selected based on the order of the matching rules in the resource definition.

### Template Configuration

Template configurations within each matching rule are applied during the deployment of
a resource following that rule. If a configuration is outlined in the resource definition schema and set by users in resource
attributes,

## Resource Definition Schema

The schema (input variables and outputs) of a resource definition is generated automatically from the combined
schema of all templates included in its matching rules.

For example, consider a resource definition that uses Templates A and B in its matching rules.

- Template A includes inputs `image` and `size`, and outputs `endpoint` and `status`.
- Template B includes inputs `image` and `region`, and outputs `endpoint` and `create_time`.

Consequently, the resource definition's schema will include the input `image` and the output `endpoint`.

### Customizing the UI Schema of a Resource Definition

You can customize the UI schema of a resource definition. This is especially useful when you want to simplify or modify the configurations
available to users for resources of that type.

1. Access `Operation Hub` -> `Resource Definitions` in the left-hand sidebar to view the list of resource definitions.
2. Locate the desired resource definition and click on its name to view its details.
3. Select the `UI Schema` tab.
4. Click on the ellipsis (`...`) button in the top-right corner and select `Edit`.
5. Modify the schema in the UI editor as needed. You can toggle between editing and preview modes by clicking `Preview` or `Schema`.
6. Save your changes by clicking `Save`.
