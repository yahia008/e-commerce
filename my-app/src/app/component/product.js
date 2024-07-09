'use client'
import React from 'react'
import NavBar from './Navbar'
import Footer from './footer'
import { useState } from 'react'
import Link from 'next/link'
import { addItem } from './utils'
import { addToCart } from '@/redux/slices/cartSlice'
import { useRouter } from 'next/navigation'
import { increment, decrement } from '@/redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Product = ({product}) => {
   

    const router = useRouter()
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        const newItem = {
            id: product.id,
            image: product.image,
            price: product.price,
            title:product.title,
            qty: 1
        };
        

        addItem(dispatch, addToCart, newItem);
        toast.success("product added")
    };
    
   
  return (
    <div>
        <div>
        <NavBar/>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 py-[120px] h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-2 lg:px-1">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[400px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-fit" src={product.image} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                       <Link href='/products/cart'> <button className="w-full
                        bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full 
                       font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Go to Cart</button></Link>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed

                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">${product.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {product.description}
                       </p>
                </div>
            </div>
        </div>
    </div>
</div>

       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default Product
