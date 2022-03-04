import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import tailwindStyles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStyles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function Layout({ children }: any) {
  return (
    <div className="pt-10 mx-auto max-w-5xl">
      <div className="flex items-center justify-center space-x-8 mb-8">
        <Link
          to="/"
          className="font-bold text-slate-600 text-lg hover:text-slate-900"
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="font-bold text-slate-600 text-lg hover:text-slate-900"
        >
          Blog
        </Link>
      </div>
      {children}
    </div>
  );
}
