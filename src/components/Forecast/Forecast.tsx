import { ForecastDay } from './ForecastDay'
import { Data } from '../../types/data'
import "./Forecast.css"

export const Forecast = (data: Data) => {
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
