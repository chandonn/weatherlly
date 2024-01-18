import { weather } from "../../types/data"
import {
  WiDaySunny,
  WiDayCloudy,
  WiDayRainMix,
  WiRain,
  WiCloudy,
  WiStrongWind,
  WiHumidity
} from "weather-icons-react"

export const WeatherIcon = (props: { description: weather["description"]; size?: number | string, color?: string }) => {

  const iconNameMap: { [key: string]: JSX.Element } = {
    "sun": <WiDaySunny size={props.size} color={props.color} />,
    "clould-sun": <WiDayCloudy size={props.size} color={props.color} />,
    "cloud-sun-rain": <WiDayRainMix size={props.size} color={props.color} />,
    "cloud-showers-heavy": <WiRain size={props.size} color={props.color} />,
    "cloud": <WiCloudy size={props.size} color={props.color} />,
    "wind": <WiStrongWind size={props.size} color={props.color} />,
    "humidity": <WiHumidity size={props.size} color={props.color} />,
  }

  const key: string = props?.description ?? "sun"

  return iconNameMap[key]
}
