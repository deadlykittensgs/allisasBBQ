import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ribs from '../assets/pexels-pascal-claivaz-66964-410648.jpg';
import storefront from '../assets/pexels-minan1398-1482803.jpg';
import food from '../assets/pexels-pixabay-533325.jpg';
import '../../src/index.css'; 
import MapComponent from '../Components/MapComponent';



export default function Home() {
  let reviews = [["zero"],["review one"],["review two"],["review three"],["review four"],["review five "]]
const [review, setReview] = useState(reviews[3])
const [number, setNumber] = useState(3)




function clickedReview(direction) {
  console.log("clicked")
  console.log(number)
  number == number

if (direction === "up" && number === 5){
  setNumber(1)
  setReview(reviews[1])
return
}
if (direction === "down" && number === 1) {
  setNumber(5)
  setReview(reviews[5])
return
}
if (direction == "up") {
  setNumber(number + 1)
  reviewUp(1)
  console.log(review)
}
if (direction == "down") {
  setNumber(number - 1)
  reviewUp(-1)
  console.log(review)
} 
}

function reviewUp(upBy) {
  setReview(reviews[number + upBy])
  return
}










  return (
    <>
    <Header/>
      {/* menu */}
      <div className=' flex flex-col bg-cover bg-center h-[450px] w-screen
    items-center justify-evenly ' style={{ backgroundImage: `url(${ribs})` }}>
      <div className=' flex items-center justify-center bg-slate-100 h-[200px] w-[200px] rounded-full'> 
          Logo Here
         </div>
         <div className='bg-slate-100/90 rounded-full'>
         <p className='text-slate-950 px-[40px] py-[5px] text-lg font-[900]'>Best BBQ in Oklahoma</p>
         </div>
<a href='order' className=' flex items-center justify-center text-slate-100 bg-red-700 border-2 p-1 rounded w-[30%] hover:bg-red-600'>View Menu</a>
    </div>

    {/* address  */}
    <div className='bg-amber-100 flex flex-col items-center p-1'>
      <div onClick={ () => {window.location.href='#map'}}><i className=" text-red-700 fa-solid fa-location-dot"></i></div>
      <a href='https://www.google.com/maps/place/Wynnewood,+OK+73098/@34.6426009,-97.1623665,15z/data=!3m1!4b1!4m6!3m5!1s0x87b2de0260150331:0x2df50c940a2315e6!8m2!3d34.6434171!4d-97.1644656!16zL20vMHo2MDU?entry=ttu' target='_blank' className='font-semibold underline text-blue-700 pb-3'>123 N Kerr Blvd Wynnewood OK</a>
    </div>
  
  {/* box 1  */}
<div className='flex flex-col sm:flex-row-reverse'>
  {/* img  */}
    <div className='flex flex-col bg-cover bg-center h-[400px] w-screen min-w-[50%]
    items-center justify-center' style={{ backgroundImage: `url(${storefront})` }}  >
    </div>
    {/* pick up  */}
    <div className='bg-amber-50 flex flex-col items-center justify-evenly  w-screen min-w-[50%] h-[400px] px-[30px]'>
      <h2 className='font-medium text-[1.9rem]'>View Our Menu</h2>
      <p className=''>Take a look at all the food we serve and see details about our menu</p>
      <div><a href='order' className=' bg-red-700 text-slate-100 p-4 py-2 rounded hover:bg-red-600' >Menu</a></div>
    </div>
    </div>

{/* box2  */}
    <div className='flex flex-col sm:flex-row'>
    {/* food */}
    <div className='flex flex-col bg-cover bg-center h-[350px]  w-screen min-w-[50%]
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
{/* cater */}
    <div className=' p-10 bg-amber-50 flex flex-col items-center justify-evenly w-page h-auto px-[30px] min-w-[50%]'>
      <h2 className='font-medium text-[1.9rem]' >Catering</h2>
      <p className='p-10'>Have a big event or wedding coming up soon? let us take the stress out of feeding everyone by allowing us to cater for you!</p>
      <div><a href='catering'  className='bg-red-700 text-slate-100 p-4 py-2 rounded hover:bg-red-600 ' >Request Catering</a></div>
    </div>
    </div>

    {/* box 3 */}
    <div className='flex flex-col sm:flex-row-reverse'>
     {/* inside the store */}
     <div className='flex flex-col bg-cover bg-center h-[350px]  w-screen min-w-[50%]
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
{/* about us  */}
    <div className='bg-amber-50 flex flex-col items-center justify-evenly  w-screen min-w-[50%] h-[350px] px-[30px]'>
      <h2 className=' font-medium text-[1.9rem]' >About Us</h2>
      <h2>We know our BBQ</h2>
      <p className=''>This will be an about allisa page telling about her food and anything else you would want here </p>
      <div><a href='about' className='bg-red-700 text-slate-100 p-4 py-2 rounded' >Read More</a></div>
    </div>
</div>

{/* box 4 */}
<div className='flex flex-col sm:flex-row'>
    {/* more food */}
    <div className='flex flex-col bg-cover bg-center h-[350px]  w-screen min-w-[50%]
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
    

    {/* reviews  */}
    <div id='maps' className='bg-zinc-50 flex flex-col items-center justify-evenly  w-screen min-w-[50%] h-[350px] px-[30px]'>
      <h2 className='font-medium text-[1.7rem]'>What People Are Saying</h2>
      <div className='flex justify-center items-center min-w-[100%] '>
        <button onClick={() => {clickedReview("down")}}> <i className="fa-solid fa-angle-left rounded hover:bg-slate-300"></i> </button> 
        <p className='flex flex-1 justify-center px-[30px]'>{review}</p>
        <button onClick={() => {clickedReview("up")}}> <i className="fa-solid fa-angle-right rounded hover:bg-slate-300"></i></button> 
      </div>
 
      <div  className='flex gap-5'>
        <div className={number === 1 ?'overflow-hidden rounded-full w-3 h-3 bg-slate-800':'overflow-hidden rounded-full w-3 h-3 bg-slate-500'}></div>
        <div className={number === 2 ?'overflow-hidden rounded-full w-3 h-3 bg-slate-800':'overflow-hidden rounded-full w-3 h-3 bg-slate-500'} ></div>
        <div className={number === 3 ?'overflow-hidden rounded-full w-3 h-3 bg-slate-800':'overflow-hidden rounded-full w-3 h-3 bg-slate-500'}></div>
        <div className={number === 4 ?'overflow-hidden rounded-full w-3 h-3 bg-slate-800':'overflow-hidden rounded-full w-3 h-3 bg-slate-500'} ></div>
        <div className={number === 5 ?'overflow-hidden rounded-full w-3 h-3 bg-slate-800':'overflow-hidden rounded-full w-3 h-3 bg-slate-500'} ></div>

      </div>
    </div>
  </div>
{/* contact */}
<div className='bg-amber-50 flex flex-col items-center justify-evenly w-page h-fit gap-2 p-3 '>
      <h2 className='text-[1.9rem]' >Contact us</h2>
      <h2>Email: <span className='font-bold'>ouremail@gmail.com</span></h2>
      <h2>Store Phone: <span className='font-bold'>(405) 123-1234</span></h2>

    </div>
{/* map  */}
    <div className=' flex flex-col items-center justify-evenly w-page h-[300px] px-[30px] bg-zinc-50 p-10'>
      
< MapComponent/>
    </div>

    <Footer/>

  </>
  )
}
