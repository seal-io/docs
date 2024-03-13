# walrus completion zsh

Generate the autocompletion script for zsh

## Synopsis

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

	echo "autoload -U compinit; compinit" >> ~/.zshrc

To load completions in your current shell session:

	source <(walrus completion zsh)

To load completions for every new session, execute once:

#### Linux:

	walrus completion zsh > "${fpath[1]}/_walrus"

#### macOS:

	walrus completion zsh > $(brew --prefix)/share/zsh/site-functions/_walrus

You will need to start a new shell for this setup to take effect.


```
walrus completion zsh [flags]
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

