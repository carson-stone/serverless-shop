import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProductCard.css';

export default function ({ src, name, price }) {
  const history = useHistory();

  return (
    <div
      className='ProductCard'
      onClick={() => history.push(`/products/${name}`)}
    >
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
