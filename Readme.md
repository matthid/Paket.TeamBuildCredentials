# Paket.TeamBuildCredentials

Allows [Paket](https://fsprojects.github.io/Paket/) the alternative NuGet client to seamlessly access VSTS-NuGet feeds in the Team-Build infrastructure.
Provides two Tasks "Setup Paket credential manager" and "Paket credential manager cleanup" to allow paket to access the NuGet feed.
The second one is only to ensure that other tasks don't have access to your token, but you don't need it if you trust your developers and your build.

## Build

See Contribution.md

## How to

1. Build (see Contribution.md)
2. Install extension (upload on http://tfs.myserver:8080/tfs/_gallery/manage)
   See https://stackoverflow.com/questions/40810914/how-do-you-install-extension-vsix-files-to-tfs-2015-update-3
3. Setup build with the new Build task (add the "Setup Paket credential manager" before calling paket or your build script).

## Technical details

### We use the following projects

- Paket - https://github.com/fsprojects/Paket
  - To resolve our dependencies
- Fake - https://github.com/fsharp/FAKE/
  - For building the final package "Package" (the vsix), see `build.fsx`

### References

- reference for build tasks:
  - https://www.visualstudio.com/en-us/docs/integrate/extensions/develop/add-build-task
  - https://www.visualstudio.com/en-us/docs/integrate/extensions/develop/build-task-schema
  - https://github.com/Microsoft/vsts-tasks
