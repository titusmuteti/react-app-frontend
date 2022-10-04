import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='text-white text-9xl italic py-10'>Your One Stop shop</h1>
      <label className='checkbox-wrapper text-3xl'>
        <input type={"checkbox"}/>
        Check to receive notification on latest products
      </label>
    </div>
  )
}

export default Home;