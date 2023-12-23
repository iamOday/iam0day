import { type PageProps } from "$fresh/server.ts";
import { Social } from "@/components/Social.tsx";
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
  //const { url } = props;
  return (
    <>
      <div
        className="grid grid-cols-1 gap-1 place-items-center  content-center grid-flow-row auto-rows-max grid- h-screen"
        data-nosnippet
      >
        <div className="text-center">
          <h1 className="font-bold tracking-tight text-white-900 text-4xl md:text-5xl">
            Coming soon...
          </h1>
          <Social />
        </div>
      </div>
    </>
  );
}
