import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Singleproduct from './Pages/Singleproduct'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Errorpage from './Components/Errorpage'
const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>     
        <Route path='/singleproduct/:id' element={<Singleproduct />} />
        <Route path='*' element={<Errorpage/>}/>     
    
      </Routes>
    </BrowserRouter>
  )
}

export default App