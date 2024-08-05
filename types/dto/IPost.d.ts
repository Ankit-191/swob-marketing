import type { I18nString } from "~/types/util/I18nString"

export interface IPost {
  id: string
  title: I18nString
  img: string
  text: string
  published: boolean
  created_at: string
  updated_at: string
}
