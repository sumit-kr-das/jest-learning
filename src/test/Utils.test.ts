/* */

import { toUpperCase } from "../app/Utils";

/* Describe function can group different test together */
describe("Utils test suite", () => {
  test("should return uppercase", () => {
    const result = toUpperCase("abc");

    /* It is an assertion */
    expect(result).toBe("ABC");
  });
});
