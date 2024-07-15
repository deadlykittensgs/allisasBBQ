import React from 'react'
import Food  from '../assets/BBQBackground.avif';
import foodImg from '../assets/BBQ.avif';

export default function Meals({mealName,price,meats,sides,select, img, description}) {

    function clicked() {

        console.log("clicked", mealName, "meats", meats, "sides",sides, "price", price)
    }

  return (
    <button onClick={clicked} className='flex bg-slate-100 rounded h-[200px] outline'>
        <div className=' h-[200px] w-[150px] flex flex-col justify-between '>
       <div className='p-2 flex flex-col items-start'>
       <h1 className=' flex text-start text-[1.1rem]'>{mealName}</h1>
        <p className='text-[0.9rem]'>{meats}</p>
        <p className='text-[0.9rem]'>{sides}</p>
       </div>
        <div className='p-2 flex items-start'>
        ${price}
        </div>
        </div>
       <div className=' flex flex-col bg-slate-300 h-[200px] w-[200px] justify-center items-center'>
      <p className='p-5 overflow-auto text-xs'>
        <img src={foodImg} alt="food img" />
      </p>
      {description}
         </div>
    </button>
  )
}
