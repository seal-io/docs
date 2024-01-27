# walrus apply

Apply a configuration to a resource using the provided file path or folder.

```
walrus apply [flags]
```

## Examples

```
  # Apply the configuration in the walrus-file.yaml 
  $ walrus apply -f walrus-file.yaml

  # Apply configurations from a directory containing yaml files
  $ walrus apply -f dir/

  # Apply configurations from a directory recursively
  $ walrus apply -f dir/ --recursive

  # Apply configurations with a specific project/environment
  $ walrus apply -f dir/ -p my-project -e my-environment

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

