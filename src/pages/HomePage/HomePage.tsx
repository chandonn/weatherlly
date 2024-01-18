import { Details } from "../../components/Details/Details"
import { Forecast } from "../../components/Forecast/Forecast"
import { useWeatherData } from "../../hooks/useWeatherData"
import "./HomePage.css"

export const HomePage = () => {
  const data = useWeatherData("Rio de Janeiro")

  return (
    <div className="home-page">
      <Details {...data} />
      <Forecast {...data} />
    </div>
  )
}
