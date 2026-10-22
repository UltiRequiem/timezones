# timezones

Every JavaScript time zone, plus a random one.

[![npm](https://img.shields.io/npm/v/@ultirequiem/timezones?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/timezones)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/timezones?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/timezones)
[![CI](https://github.com/UltiRequiem/timezones/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/timezones/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/timezones/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/timezones)

> Based on
> [this StackOverflow Question](https://stackoverflow.com/questions/38399465)

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import {
  randomTimeZone,
  timeZones,
} from "@ultirequiem/timezones";

console.log(`My timezone is ${randomTimeZone()}.`);

const date = new Date();

for (const timeZone of timeZones) {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
}
```

## Documentation

For more examples checkout [Timero](https://github.com/UltiRequiem/timero) and
the [CLI Tool](./timezones.ts).

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

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
