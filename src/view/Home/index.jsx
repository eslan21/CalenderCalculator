import DiaLayout from '../../componentes/DiaLayout'
import { useState, useEffect, useContext } from 'react';
import { dataContext } from '../../context';
import BtnEstandar from '../../componentes/BtnEstandar';
import { getDayInformation } from '../../utilities/menu'  //informacion de los dias
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'



//Quedamos en que hay que pasarle los datos al componente diaLayout 
const Home = () => {
    
    //Variable
    const contexto = useContext(dataContext)
   
    const [daysMonthArray, setDasysMonthArray] = useState([])
    ///UseEffect
    useEffect(() => {
        //-------Ordena el los dias del mes-----------------
        let daysArray = [];
        let callUtiliti = getDayInformation

        for (let i = 1; i <= contexto.daysInMonth; i++) {
            daysArray.push({
               
                daysInMonth: callUtiliti(i).daysInMonth,
                actualDayInMonth: callUtiliti(i).actualDayInMonth,
                dayinWeek: callUtiliti(i).dayinWeek,
                fullData: callUtiliti(i).fullData,
                
            });
        }
        if (daysArray[0].dayinWeek !== 1) {
            let itera = daysArray[0].dayinWeek - 1
            for (let i = 0; i < itera; i++) {

                daysArray.unshift({
                    daysInMonth: 0,
                    actualDayInMonth:0 ,
                    dayinWeek: 0,
                    fullData: 0,
                })

            }
        }
        setDasysMonthArray(daysArray);
         daysArray = [];

        

    }, [contexto.daysInMonth]);
//***---------------------------------------------- */
    useEffect(()=>{
        console.log(contexto.dayWorkInformation)
    },[contexto.dayWorkInformation])
//-------Reinicio de datos en calendario---------------
    const [restar, setRestar] = useState(0) //Manejador de reseteo 
   
    const restarBTN = ()=>{
        contexto.setdayWorkInformation([])
        setRestar(restar+1)
    }

    return (
        <>

            <div className="grid grid-cols-1 grid-flow-3    gap-4 p-4 ">
                <div className='md:grid md:grid-cols-7 hidden p-1 gap-2 text-center font-bold text-white'>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </div>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-7'>
                    {
                        daysMonthArray.map((item, index) => {
                            return <DiaLayout key={index} dia={item} restar={restar}/>
                        })
                    }
                </div>
                <div className=' flex gap-4'>
                    <Link
                     to="/result"
                    className='bg-gray-800 border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'              
                     >Calcular</Link>
                    <BtnEstandar
                    btnFunctionality={restarBTN}
                    >
                        Restar
                    </BtnEstandar>
                </div>
            </div>


        </>
    )
};

export default Home;