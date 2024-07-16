import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Logo from '../assets/logo.png';

export default function Catering() {
  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('Tell us about your event and we will be in touch!');
  
  
   const handleClick = () => {

if (name ==="" || phone ==="" || email ==="" || event ==="" || guestCount ==="" || date ==="") {
    setMessage("Please fill out all forms below")
    return 
} else {
    console.log(`name: ${name} phone ${phone} email ${email} event ${event} guestCount ${guestCount} date ${date}`);
    setMessage("Catering Request Sent!") 
   }};
  
  
  
    return (

    <>
     <Header/>

    <div className='flex flex-col flex-1 p-[10%] pt-[0px] bg-blue-300/60'>
       
        <div className='flex items-center justify-center'>
            <div className='text-[3rem]'>
                <img src={Logo} alt="Logo" />
            </div>
        </div>


        <div className='flex flex-col items-center'> 
            <p className='text-[2rem]'>Catering </p>
            <p className={message === "Catering Request Sent!" ? 'text-red-600 text-[2rem]': 'text-slate-100 text-[1.3rem] text-slate-950' }>{message} </p>
        </div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Name</p>
    <input required type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g John Doe'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Phone</p>
    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='e.g (123) 456-789'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Email</p>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g jondoe@example.com'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Event</p>
    <input type="text" value={event} onChange={(e) => setEvent(e.target.value)}  placeholder='e.g wedding/graduation '/>
</div>

<div className='flex flex-col' >
    <p>Guest Count Estimate:</p>
   
    <input type="text" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} placeholder='e.g 100 adults 10 kids' />
    </div>
  

    <div className='flex flex-col '>
    <p>Date Desired / Additional notes</p>
    <textarea className='h-[200px]' type="text" value={date} onChange={(e) => setDate(e.target.value)}  placeholder=' Tell us when you need catering and anything else you think we should know' />
    </div>


    <div className='flex justify-between p-3'>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Back</button>
        <button onClick={handleClick} className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Submit</button>
    </div>
    
    </div>
    <Footer/>
    </>
  )
}
