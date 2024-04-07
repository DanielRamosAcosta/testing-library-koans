/* eslint-disable */
import type { Assertion, AsymmetricMatchersContaining } from "vitest";

interface CustomMatchers<R = unknown> {
  toMatchKoan: () => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
