# walrus completion bash

Generate the autocompletion script for bash

## Synopsis

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

	source <(walrus completion bash)

To load completions for every new session, execute once:

#### Linux:

	walrus completion bash > /etc/bash_completion.d/walrus

#### macOS:

	walrus completion bash > $(brew --prefix)/etc/bash_completion.d/walrus

You will need to start a new shell for this setup to take effect.


```
walrus completion bash
```

## Options

```
      --no-descriptions   disable completion descriptions
```

## Options inherited from parent commands

```
  -d, --debug   Enable debug log
  -h, --help    Help for this command
```

## SEE ALSO

* [walrus completion](walrus_completion)	 - Generate the autocompletion script for the specified shell

