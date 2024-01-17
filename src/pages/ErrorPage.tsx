import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  // TODO: correct types
  const error: any = useRouteError()

  return (
    <div className='full-page center'>
      <h2>Oh this page is cloudy</h2>
      <h3>{error?.statusText || error?.message || 'Not found'}</h3>
    </div>
  )
}
