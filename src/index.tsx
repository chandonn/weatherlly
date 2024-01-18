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
  faBarsStaggered
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faMagnifyingGlass,
  faBarsStaggered
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
