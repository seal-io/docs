---
sidebar_position: 3
---

# Resources

## View Resource List

Resources belong to an environment, and you can view the list of resources in the environment view.

1. Click on `Applications` in the left navigation bar.
2. By default, you will enter the view of the first environment. You can switch to view resources under different projects or environments through the top-level breadcrumb. You can also set the default environment to enter through the breadcrumb.
3. In the `Resources` tab, you can view the list of resources under this environment.

![resource-list](/img/v0.6.0/application/resource/resource-list.png)

## View Resource Details

1. Navigate to the `Resources` tab in the environment view.
2. Find the resource you need to view and click its name to enter the detail page.

On the resource details page, you can view the resource's basic information, component list, dependency graphs, and more.

![resource-detail](/img/v0.6.0/application/resource/resource-detail.png)

## Create Resource

1. Navigate to the `Resources` tab in the environment view.
2. Click `New Resource`.
3. Select the resource type. If you want to create from template, enable the `Use Template` option, then select the template and version. For more information about resource types, please refer to [Resource Definition](/operation/resource-definition).
4. Enter the `Name`, `Description`, and `Labels`. The name should be unique under the same environment.
5. Fill in the configuration form, configuration items depends on the template or resource type you selected.
6. Click the `Save & Deploy` button.

![resource-create](/img/v0.6.0/application/resource/resource-create.png)

## Create Resource Draft

You can create a resource as draft.

1. Navigate to the `Resources` tab in the environment view.
2. Click on `New Resource`.
3. Select the resource type. If you wish to create a resource from a template, enable the `Use Template` option, then select the desired template and its version.
4. Enter the `Name`, `Description`, and `Labels`. Ensure the name is unique within the same environment.
5. Fill in the configuration form. The configuration items will depend on the selected template or resource type.
6. Click the downward arrow next to the `Save & Deploy` button.
7. Select `Save Draft`.

![resource-create-draft](/img/v0.6.0/application/resource/resource-create-draft.png)

## Create Resource Preview

You can choose to save and preview resources when creating or editing them. The resource preview helps you understand the changes to the resource before performing the actual deployment.

1. Navigate to the `Resources` tab in the environment view.
2. Click on `New Resource`.
3. Select the resource type. If you wish to create a resource from a template, enable the `Use Template` option, then select the desired template and its version.
4. Enter the `Name`, `Description`, and `Labels`. Ensure the name is unique within the same environment.
5. Fill in the configuration form. The configuration items will depend on the selected template or resource type.
6. Click the downward arrow next to the `Save & Deploy` button.
7. Select `Save & Preview`.

![resource-create-preview](/img/v0.6.0/application/resource/resource-create-preview.png)

## Edit Resource

1. Navigate to the `Resources` tab in the environment view.
2. Find the resource you need to edit, click `Edit`.
3. Modify the configuration as needed, then click the `Save & Deploy` button. The resource will be deployed once after editing.

## Resource Dependency

Resources can depend on each other by using output references. The referenced entity will be deployed before and deleted after the dependent entities.

For example, if a container service depends on a MySQL resource, the container service can reference the MySQL endpoint in its environment variable as `${res.my-db-name.address}`.
The output reference is in the following format: `${res.<Resource Name>.<Resource Output Name>}`.

![resource-ref](/img/v0.6.0/application/resource/resource-ref.png)

## Rollback Resource

1. Navigate to the `Resources` tab in the environment view.
2. Find the resource you need to rollback.
3. Click on the operation drop-down button, select `Rollback`.

![resource-rollback](/img/v0.6.0/application/resource/resource-rollback.png)

4. Choose the historic version you need to roll back to.
5. Confirm the configuration changes for the rollback operation, click the `Rollback` button to complete the rollback operation.

![resource-rollback2](/img/v0.6.0/application/resource/resource-rollback2.png)

> You can also preview a rollback before applying the changes.

## Clone Resources

1. Navigate to the `Resources` tab in the environment view.
2. Select the resources you need to clone, click the `Clone` button.

![resource-clone](/img/v0.6.0/application/resource/resource-clone.png)

