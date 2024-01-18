import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import { useContext } from "react"
import { Store } from "../../store/state"

export const Header = () => {
  const weatherData = useContext(Store)

  return (
    <div className="header">
      <i>
        <FontAwesomeIcon icon={["fas", "bars-staggered"]} size="2xl" />
      </i>
      <h3>
        Weatherlly
      </h3>
      <i onClick={() => weatherData.dispatchSearchActive(true)}>
        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} size="2xl" />
      </i>
    </div>
  )
}
