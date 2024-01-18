import { Data } from "./data"

export type State = {
  search: {
    active: boolean
    query: string
    results: {}[]
  }
  data: Data
  dispatchSearchActive: (it: State["search"]["active"]) => void
}