# timezones

> Possibles timezones

## Usage

Deno/Browser:

```javascript
import timeZones, {
  randomTimeZone,
} from "https://deno.land/x/timezones/mod.js";

console.log(`My timezone is ${randomTimeZone()}`);

const date = new Date();

timeZones.forEach((timeZone) => {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
});
```

In Node.js you have the same API:

```js
import timeZone, { randomTimeZone } from "@ultirequiem/timezones";
```

### CDN

- [jsdelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/timezones)

- [unpkg](https://unpkg.com/@ultirequiem/timezones)

- [github](https://raw.githubusercontent.com/UltiRequiem/timezones/main/mod.js)

## Note

Done mainly because [Timero](https://github.com/UltiRequiem/timero).

## License

This project is licensed under the [MIT License](./LICENSE.md).
