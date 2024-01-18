export type Weather = {
  temperature: {
    celsius: number
    fahrenheit: number
    kelvin: number
  }
  more: {
    windSpeed: number
    humidity: number
  }
  description: string,
  date: string
}

export type Data = {
  city?: {
    name: string
  }
  weather?: Weather & {
    forecast?: Weather[]
  }
}
