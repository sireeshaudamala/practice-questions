import { assertEquals } from "jsr:@std/assert";
import { filterEvenNumbers } from "./filter.js";

Deno.test("evens of empty array", () => {
  assertEquals(filterEvenNumbers([]), []);
});

Deno.test("evens of 2 numbers", () => {
  assertEquals(filterEvenNumbers([1, 2]), [2]);
});

Deno.test(assertEquals(filterEvenNumbers([]), []));
