# walrus delete

Delete resource using the provided file path or folder.

```
walrus delete [flags]
```

## Examples

```
  # Delete the configuration in the walrus-file.yaml 
  $ walrus delete -f walrus-file.yaml

  # Delete configurations from a directory containing yaml files
  $ walrus delete -f dir/

  # Delete configurations from a directory recursively
  $ walrus delete -f dir/ --recursive

  # Delete configurations with a specific project/environment
  $ walrus delete -f dir/ -p my-project -e my-environment

```

## Options

```
  -e, --environment string        Environment for default use
  -f, --filenames strings         File path or folder path
  -p, --project string            Project for default use
  -r, --recursive                 Recursive apply
      --timeout int               Timeout in seconds for the wait operation (default 300)
      --validate-parameters-set   Validate all parameters set
      --wait                      Wait for the operation to complete
```

## Options inherited from parent commands

```
  -d, --debug   Enable debug log
  -h, --help    Help for this command
```

## SEE ALSO

* [walrus](../walrus)	 - Command line interface for Walrus

