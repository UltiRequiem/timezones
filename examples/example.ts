import { randomTimeZone, timeZones } from "../src/index.js";

console.log(`My timezone is ${randomTimeZone()}.`);

const date = new Date();

for (const timeZone of timeZones) {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
}
