import { useContext, useEffect, useState } from "react";
import { dataContext } from '../../context';


const DiaLayout = ({ dia, restar }) => {

   const { dayWorkInformation, setdayWorkInformation } = useContext(dataContext)
   const [inActibe, setIsActive] = useState({
      morning: false,
      afternoon: false,
      night: false
   }) //estamos hacieno el efecto de seleccion de los shift

   //muestra las checkbox
   const [showCheckbox, setshowCheckbox] = useState(true)
   useEffect(() => {
      const { morning, afternoon, night } = inActibe;
      if (morning === true || afternoon === true || night === true) {

         setshowCheckbox(false)
      }
   }, [inActibe])
   
   const [chackHoliday, setChackHoliday] = useState(false)
//useEffect de reinicio de estados 

useEffect(()=> {
   setIsActive(
      {
         morning: false,
         afternoon: false,
         night: false
      }
   )
   setshowCheckbox(true)
   setChackHoliday(false)
},[restar])


   //controlador de seleccion de turnos
   const shiftHandler = (shift, hours, holiday = false, bono = false) => {
      let dataDay = {
         day: dia.actualDayInMonth,
         weekDay: dia.dayinWeek,
         isHoliday: holiday,
         workHour: hours,
         bonus: bono,
         shift: shift
      }

      let validatos = dayWorkInformation.some((elem) => elem.day == dia.actualDayInMonth) //valida si ya se selecciono el dia
      //lo de abajo, asigna o cambia la seleccion
      if (validatos) {
         let arrayElem = dayWorkInformation.filter((elem) => elem.day !== dia.actualDayInMonth)
         setdayWorkInformation([...arrayElem, dataDay])
      } else {
         setdayWorkInformation([...dayWorkInformation, dataDay])
      }
      //lo de abajo, controla el efecto de activo del calendario
      if (shift === 'morning') {

         setIsActive({
            morning: true,
            afternoon: false,
            night: false
         })
      }
      if (shift === 'afternoon') {
         setIsActive({
            morning: false,
            afternoon: true,
            night: false
         })
      }
      if (shift === 'night') {
         setIsActive({
            morning: false,
            afternoon: false,
            night: true
         })
      }
      if (chackHoliday) checkbox()

   }
   //manejador del checkbox
   const checkbox = () => {
      setChackHoliday(!chackHoliday)
      let arrayelem = dayWorkInformation.map((elem) => {
         if (elem.day === dia.actualDayInMonth) {
            elem.isHoliday = !elem.isHoliday

         }
         return elem
      })

      setdayWorkInformation([...arrayelem])

   }


   if (dia.actualDayInMonth == 0) {
      return <div></div>
   }

   return (


      <div className="bg-[#5d709a]  rounded shadow-md grid grid-cols-3 gap-2  p-1">
         <div className="col-span-3 border grid grid-cols-3  shadow rounded-md">
            <div className="">
               <p className="text-white font-bold pl-2">{dia.actualDayInMonth}</p>
            </div>
            <div className=" col-span-2 text-center flex justify-center gap-2">
               <label  className="text-white font-bold">H</label>
               <input
                  disabled={showCheckbox}
                  type="checkbox"
                  className=""
                  name='holiday'
                  checked={chackHoliday}
                  onChange={checkbox}

               />
            </div>
         </div>
         <div className="col-span-3 grid grid-cols-3 justify-around gap-2">
            <button
               className={`${inActibe.morning ? "bg-yellow-700" : "bg-yellow-200"} inline-flex items-center  transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 justify-center`}
               onClick={() => { shiftHandler('morning', 7) }}
            >
               M
            </button>
            <button
               onClick={() => { shiftHandler('afternoon', 8) }}
               className={`inline-flex items-center ${inActibe.afternoon ? "bg-green-700" : "bg-green-200"}  transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1  justify-center `}
            >
               A
            </button>
            <button
               className={`inline-flex items-center ${inActibe.night ? "bg-blue-700" : "bg-blue-200"}  transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1  justify-center `}
               onClick={() => { shiftHandler('night', 9, false, true) }}

            >
               N
            </button>
         </div>


      </div>
   );
};

export default DiaLayout;
