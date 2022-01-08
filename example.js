import timeZones, { randomTimeZone } from "./mod.js";

console.log(`My timezone is ${randomTimeZone()}`);

const date = new Date();

timeZones.forEach((timeZone) => {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
});
