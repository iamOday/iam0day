import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import { HeadElement } from "@/components/HeadElement.tsx";
import { type PageProps } from "$fresh/server.ts";

export default function CSP(props: PageProps) {
  const { url } = props;
  const script = url!.origin + asset("/ok.js");
  useCSP((csp) => {
    if (!csp.directives.scriptSrc) {
      csp.directives.scriptSrc = [];
    }
    csp.directives.scriptSrc.push(script);
  });
  return (
    <>
      <HeadElement title="CSP" url={url} />
      <h1>This page adheres to our configured CSP. Styles will be applied.</h1>
      <script src={script}></script>
    </>
  );
}

export const config: RouteConfig = {
  csp: true,
};
