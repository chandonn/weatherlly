import { Data, Geolocation, SearchResults } from "./data"

export type State = {
  search: {
    active: boolean
    query: string
    results: SearchResults
  }
  geolocation: Geolocation
  data: Data
  dispatchSearchActive: (it: State["search"]["active"]) => void
  dispatchGeolocationSearchResults: (it: State["search"]["results"]) => void
  dispatchWeatherData: (it: State["data"]["weather"]) => void
  dispatchGeolocation: (it: State["geolocation"]) => void
  dispatchUpdateGeolocation: (it: State["geolocation"]) => void
}
