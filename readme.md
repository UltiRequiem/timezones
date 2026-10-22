# timezones

[![codecov](https://codecov.io/gh/ultirequiem/timezones/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/timezones)

A list with all the JavaScript possible timezones.

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

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

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
