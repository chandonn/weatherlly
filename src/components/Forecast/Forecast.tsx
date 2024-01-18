import { ForecastDay } from './ForecastDay'
import { data } from '../../types/data'
import "./Forecast.css"

export const Forecast = (data: data) => {
  function renderForecastDays() {
    const blocks = data.weather?.forecast?.map((it, index) => (
      <ForecastDay key={index} {...it} />
    ))

    return blocks
  }

  return (
    <div className='forecast'>
      {renderForecastDays()}
    </div>
  )
}
