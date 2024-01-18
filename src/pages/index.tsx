import React from 'react'
import {
  createBrowserRouter,
} from 'react-router-dom'
import { MainDecorator } from './Root/MainDecorator'
import { ErrorPage } from './ErrorPage/ErrorPage'
import '../styles/index.css'
import { HomePage } from './HomePage/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainDecorator />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
])

export default router
