'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './utils'
import Image from 'next/image'
import Product from './product'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { removeItem } from '@/redux/slices/cartSlice'
import { increment, decrement } from '@/redux/slices/cartSlice'


const Cart = () => {

   const  dispatch = useDispatch()
    const data = useSelector((state) => state.cart)
    const router = useRouter()

    const totalPrice = data.reduce((total, item) => {
      return total + item.price;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
    
    
  return (
    <div className='bg-gray-200 py-[100px] h-screen w-full'>

      <div className='bg-white w-full rounded overflow-y-auto mt-7 p-5 h-full'> 
       <div className='p-3 shadow border-b border-black mb-4 text-xl font-bold'>
        <h2>Cart</h2>
        
       </div>

       <div>
          {
            data.map((item)=> (
              <div key={item.id} className='mb-4 p-2 flex justify-between items-center border-b'>
                
                <div className=' w-[70px] sm:w-[100px] flex flex-col  sm:flex-row items-center sm:ml-3'>
                  <img className='w-full ' src={item.image} width={300} height={200} alt='image'/>
                  <div className="flex items-center ml-7  p-3">
                  <button 
                  onClick={()=>dispatch(decrement({ id: item.id, price: item.price, qty:item.qty }))}
                  className='text-sm sm:text-xl font-bold text-white p-2 mr-3 bg-black rounded'>-</button><p className='text-sm sm:text-base'>{item.qty}</p><button onClick={()=>dispatch(increment({ id: item.id, price: item.price }))} className='text-sm sm:text-xl font-bold bg-black p-2 ml-3 text-white rounded'>+</button>
         
                    </div>
                </div>

                <div className='flex mr-3 sm:mr-10 items-center'>
                  <p className='text-sm sm:text-xl  mr-10 font-bold'>{formatPrice(item.price)}</p>
                  <div className='bg-red-600 rounded text-sm text-white p-3 font-bold' onClick={()=>dispatch(removeItem(item.id))}>delete</div>
                </div>


              </div>
            ))
            
          }
        </div>
        {data.length === 0 ?<p className='text-center font-bold text-3xl mt-6'>No Item </p>:
            ( <div className=' flex justify-center items-center '>
             <div className=' text-white w-[500px] h-[300px] p-4'>
               <div className='flex justify-between items-center m-6 text-gray-600'>
                 <h2 className='text-xl font-bold'>Total</h2>
                 <h2 className='text-xl font-bold'>{formattedTotalPrice}</h2>
               </div>
               <button className='w-full p-3 font-bold text-xl rounded  bg-purple-700 mt-5 hover:shadow' onClick={()=>router.push('/products/shop')}>checkout</button>
               <button className='w-full p-3 font-bold text-xl rounded  bg-purple-700 mt-5 hover:shadow'  onClick={()=>router.push('/products')}>continue shopping</button>
             </div>
           </div>)
        }
         
        
      </div>
      
    </div>
  )
}

export default Cart
