# timezones

[![codecov](https://codecov.io/gh/ultirequiem/timezones/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/timezones)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/timezones/mod.ts)

A list with all the JavaScript possible timezones.

> Based on
> [this StackOverflow Question](https://stackoverflow.com/questions/38399465)

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/timezones)

```javascript
import {
  randomTimeZone,
  timeZones,
} from "https://deno.land/x/timezones/mod.ts";

console.log(`My timezone is ${randomTimeZone()}.`);

const date = new Date();

for (const timeZone of timeZones) {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
}
```

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/timezones)

```javascript
import { randomTimeZone, timeZones } from "@ultirequiem/timezones";
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/random-item) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/random-item)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/timezones/mod.ts) 📚

For more examples checkout [Timero](https://github.com/UltiRequiem/timero) and
the [CLI Tool](./timezones.ts).

## CLI

### Install

- **Deno 🎃**

```sh
deno install https://deno.land/x/timezones/timezones.ts
```

- **Node.js 🐼**

```sh
npm install -g @ultirequiem/timezones
```

### Usage

```sh
timezones --help
```

It includes `list`, `random` and a fuzzy search command!

[A binary for multiple platforms is provided too!](https://github.com/UltiRequiem/timezones/releases/latest)

[Video Showcase](https://youtu.be/8dUX5sPlAX4)

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Notes

This was done mainly because [Timero](https://github.com/UltiRequiem/timero).

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/timezones/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/timezones/tags) 🏷️

## Licence

Licensed under the MIT License 📄
