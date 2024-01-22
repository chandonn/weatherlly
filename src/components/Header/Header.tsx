import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Store } from "../../store/state"
import "./Header.css"

export const Header = () => {
  const { dispatchOpenSearch, dispatchMenuActive } = useContext(Store)

  return (
    <div className="header">
      <i onClick={() => dispatchMenuActive(true)}>
        <FontAwesomeIcon icon={["fas", "bars-staggered"]} size="2xl" />
      </i>
      <h3>
        Weatherlly
      </h3>
      <i onClick={() => dispatchOpenSearch()}>
        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} size="2xl" />
      </i>
    </div>
  )
}
