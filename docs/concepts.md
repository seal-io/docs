# Concepts

The following are the key concepts in Walrus.

## Connectors

Connectors are components that integrate with third-party services. Walrus supports various types of connectors, including Kubernetes clusters, IaaS cloud providers, version control systems, and customizable integrations with any other system.

## Projects

Projects serve as collaborative workspaces for teams. Within a project, you can organize connectors, environments, resources, workflows, variables, and other elements. Projects enable efficient management of application deployments across multiple environments.

## Environments

Environments define the deployment targets for applications, such as development, testing, and production environments.

## Resources

Resources represent fundamental components of applications. These can encompass a wide range of entities, such as containers running services, or the necessary infrastructure for service operation, including BigTable databases, Pub/Sub topics, S3 buckets, and CDNs.

## Templates

In Walrus, templates refer to resource templates used to define and describe various aspects of a resource's configuration. Platform engineers are responsible for defining and maintaining templates. Application developers use templates to create resources without needing to understand the infrastructure details associated with the templates.

## Resource Definitions

Walrus helps you build polymorphic, multi-cloud abstraction. Resource definitions form the core of this abstraction. It declares a resource type and matching rules to specify which template to use when deploying that type of resource in a particular environment. This capability shield developers from the intricacies of the underlying infrastructure while providing reasonable control.
