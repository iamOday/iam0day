import { JSX } from "preact";
/**
 * The `export interface Style {` is defining an interface called `Style` that can be exported and used in other modules. This interface specifies the structure of an object that represents a style, with two properties: `href` of type `string` and `as` of type `string`.
 *
 * @interface
 * @name Style
 * @kind interface
 * @exports
 */
export interface Style {
  href: string;
  as: string;
}
/**
 * The `export interface Script {` is defining an interface called `Script` that can be exported and used in other modules. This interface specifies the structure of an object that represents a script, with two properties: `href` of type `string` and `as` of type `string`.
 *
 * @interface
 * @name Script
 * @kind interface
 * @exports
 */
export interface Script {
  href: string;
  as: string;
}

export function Style(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <>
      <link
        key={"preconnect" + props.src}
        rel="preconnect"
        href={props.src}
        crossOrigin="anonymous"
      />
      <link
        key={"dnsprefetch_" + props.src}
        rel="dns-prefetch"
        href={props.src}
      />
      <link
        rel={props.rel || "preload"}
        as="style"
        href={props.href}
        fetchPriority={props.fetchPriority || "high"}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={props.href}
        fetchPriority={props.fetchPriority || "high"}
        crossOrigin="anonymous"
        {...props}
      />
    </>
  );
}

export function Script(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <>
      <link
        key={"preconnect" + props.href}
        rel="preconnect"
        href={props.href}
        crossOrigin="anonymous"
      />
      <link
        key={"dnsprefetch_" + props.href}
        rel="dns-prefetch"
        href={props.href}
      />
      <link
        rel={props.rel || "preload"}
        as="script"
        href={props.src}
        integrity={props.integrity}
        fetchPriority={props.fetchPriority || "high"}
        crossOrigin="anonymous"
      />
      <script
        src={props.src}
        integrity={props.integrity}
        fetchPriority={props.fetchPriority || "high"}
        crossOrigin="anonymous"
        {...props}
      />
    </>
  );
}
/**
 * The `export function ExternalLink(` is defining a function called `ExternalLink` that can be exported and used in other modules. This function takes in a single parameter `props` of type `JSX.HTMLAttributes<HTMLAnchorElement>`, which represents the attributes that can be passed to the HTML `<a>` element.
 *
 * @function
 * @name ExternalLink
 * @kind function
 * @param {JSX.HTMLAttributes<HTMLAnchorElement>} props
 * @returns {JSX.Element}
 * @exports
 */
export function ExternalLink(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      href={props.href}
      rel="me noopener noreferrer external"
      target="_blank"
      role="link"
      data-nosnippet
      {...props}
    >
      {props.children}
    </a>
  );
}

/**
 * The `export function InternalLink(` is defining a function called `InternalLink` that can be exported and used in other modules. This function takes in a single parameter `props` of type `JSX.HTMLAttributes<HTMLAnchorElement>`, which represents the attributes that can be passed to the HTML `<a>` element.
 *
 * @function
 * @name InternalLink
 * @kind function
 * @param {JSX.HTMLAttributes<HTMLAnchorElement>} props
 * @returns {JSX.Element}
 * @exports
 */
export function InternalLink(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      href={props.href}
      rel="noopener noreferrer internal"
      role="link"
      data-nosnippet
      {...props}
    >
      {props.children}
    </a>
  );
}
/**
 * The `export function InternalButton(` is defining a function called `InternalButton` that can be exported and used in other modules. This function takes in a single parameter `props` of type `JSX.HTMLAttributes<HTMLAnchorElement>`, which represents the attributes that can be passed to the HTML `<a>` element.
 *
 * @function
 * @name InternalButton
 * @kind function
 * @param {JSX.HTMLAttributes<HTMLAnchorElement>} props
 * @returns {JSX.Element}
 * @exports
 */
export function InternalButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      href={props.href}
      rel="link"
      role="button"
      data-nosnippet
      {...props}
    >
      {props.children}
    </a>
  );
}
/**
 * The `export function InternalMenuButton(` is defining a function called `InternalMenuButton` that can be exported and used in other modules. This function takes in a single parameter `props` of type `JSX.HTMLAttributes<HTMLAnchorElement>`, which represents the attributes that can be passed to the HTML `<a>` element.
 *
 * @function
 * @name InternalMenuButton
 * @kind function
 * @param {JSX.HTMLAttributes<HTMLAnchorElement>} props
 * @returns {JSX.Element}
 * @exports
 */
export function InternalMenuButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      href={props.href}
      rel="bookmark"
      role="button"
      {...props}
    >
      {props.children}
    </a>
  );
}
