import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";

type PrerenderResult = {
  html: string;
  head?: {
    title?: string;
    elements?: Set<string>;
  };
};

export async function prerender(url: string): Promise<PrerenderResult> {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );

  return { html };
}

