import React from 'react';
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 className='ClassCollection text-center text-white italic font-sans'>CLASS COLLECTION LTD</h1>
        <ul>
            <li>
                <a href='/' className='AiFillHome'>
                    Home <AiFillHome/>
                </a>
            </li>

            <li>
                <a href='/products'>
                    Products
                </a>
            </li>

            <li>
                <a href='/cart'>
                    Cart <AiOutlineShoppingCart />
                </a>
            </li>

            <li>
                <a href='/sell'>Sell</a>
            </li>
        </ul>

        
    </nav>
  )
}

export default NavBar;