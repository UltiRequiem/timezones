import { build } from "https://deno.land/x/dnt/mod.ts";

await build({
  entryPoints: ["./mod.js"],
  outDir: "./node",
  shims: {
    deno: false,
  },
  package: {
    name: "@ultirequiem/timezones",
    version: Deno.args[0],
    description: "A list with all possible timezones",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/UltiRequiem/deno_timezones.git",
    },
    bugs: {
      url: "https://github.com/UltiRequiem/deno_timezones/issues",
    },
  },
});

await Deno.copyFile("license", "node/LICENSE");
await Deno.copyFile("readme.md", "node/README.md");
