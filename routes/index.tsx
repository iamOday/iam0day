import { ExternalLink } from "@/components/Links.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

/**
 * The `export default function Home(props: PageProps) {` statement is exporting a default function named `Home`. This function takes in a parameter `props` of type `PageProps`. The function is used to render the home page of the website.
 *
 * @function
 * @name Home
 * @kind function
 * @param {PageProps} props
 * @returns {JSXInternal.Element}
 * @exports
 */
export default function Home(props: PageProps) {
  const { url } = props;
  return (
    <>
      <HeadElement url={url} title="HomePage" />
      <div
        className="grid grid-column place-items-center h-screen"
        data-nosnippet
      >
        <div className="text-center">
          <h1 className="font-bold tracking-tight text-white-900 text-4xl md:text-5xl">
            Coming soon...
          </h1>
          <div className="mt-10 grid grid-flow-row-dense grid-cols-2 grid-rows-2">
            <ExternalLink
              aria-label="Mastodon"
              href="https://mastodon.online/@iam0day"
              class="rounded-md bg-indigo-600 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Mastodon
            </ExternalLink>
            <ExternalLink
              aria-label="X"
              href="https://link.iam0.day/x"
              class="rounded-md bg-white uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Twitter/X
            </ExternalLink>
            <ExternalLink
              aria-label="Instagram"
              href="https://www.instagram.com/iam0day"
              class="rounded-md bg-purple-500 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Instagram
            </ExternalLink>
            <ExternalLink
              aria-label="Telegram"
              href="https://link.iam0.day/telegram"
              class="rounded-md bg-blue-600 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Telegram
            </ExternalLink>
            <ExternalLink
              aria-label="WhatsApp"
              href="https://whatsapp.com/channel/0029Va8wQcF4SpkCjBO4J43S"
              class="rounded-md bg-green-600 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              WhatsApp
            </ExternalLink>
            <ExternalLink
              aria-label="Github"
              href="https://github.com/iamOday/iam0day"
              class="rounded-md bg-gray-600 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Github
            </ExternalLink>
            <ExternalLink
              aria-label="Codeberg"
              href="https://codeberg.org/iamOday/iam0day"
              class="rounded-md bg-indigo-600 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Codeberg
            </ExternalLink>
            <ExternalLink
              aria-label="Dribbble"
              href="https://dribbble.com/iam0day"
              class="rounded-md bg-pink-600 uppercase m-3 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Dribbble
            </ExternalLink>
          </div>
        </div>
      </div>
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
            alt="fresh"
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
      </footer>
    </>
  );
}
