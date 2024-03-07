import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
function Header() {
  return (
    <nav className='header'>
      {/* Logo on the left ->img */}
      <Link to="/login">
      <img className="header_logo" src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="Amazon Logo" />

      </Link>
      {/* Search box */}
      <input type="text" className='header__searchInput'/>
      {/* 3 Links */}
      {/* Basket icon with number */}
</nav>
 
  );
}

export default Header;
 