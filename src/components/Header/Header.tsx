import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import { Search } from "../Search/Search"

export const Header = () => {
  return (
    <div className="header">
      <i>
        <FontAwesomeIcon icon={["fas", "bars-staggered"]} size="2xl" />
      </i>
      <h3>
        Weatherlly
      </h3>
      <i>
        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} size="2xl" />
      </i>

      <Search />
    </div>
  )
}
