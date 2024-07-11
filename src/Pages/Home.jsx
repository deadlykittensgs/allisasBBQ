import React from 'react'
import Header from '../Components/Header'
import ribs from '../assets/BBQBackground.avif';
import storefront from '../assets/skr_2757.avif';
import food from '../assets/BBQ.avif';
import Logo from '../assets/logo.png';


export default function Home() {
  return (
    <>
    <Header/>
    <div className='flex flex-col bg-cover bg-center h-[400px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${storefront})` }}  >
      image of food
    </div>
    {/* address  */}
    <div className='bg-amber-100 flex flex-col items-center justify-center'>
      <div><i className="fa-solid fa-location-dot"></i></div>
      <p>405 E Kerr Blvd, Wynnewood</p>
    </div>
    {/* menu */}
    <div className=' flex flex-col bg-cover bg-center h-[400px] w-screen
    items-center justify-center ' style={{ backgroundImage: `url(${ribs})` }}>
      <div> <img src={Logo} alt="Logo" />    </div>
      <p className='text-slate-100'>Good words about the food</p>
<button className=' text-slate-100 bg-red-700 border-2 p-1 rounded w-[30%]'>View Menu</button>
    </div>
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
      image of food
    </div>
    {/* pick up  */}
    <div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2>Order Us to Go!</h2>
      <p className=''>Enjoy the convenience of dining at home? place your order online now and savor our delicious menu from the comfort of your own space!</p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Pick UP</button></div>
    </div>
    {/* food */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
      image of food
    </div>
{/* cater */}
    <div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2>Catering?</h2>
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
      <h2>About Alissa</h2>
      <h2>We know our BBQ</h2>
      <p className=''>This will be an about allisa page telling about her food and anything else you would want here </p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Read More</button></div>
    </div>
    {/* more food */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
      inside the store
    </div>
    <div className='bg-zinc-50 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2>People are saying</h2>
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
<div className='bg-amber-100 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2>Lets Connect</h2>
      <h2>Email us at ouremail@gmail.com</h2>
      <h2>call us at (405) 123-4567</h2>

    </div>
{/* map  */}
    <div className=' flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      
<p>big map here </p>
    </div>

    

{/* information  */}
    <div className='bg-stone-950 text-slate-50 flex flex-col items-center justify-evenly w-page h-[400px] px-[30px]'>
    <div>
    <h1>location</h1>
      <p>our location </p>
      <p>city state</p>
      <p>zip</p>
    </div>

    <div>
      <h1> Hours </h1>
      <p>days </p>
      <p>hours</p>
    </div>

    <div>
      <h1> find us on </h1>
      <p>social media logos</p>
    </div>

    <div> 
      <h1>contact us at </h1>
      <p>phone number</p>
    </div>




    </div>
  </>
  )
}
