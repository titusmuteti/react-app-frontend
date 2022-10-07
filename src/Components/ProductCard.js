import React from 'react';
import { AiFillHeart, AiOutlineShoppingCart, AiOutlineDelete} from "react-icons/ai";


const ProductCard = ({product}) => {
  return (
    <>
    <div className='md:container md:mx-width leading-relaxed h-min-content px-4 mb-2 pt-5 bg-orange-300'>
      <h2 className='font-bold'>CATEGORY: {product.category}</h2>
      <img src={product.image} alt="" className='h-40 max-w-none mt-10' />
      {/* <img className='w-full border-4 mt-2 h-64 pr-48' src={product.image} alt={product.title}/> */}

      <div className='px-6 py-4'>
        <div className='font-bold  text-lg '>
          {product.title}
        </div>

        <div className='px-6 pt-4 pb-2'>
        <span className='class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 pb-2 text-lg'>
          ${product.price}
        </span>
      </div>
      </div>

    <div className='px-2 pt-4'>
        <span className='inline-block px-3 py-1 pl-10'><AiFillHeart className='text-white text-4xl'/></span>
        <span className='inline-block px-3 py-1 pl-10'><AiOutlineShoppingCart className='text-black text-4xl'/></span>
        <span className='inline-block px-3 py-1 pl-10'><AiOutlineDelete className='text-black text-4xl'/></span>
      </div>
    </div>
    </>

  )
}

export default ProductCard