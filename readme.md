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

## License

This project is licensed under the [MIT License](./LICENSE.md).
