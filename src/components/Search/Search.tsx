import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Store } from "../../store/state"
import "./Search.css"

export const Search = () => {
  const state = useContext(Store)

  if (state.search.active) {
    return (
      <div className='search'>
        <div className="close" onClick={() => state.dispatchSearchActive(false)}>
          <FontAwesomeIcon icon={["fas", "x"]} size="2xl" />
        </div>
        <h2 className="search-title">City</h2>
        <input type='text' className="search-field" />
      </div>
    )
  } else {
    return null
  }
}
