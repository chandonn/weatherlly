import React, { useState } from "react"
import { Weather } from "../../types/data"
import { WeatherIcon } from "../Icon/Icon"

export const ForecastDay = (props: Weather) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            className="forecast-day"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div>
                <WeatherIcon {...props} color={hover ? "#023047" : "#fdf0d5"} />
                <h3>{props.date}</h3>
            </div>
            <div>
                <h3>{props.temperature}°</h3>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}
