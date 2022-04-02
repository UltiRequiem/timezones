import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

buildPackage({
  repoName: "timezones",
  name: "@ultirequiem/timezones",
  description: "All possible timezones and utils around it.",
  homepage: "https://timezones.js.org",
  keywords: ["timezones", "time", "date"],
  license: "MIT",
  version: "1.2.0",
});