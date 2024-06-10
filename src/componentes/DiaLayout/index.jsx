import { useContext, useEffect, useState } from "react";
import { dataContext } from '../../context';


const DiaLayout = ({ dia }) => {

   const { dayWorkInformation, setdayWorkInformation } = useContext(dataContext)
   const [inActibe, setIsActive] = useState({
      morning:false,
      afternoon:false,
      night: false
   }) //estamos hacieno el efecto de seleccion de los shift
   
 

   const morningShift = (e) => {
      let dataDay = {
         day: dia.actualDayInMonth,
         weekDay: dia.dayinWeek,
         isHoliday: false,
         workHour: 7,
         bonus: false,
         shift: 'morning'
      }

      let validatos = dayWorkInformation.some((elem) => elem.day == dia.actualDayInMonth)
      
      if (validatos) {
         let arrayElem = dayWorkInformation.filter((elem) => elem.day !== dia.actualDayInMonth)
         setdayWorkInformation([...arrayElem, dataDay])
      } else {
         setdayWorkInformation([...dayWorkInformation, dataDay])
      }
      setIsActive({
         morning:true,
         afternoon:false,
         night: false
      })
      
   }
   const afternoonShift = (e) => {

      let dataDay = {
         day: dia.actualDayInMonth,
         weekDay: dia.dayinWeek,
         isHoliday: false,
         workHour: 8,
         bonus: false,
         shift: 'afternoon'
      }
      let validatos = dayWorkInformation.some((elem) => elem.day == dia.actualDayInMonth)

      if (validatos) {

         let arrayElem = dayWorkInformation.filter((elem) => elem.day !== dia.actualDayInMonth)
         setdayWorkInformation([...arrayElem, dataDay])


      } else {
         
         setdayWorkInformation([...dayWorkInformation, dataDay])

      }
      setIsActive({
         morning:false,
         afternoon:true,
         night: false
      })

   }
   const nightShift = (e) => {

      let dataDay = {
         day: dia.actualDayInMonth,
         weekDay: dia.dayinWeek,
         isHoliday: false,
         workHour: 9,
         bonus: true,
         shift: 'night'
      }
      let validatos = dayWorkInformation.some((elem) => elem.day == dia.actualDayInMonth) //revisando si el elemento existe
      //agregando elemento
      if (validatos) {
         let arrayElem = dayWorkInformation.filter((elem) => elem.day !== dia.actualDayInMonth)
         setdayWorkInformation([...arrayElem, dataDay])
      } else {
         
         setdayWorkInformation([...dayWorkInformation, dataDay])
      }
      
      setIsActive({
         morning:false,
         afternoon:false,
         night: true
      })
   }

   if (dia.actualDayInMonth == 0) {
      return <div></div>
   }

   return (


      <div className="bg-white  rounded shadow-md grid grid-cols-3 gap-2  p-1">
         <div className="col-span-3 border grid grid-cols-3 ">
            <div className="">
               <p>{dia.actualDayInMonth}</p>
            </div>
            <div className="col-span-2 text-center flex justify-center gap-2">
               <label >H</label>
               <input
                  type="checkbox"
                  className=""
               />
            </div>
         </div>
         <div className="col-span-3 grid grid-cols-3 justify-around gap-2">
            <button
               className={`inline-flex items-center ${inActibe.morning?"bg-yellow-700":"bg-yellow-200"} transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 justify-center`} 
               onClick={morningShift}
            >
               M
            </button>
            <button
               onClick={afternoonShift}
               className={`inline-flex items-center ${inActibe.afternoon?"bg-green-700":"bg-green-200"}  transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1  justify-center `}
            >
               A
            </button>
            <button
               className={`inline-flex items-center ${inActibe.night?"bg-blue-700":"bg-blue-200"}  transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1  justify-center `}
               onClick={nightShift}

            >
               N
            </button>
         </div>


      </div>
   );
};

export default DiaLayout;
