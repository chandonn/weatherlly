import { State } from "../types/state"

export const searchActiveAction = (state: State, payload: State["search"]["active"]) => {
  return { ...state, search: { ...state.search, active: payload } }
}