import Fuse from "https://esm.sh/fuse.js@6.6.2/";
import { Command } from "https://deno.land/x/cliffy@v0.25.2/command/mod.ts";
import {
  bgBlue,
  bgGreen,
  black,
} from "https://deno.land/std@0.158.0/fmt/colors.ts";

import { randomTimeZone, type TimeZone, timeZones } from "./mod.ts";

const list = new Command()
  .description("List all time zones")
  .action(() => timeZones.forEach(printTime));

const random = new Command()
  .description("Random time zone")
  .action(() => printTime(randomTimeZone()));

await new Command()
  .name("timezones")
  .action(main)
  .version("1.2.2")
  .description("Get the time in a time zone.")
  .command("list", list)
  .command("random", random)
  .parse(Deno.args);

function main() {
  const fuse = new Fuse(timeZones);

  const input = prompt(bgBlue("Enter a time zone: "));

  if (!input) {
    return console.log("Input is required.");
  }

  const [{ item }] = fuse.search(input);

  printTime(item);
}

function printTime(timeZone: TimeZone) {
  const date = new Date();

  const timeInThere = date.toLocaleString("en-US", { timeZone });

  console.log(bgGreen(black(`In ${timeZone} it is ${timeInThere}.`)));
}
