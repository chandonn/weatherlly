import { State } from "../types/state"

export function searchActiveAction(state: State, payload: State["search"]["active"]):State {
  return { ...state, search: { ...state.search, active: payload } }
}

export function geolocationSearchResultsAction(state: State, payload: State["search"]["results"]):State {
  return { ...state, search: { ...state.search, results: payload } }
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
      active: false
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
