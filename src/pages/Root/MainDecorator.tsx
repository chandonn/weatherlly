import { Header } from "../../components/Header/Header"
import { Outlet } from "react-router-dom"

export const MainDecorator = () => {
  return (
    <div className='full-page'>
      <Header />
      <Outlet />
    </div>
  )
}
