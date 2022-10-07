import React, { useEffect, useState } from 'react'
import ProductCollection from '../Components/ProductCollection';
import Cart from './Cart';

const Products = () => {
const [productsList, setProductsList] = useState([]);
const [selectedProduct, setSelectedProduct] = useState([]);

const addToCart = (product) => {
  const newProductCollection = selectedProduct.filter(card => card !== product)
  setSelectedProduct([...newProductCollection, product])
}

useEffect(()=> {
  fetch("https://fierce-ridge-31455.herokuapp.com/products")
  .then(res => res.json())
  .then(products => setProductsList(products))
  //console.log(productsList);
  .catch(err => console.log(err))
})
  return (
    <>
    <ProductCollection products={productsList} action={addToCart} />
    <Cart selectedProduct={selectedProduct} />
    </>
  )
}

export default Products;