---
sidebar_position: 1
---

# Resource Definitions

## Concepts

Resource Definition is used to declare a new type of resource, describing the name, type, matching rules, as well as administrator configurations and UI styles used under specific conditions. This enables Walrus to effectively understand and manage the lifecycle of this type of resource, which is the core for building multi-cloud applications and simplifying deployment configurations.

![definition-explain](/img/v0.6.0/operation/definition/definition-explain.png)

Analogous to the concept of multi-architecture in containers, which allows different architecture image manifests to be included in the same image, enabling automatic selection of the appropriate image based on the actual environment when fetching images, allowing containers to seamlessly switch between different hardware.
Walrus Resource Definitions are like manifests in the deployment process, containing configurations with different rules, and automatically selecting the appropriate template based on the environment during deployment.

![definition-explain2](/img/v0.6.0/operation/definition/definition-explain2.png)

A resource definition consists of four parts: template, matching rules, administrator configurations, and UI styles.

### Template

Resource definitions support the use of both built-in templates provided by Walrus and imported templates. 

### Matching Rules

The matching rules of a resource definition define matching conditions through selectors, as well as the templates and predefined configurations used when deploying resources of this type.

#### Selectors

A single matching rule can include multiple selectors. These selectors are based on equality, and their combination functions through a logical AND operation. A resource aligns with a matching rule if it meets all of the rule's selectors, leading to the application of the associated template and configuration during deployment.

For instance, a matching rule with selectors `Project Name=foo` and `Environment Name=dev` matches a resource in
the `foo` project's `dev` environment, whereas it doesn't match a resource in the `test` environment.

![definition-selector](/img/v0.5.0/operation/definition/op-definition-selector-en.png)

#### Rule Precedence

Matching rules are not required to be exclusive. That is, multiple rules can match a single resource.
In such scenarios, the rule with the highest priority is used. Priority is determined by the score of the selectors matched in the rule, with a higher score leading to a higher precedence. Selector scores are as follows:

| Condition Type | Environment Type | Project Label | Project Name | Environment Label | Environment Name | Resource Label |
| -------------- | ---------------- | ----------- | ------------ | --------------- | ---------------- | ------------ |
| Match Score    | 1                | 2           | 4            | 8               | 16               | 32           |

### Predefined Template Configurations

Template configurations within each matching rule are applied during the deployment of
a resource following that rule. By adding predefined configurations under matching rules, admin can be provided with best practices to simplify deployment configurations.

### Input/Output and UI Schema

The input variables and output of a resource definition are automatically generated from all templates included in its matching rules.

For example, consider a resource definition that uses Templates A and B in its matching rules.

- Template A includes inputs `image` and `size`, and outputs `endpoint` and `status`.
- Template B includes inputs `image` and `region`, and outputs `endpoint` and `create_time`.

Consequently, the resource definition's schema will include the input `image` and the output `endpoint`.

The UI schema of a resource definition is automatically generated based on input variables, supporting customizable user interface styles to shield complexity.

## Managing Resource Definitions

### Viewing the Resource Definition List

1. Click on `Operations` in the left-hand sidebar.
2. Select the `Resource Definitions` tab to view the list of resource definitions.

![definition-list](/img/v0.5.0/operation/definition/op-definition-list-en.png)

### Viewing Resource Definition Details

1. Navigate to `Operations` -> `Resource Definitions` in the left-hand sidebar to access the list of resource definitions.
2. Locate the resource definition you wish to view and click on its name to open its detailed page.
3. On the resource definition details page, you can view detailed information about the resource definition, including its matching rules, inputs and outputs, UI schema, and the list of resources created using this resource definition.
4. In the list of created resources, you can manage resources by starting, stopping, deploying, deleting, etc. The list supports filtering by project name and matching rules.

![definition-detail](/img/v0.5.0/operation/definition/op-definition-detail-en.png)

### Creating a Resource Definition

1. Select `New Resource Definition` in the list of resource definitions.
2. Complete the form. `Name` serves as the identifier of the resource definition and must be unique within the system. `Type` represents the type of resource, and multiple resource definitions can exist under the same `Type`. `Matching Rules` specifies how resources of this type align with templates under certain conditions. For more information, see [Resource Definition Matching Rules](#resource-definition-matching-rules).
3. Click `Save` to finalize the creation.

![definition-create](/img/v0.5.0/operation/definition/op-definition-create-en.png)

### Deleting a Resource Definition

1. Go to `Operations` -> `Resource Definitions` in the left-hand sidebar to view the list of resource definitions.
2. Identify the resource definition you intend to delete.
3. Before selecting the resource definition for deletion, ensure no existing resources depend on it. Then, click the `Delete` button.
4. Confirm the deletion by clicking the `Confirm` button.

![definition-delete](/img/v0.5.0/operation/definition/op-definition-del-en.png)

### Customizing the UI Schema of a Resource Definition

You can customize the UI schema of a resource definition. This is especially useful when you want to simplify or modify the configurations
available to users for resources of that type.

1. Access `Operations` -> `Resource Definitions` in the left-hand sidebar to view the list of resource definitions.
2. Locate the desired resource definition and click on its name to view its details.
3. Select the `UI Schema` tab.
4. Click on the ellipsis (`...`) button in the top-right corner and select `Edit`.
5. Modify the schema in the UI editor as needed. You can toggle between editing and preview modes by clicking `Preview` or `Schema`.
6. Save your changes by clicking `Save`.

![definition-ui-schema](/img/v0.5.0/operation/definition/op-definition-ui-schema-en.png)
