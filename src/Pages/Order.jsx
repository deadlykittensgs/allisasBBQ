import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Meals from '../Components/Meals'


export default function Order() {

    function clicked() {
        console.log("clicked")
    }


  return (  
    


    <div className='flex flex-col'>
    <Header/>
    <div className='flex flex-col flex-1'>

        <div className='flex flex-col items-center align-center' > 
        <p className=' bg-amber-100 items-center text-center text-[1.5rem] w-screen outline m-8'>Most Popular</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"BBQ Sandwich"} price={10.00} meats={2} sides={2}/>
        <Meals mealName={"Ribs"} price={100.00} meats={1} sides={5}/>
        <Meals mealName={"Pulled Pork"} price={50.00} meats={1} sides={3}/>
        <Meals mealName={"2 Meat Diner"} price={15.00} meats={2} sides={2}/>
        </div>
        </div>

        <div className='flex flex-col items-center align-center' > 
        <p className=' bg-amber-100 items-center text-center p-5 text-[1.5rem] w-screen outline m-8' >Dinners</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"BBQ Sandwich"} price={10.00} meats={2} sides={2}/>
        <Meals mealName={"Ribs"} price={100.00} meats={1} sides={5}/>
        <Meals mealName={"Pulled Pork"} price={50.00} meats={1} sides={3}/>
        <Meals mealName={"2 Meat Diner"} price={15.00} meats={2} sides={2}/>
        <Meals mealName={"BBQ Sandwich"} price={10.00} meats={2} sides={2}/>
        <Meals mealName={"Ribs"} price={100.00} meats={1} sides={5}/>
        <Meals mealName={"Pulled Pork"} price={50.00} meats={1} sides={3}/>
        <Meals mealName={"2 Meat Diner"} price={15.00} meats={2} sides={2}/>
        </div>
        </div>

        <div  className='flex flex-col items-center align-center'  >
            <p className=' bg-amber-100 items-center text-center p-5 text-[1.5rem] w-screen outline m-8' >Sandwiches</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"BBQ Sandwich"} price={10.00} meats={2} sides={2}/>
        <Meals mealName={"Ribs"} price={100.00} meats={1} sides={5}/>
        <Meals mealName={"Pulled Pork"} price={50.00} meats={1} sides={3}/>
        <Meals mealName={"2 Meat Diner"} price={15.00} meats={2} sides={2}/>
            </div>
            </div>


        <div   className='flex flex-col items-center align-center'   >
            <p className=' bg-amber-100 items-center text-center p-5 text-[1.5rem] w-screen outline m-8' >Burgers</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals/>
        <Meals/>
        <Meals/>
        <Meals/>
            </div>
            </div>

        <div  className='flex flex-col items-center align-center' >
            <p className=' bg-amber-100 items-center text-center p-5 text-[1.5rem] w-screen outline m-8' >Kids Meals</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals/>
        <Meals/>
        <Meals/>
        <Meals/>
            </div>
            </div>

        <div className='flex flex-col items-center align-center'  >
        <p className=' bg-amber-100 items-center text-center p-5 text-[1.5rem] w-screen outline m-8' >Specials</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals/>
        <Meals/>
        <Meals/>
        <Meals/>
            </div>
            </div>

        <div  className='flex flex-col items-center align-center' >
        <p className=' bg-amber-100 items-center text-center p-5 text-[1.5rem] w-screen outline m-8' >Sides</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals/>
        <Meals/>
        <Meals/>
        <Meals/>
            </div>
            </div>

        <div>drinks</div>
    
    
     </div>
    <Footer/>
    
    </div>
  )
}
