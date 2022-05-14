import { randomTimeZone, timeZones } from "./mod.ts";

console.log(`My timezone is ${randomTimeZone()}.`);

const date = new Date();

for (const timeZone of timeZones) {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
}
