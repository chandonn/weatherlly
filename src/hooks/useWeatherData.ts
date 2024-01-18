import { useEffect, useState } from "react"
import { getMockData } from "../services"
import { Data } from "../types/data"

export const useWeatherData = (place: string): Data => {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        getMockData().then(res => {
            setWeather(res)
        })
    }, [place])

    return weather
}
