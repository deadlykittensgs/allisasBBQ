import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Logo from '../assets/logo.png';

export default function Jobs() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [position, setPosition] = useState('');
    const [Resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [message, setMessage] = useState('Tell us a little about yourself and we will be in touch!')

    const handleClick = () => {

        if (name ==="" || phone ==="" || email ==="" || experience ==="" || position ==="" || coverLetter ==="") {
            setMessage("Please fill out all forms below")
            return 
        } else {
            alert(`name: ${name} phone ${phone} email ${email} experience ${experience} position ${position} Resume ${Resume} coverLetter ${coverLetter}`);
            setMessage("Application Sent!") 
           }};
  


  return (
    <>
     <Header/>

    <div className='flex flex-col flex-1 p-[10%] pt-[0px] bg-slate-500/50'>
       
        <div className='flex items-center justify-center'>
            <div className='text-[3rem]'>
            <img src={Logo} alt="Logo" />
            </div>
        </div>


        <div className='flex flex-col items-center'> 
            <p className='text-[2rem]'>Want to work with us? </p>
            <p className=''>{message} </p>
        </div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Name</p>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder='e.g John Doe'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Phone</p>
    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='e.g (123) 456-789'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Email</p>
    <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g jondoe@example.com'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>e.g Experience</p>
    <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='e.g 3 years serving'/>
</div>

<div className='flex flex-col' >
    <p>Applying for:</p>
   
    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder='e.g waiter/cook' />
    </div>

    <div className='flex flex-col' >
    <p>Upload Resume:</p>
   
    <input type="text" />
    </div>
  

    <div className='flex flex-col '>
    <p>Cover Letter</p>
    <textarea className='h-[200px]' type="text" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder=' Write a short comment about your skills and experience' />
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
