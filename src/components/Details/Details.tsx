import { useContext } from "react"
import { getCurrentDate } from "../../utils"
import { Store } from "../../store/state"
import { WiStrongWind, WiHumidity } from "weather-icons-react"
import "./Details.css"

export const Details = () => {
  const date = getCurrentDate()
  const { geolocation, data } = useContext(Store)

  return (
    <div className="details">
      <div className="container">
        <div className="place">
          <h2>{geolocation.name}, {geolocation.country_code}</h2>
          <h4>{date}</h4>
        </div>
        <div className="temperature">
          <div className="aditional-info">
            <div className="center">
              <WiStrongWind size="3em" />
              <h5>{data.weather?.windSpeed}</h5>
            </div>
            <div className="center">
              <WiHumidity size="3em" />
              <h5>{data.weather?.humidity}</h5>
            </div>
          </div>
          <h1>{data.weather?.temperature}</h1>
        </div>
        <h3 className="description">{data.weather?.description}</h3>
      </div>
    </div>
  )
}
