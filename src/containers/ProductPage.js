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
      <span className='image-and-reviews'>
        <img
          src={`data:image/png;base64, ${product.image}`}
          width={650}
          alt={product.name}
        />
        <div className='reviews'>
          <h3>Reviews</h3>
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <img
            src={`data:image/png;base64, ${product.image}`}
            width={400}
            alt={product.name}
          />
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <img
            src={`data:image/png;base64, ${product.image}`}
            width={400}
            alt={product.name}
          />
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <img
            src={`data:image/png;base64, ${product.image}`}
            width={400}
            alt={product.name}
          />
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <hr />
          <span>
            <p>john</p>
            <p>*****</p>
          </span>
          <hr />
        </div>
      </span>
    </div>
  );
}
