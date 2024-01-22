import { useContext } from "react"
import { Store } from "../../store/state"
import "./Menu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTransition, animated } from "react-spring"

export const Menu = () => {
  const {
    menu,
    dispatchChangeTemperatureUnit,
    dispatchMenuActive,
  } = useContext(Store)
  const transition = useTransition(menu.active, {
    from: {
      width: "100%",
      height: "0%",
      "border-bottom-right-radius": "100%",
      "border-bottom-left-radius": "100%",
    },
    enter: {
      width: "100%",
      height: "100%",
      "border-bottom-right-radius": "0%",
      "border-bottom-left-radius": "0%",
    },
    leave: {
      width: "100%",
      height: "0%",
      "border-bottom-right-radius": "100%",
      "border-bottom-left-radius": "100%",
    },
    config: {
      duration: 200,
    }
  })

  return transition((style, item) => item ? (
    <animated.div style={style} className="menu">
      <div className="close" onClick={() => dispatchMenuActive(false)}>
        <FontAwesomeIcon icon={["fas", "x"]} size="2xl" color="#124E78" />
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
    </animated.div>
  ) : null)
}
