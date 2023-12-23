import { ExternalLink } from "@/components/Links.tsx";
export function Social() {
  return (
    <>
      <div className="mt-[10px] p-3 grid grid-cols-2 place-items-center gap-5 grid-flow-row auto-rows-max grid-">
        <ExternalLink
          aria-label="Mastodon"
          href="https://mastodon.online/@iam0day"
          className="text-center w-full  rounded-md bg-indigo-600 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Mastodon
        </ExternalLink>
        <ExternalLink
          aria-label="X"
          href="https://link.iam0.day/x"
          className="text-center w-full   rounded-md bg-white uppercase m-3 px-3.5 py-2.5 text-base font-bold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Twitter/X
        </ExternalLink>
        <ExternalLink
          aria-label="Instagram"
          href="https://www.instagram.com/iam0day"
          className="text-center w-full  rounded-md bg-purple-500 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-black shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Instagram
        </ExternalLink>
        <ExternalLink
          aria-label="Telegram"
          href="https://link.iam0.day/telegram"
          className="text-center w-full   rounded-md bg-blue-600 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Telegram
        </ExternalLink>
        <ExternalLink
          aria-label="WhatsApp"
          href="https://whatsapp.com/channel/0029Va8wQcF4SpkCjBO4J43S"
          className="text-center w-full   rounded-md bg-green-600 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          WhatsApp
        </ExternalLink>
        <ExternalLink
          aria-label="Github"
          href="https://github.com/iamOday/iam0day"
          className="text-center w-full   rounded-md bg-gray-600 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Github
        </ExternalLink>
        <ExternalLink
          aria-label="Codeberg"
          href="https://codeberg.org/iamOday/iam0day"
          className="text-center w-full   rounded-md bg-indigo-600 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Codeberg
        </ExternalLink>
        <ExternalLink
          aria-label="Dribbble"
          href="https://dribbble.com/iam0day"
          className="text-center w-full   rounded-md bg-pink-600 uppercase m-3 px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          Dribbble
        </ExternalLink>
      </div>
    </>
  );
}
