import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Logo from '../assets/logo.png';

export default function About() {
  return ( <>
    <Header/>
    <div className='flex flex-col items-center  p-10'>
      <h1 className=' p-5 flex items-center justify-center text-[2rem]'>About Allisa</h1>


      <div className=' flex mb-10 bg-slate-300 w-[300px] h-[200px]  justify-center items-center'> 
      <img src={Logo} alt="pic of crew" />
      </div>

      <p>&nbsp;&nbsp; long cool story about Allisa going on for a second Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto corporis vel magni, animi nesciunt accusantium, quasi iusto incidunt esse facilis non nam temporibus recusandae? Est earum quos quasi cum ut sequi reiciendis aut unde repellendus pariatur voluptatibus vel neque minus molestiae dignissimos quo nisi, impedit assumenda aperiam, aliquam repellat id quas! Sunt tempora commodi dignissimos eius officiis maxime natus voluptatem omnis suscipit unde. Architecto vero eos non eius id maxime nesciunt ullam earum ipsam necessitatibus vitae, dolorem totam deserunt, magnam aliquam! Ratione debitis dolorem cumque eaque itaque, nemo facere earum qui quisquam natus dolore, voluptatem ex culpa, fugiat dolor!</p>



    </div>
    <Footer/>
  </>
  )
}
