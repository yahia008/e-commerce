import Product from '@/app/component/product';
import React from 'react'
import axios from 'axios';


export async function generateStaticParams() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Generate paths for each product
    const paths = products.map(product => ({
      id: product.id.toString()
    }));

    return paths;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}



async function fetchProduct(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}


const page = async ({ params}) => {
  const product = await fetchProduct(params.id);
  
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
