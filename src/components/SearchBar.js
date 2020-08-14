import React from 'react';
import './SearchBar.css';
import searchIconBrand from '../assets/search-icon-brand.png';
import searchIconSearchbarExpanded from '../assets/search-icon-searchbar-expanded.png';

export default function SearchBar({ expanded, expand }) {
  return expanded ? (
    <div className='search-bar'>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='"apple," "watch," ...'
      />
      <img
        src={searchIconSearchbarExpanded}
        alt='search-icon'
        height={25}
        onClick={() => expand(false)}
      />
    </div>
  ) : (
    <div id='search-icon-container'>
      <img
        src={searchIconBrand}
        alt='search-icon'
        height={25}
        onClick={() => expand(true)}
      />
    </div>
  );
}
