import { HeadElement } from "@/components/HeadElement.tsx";
import { ExternalLink, Script } from "@/components/Links.tsx";
import { $umami } from "@/utils/constants.ts";
import { defineApp } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default defineApp((_, ctx) => {
  return (
    <html lang="en" class="scroll-smooth">
      <HeadElement url={ctx.url} title="iam0day">
        <Script
          async="true"
          rel="prefetch"
          href={$umami.origin}
          src={$umami.origin + $umami.script}
          data-website-id={$umami.id}
          integrity={$umami.integrity}
        />
      </HeadElement>
      <body className="relative bg-black text-white font-mono antialiased text-base tracking-normal whitespace-normal">
        <ctx.Component />
        <footer
          className="sticky grid place-items-center text-center py-5"
          data-nosnippet
        >
          <ExternalLink href="https://fresh.deno.dev" class="py-3">
            <img
              width="197"
              height="37"
              src={asset("/fresh-badge.svg")}
              title="Fresh"
              alt="Deno Fresh"
              loading="lazy"
            />
          </ExternalLink>
          <p class="py-3 text-xs md:text-base mx-3">
            This site uses{" "}
            <ExternalLink
              href="https://analytics.eu.umami.is/share/GvIJ3m2AYWS1wBys/iam0day"
              class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"
            >
              Umami Cloud
            </ExternalLink>{" "}
            for visit analysis, it is{" "}
            <ExternalLink
              href="https://umami.is/privacy"
              class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-500"
            >
              privacy friendly
            </ExternalLink>!
          </p>
          <a href="/csp" class="hidden">csp</a>
        </footer>
      </body>
    </html>
  );
});
