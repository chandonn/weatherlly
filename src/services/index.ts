import { Data, SearchResults } from "../types/data"
import { apiToWeather } from "../models/apiToWeather"
import { apiToLocation } from "../models/apiToLocation"
import { State } from "../types/state"

export const buildWeatherResultsQueryString = (geolocation: State["geolocation"], menu: State["menu"]) => {
  const baseURL = "https://api.open-meteo.com/v1/forecast"
  const { latitude, longitude, timezone } = geolocation
  const params = {
    latitude,
    longitude,
    timezone,
    current: ["temperature_2m", "relative_humidity_2m", "weather_code", "wind_speed_10m"].join(","),
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"].join(","),
    timeformat: "unixtime",
  }

  return `${baseURL}?${new URLSearchParams(params)}${menu.temperature_unit && "&temperature_unit=" + menu.temperature_unit}`
}

export const getWeatherData = async (geolocation: State["geolocation"], menu: State["menu"]): Promise<Data["weather"]> => {
  try {
    const apiRequest = await fetch(buildWeatherResultsQueryString(geolocation, menu), {
      headers: {
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit"
    })
    const response = await apiRequest
    const json = await response.json()
    return apiToWeather(json)

  } catch (e) {
    throw e
  }
}

function buildGeolocationQueryString(query: string) {
  const baseURL = "https://geocoding-api.open-meteo.com/v1/search"
  const params = {
    name: query,
    count: "10",
    language: "en",
    format: "json",
  }

  return `${baseURL}?${new URLSearchParams(params)}`
}

export const getGeolocationSearchResults = async (query: string): Promise<SearchResults> => {
  try {      
    const apiRequest = await fetch(buildGeolocationQueryString(query), {
      headers: {
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    })
    const response = await apiRequest
    const json = await response.json()

    return apiToLocation(json)
  } catch (e) {
    throw e
  }
}
