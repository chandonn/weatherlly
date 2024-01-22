import { ChangeEvent, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Store } from "../../store/state"
import { SearchResults } from "../SearchResults/SearchResults"
import { getGeolocationSearchResults } from "../../services"
import { useTransition, animated } from "react-spring"
import "./Search.css"

export const Search = () => {
  const { search, dispatchCloseSearch, dispatchGeolocationSearchResults, dispatchLoading } = useContext(Store)
  const transition = useTransition(search.active, {
    from: {
      width: "100%",
      height: "0%",
      borderBottomRightRadius: "100%",
      borderBottomLeftRadius: "100%",
    },
    enter: {
      width: "100%",
      height: "100%",
      borderBottomRightRadius: "0%",
      borderBottomLeftRadius: "0%",
    },
    leave: {
      width: "100%",
      height: "0%",
      borderBottomRightRadius: "100%",
      borderBottomLeftRadius: "100%",
    },
    config: {
      duration: 200,
    }
  })

  function debounceGetSearchResults(e: ChangeEvent<HTMLInputElement>) {
    dispatchLoading(true)

    if (e.target.value.length > 2) {
      getGeolocationSearchResults(e.target.value).then(it => {
        dispatchGeolocationSearchResults(it, e.target.value)
      })
    }
  }

  return transition((style, item) => item ? (
    <animated.div style={style} className="search">
      <div className="close" onClick={() => dispatchCloseSearch()}>
        <FontAwesomeIcon icon={["fas", "x"]} size="2xl" color="#124E78" />
      </div>
      <h2 className="search-title title">City</h2>
      <input name="search-field" type="text" className="search-field" onChange={e => debounceGetSearchResults(e)} />
      <SearchResults />
    </animated.div>
  ) : null )
}
