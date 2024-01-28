# CLI

Walrus CLI is the command line interface for interacting with the Walrus Server.

## Download and Install

Walrus supports downloading the Walrus CLI from the GitHub Releases page or directly from the Walrus UI.

### Install Walrus CLI from GitHub

Head to the [Walrus Releases Page](https://github.com/seal-io/walrus/releases) and download the corresponding CLI binary for your operating system in release assets.

Alternatively, you can run the following commands to download and install the latest Walrus CLI:
```bash
ARCH=$(uname -m | sed 's/x86_64/amd64/')
OS=$(uname -s | tr '[:upper:]' '[:lower:]')

curl -fLO "https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-${OS}-${ARCH}"
chmod +x "./walrus-cli-${OS}-${ARCH}"
sudo mv "./walrus-cli-${OS}-${ARCH}" /usr/local/bin/walrus
```

### Install Walrus CLI Using Walrus UI

You can download the Walrus CLI from the Walrus UI.

1. Log in to Walrus and click `Download` in the navigation bar.
2. Download the CLI suitable for your operating system.
3. Make the CLI executable and move it to the system path.

## Verify Installation

After installation, run `walrus version`  to check the current version and ensure that the installation is successful.

## Use Walrus CLI

### Get API Key

1. Log in to Walrus and click `Account` -> `User Information` in the navigation bar.
2. Enter the `API Keys` tab and click the `New Key` button
3. Set `Name` and `Expiration` for the key, then click `Save`.
4. Copy the generated token and save it properly for later use.

### Configure CLI

1. Run `walrus login` in the terminal.
2. Input the server address, token, project, and environment. The token is the API key generated in the previous step.
3. After the configuration is complete, run `walrus project list` to verify access to the server and retrieve the list of projects.
4. Use `walrus --help` at any time to view help when using the CLI.

For more detailed explanations of CLI commands, refer to the [CLI documentation](category/cli).