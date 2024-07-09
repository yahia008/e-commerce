'use client'
import React from 'react'
import { useEffect, useState} from 'react'
import {apifunc} from './utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { addItem } from './utils'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify'


const Card = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error
    const router = useRouter()
    const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apifunc();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, []);
    
  if (loading) {
    return <div className='flex  justify-center items-center h-screen'> <ClipLoader/> </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  
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
    <div className=' text-white  h-screen'>

 <div className='py-[100px]  h-screen sm:h-full overflow-x-auto'>
 
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {!products?<div className=' flex justify-center items-center text-black font-bold text-xl'><p>loading...</p></div>:products.map(product => (
          <div className="flex flex-col p-5 w-[300px] ml-auto mr-auto mt-[60px] rounded shadow " key={product.id}>
          <div className="product-image">

            <img src={product.image} className='w-[100%] h-[200px] rounded-sm' width={300} height={150} alt="Product Image" />
          </div>
          <div className="p">
            <h2 className="text-center">Awesome</h2>
            <h4 className="text-center text-gray-500 font-bold">${product.price}</h4>
            <button className="bg-yellow-400 p-3 m-4 cursor-pointer hover:bg-purple-800 rounded" onClick={()=>handleAddToCart(product)} >
                Add to Cart</button>
            <button className="bg-yellow-400 p-3 m-4 cursor-pointer hover:bg-purple-800 rounded" onClick={()=>router.push(`/products/${product.id}`)}>View</button>
          </div>
        </div>
        ))}
      </div>

 </div>
      
   
    </div>
  )

}

export default Card
