import React from 'react';
import searchIcon from '../assets/search-icon.png';

export default function SearchBar({ expanded, expand }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='"apple," "watch," ...'
      />
      <img
        src={searchIcon}
        alt='search-icon'
        height={25}
        onClick={(e) => expand(e)}
      />
    </div>
  );
}
