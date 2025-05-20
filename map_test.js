import { assertEquals } from "jsr:@std/assert";
import { squaresOf } from "./map.js";

Deno.test("square of empty array", () => {
  assertEquals(squaresOf([]), []);
});

Deno.test("squares of 1 array ", () => {
  assertEquals(squaresOf([1]), [1]);
});
