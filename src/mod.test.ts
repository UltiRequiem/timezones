import { expect, it } from "vitest";
import { randomTimeZone, timeZones } from "./index.js";

const date = new Date();

it("All time zones are valid.", () => {
  for (const timeZone of timeZones) {
    // All timezones are strings.
    expect(typeof timeZone).toEqual("string");

    // If is not a valid timezone it will throw an error
    date.toLocaleString("en-US", { timeZone });
  }
});

it("A random time zone is valid.", () => {
  const timeZone = randomTimeZone();

  expect(typeof timeZone).toEqual("string");

  date.toLocaleString("en-US", { timeZone });
});
