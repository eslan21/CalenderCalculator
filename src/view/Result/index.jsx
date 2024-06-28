import { useContext, useState } from 'react'
import { dataContext } from '../../context'
import DataNotFound from '../../componentes/DataNotFound'


function Result() {

  const { dayWorkInformation, setdayWorkInformation } = useContext(dataContext)

  if (dayWorkInformation.length === 0) return <DataNotFound /> //Si no introdujo resultados

  let datos = {
    workHour: 0,
    morningShift: 0,
    afternoonShift: 0,
    nightShift: 0,
    totalPayment: 0,
    paymentPerHour: 7
  }

  dayWorkInformation.forEach((elem) => {

    datos.workHour += elem.workHour

    if (elem.shift === 'morning') {
      datos.morningShift += elem.workHour
      datos.totalPayment += (elem.workHour * datos.paymentPerHour) * (elem.isHoliday ? 1.7 : 1)

    }
    if (elem.shift === 'afternoon') {
      datos.afternoonShift += elem.workHour
      datos.totalPayment += (elem.workHour * datos.paymentPerHour) * (elem.isHoliday ? 1.7 : 1)

    }

    if (elem.shift === 'night') {
      datos.nightShift += elem.workHour
      datos.totalPayment += (elem.workHour * datos.paymentPerHour) * (elem.isHoliday ? 1.9 : 1.2)

    }

  })





  return (
    <div class="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div class="mb-4">
        <h3 class="text-2xl font-bold text-blue-600">
          Reacult
        </h3>
      </div>
      <div class="space-y-2">
        <p class="text-lg">Hours Worked: <span class="font-semibold">{datos.workHour}</span></p>
        <p class="text-lg">Morning Shift: <span class="font-semibold">{datos.morningShift}</span></p>
        <p class="text-lg">Afternoon Shift: <span class="font-semibold">{datos.afternoonShift}</span></p>
        <p class="text-lg">Night Shift: <span class="font-semibold">{datos.nightShift}</span></p>
        <p class="text-lg">Payment you will receive: <span class="font-semibold">{datos.totalPayment.toFixed(2)}</span></p>
      </div>
    </div>
  )
}

export default Result