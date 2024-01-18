export type weather = {
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

export type data = {
  city?: {
    name: string
  }
  weather?: weather & {
    forecast?: weather[]
  }
}
