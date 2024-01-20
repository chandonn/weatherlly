import { useContext } from "react"
import { Details } from "../../components/Details/Details"
import { Forecast } from "../../components/Forecast/Forecast"
import { Store } from "../../store/state"
import { Loading } from "../../components/Loading/Loading"
import "./HomePage.css"

export const HomePage = () => {
  const { data } = useContext(Store)

  if (data.loading) {
    return (
      <div className="home-page">
        <Loading />
      </div>
    )  
  } else {
    return (
      <div className="home-page">
        <Details />
        <Forecast />
      </div>
    )
  }
}
