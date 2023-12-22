import { MiddlewareHandlerContext } from "$fresh/server.ts";

/**
 * The `export async function handler(_req: Request, ctx: MiddlewareHandlerContext)` is a function that serves as a middleware handler. It takes two parameters: `_req` which represents the incoming request, and `ctx` which represents the middleware handler context.
 *
 * @async
 * @function
 * @name handler
 * @kind function
 * @param {Request} _req
 * @param {MiddlewareHandlerContext} ctx
 * @returns {Promise<Response>}
 * @exports
 */
export async function handler(_req: Request, ctx: MiddlewareHandlerContext) {
  const resp = await ctx.next();
  const headers = resp.headers;
  const ct = headers.get("content-type");
  const okct = !ct?.includes("image/vnd.microsoft.icon") &&
      ct?.replace("; charset=utf-8", "") + "; charset=utf-8" || ct;
  headers.set("Content-Type", okct);
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  {
    /*headers.set(
    "Content-Security-Policy",
    `require-trusted-types-for 'script';default-src 'none'; script-src 'self' 'unsafe-inline' https://analytics.eu.umami.is; style-src 'self' 'strict-dynamic' https://analytics.eu.umami.is; style-src-elem 'self' 'unsafe-inline' https://analytics.eu.umami.is; style-src-attr 'self' 'unsafe-inline' https://analytics.eu.umami.is; img-src 'self'; font-src 'none'; connect-src 'self' https://analytics.eu.umami.is; media-src 'self'; object-src 'none'; child-src 'none'; frame-src 'none'; worker-src 'none'; frame-ancestors 'none'; form-action 'none'; upgrade-insecure-requests; block-all-mixed-content; base-uri 'none'; manifest-src 'none'`,
  );*/
  }
  headers.set("Access-Control-Allow-Origin", ctx.url!.origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Clear-Site-Data", '"*"');
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("X-DNS-Prefetch-Control", "off");
  headers.set("Cache-Control", "no-store");
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
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  );
  if (_req.method == "OPTIONS") {
    const opts = new Response(null, {
      status: 204,
    });
    const headers = opts.headers;
    headers.set("Access-Control-Allow-Methods", "DELETE");
    return opts;
  } else {
    headers.set(
      "Access-Control-Allow-Methods",
      "POST, OPTIONS, GET, PUT, DELETE",
    );
  }
  return resp;
}
