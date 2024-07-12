import React from 'react'
import Food  from '../assets/BBQBackground.avif';

export default function Meals({mealName,price,meats,sides,select}) {

    function clicked() {

        console.log("clicked", mealName, "meats", meats, "sides",sides, "price", price)
    }

  return (
    <button onClick={clicked} className='flex bg-slate-100 rounded min-h-[200px] min-w-[300px] outline'>
        <div className=' h-[100%] flex flex-col justify-between flex-1'>
       <div className='p-2 flex flex-col items-start'>
       <h1 className='text-[1.1rem]'>{mealName}</h1>
        <p className='text-[0.9rem]'>Meats: {meats}</p>
        <p className='text-[0.9rem]'>Sides: {sides}</p>
       </div>
        <div className='p-2 flex flex-col items-start'>
            ${price}
        </div>
        </div>
       <div className=' flex bg-amber-100 h-[100%] w-[50%] justify-center items-center'>food picture</div>
    </button>
  )
}
