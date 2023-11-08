import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/global.css";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="flex justify-between m-5">
          <div>
            <NavLink to="/" prefetch="intent" className="text-4xl font-bold" >Logo</NavLink>
          </div>
          <div className="flex gap-5 text-2xl">
            <NavLink to="/" prefetch="intent" >cart</NavLink>
            <NavLink to="/signup" prefetch="intent" >signup</NavLink>
          </div>
        </nav>
        <Outlet />
        <footer className="bg-gray-400 mt-5 p-5">
          <p className="text-4xl">WoW</p>
          <div>
            <p>Canca</p>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
