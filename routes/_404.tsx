import { HeadElement } from "@/components/HeadElement.tsx";
import { InternalButton } from "@/components/Links.tsx";
import { UnknownPageProps } from "$fresh/server.ts";
import { screenshot } from "@/utils/screenshot.ts";
/**
 * The line `export default function NotFoundPage({ url }: UnknownPageProps) {` is exporting a default function named `NotFoundPage`. This function takes an object as its parameter, which is destructured to extract the `url` property. The `url` property is of type `UnknownPageProps`.
 *
 * @function
 * @name NotFoundPage
 * @kind function
 * @param {UnknownPageProps} { url }
 * @returns {JSXInternal.Element}
 * @exports
 */
export default function NotFoundPage({ url }: UnknownPageProps) {
  screenshot({
    _href: url!.href,
    _path: url!.pathname.replace("/", ""),
    _dir: "static/i/r/",
    _date: true,
  });
  return (
    <>
      <HeadElement url={url} description="Page Not Found" />
      <section className="isolate grid place-items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
            Page not found: {url.pathname}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The page you were looking for doesn't exist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <InternalButton href="/" className="underline">
              Go back home
            </InternalButton>
          </div>
        </div>
      </section>
    </>
  );
}
