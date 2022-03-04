import { LinksFunction, Outlet } from "remix";
import styles from "highlight.js/styles/github-dark-dimmed.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
  ];
};

export default function Blog() {
  return (
    <div className="prose lg:prose-xl">
      <Outlet />
    </div>
  );
}
