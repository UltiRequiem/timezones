# timezones

All the possible timezones existing.

> Based on [this StackOverflow Question](https://stackoverflow.com/questions/38399465)

## Usage

### Deno 🚀

```ts
import { randomTimeZone, timeZones } from "./mod.ts";

console.log(`My timezone is ${randomTimeZone()}`);

const date = new Date();

timeZones.forEach((timeZone) => {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
});
```

### Node.js 🐢

You have exactly the same API

```js
import timeZone, { randomTimeZone } from "@ultirequiem/timezones";
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

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🚀

Don't forget to start the repo ⭐

## Notes

This was done mainly because [Timero](https://github.com/UltiRequiem/timero).

## Licence

Licensed under the MIT License.
