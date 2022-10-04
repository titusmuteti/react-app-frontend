import React from 'react';
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='nav'>
        <a href='/' className='ClassCollection'>Class Collecting</a>
        <ul>
            <li>
                <a href='/home' className='AiFillHome'>
                    Home <AiFillHome/>
                </a>
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