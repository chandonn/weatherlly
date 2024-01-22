import { useContext } from "react"
import { Store } from "../../store/state"
import "./SearchResults.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SearchResults = () => {
  const {
    search,
    dispatchUpdateGeolocation
  } = useContext(Store)

  if (search.query) {
    if (search.loading) {
      return (
        <div className="search-results-loading">
          <FontAwesomeIcon icon={["far", "snowflake"]} size="2xl" fade />
          <h3>Loading...</h3>
        </div>
      )
    }

    if (!!search.results.length) {
      return (
        <div className="search-results">
          {search.results.map((it, index) => (
            <div key={index} className="search-result" onClick={() => dispatchUpdateGeolocation(it)}>
              <h3>{`${it.name}, ${it.country_code}`}</h3>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div className="search-results-empty">
          <h3>No places found. Tip: look for rainbows</h3>
        </div>
      )
    }
  } else {
    return (
      <div className="search-results-empty">
        <FontAwesomeIcon icon={["fas", "map-location-dot"]} />
      </div>
    )
  }
}
