---
sidebar_position: 3
---

# Integration with CI/CD Tools

This tutorial explains how to integrate the Walrus CLI with your CI/CD tools to achieve an automated deployment process.

## Prerequisites

To follow this tutorial, you will need:

1. A GitHub Repository.
2. [Installation of Walrus](/deploy/standalone).

## Creating an API Key

To allow the Walrus CLI to interact with the Walrus server, you first need to generate an API key:

1. Navigate to `User Information`, select `API Keys`, then click `New Key`. Provide a name for the key and set an expiration period.
2. After creation, copy the API key for later use.

## Integrating Walrus CLI with CI/CD Tools

For this tutorial, we will demonstrate integration using GitHub Actions.

1. In your GitHub repository, create a new file named `ci.yaml` within the `.github/workflows` directory. This file will define your CI/CD workflow.
2. Configure the workflow to use GitHub Actions secrets, such as `CI_WALRUS_SERVER` and `CI_WALRUS_API_KEY`, for securely handling sensitive data. Ensure the `CI_WALRUS_SERVER` secret follows the format `https://host:port`.

Below is a sample `ci.yaml` for reference:

```yaml
name: ci

on:
  push:
    branches:
      - "main"

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        arch: 
          - amd64
    steps:
      - name: Download CLI
        run: |
          # Install walrus cli
          curl -v -k -o walrus -LO "${{ secrets.CI_WALRUS_SERVER }}/cli?arch=amd64&os=linux"
          chmod +x ./walrus

      - name: Deploy
        run: |
          # Configure the CLI
          ./walrus login --server ${{ secrets.CI_WALRUS_SERVER }} --project web --environment dev --api-key ${{ secrets.CI_WALRUS_API_KEY }}

          # Deploy resources using Walrus files.
          ./walrus apply -f walrus-file.yaml --wait
```

After successful deployment, you can view the deployed services in the Walrus dashboard. For additional CLI commands and usage, please refer to the CLI documentation.