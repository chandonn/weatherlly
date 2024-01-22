import React, { useContext, useState } from "react"
import { Weather } from "../../types/data"
import { WeatherIcon } from "../Icon/Icon"
import { Store } from "../../store/state"

export const ForecastDay = (props: Weather) => {
    const [hover, setHover] = useState(false)
    const { dispatchUpdateBackgroundConfig } = useContext(Store)
    
    return (
        <div
            className="forecast-day"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => dispatchUpdateBackgroundConfig(props.description)}
        >
            <div>
                <WeatherIcon {...props} />
                <h3>{props.date}</h3>
            </div>
            <div>
                <h3>{props.temperature}°</h3>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}
