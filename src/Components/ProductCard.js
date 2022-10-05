import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg h-96 bg-orange-300'>
      <img className='w-full border-4 border-indigo-500/100 mt-2 h-64 ' src={product.image} alt={product.title}/>

      <div className='px-6 py-4'>
        
        <div className='font-bold mb-2 text-sm'>
          {product.title}
        </div>

        <div className='px-6 pt-4 pb-2'>
        <span className='class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 pb-2 text-lg'>
          ${product.price}
        </span>
      </div>
        {/* <p className='text-gray-700 text-base'>{product.description}</p> */}
      </div>

    </div>
  )
}

export default ProductCard