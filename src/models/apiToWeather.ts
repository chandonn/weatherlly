import { Data } from "../types/data"
import { weatherCodeToDescription } from "./weatherCodeToDescription"

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

export function apiToWeather(response: any): Data["weather"] {
  const { current, current_units, daily, daily_units, utc_offset_seconds } = response
  
  const transformed = {
    temperature: current["temperature_2m"] + current_units["temperature_2m"],
    windSpeed: current["wind_speed_10m"] + current_units["wind_speed_10m"],
    humidity: current["relative_humidity_2m"] + current_units["relative_humidity_2m"],
    date: "Today",
    description: weatherCodeToDescription(current["weather_code"]),
    forecast: buildForecast(daily, daily_units, utc_offset_seconds)
  } as Data["weather"]
  
  return transformed
}

function buildForecast(daily: { [key: string]: any }, daily_units: { [key: string]: any }, offset: number): Data["weather"][] {
  const { time, weather_code, temperature_2m_min, temperature_2m_max } = daily

  const transformed = Array.from(time).map((it, index) => ({
    temperature: `${temperature_2m_min[index]}${daily_units["temperature_2m_min"]} / ${temperature_2m_max[index]}${daily_units["temperature_2m_max"]}`,
    date: index ? days[new Date((time[index] - offset) * 1000).getDay()] : "Today",
    description: weatherCodeToDescription(weather_code[index])
  })) as Data["weather"][]

  return transformed
}
