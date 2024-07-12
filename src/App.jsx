import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import Jobs from './Pages/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='*' element={<Nopage/>}/>
      <Route path='jobs' element={<Jobs/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
