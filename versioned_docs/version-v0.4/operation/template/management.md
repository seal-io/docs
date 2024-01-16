---
sidebar_position: 2
---

# Template Management

Walrus provides the following two levels of templates:

- Project Template: Applied to a specific project, project templates can be used within the current project.
- Global Template: A template that can be applied to all projects, global templates can be used across all projects.

## View Template List

1. Walrus has a built-in template library, and the template list includes all templates from the library as well as independently added templates.
2. Navigate to the template list page.
   - Project Template: Click on the `Application Management` menu in the left navigation bar, choose the respective project, and click the `Template` tab.
   - Global Template: Click on the `Operations Hub` menu in the navigation bar and go to the `Template` tab.

## Adding Templates

1. Navigate to the template list page.
   - Project Template: Click on the `Application Management` menu in the left navigation bar, choose the respective project, and click the `Template` tab.
   - Global Template: Click on the `Operations Hub` menu in the navigation bar and go to the `Template` tab.
2. Enter the template list page.
3. Click the `New Template` button.
4. Enter the template's name, description, and source. Where,
   - Source: Compatible address with Terraform git-type module sources, refer to [documentation](https://developer.hashicorp.com/terraform/language/modules/sources#module-sources).
   Examples:
      - https://github.com/walrus-catalog/webservice?ref=v0.0.1
      - https://github.com/walrus-catalog/webservice?ref=main
      - https://github.com/seal-io/walrus-template-template//modules/submodule?ref=main

   > You can specify a version through the ref parameter, and the specified version must be a tag or branch existing in the git repository.
   > You can import templates from subdirectories by appending a subdirectory path after the repository URL.

5. Click the `Confirm` button.

## Editing a Template

1. Enter the `Template` tab.
    - Project Template: Click on `Application Management` in the navigation bar and select the corresponding project, then click on the `Template` tab.
    - Global Template: Click on `Operations Hub` in the navigation bar and enter the `Template` tab.
2. Find the template you need to edit.
3. Click the more operations button indicated by the thumbnail and select `edit``.
4. Modify the corresponding attribute values as per your need.
5. Click the `OK` button.

## Deleting a Template

1. Enter the `Template` tab.
    - Project Template: Click on `Application Management` in the navigation bar and select the corresponding project, then click on the `Template` tab.
    - Global Template: Click on `Operations Hub` in the navigation bar and enter the `Template` tab.
2. Select the template you need to delete.
3. Click the "Delete" button.
4. In the delete confirmation prompt, click the `OK` button.

## Edit Template UI Styles

1. Navigate to the template list page.
   - Project Template: Click on the `Application Management` menu in the left navigation bar, choose the respective project, and click the `Template` tab.
   - Global Template: Click on the `Operations Hub` menu in the navigation bar and go to the `Template` tab.
2. Find the template for which you want to edit the styles.
3. Click on the template name to enter the details page. In the details page, select `UI Schema`.
4. Click on the ellipsis (three dots) representing additional actions, choose the `Edit` option, and modify the corresponding UI styles as needed. Click `Preview` to see the effects.
5. Click the `Save` button.

## AI-assisted Template Creation

Walrus can use OpenAI's GPT large language model capabilities to assist you in writing and submitting templates.

> Note: Before using this feature, you first need to:
> 1. Obtain OpenAI's API token and configure it in Walrus's system settings.
> 2. Create a version control connector.

### Generating Templates Based on Natural Language Descriptions

1. Click on `Operations Hub` in the navigation bar and enter the `Template` tab.
2. Click the `AI Write Template`` button.
3. In the text box, use natural language to describe the functionality of the template you need. You can select an example from the instance list in the top right corner.
4. Click the `Generate` button.

### Explaining the Functionality of Template Code

1. Click on `Operations Hub` in the navigation bar and enter the `Template` tab.
2. Click the `AI Write Template` button.
3. After generating/writing the template code in the text box via AI, click the "Explain" button.
4. Click the `OK` button to close the template explanation popup.

### Correcting Template Code

1. Click on `Operations Hub` in the navigation bar and enter the `Template` tab.
2. Click the `AI Write Template` button.
3. After generating/writing the template code in the text box via AI, click the `Correct` button.
4. Review the repair instructions and consider the suggested repairs.
5. Click `Accept Repair` in the top left corner to apply the repair suggestion, or "Abort Repair" to discard the repair suggestion.

### Submitting Written Template Code to Git Repository

1. Click on `Operations Hub` in the navigation bar and enter the `Template` tab.
2. After generating/writing the template code in the text box via AI, click the `Create PR` button.
3. Select an available version control connector.
4. Select a code repository.
5. Select the target branch.
6. Enter the submission path, that is, the folder path in the code repository where this template is stored.
7. Click the `Save` button.