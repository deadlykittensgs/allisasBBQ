import React from 'react'
import Header from '../Components/Header'
import ribs from '../assets/BBQBackground.avif';
import storefront from '../assets/skr_2757.avif';
import food from '../assets/BBQ.avif';
import Logo from '../assets/logo.png';
import '../../src/index.css'; 
import MapComponent from '../Components/MapComponent';


export default function Home() {
  return (
    <>
    <Header/>
      {/* menu */}
      <div className=' flex flex-col bg-cover bg-center h-[450px] w-screen
    items-center justify-evenly ' style={{ backgroundImage: `url(${ribs})` }}>
      <div> <img src={Logo} alt="Logo" />    </div>
      <p className='text-slate-100 text-lg'>Best BBQ in Oklahoma</p>
<button className=' text-slate-100 bg-red-700 border-2 p-1 rounded w-[30%]'>View Menu</button>
    </div>

    {/* address  */}
    <div className='bg-amber-100 flex flex-col items-center p-5'>
      <div><i className=" text-red-700 fa-solid fa-location-dot"></i></div>
      <p className='p-2'>405 E Kerr Blvd, Wynnewood</p>
    </div>
  

  {/* img  */}
    <div className='flex flex-col bg-cover bg-center h-[400px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${storefront})` }}  >
    </div>


    {/* image 2 */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
    {/* pick up  */}
    <div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.9rem]'>Order Us to Go!</h2>
      <p className=''>Enjoy the convenience of dining at home? place your order online now and savor our delicious menu from the comfort of your own space!</p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Pick UP</button></div>
    </div>
    {/* food */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
{/* cater */}
    <div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.9rem]' >Catering?</h2>
      <p className=''>Have a big event or wedding coming up soon? let allisas take the stress out of feeding everyone by allowing us to cater for you!</p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Request Catering</button></div>
    </div>
     {/* inside the store */}
     <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
      inside the store
    </div>
{/* about us  */}
    <div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.9rem]' >About Alissa</h2>
      <h2>We know our BBQ</h2>
      <p className=''>This will be an about allisa page telling about her food and anything else you would want here </p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Read More</button></div>
    </div>
    {/* more food */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
    <div className='bg-zinc-50 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.7rem]'>People are saying</h2>
      <div className='flex'>
        <button> <i className="fa-solid fa-angle-left"></i> </button> 
        <p className='flex px-[30px]'> best good ever and other good things! also a bunch of other words to test text overflow </p>
        <button> <i className="fa-solid fa-angle-right"></i></button> 
      </div>
 
      <div className='flex gap-5'>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-700' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>

      </div>
    </div>
{/* contact */}
<div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[200px] px-[30px]'>
      <h2 className='text-[1.9rem]' >Contact us</h2>
      <h2>Email: <span className='font-bold'>ouremail@gmail.com</span></h2>
      <h2>Store Phone: <span className='font-bold'>(405) 331-8262</span></h2>

    </div>
{/* map  */}
    <div className=' flex flex-col items-center justify-evenly w-page h-[300px] px-[30px] bg-red-700 p-10'>
      
<MapComponent/>
    </div>

    

{/* information  */}
    <div className='bg-stone-950 text-slate-50 flex flex-col items-center justify-evenly w-page h-[400px] px-[30px]'>
    <div className='flex flex-col items-center'>
    <h1 className='text-[1.5rem]'>Location</h1>
      <p>405 E Kerr Blvd, Wynnewood </p>
      <p>Wynnewood, OK</p>
      <p>73098</p>
    </div>

    <div className='flex flex-col items-center'>
      <h1 className='text-[1.5rem]'> Hours </h1>
      <p>Tue-Fri 10:30-8 </p>
      <p>Sat 3-8</p>
      <p>Sun 10:30-3</p>
    </div>

    <div >
      <h1 className='text-[1.5rem]'> Find us on </h1>
   <div className='flex justify-evenly'>
    <p><i className="fa-brands fa-facebook-f"></i></p>
    <p><i className="fa-brands fa-instagram"></i></p>
    <p><i className="fa-brands fa-google"></i></p></div>
    </div>

    <div className='text-[1.5rem]'> 
      <h1>Contact Us At </h1>
      <p>(405) 331-8262</p>
    </div>




    </div>
  </>
  )
}
