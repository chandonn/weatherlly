import React from "react"
import { ForecastContainer } from "../components/Forecast/ForecastContainer"
import { SearchContainer } from "../components/Search/SearchContainer"

export const MainDecorator = () => {
  return (
    <div className='full-page center'>
      <div>
        <div>
          <h4>City name</h4>
          <h3>Temperature</h3>
          <h5>Description</h5>
          <p>Wind speed</p>
          <p>Humidity</p>
        </div>
        <ForecastContainer />
      </div>
      <SearchContainer />
    </div>
  )
}
