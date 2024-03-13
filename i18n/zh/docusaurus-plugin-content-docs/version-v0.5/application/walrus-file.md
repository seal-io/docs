---
sidebar_position: 5
---

# Walrus File

Walrus File 是用于部署资源的文件，它包含了一组相关的资源，以及依赖关系。

## 编写 Walrus File

Walrus 样例如下。

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

  非必须配置；Walrus File 的格式版本，当前支持v1版本。

- resources

  必须配置；包含了多个资源的配置及其依赖关系。

  - name

    必须配置；资源名称。

  - project
    
    非必须配置；资源部署到的项目，与 environment 结合使用。在 Walrus CLI 中使用时，不配置将使用 Walrus CLI 传入的参数或当前 context。在 UI 使用时，将部署到当前所在项目。

  - environment
    
    非必须配置；资源部署到的环境，与 project 结合使用。在 Walrus CLI 中使用时，不配置将使用 Walrus CLI 传入的参数或当前 context。在 Walrus UI 使用时，将部署到当前所在环境。

  - type

    非必须配置；部署使用的资源定义类型，type 配置和 template 配置需配置其一。

  - template

    非必须配置；部署使用的模板，需配置模板名称以及模板版本。

    使用全局级别的模板。
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

    使用项目级别的模板
    ```yaml
    resources:
    - template:
        name: kubernetes-containerservice
        version: v0.2.5
        project:
          name: default
    ```
  
  - attributes
  
    非必须配置；根据需求填写部署所需的配置。

### 定义依赖关系

依赖关系通过格式 `${res.资源名.资源输出名}` 来定义依赖的对象。比如样例中 `${res.wordpress-db.address}` 定义了 `wordpress` 依赖于 `wordpress-db` 输出的 address 等。

### 定义变量依赖

支持使用 Walrus 中已经存在的变量。通过格式 `${variable.变量名}` 来定义。比如样例中 `${var.password}` 定义了使用 Walrus 中的 password 变量。

### 环境变量插值

在结合 Walrus CLI 使用时，支持从环境变量插值。如下将使用环境变量 PASSSWORD 来为 attributes.password 赋值。

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

支持常见 Linux 参数扩展。

- 变量默认值 `${parameter:-default}`：如果变量未定义或为空，则使用默认值。
- 变量不存在时退出 `${parameter:?word}`：如果变量未定义或为空，则输出错误消息并退出脚本。
- `${parameter:+word}`：如果 parameter 未定义或为空，则返回空字符串，如果 parameter 已定义且非空，则返回 word。

### 文件内容插值

支持通过 `${file(文件路径)}` 将文件内容替换到 Walrus File 中，敏感数据可从文件或环境变量获取。

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

## 使用 Walrus File 

### CLI Apply/Delete Walrus File

CLI 支持通过 `walrus apply -f apps.yaml` 以及 `walrus delete -f apps.yaml` 命令操作资源。

### 导入 Walrus File

资源属于一个环境，您可以在环境视图，资源列表视图中找到 Walrus File 操作按钮。

1. 点击左侧导航栏中的`应用管理`。
2. 默认情况下，您将进入第一个环境的视图。您可以通过顶级面包屑切换查看不同项目或环境下的资源。
3. 在`资源`标签页中，您可以查看该环境下的资源列表。
4. 点击 `导入YAML`，在输入框中直接输入 Walrus File 内容或从文件中读取。
5. 选择 Walrus File Hub 中内置的应用可使用已经编写完成的 Walrus File。

![walrus-file-import](/img/v0.5.0/application/resource/walrus-file-import.png)

![walrus-file-import](/img/v0.5.0/application/resource/walrus-file-import-from-hub.png)

### 导出 Walrus File

1. 点击左侧导航栏中的`应用管理`。
2. 默认情况下，您将进入第一个环境的视图。您可以通过顶级面包屑切换查看不同项目或环境下的资源。
3. 在`资源`标签页中，勾选需要导出成 Walrus File 的资源，在列表附加操作中选择导出即可导出 Walrus File 到本地。

