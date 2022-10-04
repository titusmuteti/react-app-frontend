import React from 'react'
import ProductCard from './ProductCard'

const ProductCollection = ({products}) => {
  //console.log(products);
  const displayProducts = products.map(product => {
    return (
      <ProductCard />
    )
  })
  return (
    <div className='grid-cols-4'>
      <div className='grid-rows-5'>
        ProductCollection
        {displayProducts}
      </div>
    </div>
  )
}

export default ProductCollection 