# timezones

[![CI](https://github.com/ultirequiem/timezones/workflows/ci/badge.svg)](https://github.com/ultirequiem/timezones)
[![codecov](https://codecov.io/gh/ultirequiem/timezones/branch/main/graph/badge.svg?token=KEKZ52NXGP)](https://codecov.io/gh/ultirequiem/timezones)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/timezones/mod.ts)

![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fdep-count%2Fx%2Ftimezones%2Fmod.ts)
![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fx%2Ftimezones%2Fmod.ts)
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Ftimezones%2Fmod.ts)](https://doc.deno.land/https/deno.land/x/oak/mod.ts)

A list with all the JavaScript possible timezones.

> Based on
> [this StackOverflow Question](https://stackoverflow.com/questions/38399465)

## Usage

### [Deno 🚀](https://deno.land/x/timezones)

```ts
import {
  randomTimeZone,
  timeZones,
} from "https://deno.land/x/timezones/mod.ts";

console.log(`My timezone is ${randomTimeZone()}`);

const date = new Date();

timeZones.forEach((timeZone) => {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
});
```

### [Node.js 🐢](https://www.npmjs.com/package/@ultirequiem/timezones)

```ts
import { randomTimeZone, timeZone } from "@ultirequiem/timezones";
```

### Browser

Using
[type module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
🍱

- [esm.sh](https://esm.sh/@ultirequiem/timezones)

- [skypack](https://cdn.skypack.dev/@ultirequiem/timezones)

Using a plain
[script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) 👇

- [jsdelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/timezones)

- [unpkg](https://unpkg.com/@ultirequiem/timezones)

You have the same API on all of this platforms.

## Documentation

[Autogenerated Documentation](https://doc.deno.land/https://deno.land/x/timezones/mod.ts)
😎

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🚀

Don't forget to start [the repo](https://github.com/UltiRequiem/timezones) ⭐

## Notes

This was done mainly because [Timero](https://github.com/UltiRequiem/timero).

## Licence

Licensed under the MIT License.
