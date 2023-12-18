import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import manifest from "@/fresh.gen.ts";
import { freshSEOPlugin } from "https://deno.land/x/fresh_seo/mod.ts";

/**
 * `export default defineConfig({` is exporting the default configuration object for the Fresh framework. The `defineConfig` function is used to define the configuration for the Fresh framework. The configuration object includes various properties and settings that determine how the framework behaves and what plugins are used.
 *
 * @property
 * @name default
 * @kind variable
 * @type {FreshConfig}
 * @exports
 */
export default defineConfig({
  plugins: [tailwind(), freshSEOPlugin(manifest)],
});
