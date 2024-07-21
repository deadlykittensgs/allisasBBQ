import React from 'react'
import { useState } from 'react'

import DropdownMenu from './DropdownMenu';



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' z-[10000] text-slate-100 bg-red-700 flex items-center justify-between sticky top-0 border border-b-slate-50 border-t-red-700 border-r-red-700 border-l-red-700'>
     <div className='bg-amber-500 p-3 rounded-full text-center ml-[10px]'>
     <a href='home' className=' sm:text-[0.9rem] md:text-[1.2rem] roboto-condensed-roboto p-4 hover:text-slate-950'>Ryan's BBQ & Bar</a>
     </div>
     
<div className=' text-[1.5rem] p-4 flex gap-4'>
<a href="home"><i className="fa-solid fa-house hover:text-amber-300"></i></a>
<a href='/order'><i className="fa-solid fa-utensils hover:text-green-300"></i></a>
  <a href='https://github.com/deadlykittensgs' target='_blank'><i className="fa-brands fa-facebook-f  hover:text-blue-700"></i></a>
  <div className=''><DropdownMenu/></div>
  </div>

    </div>
  )
}