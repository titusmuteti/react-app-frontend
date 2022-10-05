import React from 'react'
import ProductCard from './ProductCard'

const ProductCollection = ({products}) => {
  //console.log(products);
  const displayProducts = products.map(product => {
    return (
      <ProductCard key={product.key} product={product} />
    )
  })
  return (
    <div className='grid-cols-4'>
      <div className='grid-rows-5'>
        {displayProducts}
      </div>
    </div>
  )
}

export default ProductCollection 