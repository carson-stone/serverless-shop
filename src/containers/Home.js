import React from 'react';
import { API } from 'aws-amplify';
import './Home.css';
import { useAppContext } from '../libs/contextLib';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { products } = useAppContext();
  return (
    <div className='container'>
      <div className='header-row'>
        <h1>Watches</h1>
        <div className='chips'>
          <button className='chip selected'>
            <p>all types</p>
          </button>
          <button className='chip'>
            <p>Apple</p>
          </button>
          <button className='chip'>
            <p>Samsung</p>
          </button>
        </div>
      </div>
      <div className='Home'>
        {products.map((product) => (
          <ProductCard
            src={`data:image/png;base64, ${product.image}`}
            name={product.name}
            price={product.price}
            key={product.name}
          />
        ))}
      </div>
    </div>
  );
}
