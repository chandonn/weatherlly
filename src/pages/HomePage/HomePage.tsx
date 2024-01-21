import { useContext } from "react"
import { Details } from "../../components/Details/Details"
import { Forecast } from "../../components/Forecast/Forecast"
import { Store } from "../../store/state"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./HomePage.css"

export const HomePage = () => {
  const { data } = useContext(Store)

  if (data.loading) {
    return (
      <div className="home-page">
        <div className="home-page-loading">
          <div>
            <FontAwesomeIcon icon={["far", "snowflake"]} size="2xl" fade />
            <h3>Loading...</h3>
          </div>
        </div>
      </div>
    )  
  } else {
    return (
      <div className="home-page">
        <Details />
        <Forecast />
      </div>
    )
  }
}
