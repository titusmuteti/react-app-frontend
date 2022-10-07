import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='text-4xl mt-5 font-bold'>Want to market your product with us?</h1>

    <div className="App">
      <header className="App-header mt-10">
      <form className='form' >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC-9OSf41AWvLERVefeZdV1FKvWc6SDqdXA&usqp=CAU" alt="" />
        <label >
          Product Title:
        </label><br/>
          <input type="text" className='border-4 border-black' /><br/>

          <label>
          Product Category:
        </label><br/>
          <input type="select" className='border-4 border-black mt-5' /><br/>
            
        <label >
          Price tag:
        </label><br/>
          <input type="number" placeholder='$' className='border-4 border-black mt-5' /><br/>
            
        <label>
          Image URL:
        </label><br/>
          <input type="text" className='border-4 border-black mt-5'/><br/>
          
        <input className='bg-indigo-200 mt-24 rounded-lg' type="submit" value="Submit"/>
        </form>
      </header>
      </div>
    </div>
  )
}

export default About;