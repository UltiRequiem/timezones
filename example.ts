import { randomTimeZone, randomTimeZones, timeZones } from "./mod.ts";

console.log(`My timezone is ${randomTimeZone()}`);

const date = new Date();

timeZones.forEach((timeZone) => {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
});

const zonesGenerator = randomTimeZones();

for (let i = 0; i < 10; i++) {
  console.log(zonesGenerator.next().value);
}

for (const timeZone of randomTimeZones()) {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
}
