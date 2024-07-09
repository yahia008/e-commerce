import Product from '@/app/component/product';
import React from 'react'
import axios from 'axios';

async function fetchProduct(id) {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

const page = async ({params}) => {
    const { id } = params;
    const product = await fetchProduct(id);
  
    if (!product) {
      return <p>Product not found</p>;
    }
  return (
    <div>
    <Product product={product}/>
    </div>
  )
}



export default page
