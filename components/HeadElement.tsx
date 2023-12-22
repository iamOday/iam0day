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
      <meta
        key="description"
        name="description"
        content={SITE.title + ": " + text + " | " + SITE.keywords}
      />
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
        content={SITE.keywords}
      />
      {/* Google / Search Engine Tags */}
      <meta key="itempropname" itemProp="name" content={name} />
      <meta
        key="itempropdescription"
        itemProp="description"
        content={SITE.title + ": " + text + " | " + SITE.keywords}
      />
      <meta key="itempropimage" itemProp="image" content={image} />
      {/* Open Meta Tags */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={name} />
      <meta key="og:locale" property="og:locale" content="en" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={name} />
      <meta
        key="og:description"
        property="og:description"
        content={SITE.title + ": " + text + " | " + SITE.keywords}
      />
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
        content={SITE.title}
      />
      <meta key="twitter:url" property="twitter:url" content={url!.href} />
      <meta key="twitter:title" name="twitter:title" content={name} />
      <meta key="twitter:site" name="twitter:site" content={"@" + SITE.title} />
      <meta key="twitter:site:id" property="twitter:site:id" content="0" />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={SITE.title + ": " + text}
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
      <Style key="styles" src={url!.origin} href={css} />
      {/* Link Element */}
      <link
        key={"canonical_" + url!.href}
        rel="canonical"
        href={url!.href}
      />
      <link
        key={"preconnect_" + url!.origin}
        rel="preconnect"
        href={url!.origin}
        crossOrigin="anonymous"
      />
      <link
        key={"dnsprefetch_" + url!.origin}
        rel="dns-prefetch"
        href={url!.origin}
      />
      {/* Other Meta */}
      {
        /*<meta
            httpEquiv="Content-Security-Policy"
            content="require-trusted-types-for 'script';default-src 'none';script-src 'strict-dynamic' 'nonce-rAnd0m123' https: 'unsafe-inline';script-src-elem 'self' https://analytics.eu.umami.is 'unsafe-inline';script-src-attr 'self' https://analytics.eu.umami.is 'unsafe-inline';style-src 'self';style-src-elem 'self' https://analytics.eu.umami.is 'unsafe-inline';style-src-attr 'self' 'unsafe-inline';img-src 'self';font-src 'self';connect-src 'self' https://analytics.eu.umami.is;media-src 'self';object-src 'none';child-src 'self';frame-src 'none';worker-src 'self';form-action 'none';block-all-mixed-content;upgrade-insecure-requests;base-uri 'none';"
            />*/
      }
      <meta key="referrer" name="referrer" content="no-referrer" />
      <meta
        key="X-Content-Type-Options"
        httpEquiv="X-Content-Type-Options"
        content="nosniff"
      />
      <meta
        key="X-Permitted-Cross-Domain-Policies"
        httpEquiv="X-Permitted-Cross-Domain-Policies"
        content="none"
      />
      <meta
        key="Referrer-Policy"
        httpEquiv="Referrer-Policy"
        content="no-referrer"
      />
      <meta
        key="x-dns-prefetch-control"
        http-equiv="x-dns-prefetch-control"
        content="off"
      />
      <meta
        key="Strict-Transport-Security"
        httpEquiv="Strict-Transport-Security"
        content="max-age=63072000; includeSubDomains; preload"
      />
      <meta
        key="Cache-Control"
        httpEquiv="Cache-Control"
        content="no-store"
      />
      <meta
        key="Permissions-Policy"
        httpEquiv="Permissions-Policy"
        content="accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=(), clipboard-read=(), clipboard-write=(), gamepad=(), speaker-selection=(), conversion-measurement=(), focus-without-user-activation=(), hid=(), idle-detection=(), interest-cohort=(), serial=(), sync-script=(), trust-token-redemption=(), window-management=(), vertical-scroll=()"
      />
      <meta
        key="Cross-Origin-Opener-Policy"
        httpEquiv="Cross-Origin-Opener-Policy"
        content="same-origin"
      />
      <meta
        key="Cross-Origin-Embedder-Policy"
        httpEquiv="Cross-Origin-Embedder-Policy"
        content="require-corp"
      />
      <meta
        key="Cross-Origin-Resource-Policy"
        httpEquiv="Cross-Origin-Resource-Policy"
        content="same-site"
      />
      <meta
        key="theme-color-light"
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="grey"
      />
      <meta
        key="theme-color-dark"
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="black"
      />
      {/* Other Element */}
      {props.children}
    </Head>
  );
}
