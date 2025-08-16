import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible]=useState(false);
    const { setShowSearch,getCartItemsCount } = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between  font-medium'>
        <Link to={'/'}><img src={assets.logo} className='w-36' alt="logo" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
             <NavLink to={'/'} className='flex flex-col items-center gap-1'>
                <p>Home</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
             </NavLink>

             <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
                <p>Collections</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
             </NavLink>

             <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
                <p>About</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
             </NavLink>

             <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
                <p>Contact</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
             </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img
              onClick={() => setShowSearch(prev => !prev)}
              src={assets.search_icon}
              className='w-5 cursor-pointer'
              alt="search-icon"
            />


            <div className='group relative'>
                <Link to={'/login'} ><img className='w-5 cursor-pointer' src={assets.profile_icon} alt='profile-icon' /></Link>
                <div className='group-hover:block z-1 hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>My Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart-icon'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartItemsCount()}</p>
            </Link>   
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='menu-icon'/>         
        </div>

       {/* Sidebar menu for small screens */}
<div
  className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out 
    ${visible ? 'w-64 z-[50]' : 'w-0'}`}
>
  <div className="flex flex-col text-gray-700 h-full">
    {/* Close/Back Button */}
    <div
      onClick={() => setVisible(false)}
      className="cursor-pointer flex items-center gap-3 p-4 border-b hover:bg-gray-50"
    >
      <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
      <p className="font-medium">Back</p>
    </div>

    {/* Menu Items */}
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 pl-6 border-b hover:bg-gray-100 hover:text-black font-medium"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 pl-6 border-b hover:bg-gray-100 hover:text-black font-medium"
      to="/collection"
    >
      Collection
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 pl-6 border-b hover:bg-gray-100 hover:text-black font-medium"
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-3 pl-6 border-b hover:bg-gray-100 hover:text-black font-medium"
      to="/contact"
    >
      Contact
    </NavLink>
  </div>
</div>

    </div>
  )
}

export default Navbar