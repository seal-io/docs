---
sidebar_position: 5
---

# Walrus File

Walrus File is a file used for deploying resources, containing a set of related resources and their dependencies.

## Writing Walrus File

Here is an example of a Walrus file in YAML format.

```yaml
version: v1
resources:
  - name: wordpress-db
    type: mysql
    attributes:
      engine_version: "8.0"
      password: ${var.mysql-password}
      username: rdsuser
    project:
      name: default
    environment:
      name: local
  - name: wordpress
    type: containerservice
    attributes:
      containers:
        - image: wordpress
          profile: run
          ports:
            - internal: 80
              external: 80
          envs:
            - name: WORDPRESS_DB_HOST
              value: ${res.wordpress-db.address}
            - name: WORDPRESS_DB_PASSWORD
              value: ${res.wordpress-db.password}
            - name: WORDPRESS_DB_USER
              value: ${res.wordpress-db.username}
            - name: WORDPRESS_DB_NAME
              value: ${res.wordpress-db.database}
```

- version

  Optional; the format version of the Walrus File, currently supporting version v1.

- resources

  Required; contains configurations for multiple resources and their dependencies.

  - name

    Required; the name of the resource.

  - project
    
    Optional; the project to deploy the resource to, used in conjunction with environment. When using Walrus CLI, not configuring it will use the flags passed to Walrus CLI or the current context. When using Walrus UI, it will deploy to the current project.

  - environment
    
    Optional; the environment to deploy the resource to, used in conjunction with project. When using Walrus CLI, not configuring it will use the flags passed to Walrus CLI or the current context. When using Walrus UI, it will deploy to the current environment.

  - type

    Optional; the type of resource definition used for deployment; either type or template should be configured.

  - template

    Optional; the template used for deployment, specifying the template name and version.

    Here is an example of using a global-level template.
    ```yaml
    resources:
    - template:
        name: kubernetes-containerservice
        version: v0.2.5
      attributes: 
        containers:
          - image: nginx
            profile: run
            ports:
              - internal: 80
                external: 80
            files:
              - path: /usr/share/nginx/html/index.html
                content: |
                  <html>
                    <h1>Welcome to Walrus!</h1>
                  </html>
    ```

    Here is an example of using a project-level template.
    ```yaml
    resources:
    - template:
        name: kubernetes-containerservice
        version: v0.2.5
        project:
          name: default
    ```
  
  - attributes
  
    Optional; fill in the required configurations for deployment.

### Dependency Definition

Dependencies are defined using the format `${res.resource-name.resource-output}`. For example, in the sample, `${res.wordpress-db.address}` defines that `wordpress` depends on the `address` output of `wordpress-db`.

### Variable Dependencies

Supports using variables already existing in Walrus. Defined using the format `${variable.variable-name}`. For example, in the sample, `${var.password}` defines the use of the Walrus password variable.

### Environment Variable Interpolation

When used in conjunction with Walrus CLI, supports interpolation from environment variables. The following example uses the environment variable `PASSWORD` to assign a value to `attributes.password`.

```yaml
version: v1
resources:
  - name: wordpress-db
    type: mysql
    attributes:
      engine_version: "8.0"
      password: ${PASSSWORD}
      username: rdsuser
```

Supports common Linux parameter expansions.

- Default value for variables `${parameter:-default}`: Uses the default value if the variable is undefined or empty.
- Exit if variable is not defined `${parameter:?word}`: Outputs an error message and exits the script if the variable is undefined or empty.
- Conditional expansion `${parameter:+word}`: Returns an empty string if the parameter is undefined or empty; returns word if the parameter is defined and non-empty.

### File Content Interpolation

Supports replacing file content into the Walrus file using `${file(file-path)}`, allowing sensitive data to be retrieved from files or environment variables.

```yaml
version: v1
resources:
  - name: wordpress-db
    type: mysql
    attributes:
      engine_version: "8.0"
      password: ${PASSSWORD}
      username: rdsuser
```

## Using Walrus File 

### CLI Apply/Delete Walrus File

The CLI supports resource operations using the `walrus apply -f apps.yaml` and `walrus delete -f apps.yaml` commands.

### Importing Walrus File

Resources belong to an environment, and you can find the Walrus File operation buttons in the resource list view.

1. Click on `Applications` in the left navigation bar.
2. By default, you will enter the view of the first environment. You can switch to view resources in different projects or environments using the top breadcrumb.
3. In the `Resources` tab, you can view the list of resources in that environment.
4. Click on `Import YAML`, and enter the Walrus File content directly into the input box or read it from a file.
5. Also could choose an application built from the Walrus File Hub, using a pre-written Walrus File.

![walrus-file-import](/img/v0.5.0/application/resource/walrus-file-import.png)

![walrus-file-import](/img/v0.5.0/application/resource/walrus-file-import-from-hub.png)

### Exporting Walrus File

1. Click on `Applications` in the left navigation bar.
2. By default, you will enter the view of the first environment. You can switch to view resources in different projects or environments using the top breadcrumb.
3. In the `Resources` tab, check the resources to be exported as a Walrus File, and select export in the additional operations menu to export the Walrus File to the local machine.

