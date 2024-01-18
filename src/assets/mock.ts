import { data } from "../types/data";

export const mock: data = {
  city: {
    name: 'Rio de Janeiro',
  },
  weather: {
    temperature: {
      celsius: 42,
      fahrenheit: 75,
      kelvin: 133
    },
    more: {
      windSpeed: 100,
      humidity: 70,
    },
    description: "sun",
    date: "Today",
    forecast: [
      {
        temperature: {
          celsius: 27,
          fahrenheit: 75,
          kelvin: 133
        },
        more: {
          windSpeed: 100,
          humidity: 70,
        },
        description: "sun",
        date: "Mon"
      },
      {
        temperature: {
          celsius: 16,
          fahrenheit: 75,
          kelvin: 133
        },
        more: {
          windSpeed: 100,
          humidity: 70,
        },
        description: "sun",
        date: "Tues"
      },
      {
        temperature: {
          celsius: 29,
          fahrenheit: 75,
          kelvin: 133
        },
        more: {
          windSpeed: 100,
          humidity: 70,
        },
        description: "sun",
        date: "Wed"
      },
      {
        temperature: {
          celsius: 18,
          fahrenheit: 75,
          kelvin: 133
        },
        more: {
          windSpeed: 100,
          humidity: 70,
        },
        description: "sun",
        date: "Thurs"
      },
      {
        temperature: {
          celsius: 31,
          fahrenheit: 75,
          kelvin: 133
        },
        more: {
          windSpeed: 100,
          humidity: 70,
        },
        description: "sun",
        date: "Fri"
      }
    ]
  },
}
