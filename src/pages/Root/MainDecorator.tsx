import { Store } from "../../store/state"
import { useContext, useEffect } from "react"
import { getWeatherData } from "../../services"
import { Header } from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import { Search } from "../../components/Search/Search"

export const MainDecorator = () => {
  const { dispatchWeatherData, geolocation } = useContext(Store)

  useEffect(() => {
    getWeatherData(geolocation).then(res => {
      dispatchWeatherData(res)
    })
  }, [geolocation, geolocation.latitude])

  return (
    <div className='full-page'>
      <Header />
      <Search />
      <Outlet />
    </div>
  )
}
