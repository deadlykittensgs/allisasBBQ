import React from 'react'

export default function Footer() {
  return (
  
<>
<div className='bg-stone-950 text-slate-50 flex flex-col items-center justify-evenly w-page h-[400px] px-[30px]'>
<div className='flex flex-col items-center'>
<h1 className='text-[1.5rem]'>Location</h1>
  <p>123 N Kerr Blvd Wynnewood OK </p>
  <p>Wynnewood, OK</p>
  <p>73098</p>
</div>

<div className='flex flex-col items-center'>
  <h1 className='text-[1.5rem]'> Hours </h1>
  <p>Tue-Fri 10:30-8 </p>
  <p>Sat 3-8</p>
  <p>Sun 10:30-3</p>
</div>

<div >
  <h1 className='text-[1.5rem]'> Find us on </h1>
<div className='flex justify-evenly'>
<a href='https://github.com/deadlykittensgs' target='_blank'><i className="fa-brands fa-facebook-f hover:text-blue-700"></i></a>
<a href='https://github.com/deadlykittensgs' target='_blank'><i className="fa-brands fa-instagram hover:text-yellow-500"></i></a>
<a href='https://github.com/deadlykittensgs'target='_blank'><i className="fa-brands fa-google hover:text-green-700"></i></a>
</div>
</div>

<div className='text-[1.5rem]'> 
  <h1>Contact Us At </h1>
  <p>(405) 123-4567</p>
</div>
</div>

</>
  )
}
