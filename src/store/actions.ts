import { State } from "../types/state"

export function openSearchAction(state: State):State {
  return { ...state, search: { ...state.search, active: true } }
}

export function closeSearchAction(state: State):State {
  return { ...state, search: { ...state.search, active: false, results: [], query: "" } }
}

export function geolocationSearchResultsAction(state: State, payload: State["search"]["results"], query: State["search"]["query"] = ""):State {
  return { ...state, search: { ...state.search, results: payload, query } }
}

export function weatherDataResultsAction(state: State, payload: State["data"]["weather"]):State {
  return { ...state, data: { ...state.data, weather: payload } }
}

export function geolocationAction(state: State, payload: State["geolocation"]):State {
  return { ...state, geolocation: payload }
}

export function updateGeolocationAction(state: State, payload: State["geolocation"]):State {
  return {
    ...state,
    geolocation: payload,
    search: {
      ...state.search,
      results: [],
      active: false,
      query: ""
    }
  }
}

export function updateChangeTemperatureUnitAction(state: State, payload: State["menu"]["temperature_unit"]): State {
  return {
    ...state,
    menu: {
      active: false,
      temperature_unit: payload
    }
  }
}

export function menuActiveAction(state: State, payload: State["menu"]["active"]):State {
  return { ...state, menu: { ...state.menu, active: payload } }
}
