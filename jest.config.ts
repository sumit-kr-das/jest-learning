import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest" /* jest understand ts code */,
  testEnvironment: "node" /* which test environment we are using */,
  verbose: true /* show us more info in the console */,
};

export default config;
