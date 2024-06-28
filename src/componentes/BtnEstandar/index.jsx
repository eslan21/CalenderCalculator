import React from 'react'

function BtnEstandar({btnFunctionality, children}) {
  

  
  
    return (
    <button
    onClick={()=> btnFunctionality  ()}
    className='bg-gray-800 border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'

    >{children}</button>
  )
}

export default BtnEstandar