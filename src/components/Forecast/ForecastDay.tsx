import React, { useState } from "react"
import { weather } from "../../types/data"
import { WeatherIcon } from "../Icon/Icon"

export const ForecastDay = (props: weather) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            className="forecast-day"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <h3>{props.date}</h3>
            <WeatherIcon {...props} color={hover ? "#023047" : "#fdf0d5"} />
            <h3>{props.temperature.celsius}°</h3>
        </div>
    )
}
