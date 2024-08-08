import {
  appendResponseHeaders,
  defineEventHandler,
  getRequestHost,
  getRequestProtocol,
} from "h3"
import { dedent } from "ts-dedent"
import { DateTime } from "luxon"

export default defineEventHandler(async (event) => {
  appendResponseHeaders(event, { "Content-Type": "text/plain" })

  const baseUrl = getRequestProtocol(event) + "://" + getRequestHost(event)
  const locations = [
    baseUrl + "/sitemaps/" + "sitemap_pages.xml",
    baseUrl + "/sitemaps/" + "sitemap_posts.xml",
  ]

  // prettier-ignore
  return dedent`
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations.map((x) => dedent`
        <sitemap>
          <loc>${x}</loc>
          <lastmod>${DateTime.now().toISODate()}</lastmod>
        </sitemap>
      `).join("\n")}
    </sitemapindex>
  `
})
