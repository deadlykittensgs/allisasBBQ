import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import emailjs from '@emailjs/browser'

export default function Jobs() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [position, setPosition] = useState('');
    const [resume, setResume] = useState('');
    const [message, setMessage] = useState('Tell us a little about yourself and we will be in touch!')
    const [sent, setSent] = useState(false);
      //  env 
      const KeyOne = "service_fv87p3k"
      const KeyTwo = "template_ryu5zze"
      const KeyThree = "ySiyWMqlj8i_LP-w7"


        
  const sendEmail = (e) => {
    if (name ==="" || phone ==="" || email ==="" || experience ==="") {
        setMessage("Please fill out all forms below")
        return
    } else {
    e.preventDefault()
    console.log("clicked")
emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID_JOBS, import.meta.env.VITE_APP_TEMPLATE_ID_JOBS ,e.target, import.meta.env.VITE_APP_PUBLIC_KEY_JOBS)
clearInputs()
setMessage("Application has been sent we will contact you with more information")
  }}


  
function clearInputs(){
    setName('')
    setPhone('')
    setEmail('')
    setExperience('')
    setPosition('')
    setResume('')
    setMessage('Application Sent')
    setSent(true)
 
}

  return (
    <>
     <Header/>

    <form onSubmit={sendEmail} className='flex flex-col flex-1 p-[10%] pt-[0px] bg-slate-500/50'>
       
        <div className='flex items-center justify-center'>
        <div className=' flex items-center justify-center bg-slate-100 h-[200px] w-[200px] rounded-full my-[40px]'> 
          Logo Here
         </div>
        </div>


        <div className='flex flex-col items-center'> 
            <p className='text-[2rem]'>Want to work with us? </p>
            <p className={ sent ? 'text-red-500 text-center': 'text-center'}>{message} </p>
        </div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Name</p>
    <input required name='name' type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder='e.g John Doe'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Phone</p>
    <input required name='phone' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='e.g (123) 456-789'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Email</p>
    <input required name='email'  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g jondoe@example.com'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>e.g Experience</p>
    <input required name='experience' type="text" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='e.g 3 years serving'/>
</div>

<div className='flex flex-col' >
    <p>Applying for:</p>
   
    <input required name='position' type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder='e.g waiter/cook' />
    </div>  

    <div className='flex flex-col '>
    <p>Resume</p>
    <textarea required name='resume' className='h-[200px]' type="text" value={resume} onChange={(e) => setResume(e.target.value)} placeholder='Copy/paste in your resume or tell us about your skills and experience' />
    </div>


    <div className='flex justify-between p-3'>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Back</button>
        <p className={sent == false ? "text-transparent":"text-red-500 text-[1.2rem] text-center"} > Application Sent</p>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Submit</button>
    </div>
    
    </form>
    <Footer/>
    </>
  )
}
