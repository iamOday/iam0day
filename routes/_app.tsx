import { HeadElement } from "@/components/HeadElement.tsx";
import { Script } from "@/components/Links.tsx";
import { $umami } from "@/utils/constants.ts";
import { defineApp } from "$fresh/server.ts";

export default defineApp((_, ctx) => {
  return (
    <html lang="en" style="scroll-behavior:smooth">
      <HeadElement url={ctx.url} title="iam0day">
        <Script
          async
          href={$umami.origin}
          src={$umami.origin + $umami.script}
          data-website-id={$umami.id}
          integrity={$umami.integrity}
          crossOrigin="anonymous"
        />
      </HeadElement>
      <body className="relative bg-black text-white font-mono antialiased text-base tracking-normal whitespace-normal">
        <ctx.Component />
      </body>
    </html>
  );
});
