import {useState, createContext} from 'react'
import { getDayInformation } from '../utilities/menu'  //informacion de los dias

export const dataContext = createContext();





export const  DataContextPrivider = ({children})=> {

    const [monthInfo, setmonthInfo] = useState([])
    const [dayWorkInformation, setdayWorkInformation] = useState([])
    //Lista de dias que tiene el mes
    const [daysInMonth, setDaysInMonth] = useState(getDayInformation().daysInMonth)
  
  
  
    return (
    <dataContext.Provider value={
        {
          daysInMonth,
          setDaysInMonth,
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
 