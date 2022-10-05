import React, { useEffect, useState } from 'react'
import ProductCollection from '../ProductCollection';
import SelectedProducts from '../SelectedProducts';

const Products = () => {
const [productsList, setProductsList] = useState([]);

useEffect(()=> {
  fetch("https://fierce-ridge-31455.herokuapp.com/products")
  .then(res => res.json())
  .then(products => setProductsList(products))
  //console.log(productsList);
})
  return (
    <>
    <SelectedProducts />
    <ProductCollection products={productsList}/>
    </>
  )
}

export default Products;