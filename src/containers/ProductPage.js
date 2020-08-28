import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.css';
import { useAppContext } from '../libs/contextLib';
import backIcon from '../assets/back-icon.png';
import Chip from '../components/Chip';

export default function ProductPage() {
  const { name } = useParams();
  const { products } = useAppContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const p = products.find((p) => name === p.name);
    setProduct(p);
  }, [products]);

  return !product ? (
    <></>
  ) : (
    <div className='ProductPage container'>
      <span>
        <Link to='/'>
          <img src={backIcon} alt='back icon' width={35} height={35} />
        </Link>
        <h1>{name}</h1>
      </span>
      <span>
        <div className='price-and-rating'>
          <p>${product.price}</p>
          <p>*****</p>
        </div>
        <Chip text='add to cart' primary />
        <Chip text='leave review' />
      </span>
      <span>
        <img
          src={`data:image/png;base64, ${product.image}`}
          width={650}
          alt={product.name}
        />
      </span>
    </div>
  );
}
