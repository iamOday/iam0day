import { HeadElement } from "@/components/HeadElement.tsx";
import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
export function RickRolledYoutube(props: PageProps) {
  return (
    <>
      <HeadElement
        url={props.url}
        title="Rickrolling"
        description="Never Gonna Give You Up"
      />
      <div class="grid grid-column place-items-center h-screen">
        <img
          width="100%"
          height="100vh"
          src={asset("/rickroll.gif")}
          title="Rick Roll"
          alt="Rickrolling: Never Gonna Give You Up"
          loading="lazy"
        />
        <span class="fixed grid grid-column place-items-center h-screen font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Rick Roll... Rickrolling!
        </span>
      </div>
    </>
  );
}
