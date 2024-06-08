import DiaLayout from '../../componentes/DiaLayout'
import { useState, useEffect, useContext, Fragment } from 'react';
import { dataContext } from '../../context';
import { getDayInformation } from '../../utilities/menu'  //informacion de los dias
import dayjs from 'dayjs'


//Quedamos en que hay que pasarle los datos al componente diaLayout 
const Home = () => {
    //Variable
    const daysInMonth = getDayInformation().daysInMonth
    const [daysMonthArray, setDasysMonthArray] = useState([])
    const contexto = useContext(dataContext)
    ///UseEffect
    useEffect(() => {
        let daysArray = [];
        let callUtiliti = getDayInformation

        for (let i = 1; i <= daysInMonth; i++) {
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
                    actualDayInMonth: 0,
                })

            }
        }
        setDasysMonthArray(daysArray);


    }, [daysInMonth]);


    return (
        <>

            <div className="grid grid-cols-1 grid-flow-2    gap-4 p-4">
                <div className='grid grid-cols-7'>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </div>
                <div className='grid grid-cols-7'>
                    {
                        daysMonthArray.map((item, index) => {
                            return<DiaLayout key={index} dia={item} />
                        })
                    }
                </div>
            </div>


        </>
    )
};

export default Home;