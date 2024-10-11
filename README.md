<p align="center">
  <img alt="[package]" src="public/[package].svg" width="100" />
</p>

# Overview

This repository is a library template.

> For any question please open an issue.

# Install

```bash
$ npm install [package]
$ yarn add [package]
$ pnpm add [package]
```

# Usage

Running `npm publish` would build "src/index.ts" and upload a pack with only following items:

- LICENSE
- README.md
- dist/index.d.mts
- dist/index.d.ts
- dist/index.js
- dist/index.mjs
- package.json

> Removing ESM definition types (dist/index.d.mts") is unnecessary!

## package.json

There's already a preconfigured entry point for both CJS & ESM. JSON file offers a preset with github repository, scripts, development dependencies and some useful empty fields to configure.

## Development dependencies

> It is highly recommended to install biome toolchain & prettier formatter as extensions in your IDE (text editor)!

Template includes [biome](https://biomejs.dev/), [prettier](https://prettier.io/), [tsup](https://tsup.egoist.dev/), [turbo](https://turbo.build/repo), [typescript](https://www.typescriptlang.org/) & [vitest](https://vitest.dev/) preinstalled. There're already a bunch of configs for them.

# License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.
