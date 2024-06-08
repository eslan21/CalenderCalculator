import dayjs from 'dayjs'



export function getDayInformation(d=''){


    
    const dayInfoObject ={
        daysInMonth: dayjs().daysInMonth(),
        actualDayInMonth: dayjs(`${dayjs().get('year')}-${dayjs().get('month')}${'-'+d}`).get('date'),
        dayinWeek: dayjs(`${dayjs().get('year')}-${dayjs().get('month')}${'-'+d}`).get('day'),
        

    }
    return dayInfoObject;
   

}
