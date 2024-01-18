import { data } from "../../types/data"
import { getCurrentDate } from "../../utils"
import { WeatherIcon } from "../Icon/Icon"
import "./Details.css"

export const Details = (data: data) => {
  const date = getCurrentDate()

  return (
    <div className="details">
      <div className="container">
        <div className="place">
          <h2>{data.city?.name}</h2>
          <h4>{date}</h4>
        </div>
        <div className="temperature">
          <div className="aditional-info">
            <div className="center">
              <WeatherIcon description="wind" size="3em" />
              <h5>{data.weather?.more.windSpeed}</h5>
            </div>
            <div className="center">
              <WeatherIcon description="humidity" size="3em" />
              <h5>{data.weather?.more.humidity}</h5>
            </div>
          </div>
          <h1>{`${data.weather?.temperature.celsius}°`}</h1>
        </div>
        <h3 className="description">{data.weather?.description}</h3>
      </div>
    </div>
  )
}
