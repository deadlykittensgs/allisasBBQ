import React, {useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OrderedMeal from '../Components/OrderedMeal'



export default function Cart() {

    const [orderedMeals, setOrderedMeals] = useState([<OrderedMeal/>, <OrderedMeal/>,]);

function addMeal(mealName,sides,drink,price) {
    console.log("clicked")
    setOrderedMeals([...orderedMeals, <OrderedMeal mealName={mealName} sides={sides} drink={drink} price={price} />])
}


  return (

    <div className=' flex flex-col bg-green-200'>
    <Header/>    


<div className='flex flex-col h-screen w-screen flex-1'>
     <h1 className=' text-center text-[2rem] p-5 bg-slate-100'>Checkout</h1>


<div className='flex bg-slate-100 min-h-[100px] justify-center items-center text-center'>
    <p>Thank you for your order! here is a quick overview to double check everything is correct</p>
</div>

     <div className='bg-slate-100 flex min-h-[100px]' >
        <p className='flex-1 flex items-center justify-center text-center'>Desired Pickup Time</p>
        <div className=' flex flex-1 justify-center items-center'>
        <input className=' max-h-[25px] max-w-[100px]' type="text" placeholder='dropdown with times' />
        </div>
     <p className=' flex items-center justify-center text-red-500 flex-1 text-center '>Minimum (15 min)</p>
     </div>

<div>
    <button onClick={() => {addMeal('Ribs','Fries','tea', 24)}}> add meal</button>
    <p className=' text-center text-[1.3rem] bg-gradient-to-r from-neutral-300 to-stone-400 overflow-auto' >Items</p>
     {orderedMeals}

    </div>
   



   
     <div className=' flex  flex-col bg-slate-100 justify-center items-center p-10' >
        <p className='text-center text-[1.4rem]' >Cost</p>
        <div className='w-[40%]'>
        <div className='flex justify-between lg:justify-evenly'>
            <p>subtotal</p> 
            <p>$10.99</p>
             </div>
             <div className='flex justify-between lg:justify-evenly '>
            <p>Tax</p> 
            <p>$2.99</p>
             </div>
             <div className='flex justify-between lg:justify-evenly '>
            <p>Total</p> 
            <p>$12.99</p>
             </div>

        </div>

     </div>
     <div className='flex flex-col justify-center items-center p-10' >
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
