import React from 'react'
import Food  from '../assets/BBQBackground.avif';

export default function Meals() {
  return (
    <div className='flex bg-slate-100 rounded min-h-[200px] min-w-[400px]'>
        <div className='flex flex-col justify-between flex-1'>
       <div>
       <h1 className='text-[1.1rem]'>BBQ sandwich</h1>
        <p className='text-[0.9rem]'>Meats: 1</p>
        <p className='text-[0.9rem]'>Sides: 2</p>
       </div>
        <div className='p-2'>
            $price
        </div>
        </div>
       <div className=' flex bg-amber-100 h-[100%] w-[50%] justify-center items-center'>food picture</div>
    </div>
  )
}
