import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Meals from '../Components/Meals'
import threeMeat from '../assets/threeMeat.jpg';
import burger from '../assets/burger.jpg';
import comingSoon from '../assets/comingsoon.png'





export default function Order() {

    function clicked() {
        console.log("clicked")
    }

    const mostPopular = useRef(null);
    const diners = useRef(null);
    const baskets = useRef(null);
    const salads = useRef(null);
    const kidsMeals = useRef(null);
    const specials = useRef(null);
    const deserts = useRef(null);
    const appetizers = useRef(null);
    const sides = useRef(null);
    const drinks = useRef(null);


   function handleScroll(location) {
    console.log("clicked")
    location.current.scrollIntoView({ behavior: 'smooth' });
      };



  return (  
    


    <div className='flex flex-col bg-custom-image'>
    <Header/>
    <div className='flex flex-col'>
        <div className='flex justify-evenly h-fit w-[100%] bg-amber-100/90 overflow-auto sticky top-[70px]'>
            <button  onClick={ () => handleScroll(mostPopular)} className='hover:bg-slate-100 p-3' >Most Popular</button>
            <button  onClick={ () => handleScroll(diners)} className='hover:bg-slate-100 p-3' >Diners</button>
            <button  onClick={ () => handleScroll(baskets)} className='hover:bg-slate-100 p-3' >Baskets</button>
            <button  onClick={ () => handleScroll(salads)} className='hover:bg-slate-100 p-3' >Salads</button>
            <button  onClick={ () => handleScroll(kidsMeals)} className='hover:bg-slate-100 p-3' >Kids Meals</button>
            <button  onClick={ () => handleScroll(specials)} className='hover:bg-slate-100 p-3' >Specials</button>
            <button  onClick={ () => handleScroll(deserts)} className='hover:bg-slate-100 p-3' >Deserts</button>
            <button  onClick={ () => handleScroll(appetizers)} className='hover:bg-slate-100 p-3' >Appetizers</button>
            <button  onClick={ () => handleScroll(sides)} className='hover:bg-slate-100 p-3' >Sides</button>
            <button onClick={ () => handleScroll(drinks)} className='hover:bg-slate-100 p-3' >Drinks</button>


        </div>

        <div ref={mostPopular}  className='flex flex-col items-center align-center' > 
        <p className=' p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8'>Most Popular</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Sliced Beef Diner"} price={16.00} meats={'Meats: 1'} sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy" } img={threeMeat}/>
        <Meals mealName={"Catfish Basket"} price={10.00} sides={"Sides:1"} description={"3 peices of catfish on a bun with a roll and hushpuppy"} img={comingSoon}/>
        <Meals mealName={"Rib Dinner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"2 Meat Diner"} price={18.00} meats={'Meats: 2'}  sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        </div>
        </div>

        <div ref={diners}  className='flex flex-col items-center align-center' > 
        <p className=' p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Dinners</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Sliced Beef Diner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"Chopped Beef Diner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"Rib Dinner"} price={16.00} meats={'Meats: 1'}  sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"Sausage Diner"} price={15.00} meats={'Meats: 1'}  sides={"Sides:2"}  description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"Hot Link Diner"} price={15.00} meats={'Meats: 1'}  sides={"Sides:2"}  description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"Pulled Pork Diner"} price={15.00} meats={'Meats: 1'}  sides={"Sides:2"}  description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"2 Meat Diner"} price={18.00} meats={'Meats: 2'}  sides={"Sides:2"}  description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        <Meals mealName={"3 Meat Diner"} price={20.00} meats={'Meats: 3'}  sides={"Sides:2"} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        </div>
        </div>

        <div ref={baskets}   className='flex flex-col items-center align-center'  >
            <p className=' p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Baskets</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Hamburger Basket"} price={10.00}  sides={"Sides:1"} img={burger}  description={"discription of the item"}/>
        <Meals mealName={"Cheeseburger Basket"} price={11.00} sides={"Sides:1"} img={burger} description={"discription of the item"} />
        <Meals mealName={"Mushroom Burger Basket"} price={12.00} sides={"Sides:1"}img={burger} description={"discription of the item"}/>
        <Meals mealName={"Green Chili Burger Basket"} price={12.00}  sides={"Sides:1"}img={burger} description={"discription of the item"}/>
        <Meals mealName={"Bacon Burger Basket"} price={12.00}  sides={"Sides:1"}img={burger} description={"discription of the item"}/>
        <Meals mealName={"Grilled Onion Burger Basket"} price={12.00} sides={"Sides:1"} img={burger} description={"discription of the item"}/>
        <Meals mealName={"Avocado Burger Basket"} price={12.00} sides={"Sides:1"} img={burger} description={"discription of the item"}/>
            </div>
            </div>


        <div ref={salads}    className='flex flex-col items-center align-center'   >
            <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Salads</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"BBQ Salad"} price={12.00} meats={'Meats: 1'} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Cobb Salad"} price={10.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Grilled Chicken Salad"} price={12.00} img={threeMeat} description={"discription of the item"}/>
            </div>
            </div>

        <div ref={kidsMeals}   className='flex flex-col items-center align-center' >
            <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Kids Meals</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Chicken Strip Basket"} price={8.00} meats={'Meats: 1'}  sides={"Sides:1"}  img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Kids Chopped Beef Diner"} price={8.00} meats={'Meats: 1'}  sides={"Sides:1"} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Grilled Cheese Basket"} price={6.00} sides={"Sides:1"} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Kids Rib Basket"} price={9.00} meats={'Meats: 1'}  sides={"Sides:1"} img={threeMeat} description={"discription of the item"} />
            </div>
            </div>

        <div ref={specials}  className='flex flex-col items-center align-center'  >
        <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Specials</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Catfish Basket"} price={10.00} sides={"Sides:1"} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"French Dip Basket"} price={13.00} sides={"Sides:1"} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Loaded Baked Potato"} price={10.00} meats={1} sides={"Sides:1"} img={threeMeat} description={"discription of the item"} />
     
            </div>
            </div>



            <div ref={deserts}   className='flex flex-col items-center align-center' >
        <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Deserts</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Caramel Bunt Cake"} price={6.00} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Cheese Cake"} price={4.50} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Cobbler Of The Day"} price={6.00} img={threeMeat} description={"discription of the item"} />
            </div>
            </div>

            <div ref={appetizers}  className='flex flex-col items-center align-center'  >
        <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Appetizers</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Onion Rings with Cajun Ranch"} price={8.00} img={threeMeat} description={"discription of the item"}  />
        <Meals mealName={"Queso, Salsa & Chips"} price={9.00} meats={'Meats: 1'} img={threeMeat} description={"discription of the item"}   />
        <Meals mealName={"Loaded Fries"} price={8.00} meats={'Meats: 1'} img={threeMeat} description={"discription of the item"}  />
     
            </div>
            </div>


        <div ref={sides}   className='flex flex-col items-center align-center' >
        <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Sides</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Mac & Cheese"} price={3.00} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Baked Beans"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Pinto Beans"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Green Beans"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Potato Salad"} price={3.00} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Coleslaw"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Mashed Potatoes"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Fried Okra"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Diner Salad"} price={3.00} img={threeMeat} description={"discription of the item"}/>
        <Meals mealName={"Baked Potato"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"French Fries"} price={3.00} img={threeMeat} description={"discription of the item"} />
        <Meals mealName={"Tater Tots"} price={3.00} img={threeMeat} description={"discription of the item"} />
            </div>
            </div>

   

        <div ref={drinks}  className='flex flex-col items-center align-center pb-10' >
        <p className='p-3 bg-slate-200/80 items-center text-center text-[1.5rem] w-screen m-8' >Drinks</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Tea"} price={3.00} description={"Sweet Or Unsweet"} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/160px-Iced_Tea_from_flickr.jpg"}/>
        <Meals mealName={"Dr. Pepper"} price={3.00}  img={"https://logos-world.net/wp-content/uploads/2021/08/Dr-Pepper-Logo.png"} />
        <Meals mealName={"Diet Dr. Pepper"} price={3.00} description={"Diet"} img={"https://logos-world.net/wp-content/uploads/2021/08/Dr-Pepper-Logo.png"} />
        <Meals mealName={"Pepsi"} price={3.00} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1920px-Pepsi_2023.svg.png"} />
        <Meals mealName={"Pepsi Zero"} price={3.00}  img={"https://www.sodacentre.com/cdn/shop/products/pepsizerosugar_1080x.jpg?v=1651194762"}/>
        <Meals mealName={"Mountain Dew"} price={3.00}  img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mountain_Dew_logo.svg/400px-Mountain_Dew_logo.svg.png"} />
        <Meals mealName={"RootBeer"} price={3.00}  img={"https://1000logos.net/wp-content/uploads/2022/05/AW-Root-Beer-Logo-2007.png"} />
        <Meals mealName={"Starry"} price={3.00} img={"https://upload.wikimedia.org/wikipedia/commons/1/19/Starry_Lemon_Lime_Soda.svg"} />
        <Meals mealName={"Lemonade"} price={3.00} description={"image coming soon"}  img={comingSoon}/>
            </div>
            </div>
    
     </div>
    <Footer/>
    
    </div>
  )
}
