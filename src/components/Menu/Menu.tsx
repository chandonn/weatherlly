import { useContext } from "react"
import { Store } from "../../store/state"
import "./Menu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Menu = () => {
  const {
    menu,
    dispatchChangeTemperatureUnit,
    dispatchMenuActive,
  } = useContext(Store)

  if (menu.active) {
    return (
      <div className="menu">
        <div className="close" onClick={() => dispatchMenuActive(false)}>
          <FontAwesomeIcon icon={["fas", "x"]} size="2xl" />
        </div>
        <h2 className="menu-title">Temperature unit</h2>
        <div className="menu-options">
          <div className="menu-option" onClick={() => dispatchChangeTemperatureUnit("")}>
            <h3>Celcius, °C</h3>
          </div>
          <div className="menu-option" onClick={() => dispatchChangeTemperatureUnit("fahrenheit")}>
            <h3>Fahrenheit, °F</h3>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
