import React from 'react'
import foodImg from '../assets/pexels-pixabay-533325.jpg';
import threeMeat from '../assets/threeMeat.jpg';


export default function Meals({mealName,price,meats,sides,select, img, description}) {

    function clicked() {

        console.log("clicked", mealName, "meats", meats, "sides",sides, "price", price)
    }

  return (
    <button onClick={clicked} className='flex bg-slate-300 rounded h-[200px] outline'>
        <div className=' h-[200px] w-[150px] flex flex-col justify-between '>
       <div className='p-2 flex flex-col items-start'>
       <h1 className=' flex text-start text-[1.1rem]'>{mealName}</h1>
        <p className='text-[0.9rem]'>{meats}</p>
        <p className='text-[0.9rem]'>{sides}</p>
       </div>
        <div className='p-2 flex align-top'>
        ${price}
        </div>
        </div>
       <div className=' flex flex-col justify-center items-start bg-slate-100 h-[200px] w-[200px] p-2'>
        <img className=' h-[100px] w-[100%]' src={img} alt="food img" />
        <div className='flex flex-1 w-[100%] justify-center items-center bg-slate-200 rounded'>
          <p>{description}</p>
        </div>
         </div>
    </button>
  )
}
