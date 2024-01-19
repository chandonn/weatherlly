import { ChangeEvent, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Store } from "../../store/state"
import { SearchResults } from "../SearchResults/SearchResults"
import "./Search.css"
import { getGeolocationSearchResults } from "../../services"

export const Search = () => {
  const { search, dispatchSearchActive, dispatchGeolocationSearchResults } = useContext(Store)

  function debounceGetSearchResults(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 2) {
      getGeolocationSearchResults(e.target.value).then(it => {
        dispatchGeolocationSearchResults(it)
      })
    }
  }

  function closeAndResetSearchResults() {
    dispatchGeolocationSearchResults([])
    dispatchSearchActive(false)
  }

  if (search.active) {
    return (
      <div className="search">
        <div className="close" onClick={() => closeAndResetSearchResults()}>
          <FontAwesomeIcon icon={["fas", "x"]} size="2xl" />
        </div>
        <h2 className="search-title">City</h2>
        <input name="search-field" type="text" className="search-field" onChange={e => debounceGetSearchResults(e)} />
        <SearchResults />
      </div>
    )
  } else {
    return null
  }
}
