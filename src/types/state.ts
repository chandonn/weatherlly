import { Data, Geolocation, SearchResults } from "./data"

export type State = {
  search: {
    active: boolean
    query: string
    results: SearchResults
  },
  menu: { active: boolean, temperature_unit: "fahrenheit" | "" },
  geolocation: Geolocation
  data: Data
  dispatchOpenSearch: () => void
  dispatchCloseSearch: () => void
  dispatchMenuActive: (it: State["menu"]["active"]) => void
  dispatchGeolocationSearchResults: (it: State["search"]["results"], query?: State["search"]["query"]) => void
  dispatchWeatherData: (it: State["data"]["weather"]) => void
  dispatchGeolocation: (it: State["geolocation"]) => void
  dispatchUpdateGeolocation: (it: State["geolocation"]) => void,
  dispatchChangeTemperatureUnit: (it: State["menu"]["temperature_unit"]) => void
}
