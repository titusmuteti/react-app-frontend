import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='text-4xl mt-20'>Want to market your product with us?</h1>

      <div className="App">
    <header className="App-header">
    <form >
            <label >
          Product Title:
        </label><br/>
        <input type="text" className='border-4 border-black' /><br/>
          
        <label >
          Price tag:
        </label><br/>
        <input type="number" placeholder='$' className='border-4 border-black' /><br/>
           
        <label>
          Image URL:
        </label><br/>
        <input type="text" className='border-4 border-black'/><br/>
         
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
    </div>
  )
}

export default About;