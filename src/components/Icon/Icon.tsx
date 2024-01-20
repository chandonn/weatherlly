import { Weather, WeatherCode } from "../../types/data"
import {
  WiDaySunny,
  WiDayCloudy,
  WiRain,
  WiFog,
  WiRainMix,
  WiRainWind,
  WiSnow,
  WiThunderstorm,
  WiShowers,
} from "weather-icons-react"

export const WeatherIcon = (props: { description: Weather["description"]; size?: number | string, color?: string }) => {

  const iconNameMap: { [key in WeatherCode]: JSX.Element } = {
    "Sunny": <WiDaySunny size={props.size} color={props.color} />,
    "Rain": <WiRain size={props.size} color={props.color} />,
    "Rain showers": <WiShowers size={props.size} color={props.color} />,
    "Sunny Cloudy": <WiDayCloudy size={props.size} color={props.color} />,
    "Fog": <WiFog size={props.size} color={props.color} />,
    "Drizzle": <WiRainMix size={props.size} color={props.color} />,
    "Freezing Drizzle": <WiRainWind size={props.size} color={props.color} />,
    "Freezing Rain": <WiRainWind size={props.size} color={props.color} />,
    "Snow grains": <WiSnow size={props.size} color={props.color} />,
    "Snow fall": <WiSnow size={props.size} color={props.color} />,
    "Snow showers": <WiSnow size={props.size} color={props.color} />,
    "Thunderstorm": <WiThunderstorm size={props.size} color={props.color} />,
  }

  return iconNameMap[props?.description]
}
