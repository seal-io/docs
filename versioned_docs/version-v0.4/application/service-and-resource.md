---
sidebar_position: 3
---

# Services and Resources

## View Service and Resource List

Services and resources belong to an environment, and you can view the list of services and resources in the environment view.

1. Click on `Application Management` in the left navigation bar.
2. Select a project through the drop-down button of the top-level breadcrumb.
3. In the environment tab of the project view, find the environment you need to operate on, and click on the environment name to enter the environment view.
4. In the `Services/Resources` tab, you can view the list of services and resources under this environment. You can switch to view services and resources under different projects or environments through the top-level breadcrumb.

![app-svc-list](/img/v0.4.0/application/service/app-svc-list-en.png)

## View Service or Resource Details

1. Enter the `Services/Resources` tab of the environment view.
2. Find the service or resource you need to view and click its name to enter the detail page.

## Create Service or Resource

1. Enter the `Services/Resources` tab of the environment view.
2. Click `New`, select `Service` or `Resource`.
3. For service creation, select the template and version. For resource creation, select the resource type.
4. Enter the `Name`, `Description`, and `Labels`. The name should be unique under the same environment.
5. Fill in the configuration form, configuration items depends on the template or resource type you selected.
6. Click the `Save and Deploy` button.

![qs-create-svc2](/img/v0.4.0/application/service/app-svc-create-en.png)

## Create Service or Resource Draft

You can create a service or resource as draft.

1. Enter the `Services/Resources` tab of the environment view.
2. Click `New`, select `Service` or `Resource`.
3. For service creation, select the template and version. For resource creation, select the resource type.
4. Enter the `Name`, `Description`, and `Labels`. The name should be unique under the same environment.
5. Fill in the configuration form, configuration items depends on the template or resource type you selected.
6. Click the downward arrow to the right of the `Save and Deploy` button.
7. Click `Save Draft`.

![qs-create-svc2](/img/v0.4.0/application/service/app-svc-create-draft-en.png)

## Edit Service or Resource

1. Enter the `Services/Resources` tab of the environment view.
2. Find the service or resource you need to edit, click `Edit`.
3. Modify the configuration as needed, then click the `Save and Deploy` button. The service or resource will be deployed once after editing.

## Service and Resource Dependency

Services and resources can depend on each other by using output references. The referenced entity will be deployed before and deleted after the dependent entities.

For example, if a web service depends on a MySQL resource, the web service can reference the MySQL endpoint in its environment variable as `${resource.my-db-name.address}`.
The output reference is in the following format: `${resource.<Resource Name>.<Resource Output Name>}` and `${service.<Service Name>.<Service Output Name>}`.

![app-svc-ref](/img/v0.4.0/application/service/app-svc-ref-en.png)

## Rollback Service or Resource

1. Enter the `Services/Resources` tab of the environment view.
2. Find the service or resource you need to rollback.
3. Click on the operation drop-down button, select `Rollback`.

![app-svc-rollback](/img/v0.4.0/application/service/app-svc-rollback-en.png)

4. Choose the historic version you need to roll back to.
5. Confirm the configuration changes of the rollback operation, click the `Rollback` button to complete the rollback operation.

![app-svc-rollback2](/img/v0.4.0/application/service/app-svc-rollback2-en.png)

## Clone Services and Resources

1. Enter the `Services/Resources` tab of the environment view.
2. Select the services and resources you need to clone, click the `Clone` button.

![app-svc-clone](/img/v0.4.0/application/service/app-svc-clone-en.png)

3. Select the target environment of the clone.
4. If you need to adjust configuration of cloned services and resources, click the block you want to modify, modify the configuration in the pop-up window, and click the `Confirm` button.
5. Click the `Save and Deploy` button to complete the clone.

![app-svc-clone-edit](/img/v0.4.0/application/service/app-svc-clone-edit-en.png)

## Delete Service or Resource

1. Enter the `Services/Resources` tab of the environment view.
2. Find the service or resource you need to delete.
3. Make sure no other services and resources depend on it. Click the `Delete` button.
4. In the pop-up window, you can choose whether to clean up the components. If you uncheck `Clean up all components`, the components of the service or resource will be retained, but will no longer be managed by Walrus.
5. Click the `Confirm` button to complete the deletion.

![app-svc-del](/img/v0.4.0/application/service/app-svc-del-en.png)

## Components

Components are the entities generated by the service or resource deployment. In the service or resource detail page, you can view its components, including component name, type, status, create time, etc. You can operate components as needed, such as viewing logs, connecting to the terminal, etc.

### View Component Logs

> Note: The operation to view logs is available for specific component types.

1. Enter the service or resource detail page to view the component list.
2. Find the component whose logs you need to view and click the `View Logs` operation.

![qs-res-logs](/img/v0.4.0/application/service/app-svc-component-logs-en.png)

### Connect to Component via Terminal

> Note: The terminal operation is available for specific component types.

1. Enter the service or resource detail page to view the component list.
2. Find the component you need to connect to the terminal and click the `Terminal` operation.

![qs-res-exec](/img/v0.4.0/application/service/app-svc-component-terminal-en.png)

### View Components' Dependency Graph

Enter the service/resource detail page and select to switch to the graph view to see dependency graph under the current service/resource.

For more details on dependency graphs, please refer to [Dependency Graph](/application/graph).

![app-svc-res-graph-view](/img/v0.4.0/application/service/app-svc-component-graph-view-en.png)

![app-svc-res-graph](/img/v0.4.0/application/service/app-svc-res-graph-en.png)