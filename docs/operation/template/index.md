---
sidebar_position: 1
---

# Template

A template is a pre-defined resource framework or architecture which includes a set of related components, inputs and outputs.

## Type

Walrus currently supports Terraform module as the template type which is stored in git source code repositories.

Users can add templates in Walrus using the following ways:

### Import from a catalog

A catalog is a registry storing a collection of templates. After adding a catalog, all templates included in the catalog will be automatically imported.

### Create Independent Templates

Add an independent template with a git repository address through the Walrus UI.

## Template Structure

Walrus supports a template structure compatible with Terraform modules, including the following files.

```shell
<path-to-template>
├── README.md
├── main.tf
├── outputs.tf
├── variables.tf
├── schema.yaml
├── icon.svg
```

- main.tf

The main file for Terraform configuration, containing resource definitions and configurations.

- variables.tf

Configuration file for Terraform variables. In this file, you define information such as variable names, types, default values, and more.

- outputs.tf

Configuration file for Terraform outputs. Outputs allow you to export specific values from Terraform execution for use by other Terraform configurations, scripts, or manual operations. In this file, you define output names and their associated values.

- schema.yaml

Configuration file for defining the template UI style. The content of schema.yaml is in the openAPI format of UI Schema, which includes custom configurations such as variable types, styles, validations, default values, etc., from variables.tf.

- icon.svg

The template will use the image file named "icon" in the root path of the default branch of the source repository as the template's icon. The supported image file formats are: .png, .jpg, .jpeg, .svg. If no icon file is found, the default icon will be used.

## Customizing Template UI Schema
Walrus extends input definitions based on Terraform variables through UI Schema, aiding in generating more user-friendly forms in the UI.

### Configuration Method

#### schema.yaml

UI schema can be configured by adding a `schema.yaml` in the template repository. If the repository includes the `schema.yaml` file, Walrus will use the UI schema defined in that file.

Below is an example of the schema file:

```yaml
openapi: 3.0.3
info:
  title: OpenAPI schema for template webservice
components:
  schemas:
    variables:
      required:
        - image
      type: object
      properties:
        image:
          title: Image Name
          type: string
          description: Docker image name
          x-walrus-ui:
            group: Basic
        ports:
          title: Ports
          type: array
          description: Service ports to expose
          default:
            - 80
          items:
            type: number
          x-walrus-ui:
            group: Basic
```

Walrus provides a tool to generate the `schema.yaml` file based on the Terraform module.

1. Install [Walrus CLI](../cli).
2. Run the following command to generate the `schema.yaml` file: 
```
walrus-cli schema generate --dir=${dir for module}
```

#### Walrus UI Configuration

When the repository does not include a `schema.yaml` file, Walrus will automatically configure UI schema based on the terraform variables. The generated schema can be viewed in the template's UI Schema.

### Configuration Items

UI Schema is based on the OpenAPI 3.0 file structure, written in YAML format. It includes both the basic structure of the OpenAPI Schema and the extensions part, combining to define UI schema in Walrus.


### OpenAPI Schema Basic Configuration

| Name        | Description                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| title       | Display name of the variable                                                                                         |
| type        | Variable type                                                                                                        |
| description | Variable description                                                                                                 |
| default     | Default value of the variable                                                                                        |
| format      | Supports configuring a password, using a password input box for string variables                                     |
| enum        | Optional range of variable values                                                                                    |
| readOnly    | Restricts the variable value from being modified                                                                     |
| writeOnly   | Restricts the variable as write-only                                                                                 |
| minimum     | Restricts the minimum value for number/integer-type variables                                                        |
| maximum     | Restricts the maximum value for number/integer-type variables                                                        |
| minLength   | Restricts the minimum length for string-type variables                                                               |
| maxLength   | Restricts the maximum length for string-type variables                                                               |
| required    | Configures the required sub-variables for Object-type variables, with an array containing the names of sub-variables |
| properties  | Used for configuring sub-variables for object-type variables                                                         |
| items       | Used for configuring elements for array-type variables                                                               |

### x-walrus-ui Extension Configuration

OpenAPI supports additional properties with the `x-` prefix, and Walrus supports additional configurations through the `x-walrus-ui` extension.

| Name      | Description                                |
| --------- | ------------------------------------------ |
| group     | Variable grouping                          |
| hidden    | Whether to hide the variable               |
| immutable | Whether the variable supports modification |
| showIf    | Variable display condition                 |
| widget    | Configures the use of Walrus controls      |

### Walrus Extension Widget

Walrus supports the following UI widgets through the extension, and the UI will display according to the configured UI widgets.

| Name       | Description          |
| ---------- | -------------------- |
| YamlEditor | YAML editor          |
| TextArea   | Multi-line input box |

## Runtime Context

Runtime context are information related to projects, environments, and resources. It can be obtained using the `context` variable in templates. You need to declare the context variable in the template, and Walrus will automatically inject the value of the `context` variable during deployment. The declaration is as follows:

```hcl
variable "context" {
  description = <<-EOF
Receive contextual information. When Walrus deploys, Walrus will inject specific contextual information into this field.

Examples:
context:
  project:
    name: string
    id: string
  environment:
    name: string
    id: string
  resource:
    name: string
    id: string
EOF
  type        = map(any)
  default     = {}
}
```

The runtime context contains the following information:

| Context     | Sub  Context | Property	Type | Description                                                       |
| ----------- | ------------ | ------------- | ----------------------------------------------------------------- |
| project     | name         | String        | Project name to which the resource belongs                        |
| project     | id           | String        | Project ID to which the resource belongs                          |
| environment | name         | String        | Environment name to which the resource belongs                    |
| environment | id           | String        | Environment ID to which the resource belongs                      |
| environment | namespace    | String        | Namespace managed by Walrus, available in Kubernetes environments |
| resource    | name         | String        | Resource name                                                     |
| resource    | id           | String        | Resource ID                                                       |

## Output

Walrus captures the outputs defined in the templates. After a deployment is completed, the outputs will be displayed on the resource's output page. 

![resource-outputs](/img/v0.5.0/operation/template/resource-outputs.png)

### Endpoints

Walrus supports capturing user-defined access URLs.

![resource-endpoints](/img/v0.5.0/operation/template/resource-endpoints.png)

Name the output as `endpoints` or `walrus_endpoints`(as shown in the configuration below), Walrus will treat these outputs as **Endpoints** for the resource.

```hcl
output "endpoints" {
  value = {
    grafana_console    = "http://localhost:3000"
    prometheus_console = "http://localhost:9090"
  }
}
```

Type of the output value of `endpoints` or `walrus_endpoints` must be a string [map](https://developer.hashicorp.com/terraform/language/expressions/types#map). For example, the JSON form is `{"grafana_console":"http://localhost:3000","prometheus_console":"http://localhost:9090"}`. Since Terraform doesn't support declaring the type of output, if you need an explicit type conversion, please try the [tomap](https://developer.hashicorp.com/terraform/language/functions/tomap) function.

> Note:
> - When the endpoint's hostname, usually in the form of an IP address, is the same as Walrus's local IP address, Walrus will replace the hostname with the [Walrus server address](../setting#server).
> - Adopting the above mutation, you will be able to access the resource exposed from the embedded Kubernetes cluster.
