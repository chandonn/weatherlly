import { PropsWithChildren, createContext, useState } from "react"
import { geolocationAction, geolocationSearchResultsAction, searchActiveAction, updateGeolocationAction, weatherDataResultsAction } from "./actions"
import { State } from "../types/state"

const initialState: State = {
  search: { active: false, query: "", results: [] },
  data: {},
  geolocation: {
    name: "Rio de Janeiro",
    latitude: "-22.90642",
    longitude: "-43.18223",
    country_code: "BR",
    country: "Brazil",
    timezone: "America/Sao_Paulo"
  },
  dispatchSearchActive: (it) => {},
  dispatchGeolocationSearchResults: (it) => {},
  dispatchWeatherData: (it) => {},
  dispatchGeolocation: (it) => {},
  dispatchUpdateGeolocation: (it) => {}
}

export const Store = createContext(initialState)

export const Context = ({ children }: PropsWithChildren) => {
  const [applicationState, setApplicationState] = useState(initialState)

  const dispatchSearchActive =(it: State["search"]["active"]) => {
    setApplicationState(searchActiveAction(applicationState, it))
  }

  const dispatchGeolocationSearchResults = (it: State["search"]["results"]) => {
    setApplicationState(geolocationSearchResultsAction(applicationState, it))
  }

  const dispatchWeatherData = (it: State["data"]["weather"]) => {
    setApplicationState(weatherDataResultsAction(applicationState, it))
  }

  const dispatchGeolocation = (it: State["geolocation"]) => {
    setApplicationState(geolocationAction(applicationState, it))
  }

  const dispatchUpdateGeolocation = (it: State["geolocation"]) => {
    setApplicationState(updateGeolocationAction(applicationState, it))
  }

  return (
    <Store.Provider value={Object.freeze({
      ...applicationState,
      dispatchSearchActive,
      dispatchGeolocationSearchResults,
      dispatchWeatherData,
      dispatchGeolocation,
      dispatchUpdateGeolocation,
    })}>
      {children}
    </Store.Provider>
  )
}
