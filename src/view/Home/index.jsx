import DiaLayout from '../../componentes/DiaLayout'
import { useState, useEffect } from 'react';
 import  dayjs from 'dayjs'

const Home = () => {
    
    const daysInMonth = dayjs().daysInMonth()
    const [daysMonthArray , setDasysMonthArray] = useState([])
    useEffect(() => {
        const daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        setDasysMonthArray(daysArray);
    }, [daysInMonth]);
      
    return (
        <>
             <>
            <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-5 gap-4 p-4">
                
                {daysMonthArray.map((item, index) => (
                    <DiaLayout key={index}  dia={item}/>
                ))}
            </div>
        </>

        </>
    )
};

export default Home;