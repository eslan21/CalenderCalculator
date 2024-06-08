import DiaLayout from '../../componentes/DiaLayout'
import { useState, useEffect, useContext } from 'react';
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
        const daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }

        setDasysMonthArray(daysArray);
    }, [daysInMonth]);
    console.log(dayjs().toDate())

    return (
        <>
            <>
                <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-5 gap-4 p-4">
                    <div>
                        <p>Monday</p>

                        {daysMonthArray.map((item, index) => {

                            if (getDayInformation(item).dayinWeek === 1) {

                                return <DiaLayout key={index} dia={item} />

                            }
                        })}
                    </div>
                    <div>
                        <p>Tuesday</p>
                        {

                        daysMonthArray.map((item, index) => {
                            if (getDayInformation(item).dayinWeek === 2)
                                return <DiaLayout key={index} dia={item} />
                        })}
                    </div>
                    <div>
                        <p>Wednesday</p>
                        {daysMonthArray.map((item, index) => {
                            if (getDayInformation(item).dayinWeek === 3)
                                return <DiaLayout key={index} dia={item} />
                        })}
                    </div>
                    <div>
                        <p>Thursday</p>
                        {daysMonthArray.map((item, index) => {
                            if (getDayInformation(item).dayinWeek === 4)
                                return <DiaLayout key={index} dia={item} />
                        })}
                    </div>
                    <div>
                        <p>Friday</p>
                        {daysMonthArray.map((item, index) => {
                            if (getDayInformation(item).dayinWeek === 5)
                                return <DiaLayout key={index} dia={item} />
                        })}
                    </div>
                    <div>
                        <p>Saturday</p>
                        {daysMonthArray.map((item, index) => {
                            if (getDayInformation(item).dayinWeek === 6)
                                return <DiaLayout key={index} dia={item} />
                        })}
                    </div>
                    <div>
                        <p>Sunday</p>
                        {daysMonthArray.map((item, index) => {
                            if (getDayInformation(item).dayinWeek === 0)
                                return <DiaLayout key={index} dia={item} />
                        })}
                    </div>

                    {/*daysMonthArray.map((item, index) => (
                        <DiaLayout key={index} dia={item} />
                    ))*/}
                </div>
            </>

        </>
    )
};

export default Home;