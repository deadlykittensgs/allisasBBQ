import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ribs from '../assets/BBQBackground.avif';
import storefront from '../assets/skr_2757.avif';
import food from '../assets/BBQ.avif';
import Logo from '../assets/logo.png';
import '../../src/index.css'; 
import MapComponent from '../Components/MapComponent';



export default function Home() {

const [review, setReview] = useState("Best food ever! the ribs were falling off the bone and the sides were hot and fresh")
const [number, setNumber] = useState(1)

function nextReview(direction) {
  let reviews = ["review zero", "The Green Chile burger was the best I’ve ever had by far.", "Absolutely best pulled pork anywhere!! And awesome Mac and cheese!!! We drive from okc just to eat here.", "Food is always good. Peach cobbler is outstanding. Olivia is the best waitress." ,"Thank yall for catering for us. The food was absolutely amazing and the delivery was early which worked perfect and the price was great. Thank ya’ll from the whole family.","I was glad they reopened before I left. One of the last places I ate before leaving the area and I really enjoyed the barbecue."]
if(number == 5 && direction == "up" ){
  setNumber(1)
  setReview(reviews[number])
  return
}
if(number == 1 && direction == "down" ){
  setNumber(5)
  setReview(reviews[number])
  return

} else {
  setReview(reviews[number])
  return
}
}





  return (
    <>
    <Header/>
      {/* menu */}
      <div className=' flex flex-col bg-cover bg-center h-[450px] w-screen
    items-center justify-evenly ' style={{ backgroundImage: `url(${ribs})` }}>
      <div> 
        <img src={Logo} alt="Logo" />   
         </div>
      <p className='text-slate-100 text-lg font-[900]'>Best BBQ in Oklahoma</p>
<a href='order' className=' flex items-center justify-center text-slate-100 bg-red-700 border-2 p-1 rounded w-[30%] hover:bg-red-600'>View Menu</a>
    </div>

    {/* address  */}
    <div className='bg-amber-100 flex flex-col items-center p-1'>
      <div onClick={ () => {window.location.href='#map'}}><i className=" text-red-700 fa-solid fa-location-dot"></i></div>
      <a href='https://www.google.com/maps/place/Allisa%E2%80%99+kitchen+BBQ+%26+Grill/@34.6425474,-97.1771658,17z/data=!4m14!1m7!3m6!1s0x87b2dfea8e712b47:0xedd8c845d85340a7!2sAllisa%E2%80%99+kitchen+BBQ+%26+Grill!8m2!3d34.6425474!4d-97.1745855!16s%2Fg%2F11stzg639w!3m5!1s0x87b2dfea8e712b47:0xedd8c845d85340a7!8m2!3d34.6425474!4d-97.1745855!16s%2Fg%2F11stzg639w?entry=ttu' target='_blank' className='font-semibold underline text-blue-700 pb-3'>405 E Kerr Blvd Wynnewood</a>
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
      <p className=''>Take a look at all the food we serve and see details about everything</p>
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
      <p className='p-10'>Have a big event or wedding coming up soon? let allisas take the stress out of feeding everyone by allowing us to cater for you!</p>
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
      <h2 className=' font-medium text-[1.9rem]' >About Allisa</h2>
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
        <button onClick={() => { setNumber(number -1), nextReview("down")}}> <i className="fa-solid fa-angle-left rounded hover:bg-slate-300"></i> </button> 
        <p className='flex flex-1 justify-center px-[30px]'>{review}</p>
        <button onClick={() => { setNumber(number +1),  nextReview("up")}}> <i className="fa-solid fa-angle-right rounded hover:bg-slate-300"></i></button> 
      </div>
 
      <div  className='flex gap-5'>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-700' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>

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
