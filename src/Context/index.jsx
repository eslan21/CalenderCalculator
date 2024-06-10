import {useState, createContext} from 'react'

export const dataContext = createContext();





export const  DataContextPrivider = ({children})=> {

    const [monthInfo, setmonthInfo] = useState([])
    const [dayWorkInformation, setdayWorkInformation] = useState([])
  return (
    <dataContext.Provider value={
        {
          monthInfo,
          setmonthInfo,
          dayWorkInformation,
          setdayWorkInformation
        }
    }>
        {children}
    </dataContext.Provider>
  )
}
 