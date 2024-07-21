import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Logo from '../assets/pexels-ceekris-1756665.jpg';

export default function About() {
  return ( <>
    <Header/>
    <div className='flex flex-col items-center p-10 bg-slate-200'>
      <h1 className=' p-5 flex items-center justify-center text-[2rem]'>Our Team</h1>
      <div className=' flex mb-10 w-[300px] h-[200px]  justify-center items-center rounded'> 
      <img src={Logo} alt="pic of crew" />
      </div>
<div className='flex flex-col items-center justify-center'> 
<p className='text-[1.7rem] p-3'>About Ryan's BBQ</p>
 <p>&nbsp;&nbsp;Welcome to Ryan's BBQ & Bar, where culinary excellence meets Southern hospitality. Established in 2010, we have built a reputation as the go-to destination for BBQ aficionados and cocktail enthusiasts alike. Our mission is to offer an unforgettable dining experience that combines the rich flavors of traditional barbecue with a contemporary twist.  </p>
 </div>
<div className='flex flex-col items-center justify-center' >
<p className='text-[1.7rem] p-3' >Our Story</p>
<p>Founded by Ryan Walker, a seasoned chef with a passion for barbecue, Ryan's BBQ & Bar was born out of a love for great food and good company. Ryan’s journey began in the heart of Texas, where he honed his skills and developed a deep appreciation for the art of slow-cooked, smoked meats. Today, our restaurant stands as a testament to his dedication to quality and innovation.</p>
</div>

<div className='flex flex-col items-center justify-center' >
  <p className='text-[1.7rem] p-3' >Our Philosophy</p>
  <p>At Ryan's BBQ & Bar, we believe that great food starts with the finest ingredients. We source our meats from local farms, ensuring they are fresh, sustainably raised, and of the highest quality. Our signature sauces and rubs are crafted in-house, using secret recipes that have been perfected over the years.</p>
</div>


    </div>
    <Footer/>
  </>
  )
}
