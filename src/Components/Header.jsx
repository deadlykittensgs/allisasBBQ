import React from 'react'
import Logo from '../assets/logo.png';



export default function Header() {
  return (
    <div className=' text-slate-100 bg-red-700 flex items-center justify-between p-10 sticky top-0'>

<div className='flex mr-[100px] overflow-hidden'>
<img src={Logo} alt="Logo" />      
</div>
<div className='flex gap-4'>
  <p><i className="fa-brands fa-facebook-f"></i></p>
  <p><i className="fa-brands fa-instagram"></i></p>
  <p><i className="fa-brands fa-google"></i></p>
  <p><i className="fa-solid fa-bars"></i></p>
  </div>

    </div>
  )
}
