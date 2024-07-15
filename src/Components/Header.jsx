import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.png';
import DropdownMenu from './DropdownMenu';
// import DropdownMenu from './DropdownMenu';


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' z-[10000] text-slate-100 bg-red-700 flex items-center justify-between p-7 sticky top-0 border border-b-slate-50 border-t-red-700 border-r-red-700 border-l-red-700'>
      <a href='home' className=' text-[1.2rem] roboto-condensed-roboto p-4 hover:text-blue-200'>Allisa's Kitchen BBQ & Grill</a>
<div className=' text-[1.5rem] p-4 flex gap-4'>
  <a href='https://www.facebook.com/people/Allisas-Kitchen-BBQ-Grill/100091901814175' target='_blank'><i className="fa-brands fa-facebook-f  hover:text-blue-700"></i></a>
  <a href="home"><i className="fa-solid fa-house hover:text-amber-300"></i></a>
  <a href='https://www.google.com/search?q=allisas+kitchen+and+bbq&sca_esv=954b519294f2b658&sca_upv=1&sxsrf=ADLYWIKQi7lt0jeuB8JiFJ3K-YreYHENJA%3A1720979061112&source=hp&ei=dQ6UZujOBL3DkPIP8pyE-AY&iflsig=AL9hbdgAAAAAZpQchXRD9SgcE4qNajmVDLrZmqypbw9Y&ved=0ahUKEwio3efMiqeHAxW9IUQIHXIOAW8Q4dUDCBc&uact=5&oq=allisas+kitchen+and+bbq&gs_lp=Egdnd3Mtd2l6IhdhbGxpc2FzIGtpdGNoZW4gYW5kIGJicTIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSLwIUNYEWNYEcAF4AJABAJgBaqABaqoBAzAuMbgBA8gBAPgBAvgBAZgCAqACdqgCCsICBxAjGCcY6gKYAwWSBwMxLjGgB5AF&sclient=gws-wiz'><i className="fa-solid fa-utensils hover:text-green-300"></i></a>
  <div className=''><DropdownMenu/></div>
  </div>

    </div>
  )
}