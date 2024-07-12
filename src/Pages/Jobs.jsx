import React from 'react'

export default function Jobs() {
  return (

    <div className='flex flex-col flex-1 p-[10%] bg-blue-300'>
        <div className='flex items-center justify-center'>
            <div className='text-[3rem]'>Logo</div>
        </div>


        <div className='flex flex-col items-center'> 
            <p className='text-[2rem]'>Want to work with us? </p>
            <p className=''>Tell us a little about yourself and we will be in touch! </p>
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
    <p className='text-[1.7rem]'>e.g Experience</p>
    <input type="text" name="" id="" placeholder='e.g 3 years serving'/>
</div>

<div className='flex flex-col' >
    <p>Applying for:</p>
   
    <input type="text" name="" id="" placeholder='e.g waiter/cook' />
    </div>
  

    <div className='flex flex-col '>
    <p>Cover Letter</p>
    <textarea className='h-[200px]' type="text" name="" id="" placeholder=' Write a short comment about your skills and experience' />
    </div>


    <div className='flex justify-between p-3'>
        <button className='bg-slate-300 rounded p-1 border border-slate-800'>Back</button>
        <button className='bg-slate-300 rounded p-1 border border-slate-800'>Submit</button>
    </div>
    
    </div>
  )
}
