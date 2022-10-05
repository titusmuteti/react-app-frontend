import React, { useEffect, useState } from 'react'
import ProductCollection from '../ProductCollection';

const Products = () => {
const [productsList, setProductsList] = useState([]);

useEffect(()=> {
  fetch("https://fierce-ridge-31455.herokuapp.com/products")
  .then(res => res.json())
  .then(products => setProductsList(products))
  console.log(productsList);
})
  return (
    <>
    <div className='flex items-center p-10 text-3xl'>
      <div className='flex border border-purple-200 rounded'>
        <input
          type={"text"}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder='Search...' 
        />
        <button className='px-4 text-white bg-purple-600 border-l rounded'>Search</button>
      </div>
    </div>
      <ProductCollection products={productsList}/>
    </>
  )
}

export default Products;