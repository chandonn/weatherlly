import { WeatherCode } from "../types/data";

export function weatherCodeToDescription(code: number): WeatherCode {
  const weatherCodes: { [key in WeatherCode]: number[] } = {
    "Sunny": [0],
    "Sunny Cloudy": [1, 2, 3],
    "Fog": [45, 48],
    "Drizzle": [51, 53, 55],
    "Freezing Drizzle": [56, 57],
    "Rain": [61, 63, 65],
    "Freezing Rain": [66, 67],
    "Rain showers": [80, 81, 82],
    "Snow fall": [71, 73, 75],
    "Snow grains": [77],
    "Snow showers": [85, 86],
    "Thunderstorm": [95, 96, 99],
  }

  const keys = Object.keys(weatherCodes) as WeatherCode[]
  const result = keys.find(it => weatherCodes[it].includes(code)) || keys[0]

  return result
}
