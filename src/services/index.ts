import { mock } from "../assets/mock"
import { Data } from "../types/data"

export const api = async () => {
  await fetch("", {

  })
}

export const getMockData = (): Promise<Data> => {
  return new Promise((resolve, reject) => {
    try {
        
    } catch (e) {
      reject(e)
    } finally {
      resolve(mock)
    }
  })
}