3. Select the target environment of the clone.
4. If you need to adjust configuration of cloned resources, click the block you want to modify, modify the configuration in the pop-up window, and click the `Confirm` button.
5. Click the `Save & Deploy` button to complete the clone.

![resource-clone-edit](/img/v0.6.0/application/resource/resource-clone-edit.png)

## Delete Resource

Delete resource will delete resource configuration in Walrus, and remove all components of the resource.

1. Navigate to the `Resources` tab in the environment view.
2. Find the resource you need to delete.
3. Make sure no other resources depend on it. Click the `Delete` button.
4. In the pop-up window, you can choose whether to cleanup the components. If you uncheck `Clean up all components`, the components of the resource will be retained, but will no longer be managed by Walrus.
5. Click the `Confirm` button to complete the deletion.

![resource-del](/img/v0.6.0/application/resource/resource-del.png)

## Start Resource

Start operation will start all components of the resource, used to restore stopped resources or deploy draft resources to the environment.

1. Navigate to the `Resources` tab in the environment view.
2. Locate `Stopped` or `Undeployed` resource you need to start.
3. Click the `Start` button.

![resource-start](/img/v0.6.0/application/resource/resource-start.png)

## Stop Resource

Stop operation will stop all components of the resource, unlike delete operation, stop operation will not delete the resource configuration in Walrus.

1. Navigate to the `Resources` tab in the environment view.
2. Locate `Ready` resource you need to stop.

![resource-stop](/img/v0.6.0/application/resource/resource-stop.png)

3. Click the `Stop` button，then click the `Confirm` button in the pop-up window to complete the stop operation.

> Caution: Whether a resource can be stopped depends on the resource's labels. If the resource's labels contain `walrus.seal.io/stoppable: "true"`, the resource can be stopped. By default, resources in development or staging environments will automatically add this label when created. You can actively declare this label when creating resources so that resources can be stopped in production environments.

![resource-stop2](/img/v0.6.0/application/resource/resource-stop2.png)


## Components

Components are the entities generated by the resource deployment. In the resource list or detail page, you can view its components, including component name, type, status, create time, etc. You can operate components as needed, such as viewing logs, connecting to the terminal, etc.

### View Component List

View the component list in the resource list page:

1. Enter the `Resources` tab of the environment view.
2. Find the resource you need to view the component list, click the arrow besides the resource name to expand the component list.

![resource-component-list](/img/v0.6.0/application/resource/resource-component-list.png)

View the component list in the resource detail page:

1. Enter the `Resources` tab of the environment view.
2. Find the resource you need to view the component list, click the resource name to enter the detail page.
3. Click the `Overview` tab to view the component list.

![resource-component-list2](/img/v0.6.0/application/resource/resource-component-list2.png)

### View Component Logs

> Note: The operation to view logs is available for specific component types.

1. View the component list.
2. Find the component whose logs you need to view and click the `Logs` operation.

![resource-component-logs](/img/v0.6.0/application/resource/resource-component-logs.png)

### Connect to the Component via Terminal

> Note: The terminal operation is available for specific component types.

1. View the component list.
2. Find the component you need to connect to the terminal and click the `Terminal` operation.

![resource-component-terminal](/img/v0.6.0/application/resource/resource-component-terminal.png)

### View Components' Dependency Graph

1. Enter the resource detail page.
2. Click the `Components` tab to view the component list.
3. Switch to the graph view to see dependency graph under the current resource.

For more details on dependency graphs, please refer to [Dependency Graph](/application/graph).

![resource-component-graph](/img/v0.6.0/application/resource/resource-component-graph.png)

![resource-component-graph2](/img/v0.6.0/application/resource/resource-component-graph2.png)

## Resource Runs

Every operation, including deployment, rollback, starting, and stopping a resource, generates a run record.

![resource-run-list](/img/v0.6.0/application/resource/resource-run-list.png)

The resource run includes information such as the run's status, start time, duration, operation type, operator, component changes in resources, resource configuration, logs, change history, and more. You can view detailed information about the run by clicking the operation button.

![resource-run-detail](/img/v0.6.0/application/resource/resource-run-detail.png)
