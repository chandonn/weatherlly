import { PropsWithChildren, createContext, useState } from "react"
import { searchActiveAction } from "./actions"
import { State } from "../types/state"

const initialState: State = {
  search: { active: false, query: "", results: [] },
  data: {},
  dispatchSearchActive: (it) => {},
}

export const Store = createContext(initialState)

export const Context = ({ children }: PropsWithChildren) => {
  const [weatherState, weatherAction] = useState(initialState)

  const dispatchSearchActive =(it: State["search"]["active"]) => {
    weatherAction(searchActiveAction(weatherState, it))
  }

  return (
    <Store.Provider value={{
      ...weatherState,
      dispatchSearchActive,
    }}>
      {children}
    </Store.Provider>
  )
}
