import { Header } from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import { Context } from "../../store/state"
import { Search } from "../../components/Search/Search"

export const MainDecorator = () => {
  return (
    <Context>
      <div className='full-page'>
        <Header />
        <Search />
        <Outlet />
      </div>
    </Context>
  )
}
