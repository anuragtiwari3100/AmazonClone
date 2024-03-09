import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
function Header() {

  const[{basket}] = useStateValue();
  return (
    <nav className='header'>
      {/* Logo on the left ->img */}
      <Link to="/">
      <img className="header__logo" src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="Amazon Logo" />
      </Link>




      {/* Search box */}
      <div className='header__search'>
      <input type="text" className='headerSerach__Input'/>
      <SearchIcon className="header__searchIcons"/>
      </div>



      
      {/* 3 Links */}
      <div className='header__Nav'>
        {/* First link */}
           <Link  to ="/login" className='header__link'>
            <div className='header_option'>
            <span className='header__optionLineOne'>Hellow  jee  </span>
            <span className='header__optionLineTwo'>Sign In  </span>
            </div>
           </Link>

        {/* Second Link */}
        <Link  to ="/" className='header__link'>
            <div className='header_option'>
            <span className='header__optionLineOne'> Returns</span>
            <span className='header__optionLineTwo'>& Orders  </span>
            </div>
           </Link>


       {/* Third link */}
       <Link  to ="/" className='header__link'>
            <div className='header_option'>
            <span className='header__optionLineOne'>Your  </span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>
           </Link>
      </div>

     {/* fourth Link */}
       <Link to="/checkout">
        <div className='header__optionBasket'>
          {/* Shopping Basket Icon */}
     <ShoppingBasketIcon/>
          {/* Number of Basket In the Basket*/} 

      <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
     
        </div>
       </Link>
        {/* Basket icon with number */}

</nav>
 
  );
}

export default Header;
 