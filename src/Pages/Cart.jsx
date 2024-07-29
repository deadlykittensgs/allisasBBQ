import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OrderedMeal from '../Components/OrderedMeal'



export default function Cart() {

  return (

    <div className=' flex flex-col bg-slate-600'>
    <Header/>    


<div className='flex flex-col h-screen w-screen'>
     <h1 className='bg-slate-400 text-center text-[2rem]'>Checkout</h1>


<div>
    <p>Thank you for your order! here is a quick overview to double check everything is correct</p>
</div>

     <div className='bg-slate-100 flex min-h-[100px]' >
        <p className='flex-1 flex items-center justify-center'>Desired Pickup Time</p>
        <div className=' flex flex-1 justify-center items-center'>
        <input className='max-h-[25px]' type="text" />
        </div>
     <p className=' flex items-center justify-center text-red-500 flex-1'>Minimum (15 min)</p>
     </div>

     <div className='bg-slate-400' >
        <p>Items</p>
        <OrderedMeal/>
        <OrderedMeal/>
        <OrderedMeal/>
     </div>
     <div className='bg-slate-100' >
        <p>Cost</p>
        <p>subtotal $10.99 </p>
        <p>tax $2.00 </p>
        <p>total $12.99</p>
     </div>
     <div>
        <p className='text-center text-[1.5rem]'>Contact Info</p>
        <div className='' >
        <p>Name</p>
        <input type="text" placeholder='First and last name' />
        </div>
     <div >
        <p>Email</p>
        <input type="email" placeholder='youremail@email.com' />
     </div>
     <div>
     <p>phone</p>
     <input type="text" placeholder='xxx-xxx-xxxx' />
     </div>
       <div>
        <p>Additional Notes</p>
        <input type="text" placeholder='Anything else to tell us about your order?' />
       </div>


     </div>
</div>

    <Footer/>
    </div>
  )
}
