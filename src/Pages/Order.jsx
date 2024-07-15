import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Meals from '../Components/Meals'


export default function Order() {

    function clicked() {
        console.log("clicked")
    }


  return (  
    


    <div className='flex flex-col bg-custom-image'>
    <Header/>
    <div className='flex flex-col flex-1'>

        <div className='flex flex-col items-center align-center' > 
        <p className=' p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8'>Most Popular</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Sliced Beef Diner"} price={16.00} meats={'Meats: 1'} sides={"Sides:2"}/>
        <Meals mealName={"Catfish Basket"} price={10.00} sides={"Sides:1"}/>
        <Meals mealName={"Rib Dinner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"2 Meat Diner"} price={18.00} meats={'Meats: 2'}  sides={"Sides:2"}/>
        </div>
        </div>

        <div className='flex flex-col items-center align-center' > 
        <p className=' p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Dinners</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Sliced Beef Diner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"Chopped Beef Diner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"Rib Dinner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"Sausage Diner"} price={15.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"Hot Link Diner"} price={15.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"Pulled Pork Diner"} price={15.00} meats={'Meats: 1'}  sides={"Sides:2"}/>
        <Meals mealName={"2 Meat Diner"} price={18.00} meats={'Meats: 2'}  sides={"Sides:2"}/>
        <Meals mealName={"3 Meat Diner"} price={20.00} meats={'Meats: 3'}  sides={"Sides:2"}/>
        </div>
        </div>

        <div  className='flex flex-col items-center align-center'  >
            <p className=' p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Baskets</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Hamburger Basket"} price={10.00}  sides={"Sides:1"}/>
        <Meals mealName={"Cheeseburger Basket"} price={11.00} sides={"Sides:1"}/>
        <Meals mealName={"Mushroom Burger Basket"} price={12.00} sides={"Sides:1"}/>
        <Meals mealName={"Green Chili Burger Basket"} price={12.00}  sides={"Sides:1"}/>
        <Meals mealName={"Bacon Burger Basket"} price={12.00}  sides={"Sides:1"}/>
        <Meals mealName={"Grilled Onion Burger Basket"} price={12.00} sides={"Sides:1"}/>
        <Meals mealName={"Avocado Burger Basket"} price={12.00} sides={"Sides:1"}/>
            </div>
            </div>


        <div   className='flex flex-col items-center align-center'   >
            <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Salads</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"BBQ Salad"} price={12.00} meats={'Meats: 1'}  />
        <Meals mealName={"Cobb Salad"} price={10.00} />
        <Meals mealName={"Grilled Chicken Salad"} price={12.00}/>
        <Meals/>
            </div>
            </div>

        <div  className='flex flex-col items-center align-center' >
            <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Kids Meals</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Chicken Strip Basket"} price={8.00} meats={'Meats: 1'}  sides={"Sides:1"}/>
        <Meals mealName={"Kids Chopped Beef Diner"} price={8.00} meats={'Meats: 1'}  sides={"Sides:1"}/>
        <Meals mealName={"Grilled Cheese Basket"} price={6.00} sides={"Sides:1"} />
        <Meals mealName={"Kids Rib Basket"} price={9.00} meats={'Meats: 1'}  sides={"Sides:1"} />
            </div>
            </div>

        <div className='flex flex-col items-center align-center'  >
        <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Specials</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Catfish Basket"} price={10.00} sides={"Sides:1"}/>
        <Meals mealName={"French Dip Basket"} price={13.00} sides={"Sides:1"} />
        <Meals mealName={"Loaded Baked Potato"} price={10.00} meats={1} sides={"Sides:1"} />
     
            </div>
            </div>



            <div  className='flex flex-col items-center align-center' >
        <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Deserts</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Caramel Bunt Cake"} price={6.00}/>
        <Meals mealName={"Cheese Cake"} price={4.50} />
        <Meals mealName={"Cobbler Of The Day"} price={6.00} />
            </div>
            </div>

            <div className='flex flex-col items-center align-center'  >
        <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Appetizers</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Onion Rings with Cajun Ranch"} price={8.00}  />
        <Meals mealName={"Queso, Salsa & Chips"} price={9.00} meats={'Meats: 1'}   />
        <Meals mealName={"Loaded Fries"} price={8.00} meats={'Meats: 1'}  />
     
            </div>
            </div>


        <div  className='flex flex-col items-center align-center' >
        <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Sides</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Mac & Cheese"} price={3.00}/>
        <Meals mealName={"Baked Beans"} price={3.00} />
        <Meals mealName={"Pinto Beans"} price={3.00} />
        <Meals mealName={"Green Beans"} price={3.00} />
        <Meals mealName={"Potato Salad"} price={3.00}/>
        <Meals mealName={"Coleslaw"} price={3.00} />
        <Meals mealName={"Mashed Potatoes"} price={3.00} />
        <Meals mealName={"Fried Okra"} price={3.00} />
        <Meals mealName={"Diner Salad"} price={3.00}/>
        <Meals mealName={"Baked Potato"} price={3.00} />
        <Meals mealName={"French Fries"} price={3.00} />
        <Meals mealName={"Tater Tots"} price={3.00} />
            </div>
            </div>

   

        <div  className='flex flex-col items-center align-center pb-10' >
        <p className='p-3 bg-slate-200/50 items-center text-center text-[1.5rem] w-screen m-8' >Drinks</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Tea"} price={3.00} img={"https://media.istockphoto.com/id/487787108/photo/can-of-coca-cola-on-ice.jpg?s=612x612&w=is&k=20&c=iox49_FrZ5PK4_Eewc6EEcFZBoHv87rqX_GF5W9Sjxc="}/>
        <Meals mealName={"Dr. Pepper"} price={3.00} />
        <Meals mealName={"Diet Dr. Pepper"} price={3.00} />
        <Meals mealName={"Pepsi"} price={3.00} />
        <Meals mealName={"Pepsi Zero"} price={3.00}/>
        <Meals mealName={"Mountain Dew"} price={3.00} />
        <Meals mealName={"RootBeer"} price={3.00} />
        <Meals mealName={"Starry"} price={3.00} />
        <Meals mealName={"Lemonade"} price={3.00}/>
            </div>
            </div>
    
     </div>
    <Footer/>
    
    </div>
  )
}
