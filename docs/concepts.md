# Concepts

The following are the key concepts in Walrus.

## Connectors

Connectors are components that integrate with third-party services. Walrus supports various types of connectors, including Kubernetes clusters, IaaS cloud providers, version control systems, and customizable integrations with any other system.

## Projects

Projects are your workspaces for team collaboration. You can use projects to group connectors, environments, resources, workflows, variables, and other resources. Within a project, you can manage application deployments in multiple environments.

## Environments

Environments represent the deployment targets for applications, such as development, testing, production, etc.

## Resources

Resources are the deployment units of applications. Resources can be generated from templates and linked to specific deployment patterns. They are characteristically monomorphic but designed to be portable across different environments. For example, Kubernetes container services demonstrate this concept. Resources could also refer to the necessary infrastructure to operate a service, including elements such as BigTable databases, Pub/Sub topics, S3 buckets, and CDNs. Although these resources can vary in implementation across different infrastructures, they maintain a uniform definition through their polymorphic operations.

## Templates

In Walrus, templates refer to resource templates used to define and describe various aspects of a service or application's configuration. Platform engineers are responsible for defining and maintaining templates. Application developers use templates to create resources without needing to understand the infrastructure details associated with the templates.
