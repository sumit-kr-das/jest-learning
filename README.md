# Jest

## What is Jest ?

- Most popular Javascript/Typescript testing fremwork developed by Facebook.
- Test runner: Set of global functions such as describe, test, expect
- Assertion library: Powerful set of matchers
- All in one sulution(test runner, assertions, matchers)

## Installation

Jest requires [Node.js](https://nodejs.org/) letesr version to run.

Initialize the project using npm.

```sh
npm init -Y
```

Install all the necessary dev dependies

```sh
npm i -D typescript ts-node  jest ts-jest @types/jest
```

Config a file for jest

```sh
npx ts-jest config:init
```

or create a file manually named `jest.config.ts` & write the script

```ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest" /* jest understand ts code */,
  testEnvironment: "node" /* which test environment we are using */,
  verbose: true /* it show us more info in the console */,
};

export default config;
```
