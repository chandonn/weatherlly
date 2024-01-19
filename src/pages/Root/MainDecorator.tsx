import { Store } from "../../store/state"
import { useContext, useEffect } from "react"
import { getWeatherData } from "../../services"
import { Header } from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import { Search } from "../../components/Search/Search"
import { Menu } from "../../components/Menu/Menu"

export const MainDecorator = () => {
  const { dispatchWeatherData, geolocation, menu } = useContext(Store)

  useEffect(() => {
    getWeatherData(geolocation, menu).then(res => {
      dispatchWeatherData(res)
    })
  }, [geolocation, menu.temperature_unit])

  return (
    <div className='full-page'>
      <Header />
      <Search />
      <Menu />
      <Outlet />
    </div>
  )
}
