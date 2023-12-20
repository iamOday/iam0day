import type { Plugin } from "$fresh/server.ts";
import { RickRolledYoutube } from "@/components/RickRolledYoutube.tsx";
export default {
  name: "rickrolled",
  routes: [
    { path: "/.git", component: RickRolledYoutube },
  ],
} as Plugin;
