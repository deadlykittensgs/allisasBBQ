import React from 'react'
import Logo from '../assets/logo.png';



export default function Header() {
  return (
    <div className=' text-slate-100 bg-red-700 flex items-center justify-between p-7 sticky top-0 border  border-b-slate-50 border-t-red-700 border-r-red-700 border-l-red-700'>
      <div className=' text-[1.5rem] roboto-condensed-roboto '>Allisa's Kitchen BBQ & Grill</div>
<div className=' text-[1.5rem] flex gap-4'>
  <p><i className="fa-brands fa-facebook-f  hover:text-blue-700"></i></p>
  <p><i className="fa-brands fa-instagram hover:text-amber-300"></i></p>
  <p><i className="fa-brands fa-google hover:text-green-500"></i></p>
  <p className=''><i className="fa-solid fa-bars hover:text-slate-600"></i></p>
  </div>

    </div>
  )
}
