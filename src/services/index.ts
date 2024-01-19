import { Data, SearchResults } from "../types/data"
import { apiToWeather } from "../models/apiToWeather"
import { apiToLocation } from "../models/apiToLocation"
import { State } from "../types/state"

export const buildWeatherResultsQueryString = (geolocation: State["geolocation"]) => {
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

  return `${baseURL}?${new URLSearchParams(params)}`
}

export const getWeatherData = async (geolocation: State["geolocation"]): Promise<Data["weather"]> => {
  try {
    // const apiRequest = await fetch(buildWeatherResultsQueryString(geolocation), {
    //   headers: {
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "cross-site"
    //   },
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body: null,
    //   method: "GET",
    //   mode: "cors",
    //   credentials: "omit"
    // })
    // const response = await apiRequest
    const json = {
      "latitude": -23.5,
      "longitude": -46.5,
      "generationtime_ms": 0.06103515625,
      "utc_offset_seconds": -10800,
      "timezone": "America/Sao_Paulo",
      "timezone_abbreviation": "-03",
      "elevation": 745,
      "current_units": {
          "time": "unixtime",
          "interval": "seconds",
          "temperature_2m": "°C",
          "relative_humidity_2m": "%",
          "weather_code": "wmo code",
          "wind_speed_10m": "km/h"
      },
      "current": {
          "time": 1705671000,
          "interval": 900,
          "temperature_2m": 30.2,
          "relative_humidity_2m": 53,
          "weather_code": 3,
          "wind_speed_10m": 13.5
      },
      "daily_units": {
          "time": "unixtime",
          "weather_code": "wmo code",
          "temperature_2m_max": "°C",
          "temperature_2m_min": "°C"
      },
      "daily": {
          "time": [
              1705633200,
              1705719600,
              1705806000,
              1705892400,
              1705978800,
              1706065200,
              1706151600
          ],
          "weather_code": [
              95,
              95,
              80,
              61,
              3,
              80,
              80
          ],
          "temperature_2m_max": [
              31.9,
              28.3,
              26.3,
              23.7,
              21,
              19.4,
              20.6
          ],
          "temperature_2m_min": [
              21.7,
              22.7,
              20.9,
              18.6,
              17.4,
              16.4,
              17.1
          ]
      }
  }
    return apiToWeather(json)

  } catch (e) {
    throw new Error()
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
    throw new Error()
  }
}
