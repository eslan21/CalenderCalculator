import {usaState, createContext} from 'react'

const dataContext = createContext();



export function dataContextPrivider({children}) {
  return (
    <dataContext.Provider >
        {children}
    </dataContext.Provider>
  )
}
