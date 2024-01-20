import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import './styles/text.css'
import router from './pages/index'
import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlass,
  faBarsStaggered,
  faXmark,
  faX,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'
import { Context } from './store/state'

library.add(
  faMagnifyingGlass,
  faBarsStaggered,
  faXmark,
  faX,
  faMapLocationDot,
  faSnowflake
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
)

reportWebVitals()
