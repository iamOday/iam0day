import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const origin: string = req.headers.get("Origin") || ctx.url.origin;
  const resp = await ctx.next();
  const headers = resp.headers;
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  if (req.method == "OPTIONS") {
    const resp = new Response(null, {
      status: 204,
    });
    headers.set("Access-Control-Allow-Methods", "DELETE");
  } else {
    headers.set(
      "Access-Control-Allow-Methods",
      "POST, OPTIONS, GET, PUT, DELETE",
    );
  }
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  );
  const ct = headers.get("content-type");
  const okct: string | null = !ct?.includes("image/vnd.microsoft.icon") &&
      ct?.replace("; charset=utf-8", "") + "; charset=utf-8" || ct;
  headers.set("Content-Type", okct);
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Clear-Site-Data", '"cache", "cookies", "storage"');
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("X-DNS-Prefetch-Control", "off");
  headers.set("Cache-Control", "no-cache");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  headers.set("Cross-Origin-Resource-Policy", "same-site");
  headers.set("Server", "webserver");
  headers.set(
    "X-Robots-Tag",
    "index, noarchive, notranslate",
  );
  headers.set(
    "Permissions-Policy",
    "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), clipboard-read=(), clipboard-write=(), gamepad=(), hid=(), idle-detection=(), serial=(), window-management=()",
  );
  return resp;
}
