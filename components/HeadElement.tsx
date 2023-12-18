import { Head } from "$fresh/runtime.ts";
import { SITE } from "@/utils/constants.ts";
import { asset } from "$fresh/runtime.ts";
import { Style } from "@/components/Links.tsx";
import { ComponentChildren } from "preact";
/**
 * The line `export type HeadProps = {` is defining a type called `HeadProps`. This type is an object type that specifies the structure of the object that can be passed as an argument to the `HeadElement` function. It has three properties: `url`, `title`, and `description`, all of which are optional.
 *
 * @typedef
 * @name HeadProps
 * @kind variable
 * @exports
 */

export interface MetaProps {
  /** Title of the current page */
  title?: string;
  /** Description of the current page */
  description?: string;
  /** URL of the current page */
  href?: string;
  url?: string;
}

export type HeadProps =
  & Partial<Omit<MetaProps, "href">>
  & Pick<MetaProps, "href">
  & {
    children?: ComponentChildren;
  };

export function HeadElement(props: HeadProps) {
  const { url, title, description } = props;
  const name = title || SITE.title;
  const text = description || SITE.description;
  const image = url!.origin + asset("/iam0.day.png");
  const css = url!.origin + asset("/styles.css");
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": name,
    "url": url!.origin,
    "sameAs": [
      "https://mastodon.online/@iam0day",
      "https://link.iam0.day/x",
      "https://www.instagram.com/iam0day/",
      "https://link.iam0.day/telegram",
      "https://whatsapp.com/channel/0029Va8wQcF4SpkCjBO4J43S",
      "https://github.com/iamOday/iam0day",
      "https://codeberg.org/iamOday/iam0day",
      "https://dribbble.com/iam0day",
    ],
  };
  return (
    <Head>
      {/* Base Information */}
      <meta key="charset" charSet="UTF-8" />
      <title key="title">{name} {text && "- " + text}</title>
      <meta key="description" name="description" content={url!.hostname + ': ' +text} />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        key="robots"
        name="robots"
        content="index, noarchive, notranslate"
      />
      <meta
        key="keywords"
        name="keywords"
        content="0day, iam0day, security, cybersecurity"
      />
      {/* Google / Search Engine Tags */}
      <meta key="itempropname" itemProp="name" content={name} />
      <meta key="itempropdescription" itemProp="description" content={text} />
      <meta key="itempropimage" itemProp="image" content={image} />
      {/* Open Meta Tags */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={name} />
      <meta key="og:locale" property="og:locale" content="en" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={name} />
      <meta key="og:description" property="og:description" content={text} />
      <meta key="og:url" property="og:url" content={url!.href} />
      <meta key="og:image" property="og:image" content={image} />
      {/* Twitter Meta Tags */}
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:domain"
        property="twitter:domain"
        content={url?.hostname}
      />
      <meta key="twitter:url" property="twitter:url" content={url?.href} />
      <meta key="twitter:title" name="twitter:title" content={name} />
      <meta key="twitter:site" name="twitter:site" content={"@" + name} />
      <meta key="twitter:site:id" property="twitter:site:id" content="0" />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={text}
      />
      <meta key="twitter:image" name="twitter:image" content={image} />
      <meta
        key="twitter:image:alt"
        name="twitter:image:alt"
        content={name + " - " + text}
      />
      {/* Structured Data */}
      <script
        key="ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      {/* Styles */}
      <Style key="styles" href={css} as="style" />
      {/* Link Element */}
      <link
        key={"canonical_" + url?.origin}
        rel="canonical"
        href={url?.origin}
      />
      <link
        key={"preconnect_" + url?.origin}
        rel="preconnect"
        href={url?.origin}
        crossOrigin
      />
      <link
        key={"dnsprefetch_" + url?.origin}
        rel="dns-prefetch"
        href={url?.origin}
      />
      {/* Other Meta */}
      <meta
        name="ahrefs-site-verification"
        content="756b79c126714f94348746ad8d87f1c39972a2194ae19d7539eba0b226e8ff18"
      />
      <meta
        name="ahrefs-site-verification"
        content="82420be851982da7f9ec7de92a67ad1d46adebf29cefa4754403d71a7d8779d4"
      />
      {
        /*<meta
            httpEquiv="Content-Security-Policy"
            content="require-trusted-types-for 'script';default-src 'none';script-src 'strict-dynamic' 'nonce-rAnd0m123' https: 'unsafe-inline';script-src-elem 'self' https://analytics.eu.umami.is 'unsafe-inline';script-src-attr 'self' https://analytics.eu.umami.is 'unsafe-inline';style-src 'self';style-src-elem 'self' https://analytics.eu.umami.is 'unsafe-inline';style-src-attr 'self' 'unsafe-inline';img-src 'self';font-src 'self';connect-src 'self' https://analytics.eu.umami.is;media-src 'self';object-src 'none';child-src 'self';frame-src 'none';worker-src 'self';form-action 'none';block-all-mixed-content;upgrade-insecure-requests;base-uri 'none';"
            />*/
      }
      <meta name="referrer" content="no-referrer" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Permitted-Cross-Domain-Policies" content="none" />
      <meta
        httpEquiv="Referrer-Policy"
        content="no-referrer"
      />
      <meta http-equiv="x-dns-prefetch-control" content="off" />
      <meta
        httpEquiv="Strict-Transport-Security"
        content="max-age=63072000; includeSubDomains; preload"
      />
      <meta httpEquiv="Cache-Control" content="no-store" />
      <meta httpEquiv="Clear-Site-Data" content="*" />
      <meta
        httpEquiv="Permissions-Policy"
        content="accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=(), clipboard-read=(), clipboard-write=(), gamepad=(), speaker-selection=(), conversion-measurement=(), focus-without-user-activation=(), hid=(), idle-detection=(), interest-cohort=(), serial=(), sync-script=(), trust-token-redemption=(), window-management=(), vertical-scroll=()"
      />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta
        httpEquiv="Cross-Origin-Embedder-Policy"
        content="require-corp"
      />
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-site" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="grey"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="black"
      />
      {/* Other Element */}
      {props.children}
    </Head>
  );
}
