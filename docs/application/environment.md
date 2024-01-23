---
sidebar_position: 2
---

# Environment

> Note:
> Since v0.4.0, environment introduces `Environment Type` to enhance management.

An environment is the target of resource deployment. A project may contain multiple environments.

## Environment Type

> Note:
> Custom environment type is not supported at present.

Before v0.4.0, the isolation between different environments is not guaranteed, which means we will run into the below problems.

- A production-purpose [Connector](/operation/connector) can be referenced by an environment intended for testing.
- A common developer can deploy a resource into production-purpose environment.

Starting with v0.4.0, each environment declares its purpose by its **type**, thus preventing that [User](/users/user) without the ability to operate (write) on that `Environment Type` from operating the environment. It is worth noting that [Connector](/operation/connector) also needs to declare what `Environment Type` it applies to.

The system has 3 built-in environment types, which are **Development**, **Staging** and **Production**.

- **Development** and **Staging** environments can be operated by any [User](/users/user).
- **Production** environment can only be operated by **Manager** and **Administrator**, **General User** stays in read-only.

By using environment types, we can get the following isolation features.

- The environment can only reference the same type of [Connector](/operation/connector).
- The project [members](/application/project#member-management) can only operate the environments of the type that their roles can operate, otherwise, they will be treated as project [Viewer](/application/project#add-members).

## View the Environment List

1. Click `Application Management` on the left navigation bar. By default, the first project view will be displayed. The project can be switched via the top-level breadcrumb.
2. The environment list under this project can be viewed in the Environment tab.
3. You can enter keywords in the search bar of the environment list page to quickly search for related environments.

## Create an Environment

1. Access the list page through the action of viewing the environment list.
2. Click `New Environment`, enter the `name` to identify your environment. The environment name should be unique, so you can easily find it in the environment list.

![qs-create-env](/img/v0.4.0/quickstart/qs-create-env-en.png)

3. Add `Environment tags` and `Environment description` based on the actual environment.
4. Choose proper `Environment type`.
5. Add a connector, click `Add Connector`, select the connector used in the environment, and finally click the `Confirm` button.
6. Click the `Save` button to save the environment configuration, and then you can use this environment in Application Management.

![qs-create-env2](/img/v0.4.0/quickstart/qs-create-env2-en.png)

## Edit Environment

1. Access the list page through the action of viewing the environment list.
2. Select the environment that you need to edit and click the Edit button.
3. Modify the environment configuration as needed, and add or delete connectors.
4. Click the `Save` button to save the environment configuration.

![app-env-edit](/img/v0.4.0/application/environment/app-env-edit-en.png)

## Manage Resources

Within the environment, you can manage the resources, including adding resources, deleting resources, and modifying resource configurations.
1. Click `Application Management` in the navigation bar, switch to the corresponding project, and select the environment that needs to be managed.
2. View the list of resources in the environment under the "Resources" tab.
3. Click `New Resource`, select the resources that needs to be added, fill in the corresponding information, and click the `Save` button to complete the addition of resources.
4. Click the `Delete` operation in the resource list to delete resources in the environment.

For more details on resource management, please refer to [Resources](/application/resource).

## Dependency Graph

Different resources within an environment may depend on each other. The dependencies between resources can be viewed through the dependency graph. The dependency graph shows all resources and their resources. You can perform operations on resources by clicking the top-right corner of the resource icon. For example, you can view logs or execute terminals on container resources.

For more detailed information on dependency graphs, please refer to [Dependency Graph](/application/graph).

![app-env-graph](/img/v0.4.0/application/environment/app-env-graph-en.png)

![app-env-graph-res](/img/v0.4.0/application/environment/app-env-graph-res-en.png)

## Environment Variables

Environment variables are key-value pairs stored in the environment and can be referenced in the resources in the environment. Environment variables are used when creating or editing deployment resources and when using related parameters in the configuration module. The variables in the current environment can only be used in the current environment, and the variables in different environments are independent of each other.
> If a variable with the same name exists in the project or globally, the variable value defined in the environment will override the project or global variable value.

![app/env-var](/img/v0.4.0/application/environment/app-env-var-en.png)

Usage: You can enter ${var.Environment Variable Name} in any input fields that need to use the variable when creating a resource.

For more detailed information on variables, please refer to [Variables](/operation/variable).

## Clone Environment

In some cases, you may need to create an environment that is identical to an existing one, in which case you can use the Clone Environment feature. Cloning an environment allows you to quickly create a new environment based on the configuration and resources of the existing one.
1. Click `Application Management` -> `Environment` on the navigation bar to enter the environment list.
2. In the environment list, select the environment that needs to be cloned and click `Clone`.

![app-env-clone](/img/v0.4.0/application/environment/app-env-clone-en.png)

3. Configure the name, description, tags, etc., of the cloned environment, and select connectors.
4. If needed, modify the configuration of resources in the cloned environment. Click to select the resource, modify the resource configuration in the pop-up window, click `Confirm` to save the alteration, and then click `Save` to complete the cloning of the environment.

![app-env-clone-details](/img/v0.4.0/application/environment/app-env-clone-details-en.png)

5. Once the environment cloning is complete, you can use the newly cloned environment in the 'Application Management'. Resources in the original environment will be cloned and deployed in order based on the dependency relationships. You can check the status of each resource in the resource list.

![app-env-clone-deploy](/img/v0.4.0/application/environment/app-env-clone-deploy-en.png)

## Start Environment

Start the environment, the system will deploy the resources in the environment in sequence according to the dependencies, and you can view the resource status in the resource list. It is used to restore resources that have been stopped or under undeployed status to the current environment.

1. Click `Application Management` -> `Environment` on the navigation bar to enter the environment list.
2. Select the environment that needs to be started and click `Start`.

![app-env-start](/img/v0.5.0/application/environment/env-start.png)

## Stop Environment

Stop the environment, the system will stop the resources in the environment in sequence according to the dependencies, and you can view the resource status in the resource list. It will stop the resources without deleting the resource configuration and clear the resource components.

1. Click `Application Management` -> `Environment` on the navigation bar to enter the environment list.
2. Select the environment that needs to be stopped and click `Stop`.

![app-env-stop](/img/v0.5.0/application/environment/env-stop.png)


## Delete Environment

1. Click `Application Management` -> `Environment` in the navigation bar to enter the environment list.
2. Ensure no resources depend on this environment, select the environment you need to delete and click `Delete` to complete the deletion.
