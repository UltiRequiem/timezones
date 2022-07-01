import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage(
  {
    repoName: "timezones",
    name: "@ultirequiem/timezones",
    description: "All possible timezones and utils around it.",
    homepage: "https://timezones.js.org",
    keywords: ["timezones", "time", "date"],
    license: "MIT",
    version: "1.3.0",
  },
  {
    entryPoints: [
      "./mod.ts",
      { name: "timezones", path: "./timezones.ts", kind: "bin" },
    ],
    supportCJS: false,
    check: false,
    shims: { deno: true, prompts: true },
  },
);
