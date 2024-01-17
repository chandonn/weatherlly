import React from 'react'
import {
  createBrowserRouter,
} from 'react-router-dom'
import { MainDecorator } from './MainDecorator'
import { ErrorPage } from './ErrorPage'
import '../styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainDecorator />,
    errorElement: <ErrorPage />,
  }
])

export default router
