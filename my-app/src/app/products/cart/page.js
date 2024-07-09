import Cart from '@/app/component/cart'
import React from 'react'
import NavBar from '@/app/component/Navbar'
import Footer from '@/app/component/footer'


const page = () => {
  return (
    <div >
    
    <div>
    <NavBar/>
    </div>
    
    <div className='  w-full'>
    
    <Cart/>
    </div>
       
   <div>
   <Footer/>
   </div>
    
    </div>
  )
}

export default page
