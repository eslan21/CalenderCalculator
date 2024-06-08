import dayjs from 'dayjs'



export function getDayInformation(d=''){

    let month = dayjs().get('month')+1
    
    const dayInfoObject ={
        daysInMonth: dayjs().daysInMonth(),
        actualDayInMonth: dayjs(`${dayjs().get('year')}-${month}${'-'+d}`).get('date'),
        dayinWeek: dayjs(`${dayjs().get('year')}-${month}${'-'+d}`).get('day'),
        fullData:  dayjs(`${dayjs().get('year')}-${month}${'-'+d}`).toString(),
        dValue: d
        

    }
    return dayInfoObject;
   

}
