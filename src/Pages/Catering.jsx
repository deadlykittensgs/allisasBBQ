import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Catering() {
  return (
    <>
     <Header/>

    <div className='flex flex-col flex-1 p-[10%] pt-[0px] bg-slate-300'>
       
        <div className='flex items-center justify-center'>
            <div className='text-[3rem]'>Logo</div>
        </div>


        <div className='flex flex-col items-center'> 
            <p className='text-[2rem]'>Catering </p>
            <p className=''>Tell us about your event and we will be in touch! </p>
        </div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Name</p>
    <input type="text" name="" id="" placeholder='e.g John Doe'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Phone</p>
    <input type="text" name="" id="" placeholder='e.g (123) 456-789'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Email</p>
    <input className='' type="email" name="" id="" placeholder='e.g jondoe@example.com'/>
</div>

<div className='flex flex-col'>
    <p className='text-[1.7rem]'>Event</p>
    <input type="text" name="" id="" placeholder='e.g wedding/graduation '/>
</div>

<div className='flex flex-col' >
    <p>Guest Count Estimate:</p>
   
    <input type="text" name="" id="" placeholder='e.g 100 adults 10 kids' />
    </div>
  

    <div className='flex flex-col '>
    <p>Date Desired / Additional notes</p>
    <textarea className='h-[200px]' type="text" name="" id="" placeholder=' Tell us when you need catering and anything else you think we should know' />
    </div>


    <div className='flex justify-between p-3'>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Back</button>
        <button className='bg-slate-300 rounded p-1 border border-slate-800 hover:bg-slate-400'>Submit</button>
    </div>
    
    </div>
    <Footer/>
    </>
  )
}
