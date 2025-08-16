import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Conact from './pages/Conact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Wrapper to apply key so Product remounts on id change
function ProductWithKey() {
  const location = useLocation();
  return <Product key={location.pathname} />;
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SearchBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Conact/>} />
        <Route path='/product/:productId' element={<ProductWithKey/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
