const { JsxElement } =  require("typescript")

declare module "weather-icons-react" {
  const WiDaySunny: JsxElement & { size: number; color: string }
  const WiDayCloudy: JsxElement & { size: number; color: string }
  const WiDayRainMix: JsxElement & { size: number; color: string }
  const WiRain: JsxElement & { size: number; color: string }
  const WiCloudy: JsxElement & { size: number; color: string }
  const WiStrongWind: JsxElement & { size: number; color: string }
  const WiHumidity: JsxElement & { size: number; color: string }
  
  module.exports = {
    WiDaySunny,
    WiDayCloudy,
    WiDayRainMix,
    WiRain,
    WiCloudy,
    WiStrongWind,
    WiHumidity
  }
}