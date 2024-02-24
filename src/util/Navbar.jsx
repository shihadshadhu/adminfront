// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/land" className='logo'>
        <h1 className='navhead'>boOKWOrm</h1>
      </Link>
      <ul className='nav-list'>
        <li>
        <Link className='getstarted' to="/viewpro"> Product </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;