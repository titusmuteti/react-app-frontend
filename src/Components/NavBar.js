import React from 'react';
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 href='/' className='ClassCollection'>CLASS COLLECTION</h1>
        <ul>
            <li>
                <a href='/home' className='AiFillHome'>
                    Home <AiFillHome/>
                </a>
            </li>

            <li>
                <a href='/reviews'>Products</a>
            </li>

            <li>
                <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;