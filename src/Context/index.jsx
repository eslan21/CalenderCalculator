import {useState, createContext} from 'react'

export const dataContext = createContext();





export const  DataContextPrivider = ({children})=> {

    const [monthInfo, setmonthInfo] = useState([])
  return (
    <dataContext.Provider value={
        {
          monthInfo,
          setmonthInfo
        }
    }>
        {children}
    </dataContext.Provider>
  )
}
 