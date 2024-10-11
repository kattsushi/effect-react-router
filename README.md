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

```typescript

// lib/server-runtime.ts

import { makeRuntime } from "@kattsushi/effect-react-router";
const layers = Layer.empty

export const { withLoaderEffect, withActionEffect } = makeRuntime(layers)

// routes/home.tsx

import type * as Route from "./+types.home";
import { Ok, LoaderArgsContext } from "@kattsushi/effect-react-router";
import { withLoaderEffect } from "~/lib/server-runtime";
import * as T from "effect/Effect" 

export const loader = withLoaderEffect(
  T.gen(function* () {
    const { request } = yield* LoaderArgsContext
    yield* T.log("request", request)
    return yield* T.succeed(new Ok({ data: { hellow: 'world' }}))
  })
)

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(loaderData.data, null, 2)}</pre>
    </div>
  )
}
```

# License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.
