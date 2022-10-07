import React, { useEffect, useState } from 'react'
import ProductCollection from '../ProductCollection';
import SelectedProducts from '../SelectedProducts';

const Products = () => {
const [productsList, setProductsList] = useState([]);
const [cartCollection, setCatCollection] = useState([]);

const addToCart = (product) => {
  const newCollection = cartCollection.filter((card) => card != product)
  setCatCollection([...newCollection, product])
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
    <SelectedProducts listedProducts={cartCollection} />
    <ProductCollection products={productsList} action={addToCart} />
    </>
  )
}

export default Products;