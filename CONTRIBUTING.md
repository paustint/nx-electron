# Contributing

- 👾 [Issue Tracker](https://github.com/bennymeg/nx-electron/issues),
- 📦 [Source Code](https://github.com/bennymeg/nx-electron/)

## How to Contribute

- fork the `nx-electron` package from github:
  - `git clone https://github.com/bennymeg/nx-electron.git`
  - `cd nx-electron`
- Install the dependencies in the root project and the `packages/nx-electron` project
- make your desired changes to your fork of the nx-electron repository
- Build the application
  - `npm run build`
- link the forked project:
  - `cd dist && cd packages && cd nx-electron && npm link`
- create a new test project and link your forked project into it:
  - `npx create-nx-workspace@13 nx-electron-test`
  - `cd nx-electron-test && npm link nx-electron`
  - `nx g nx-electron:app <electron-test-app-name> --frontendProject=<frontend-test-app-name>`
  - test your changes (e.g. serving, building, packaging, making, etc..)
  - If you need to make changes, re-build nx-electron so the files are available locally
- test the forked project and make sure it completes without any warnings
  - `npm run test`
- lint the forked project and make sure it completes without any warnings
  - `npm run lint`
- open a pull request
