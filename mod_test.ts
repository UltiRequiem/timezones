import { randomTimeZone, timeZones } from "./mod.ts";

const date = new Date();

Deno.test("All time zones are valid.", () => {
  for (const timeZone of timeZones) {
    // If is not a valid timezone it will throw an error
    date.toLocaleString("en-US", { timeZone });
  }
});

Deno.test("A random time zone is valid.", () => {
  date.toLocaleString("en-US", { timeZone: randomTimeZone() });
});
