import { Details } from "../../components/Details/Details"
import { Forecast } from "../../components/Forecast/Forecast"
import "./HomePage.css"

export const HomePage = () => {
  return (
    <div className="home-page">
      <Details />
      <Forecast />
    </div>
  )
}
