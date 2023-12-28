#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "@/fresh.config.ts";
import manifest from "@/fresh.gen.ts";
import { mapKeys } from "$std/collections/map_keys.ts";
import { screenshot } from "@/utils/screenshot.ts";
import "$std/dotenv/load.ts";
mapKeys(
  manifest.routes,
  (key) => (!key.includes("_") && screenshot({
    _href: "http://localhost:8000/",
    _path: key.replace("./routes/", "").replace(".tsx", ""),
    _dir: "static/i/s/",
  })),
);
await dev(import.meta.url, "@/main.ts", config);
