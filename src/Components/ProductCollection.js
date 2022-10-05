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
    <div className=' grid grid-rows-5 grid-flow-col gap-7 object-contain'>
        {displayProducts}
    </div>
  )
}

export default ProductCollection 