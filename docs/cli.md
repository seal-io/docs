# CLI

Walrus CLI is the command line interface for interacting with the Walrus Server.

## Download and Install

Walrus supports downloading the Walrus CLI from the Github Releases page or directly from the Walrus Server.

### Install Walrus CLI from Github Repository

#### Install Walrus CLI on Mac

- arm64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-darwin-arm64
chmod +x ./walrus-cli-darwin-arm64
sudo mv ./walrus-cli-darwin-arm64 /usr/local/bin/walrus
sudo chown root: /usr/local/bin/walrus
```

- amd64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-darwin-amd64
chmod +x ./walrus-cli-darwin-amd64
sudo mv ./walrus-cli-darwin-amd64 /usr/local/bin/walrus
sudo chown root: /usr/local/bin/walrus
```

#### Install Walrus CLI on Linux

- arm64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-linux-arm64
chmod +x ./walrus-cli-linux-arm64
sudo mv ./walrus-cli-linux-arm64 /usr/local/bin/walrus
sudo install -o root -g root -m 0755 walrus /usr/local/bin/walrus
```

- amd64

```bash
curl -fLO https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-linux-amd64
chmod +x ./walrus-cli-linux-amd64
sudo mv ./walrus-cli-linux-amd64 /usr/local/bin/walrus
sudo install -o root -g root -m 0755 walrus /usr/local/bin/walrus
```

### Install Walrus CLI from Walrus Server

Walrus Server supports downloading the CLI version corresponding to the current Server.

1. In the Walrus left sidebar, find `Download`.
2. Go to the download page and download the required CLI.
3. Refer to the above Mac and Linux installation commands from the Github Release to run.

For example, for Mac arm64, after downloading:

```bash
chmod +x ./walrus-cli-darwin-arm64
sudo mv ./walrus-cli-darwin-arm64 /usr/local/bin/walrus
sudo chown root: /usr/local/bin/walrus
```

## Verify Installation

After installation, run `walrus version`  to check the current version and ensure that the installation is successful.

## Quick Configuration

1. Go to Walrus Server, click on the left sidebar `Account`.
2. Enter `API Keys`, click on `New Key`, and copy the key.
3. Run the command `walrus login` in the terminal, input the server address, token, project, and environment.
4. After configuration, run `walrus project list` to verify access to the server and retrieve the list of projects.
5. Use `walrus --help` at any time to view help during Walrus CLI usage.
For more detailed explanations of CLI subcommands, refer to the detailed CLI documentation.