import { ForecastDay } from './ForecastDay'
import "./Forecast.css"
import { useContext } from 'react'
import { Store } from '../../store/state'

export const Forecast = () => {
  const { data } = useContext(Store)  

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
