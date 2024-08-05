import type {Section} from "~/types/util/Section";

export interface IPage {
  id: string
  title: string
  sections: Section[]
  head: { [key: string]: any }
}
