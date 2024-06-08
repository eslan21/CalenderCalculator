const DiaLayout = ({ dia }) => {
  
   let dataDay = {
         day:'',
         weekDay:'',
         isWorking: false,
         isHoliday: false,
         workHour:'',
       }

       console.log(dia.actualDayInMonth)
       if(dia.actualDayInMonth==0){
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
         <div className="col-span-3 grid grid-cols-3 justify-around">
            <div className="text-center bg-yellow-200">
               M
            </div>
            <div className="text-center bg-green-300">
               A
            </div>
            <div className="text-center bg-blue-500">
               N
            </div>
         </div>


      </div>
   );
};

export default DiaLayout;
