import { HeadElement } from "@/components/HeadElement.tsx";
import { InternalButton } from "@/components/Links.tsx";
import { ErrorPageProps } from "$fresh/server.ts";
import { screenshot } from "@/utils/screenshot.ts";
/**
 * Description
 * @function
 * @name Error500Page
 * @kind function
 * @param {ErrorPageProps} { error }
 * @returns {JSXInternal.Element}
 * @exports
 */
export default function Error500Page({ error, url }: ErrorPageProps) {
  screenshot({
    _href: url!.href,
    _path: url!.pathname.replace("/", ""),
    _dir: "static/i/r/",
    _date: true,
  });
  return (
    <>
      <HeadElement url={url} description="Internal Server Error" />
      <section class="isolate grid place-items-center h-screen">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
            Internal Server Error: {(error as Error).message}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            The page you were looking for errors.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <InternalButton href="/" class="underline">
              Go back home
            </InternalButton>
          </div>
        </div>
      </section>
    </>
  );
}
