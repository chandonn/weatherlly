import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { WiDaySunny } from 'weather-icons-react';
import "./ErrorPage.css"
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  function getErrorMessage() {
    if (isRouteErrorResponse(error)) {
      switch(error.status) {
        case(404):
          return "It's raining too much! Or this page doesn't exist?"
    
        case(401):
          return "This content is behind clouds and cannot be seen"
    
        case(503):
          return "A storm is near our API servers, API is down"
    
        case(418):
          return "Maybe it needs a map"

        default:
          return "It's raining too much! Or this page doesn't exist?"
      }
    } else {
      return "It's raining too much! Or this page doesn't exist?"
    }
  }

  return (
    <div className="full-page center error-page">
      <h2 className="title">Oh this page is cloudy</h2>
      <h3>{getErrorMessage()}</h3>
      <h3>Why not go <Link to="/">here</Link>, where it might be sunny <WiDaySunny /></h3>
    </div>
  )
}
