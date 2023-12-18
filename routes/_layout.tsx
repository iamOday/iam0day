import { LayoutProps } from "$fresh/server.ts";
/**
 * The line `export default function Layout({ Component, state }: LayoutProps) {` is defining a default export for a function called `Layout`. This function takes in an object with two properties: `Component` and `state`, both of which are of type `LayoutProps`. The function returns a JSX element that wraps the `Component` inside a `<div>` element with the class name "container m-auto".
 *
 * @function
 * @name Layout
 * @kind function
 * @param {LayoutProps} { Component, state }
 * @returns {JSXInternal.Element}
 * @exports
 */
export default function Layout({ Component, state }: LayoutProps) {
  return (
    <div className="container m-auto">
      <Component />
    </div>
  );
}
