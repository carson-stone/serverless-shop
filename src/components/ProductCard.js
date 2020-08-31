import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ProductCard.css';
import starIcon from '../assets/star-icon-dark.png';

export default function ({ src, name, price, rating }) {
  const history = useHistory();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 1; i <= rating; ++i) {
      newStars.push('star');
    }
    setStars(newStars);
  }, []);

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
          <span>
            {rating === undefined ? (
              <p>no rating</p>
            ) : (
              stars.map(() => <img src={starIcon} alt='star' />)
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
