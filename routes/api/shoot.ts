import { Handlers } from "$fresh/server.ts";
import { screenshot as _shoot } from "@/utils/screenshot.ts";
type Shoot = {
  url: string;
};
export const handler: Handlers<Shoot | null> = {
  async GET(req, _ctx) {
    const origin = new URL(req.url).searchParams.get("url");
    const url = new URL(origin);
    const path = url!.pathname;
    const link = await _shoot({
      href: url!.href,
      path: path === "/" ? "index" : path.replace("/", ""),
      dir: "static/p/",
    });
    return Response.json({ origin: url!.origin, file: link });
  },
};
