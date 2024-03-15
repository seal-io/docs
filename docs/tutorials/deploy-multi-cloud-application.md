---
sidebar_position: 1
---

# Deploy Multi-Cloud Applications

This tutorial explains how to deploy multi-cloud applications using resource definitions to abstract away complex configurations.

## Prerequisites

Before getting started, make sure to prepare the necessary resources and complete the following configuration tasks.

### Connector Configuration

1. Navigate to the `default` project > `Connectors` > Click `New Connector`, choose the connector type as `Cloud Provider`, enter the name "alibaba", select the environment type as `Production`, and choose `Alibaba` as the type. Enter other required information to complete the configuration.
2. Click `New Connector` again, enter the name "aws", select the environment type as `Production`, and choose `AWS` as the type. Enter other required information to complete the configuration.

### Environment Setup

1. Navigate to the `default` project > `Environments` > Click `New Environment`, enter the name "production", associate it with the connector named "alibaba" created earlier for production deployment.
2. Create another environment named "dr", associate it with the connector named "aws" created earlier for cloud disaster recovery (DR) purposes.
3.  Include the `local` environment provided by default in the `default` project. Now we have a total of three environments: `local`, `production`, and `dr`.

![environment-list](/img/v0.6.0/tutorials/deploy-multi-cloud-application/environment-list.png)

### Download Walrus CLI

1. Install [Walrus CLI](/cli) according to the documentation.

## Deploy Multi-Cloud Applications

### Create Resource Definitions

1. Click on `Operations` in the left navigation bar.
2. Go to the `Resource Definitions` tab, click on `New Resource Definition`, enter the resource definition name "demo-mysql", and select the type "demo-mysql".
3. Create a matching rule named "dev" to represent the development environment. Add a selector, choose the environment name, and enter "local" as the name. Use the latest version of the template `builtin/kubernetes-mysql`, and allocate CPU and memory resources in the predefined configuration section.
4. Create another matching rule named "production" for the production environment. Add a selector, choose the environment name, and enter "production". Use the latest version of the template `builtin/alicloud-rds-mysql` and configure the `Vpc Id` in the predefined configuration section. This eliminates the need for users to input the `Vpc Id` when creating resources using this definition.
5. Create a matching rule named "dr" for the disaster recovery environment. Add a selector, choose the environment name, and enter "dr". Use the latest version of the template `builtin/aws-rds-mysql` and configure the `Vpc Id` in the predefined configuration section.

Once configured, the resource definition includes the following matching rules.

Resource definition rule one.

![resource-definition-rule1](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-rule1.png)

Resource definition rule two.

![resource-definition-rule2](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-rule2.png)

Resource definition rule three.

![resource-definition-rule3](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-rule3.png)

6. Customize UI styling configurations. After configuring matching rules, Walrus intelligently renders UI styles based on the configuration. Administrators can customize UI styles as needed.
7. Go to the resource definition "demo-mysql" > `UI Schema` tab, click `Preview` to see the automatically generated UI style. Click `Edit`, here we remove some complex configurations (`replication_readonly_replicas`, `storage`) and leave common configurations to support quick deployment. 

![resource-definition-ui-schema-edit](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-ui-schema-edit.png)

8. Below are the completed UI styles after configuration.

![resource-definition-ui-schema-preview](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-definition-ui-schema-preview.png)

### Deploy Multi-Cloud Applications

With the configured resource definitions, we can now create multi-cloud applications.

1. Go to `Applications` > `local` environment > Click `New Resource`.
2. Enter the resource name, choose the resource type "demo-mysql" that we just created, input architecture, database version, and other configurations, then click `Save` to deploy.
3. Go to the `production` environment > Click `New Resource`, select the resource type "demo-mysql" again, input configurations, and complete the deployment.
4. Go to the `dr` environment > Click `New Resource`, select the resource type "demo-mysql" again, input configurations, and complete the deployment.
5. All three environments have created resources of type "demo-mysql". The `local` environment is connected to a Kubernetes connector, the `production` environment is connected to an Alibaba connector, and the `dr` environment is connected to an AWS connector. You can see that different environments dynamically create corresponding resources based on the current environment.

The `local` environment creates a MySQL container in the Kubernetes cluster.

![resource-local-mysql](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-local-mysql.png)

The `production` environment creates an RDS service in Alibaba Cloud.

![resource-production-mysql](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-production-mysql.png)

The `dr` environment creates the corresponding RDS service in AWS Cloud.

![resource-dr-mysql](/img/v0.6.0/tutorials/deploy-multi-cloud-application/resource-dr-mysql.png)

### Deploy Multi-Cloud Applications via Walrus File

In addition to deploy multi-cloud applications via UI, you can achieve the same effect using a Walrus file.

1. Prepare the app.yaml with the following content:

```yaml
version: v1
resources:
  - name: mysql
    type: mysql
    attributes:
      architecture: standalone
      database: mydb
      engine_version: "8.0"
      username: rdsuser
```

2. Run the command to deploy to different environments.

```bash
# Deploy to the local environment
walrus apply -f app.yaml -p default -e local

# Deploy to the production environment
walrus apply -f app.yaml -p default -e production

# Deploy to the dr environment
walrus apply -f app.yaml -p default -e dr
```

Deploying via CLI allows you to reuse the same Walrus file to deploy multi-cloud applications to different environments.

With this, we have completed configuring resource definitions to simplify application deployment and deploying multi-cloud applications.
