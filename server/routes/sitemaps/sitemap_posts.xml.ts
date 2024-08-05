import {
  appendResponseHeaders,
  defineEventHandler,
  getRequestHost,
  getRequestProtocol,
} from "h3"
import { Sitemap } from "~/server/utils/Sitemap"
import type { IPost } from "~/types/dto/IPost"

export default defineEventHandler(async (event) => {
  appendResponseHeaders(event, { "Content-Type": "text/plain" })

  const baseUrl = getRequestProtocol(event) + "://" + getRequestHost(event)
  const posts: IPost[] = await $fetch(baseUrl + "/api/posts")

  const sitemap = new Sitemap()
  sitemap.baseUrl = baseUrl
  sitemap.indexables = posts
  sitemap.folder = "posts"
  return sitemap.toXml()
})
