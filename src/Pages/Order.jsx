import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Meals from '../Components/Meals'


export default function Order() {
  return (  
    


    <div className='flex flex-col flex-1'>
    <Header/>
    <div className='flex flex-col flex-1'>

        <div className='flex gap-10 flex-1 flex-wrap'> 
        <p>Most Popular</p>
        <Meals/>
        <Meals/>
        <Meals/>
        <Meals/>
        </div>

        <div> 
        <p>Dinners</p>
        <Meals/>
        </div>
        <div>sandwiches</div>
        <div>burgers</div>
        <div>kids meals</div>
        <div>specials</div>
        <div>sides</div>
        <div>drinks</div>
    
    
     </div>
    <Footer/>
    
    </div>
  )
}
