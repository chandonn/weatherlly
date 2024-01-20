import { Store } from "../../store/state"
import { useContext, useEffect } from "react"
import { getWeatherData } from "../../services"
import { Header } from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import { Search } from "../../components/Search/Search"
import { Menu } from "../../components/Menu/Menu"
import { Loading } from "../../components/Loading/Loading"

export const MainDecorator = () => {
  const { dispatchWeatherData, geolocation, menu, search, data } = useContext(Store)

  useEffect(() => {
    getWeatherData(geolocation, menu).then(res => {
      dispatchWeatherData(res)
    })
  }, [geolocation, menu.temperature_unit])

  if (!data.weather || !data.weather?.forecast) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className='full-page'>
        <Header />
        <Search />
        <Menu />
        <Outlet />
      </div>
    )
  }
}
