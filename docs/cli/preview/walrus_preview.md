# walrus preview

Generate or apply resource previews using the provided file path or folder.

```
walrus preview [flags]
```

## Examples

```
  # Generate preview of the configuration in the walrus-file.yaml 
  $ walrus preview -f walrus-file.yaml --run-labels key=value

  # Generate preview of yaml files from a directory
  $ walrus preview -f dir/ --run-labels key=value

  # Generate preview of yamls files from a directory recursively
  $ walrus preview -f dir/ --recursive --run-labels key=value

  # Generate preview of yaml files with a specific project/environment
  $ walrus preview -f dir/ --run-labels key=value -p my-project -e my-environment 

  # Apply generated preview with specific labels
  $ walrus preview -f walrus-file.yaml --run-labels key=value --apply

```

## Options

```
      --apply                       Apply previews with the provided labels
      --change-comment string       Add comment to previews
  -e, --environment string          Environment for default use
  -f, --filenames strings           File path or folder path
  -p, --project string              Project for default use
  -r, --recursive                   Recursive apply
      --run-labels stringToString   Labels for resource runs (default [])
      --timeout int                 Timeout in seconds for the wait operation (default 300)
      --validate-parameters-set     Validate all parameters set
      --wait                        Wait for the operation to complete
```

## Options inherited from parent commands

```
  -d, --debug   Enable debug log
  -h, --help    Help for this command
```

## SEE ALSO

* [walrus](../walrus)	 - Command line interface for Walrus

