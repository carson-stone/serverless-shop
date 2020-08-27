import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProductCard.css';

export default function ({ src, name, price }) {
  const history = useHistory();

  return (
    <div className='ProductCard'>
      <img
        src={src}
        width='350'
        alt={name}
        onClick={() => history.push(`/products/${name}`)}
      />
      <div
        className='product-info'
        onClick={() => history.push(`/products/${name}`)}
      >
        <div>{name}</div>
        <div>
          <span>$ {price}</span>
          <span>*****</span>
        </div>
      </div>
    </div>
  );
}
