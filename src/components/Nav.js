import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SearchBar from '../components/SearchBar';
import menuIcon from '../assets/menu-icon.png';
import cartIcon from '../assets/cart-icon.png';
import userIcon from '../assets/user-icon.png';

export default function Nav({ openSidebar }) {
  const [searchBarExpanded, expandSearchBar] = useState(false);

  return (
    <nav className='Nav'>
      <img
        src={menuIcon}
        alt='menu-icon'
        height={9}
        width={35.5}
        onClick={openSidebar}
        className='menu-icon'
      />
      <div className='nav-icons'>
        <form>
          <SearchBar expanded={searchBarExpanded} expand={expandSearchBar} />
        </form>
        <Link className='nav-link' to='/cart'>
          <img src={cartIcon} alt='cart-icon' height={25} />
        </Link>
        <Link className='nav-link' to='/profile'>
          <img src={userIcon} alt='user-icon' height={25} />
        </Link>
      </div>
    </nav>
  );
}
