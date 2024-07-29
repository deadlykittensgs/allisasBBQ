import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import Jobs from './Pages/Jobs'
import Order from './Pages/Order'
import Catering from './Pages/Catering'
import Cart from './Pages/Cart'

function App() {


  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Nopage/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/catering' element={<Catering/>}/>
      <Route path='/cart' element={<Cart/>}/>
   

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
