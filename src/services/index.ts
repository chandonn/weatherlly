import { mock } from "../assets/mock"
import { data } from "../types/data"

export const api = async () => {
  await fetch("", {

  })
}

export const getMockData = (): Promise<data> => {
  return new Promise((resolve, reject) => {
    try {
        
    } catch (e) {
      reject(e)
    } finally {
      resolve(mock)
    }
  })
}
