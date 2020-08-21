import React from 'react';
import './ProductCard.css';

export default function ({ src, name, price }) {
  return (
    <div className='ProductCard'>
      <img src={src} width='350' alt={name} />
      <div className='product-info'>
        <div>{name}</div>
        <div>
          <span>$ {price}</span>
          <span>*****</span>
        </div>
      </div>
    </div>
  );
}
