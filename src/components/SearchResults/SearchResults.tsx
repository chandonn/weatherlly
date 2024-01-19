import { useContext } from "react"
import { Store } from "../../store/state"
import "./SearchResults.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SearchResults = () => {
  const {
    search,
    dispatchUpdateGeolocation
  } = useContext(Store)

  if (!!search.results.length) {
    return (
      <div className="search-results">
        {search.results.map(it => (
          <div className="search-result" onClick={() => dispatchUpdateGeolocation(it)}>
            <h3>{`${it.name}, ${it.country_code}`}</h3>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="search-results-empty">
        <FontAwesomeIcon icon={["fas", "map-location-dot"]} />
      </div>
    )
  }
}
