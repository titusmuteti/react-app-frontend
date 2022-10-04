import React, { useEffect, useState } from 'react'

const Home = () => {
  const [img, setImg] = useState([])
  useEffect(()=> {
    fetch("https://fierce-ridge-31455.herokuapp.com/products")
    .then(res => res.json())
    .then(res => setImg(res))
  })
  return (
    <div>
      <h1 className='text-blue' >The place to shop</h1>
      {img.map(img=> {
        return <img src={img.image} />
      })}
    </div>
  )
}

export default Home;