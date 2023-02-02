import { randomTimeZone, timeZones } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.175.0/testing/asserts.ts";

const date = new Date();

Deno.test("All time zones are valid.", () => {
  for (const timeZone of timeZones) {
    // All timezones are strings.
    assertEquals(typeof timeZone, "string");

    // If is not a valid timezone it will throw an error
    date.toLocaleString("en-US", { timeZone });
  }
});

Deno.test("A random time zone is valid.", () => {
  const timeZone = randomTimeZone();

  assertEquals(typeof timeZone, "string");

  date.toLocaleString("en-US", { timeZone });
});
