import { expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { KOAN_VALUE } from "../src/koans/utils.ts";

expect.extend({
  toMatchKoan(received: HTMLElement | HTMLElement[]) {
    const expected = KOAN_VALUE;

    if (Array.isArray(received)) {
      if (received.length === 0) {
        return {
          pass: false,
          message: () =>
            `Expected ${received} to be an array with at least one element`,
        };
      }

      for (let i = 0; i < received.length; i++) {
        const element = received[i];

        if (!(element instanceof HTMLElement)) {
          return {
            pass: false,
            message: () => `Expected ${element} to be an HTMLElement`,
          };
        }

        const koan = element.getAttribute("data-koan");

        if (koan !== expected) {
          return {
            pass: false,
            message: () =>
              `Expected element at index ${i} ${element} to match koan ${expected}`,
          };
        }
      }

      return {
        pass: true,
        message: () => `Expected ${received} not to match koan ${expected}`,
      };
    }

    if (!(received instanceof HTMLElement)) {
      return {
        pass: false,
        message: () => `Expected ${received} to be an HTMLElement`,
      };
    }

    const koan = received.getAttribute("data-koan");

    if (koan === expected) {
      return {
        pass: true,
        message: () => `Expected ${received} not to match koan ${expected}`,
      };
    } else {
      return {
        pass: false,
        message: () => `There was no interaction!`,
      };
    }
  },
});
