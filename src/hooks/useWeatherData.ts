import { useEffect, useState } from "react"
import { getMockData } from "../services"
import { data } from "../types/data"

export const useWeatherData = (place: string): data => {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        getMockData().then(res => {
            setWeather(res)
        })
    }, [place])

    return weather
}
