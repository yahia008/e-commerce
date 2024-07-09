'use client'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', route:'/' },
    { id: 3, text: 'cart',  route:'/products/cart' },
    { id: 4, text: 'products' ,  route:'/products'},
   // { id: 5, text: 'Contact', route:'contact'},
   // { id: 6, text: 'Go To App' , route:'#'},
  ];

  return (
    <div className='bg-black flex justify-between items-center fixed z-10 h-24 w-full mx-auto px-4 text-white mb-[350px]'>
      <div className='flex items-center ml-6'>
      <h1 className=' text-xl sm:text-3xl font-bold text-[#00df9a]'>BIBAT</h1> 
      
      
      </div>
       {/* Desktop Navigation */}
       <ul className='hidden md:flex'>
        {navItems.map(item => (
        <Link 
        href={item.route}
        key={item.id}
      >
        
      
          <li
          
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 mr-20 font-bold text-xl cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BIBAT</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
           <Link 
           href={item.route}
           key={item.id}
         >
          <li
            onClick={handleNav}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] font-bold text-xl duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>
      
    </div>
  )
}

export default NavBar
