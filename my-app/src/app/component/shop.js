import React from 'react'
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa';

const Shop = () => {
  return (
    <div className='bg-gray-300 flex justify-center items-center  h-screen p-4'>
    <div className='bg-white rounded shadow h-[600px] justify-evenly 
    w-[800px] flex flex-col items-center p-10'>
        <h2 className='text-4xl font-bold m-3'>Thanks for shopping</h2>
        <div>
        <FaShoppingBag size={200} className='text-green-600' />
        </div>

       <div className='w-full text-3xl font-bold bg-yellow-400
        rounded text-white
        hover:bg-gray-400 hover:shadow text-center p-5'> <Link href='/products'>Go To Products </Link></div>
    </div>
     
  </div>
  )
}

export default Shop
