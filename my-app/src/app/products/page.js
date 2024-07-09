import React from 'react'
import NavBar from '../component/Navbar'
import Footer from '../component/footer'
import Card from '../component/card'

const page = () => {
  return (
    <div >
    
    <div>
    <NavBar/>
    </div>
    
    <div className='  w-full'>
    
    <Card/>
    </div>
       
   <div>
   <Footer/>
   </div>
    
    </div>
  )
}

export default page
