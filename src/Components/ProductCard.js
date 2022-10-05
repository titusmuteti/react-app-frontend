import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full border-4 border-indigo-500/100' src={product.image} alt={product.title}/>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{product.title}</div>
        <p className='text-gray-700 text-base'>{product.description}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          ${product.price}
        </span>
      </div>
    </div>
  )
}

export default ProductCard