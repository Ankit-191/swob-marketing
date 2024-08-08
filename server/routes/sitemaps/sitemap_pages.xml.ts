import {
  appendResponseHeaders,
  defineEventHandler,
  getRequestHost,
  getRequestProtocol,
} from "h3"
import { Sitemap } from "~/server/utils/Sitemap"
import type { IPage } from "~/types/dto/IPage"

export default defineEventHandler(async (event) => {
  appendResponseHeaders(event, { "Content-Type": "text/plain" })

  const baseUrl = getRequestProtocol(event) + "://" + getRequestHost(event)
  const pages: IPage[] = await $fetch(baseUrl + "/api/pages")
  // const homepage = pages.find((x) => x.slug === "home")
  // if (homepage) {
  //   homepage.slug = ""
  //   homepage.id = ""
  // }

  const sitemap = new Sitemap()
  sitemap.baseUrl = baseUrl
  sitemap.indexables = pages
  return sitemap.toXml()
})
