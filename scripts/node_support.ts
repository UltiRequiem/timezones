import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

buildPackage(
  {
    repoName: "timezones",
    name: "@ultirequiem/timezones",
    description: "All possible timezones and utils around it.",
    homepage: "https://timezones.js.org",
    keywords: ["timezones", "time", "date"],
    license: "MIT",
    version: "1.2.1",
  },
  {
    entryPoints: [
      "./mod.ts",
      { name: "timezones", path: "./timezones.ts", kind: "bin" },
    ],
    supportCJS: false,
    check: false,
    shims: { deno: "dev", prompts: true },
  },
);
