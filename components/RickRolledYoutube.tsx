import { HeadElement } from "@/components/HeadElement.tsx";
import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
export function RickRolledYoutube(props: PageProps) {
  const { url } = props;
  const rickroll = url!.origin + asset("/rickroll.gif");
  return (
    <>
      <HeadElement
        url={url}
        title="Rickrolling"
        description="Never Gonna Give You Up"
      >
        <link
          key={"preconnect" + rickroll}
          rel="preconnect"
          href={rickroll}
          crossOrigin="anonymous"
        />
        <link
          key={"dnsprefetch_" + rickroll}
          rel="dns-prefetch"
          href={rickroll}
        />
        <link
          rel="preload"
          as="image"
          href={rickroll}
          fetchPriority="high"
          crossOrigin="anonymous"
        />
      </HeadElement>
      <div
        class="grid grid-cols-1 gap-1 place-items-center content-center grid-flow-row auto-rows-max grid- h-screen"
        data-nosnippet="true"
      >
        <img
          loading="lazy"
          fetchPriority="high"
          width="100%"
          height="100vh"
          src={rickroll}
          title="Rick Roll"
          alt="Rickrolling: Never Gonna Give You Up"
          className="fixed h-screen"
          crossOrigin="anonymous"
        />
        <span class="fixed grid grid-column place-items-center h-screen font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Rick Roll... Rickrolling!
        </span>
      </div>
    </>
  );
}
