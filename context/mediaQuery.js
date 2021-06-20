import { createContext, useContext } from 'react'

const Context = createContext(null)

export function MediaQueriesProvider({ mediaQueries, children }) {
  return <Context.Provider value={mediaQueries}>{children}</Context.Provider>
}

export const useMediaQueryContext = () => useContext(Context)
