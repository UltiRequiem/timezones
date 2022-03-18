import { randomTimeZone } from "./mod.ts";

import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";

Deno.test("randomTimeZone", () => {
  const timeZone = randomTimeZone();
  assertEquals(typeof timeZone, "string");
});
