---
sidebar_position: 6
---

# Workflows

A workflow is a set of tasks that are executed in a specific order. The tasks can be executed in parallel or sequentially. Workflows can be used to automate the deployment of applications. For example, deploying a web application requires deploying multiple services in a specific order. You can create a workflow to automate the deployment of the web application.

## View Workflow List
1. Click `Application Management` -> `Workflows` on the left navigation bar.
2. The workflow list under this project can be viewed on the workflow list page.
3. Use the search bar on the workflow list page to quickly search for related workflows.

## Create Workflow
1. Access the list page by viewing the workflow list.
2. Click `New Workflow`, enter the `name` to identify your workflow. Ensure the workflow name is unique for easy identification in the workflow list.

![create-wf](/img/v0.5.0/application/workflow/create-wf-en.png)

3. Add `Workflow Name` and `Workflow Description` of the workflow, specify the `Workflow Timeout` and `Workflow Parallelism` to limit the timeout and the number of tasks that can run simultaneously.
4. Add **Variables**. Click `New Variable`, enter the variable name and value, and configure the variable. Checking the `Runtime Configurable` checkbox to make variables could be reset if you want to change the variable value when the workflow is executed.

![create-wf-var](/img/v0.5.0/application/workflow/create-wf-var-en.png)

5. Add Stage and Step: Create a new stage, click the add icon to add a new stage. Click `New Step` to add steps in the stage, select the step type, add the step configuration and enter corresponding configurations like timeout, retry, etc., based on the requirements of the step.

![create-wf-step](/img/v0.5.0/application/workflow/create-wf-step-en.png)

Variables can be referenced in the step configuration using `${workflow.var.variableName}`. It will be replaced with the variable value when the workflow is executed.

![create-wf-step-resource](/img/v0.5.0/application/workflow/create-wf-step-resource-en.png)

After adding the step, click the `Save` button to save the workflow configuration.

## Edit Workflow
1. Access the list page by viewing the workflow list.
2. Select the workflow to edit by clicking the Edit button.
3. Modify the workflow configuration and add or delete stages and steps.
4. Click the `Save` button to save the workflow.

![edit-wf](/img/v0.5.0/application/workflow/edit-wf-en.png)

## Run Workflow
1. Access the list page by viewing the workflow list.
2. Select the workflow to run and click the Run button.
3. Fill in the workflow variables and execution description, then click the `Run` button to execute the workflow.

![run-wf](/img/v0.5.0/application/workflow/run-wf-en.png)

## View Workflow Execution
1. Access the list page by viewing the workflow list.
2. Select the workflow that you need to view and click the name of the workflow to enter the workflow execution list page.

![wf-exec-list](/img/v0.5.0/application/workflow/run-wf-list-en.png)

3. You can view the workflow execution details by clicking the workflow execution name.
4. View the workflow execution logs by clicking the `Logs` button.

![wf-exec](/img/v0.5.0/application/workflow/run-wf-detail-en.png)

5. Once the workflow execution is completed, you can view the workflow execution results on the workflow execution detail page. You can view the resources deployed or upgraded by the workflow in the deploy-resource type steps and approval results in the approval steps.

Workflow execution can be stopped by clicking the `Stop` button or re-executed by clicking the `Retry` button.

![wf-exec-result](/img/v0.5.0/application/workflow/run-wf-result-en.png)


## Delete Workflow

1. Navigate to `Application Management` and enter the environment view, then click the `Workflows` tab.
2. Select the workflow that you need to delete and click the `Delete` button to remove the workflow.