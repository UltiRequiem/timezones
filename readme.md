# timezones

> Possibles timezones

## Usage

```typescript
import timeZones, {
  randomTimeZone,
} from "https://deno.land/x/timezones/mod.ts";

console.log(`My timezone is ${randomTimeZone()}`);

const date = new Date();

timeZones.forEach((timeZone) => {
  console.log(timeZone, date.toLocaleString("en-US", { timeZone }));
});
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
