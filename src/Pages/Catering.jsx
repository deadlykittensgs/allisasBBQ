import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import emailjs from '@emailjs/browser'


export default function Catering() {
  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [date, setDate] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [message, setMessage] = useState('Tell us about your event and we will be in touch!');
    const [ordered, setOrdered] = useState(false);
  
  
  const sendEmail = (e) => {
    if (name ==="" || phone ==="" || email ==="" || event ==="" || guestCount ==="" || date ==="") {
        setMessage("Please fill out all forms below")
        return
    } else {
    e.preventDefault()
    console.log("clicked")
emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID ,e.target, import.meta.env.VITE_APP_PUBLIC_KEY)
clearInputs()
setMessage("Catering request has been sent we will respond shortly")
  }}

   function clearInputs() {
    setName("")
    setPhone("")
    setEmail("")
    setEvent("")
    setGuestCount("")
    setDate("")
    setExtraInfo("")
    setMessage("")
    setOrdered(true)
     return
   }
    return (

    <>
     <Header/>

    <form onSubmit={sendEmail} className='flex flex-col flex-1 p-[10%] pt-[0px] bg-blue-300/60'>
       
        <div className='flex items-center justify-center'>
        <div className=' flex items-center justify-center bg-slate-100 h-[200px] w-[200px] rounded-full my-[40px]'> 
          Logo Here
         </div>
        </div>


        <div className='flex flex-col items-center'> 
            <p className='text-[2rem]'>Catering </p>
            <p className='text-slate-100 text-[1.3rem] text-slate-950 text-center'>{message} </p>
            <p className={ordered == false ? "text-transparent":"text-red-500 text-[1.5rem]"} > Catering Request Sent</p>
        </div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Name</p>
    <input required name='name' type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g John Doe'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Phone</p>
    <input required name='phone'  type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='e.g (123) 456-789'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Email</p>
    <input required name='email'  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g jondoe@example.com'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Event</p>
    <input required name='event'  type="text" value={event} onChange={(e) => setEvent(e.target.value)}  placeholder='e.g wedding/graduation '/>
</div>

<div className='flex flex-col' >
    <p>Guest Count Estimate:</p>
   
    <input required name='guestCount'  type="text" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} placeholder='e.g 100 adults 10 kids' />
    </div>

    <div className='flex flex-col' >
    <p>Date</p>
   
    <input required name='date'  type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder='01/01/2025' />
    </div>
  

    <div className='flex flex-col '>
    <p>Additional notes</p>
    <textarea name='extraInfo'  className='h-[200px]' type="text" value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)}  placeholder='(if necessary) Tell us more about the catering and anything else you think we should know' />
    </div>


    <div className='flex justify-between p-3'>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Back</button>
        <p className={ordered == false ? "text-transparent":"text-red-500 text-[1.2rem] text-center"} > Catering Request Sent</p>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Submit</button>
    </div>
    
    </form>
    <Footer/>
    </>
  )
}
