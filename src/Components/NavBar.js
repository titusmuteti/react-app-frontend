import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav'>
        <a href='/' className='Class-Collection'>Class Collecting</a>
        <ul>
            <li>
                <a href='/home' className=''>Home <AiFillHome></AiFillHome></a>
            </li>

            <li>
                <a href='/reviews'>Reviews</a>
            </li>

            <li>
                <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;