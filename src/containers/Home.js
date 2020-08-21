import React from 'react';
import { API } from 'aws-amplify';
import './Home.css';
import { useAppContext } from '../libs/contextLib';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { products } = useAppContext();
  return (
    <div className='Home container'>
      {products.map((product) => (
        <ProductCard
          src={`data:image/png;base64, ${product.image}`}
          name={product.name}
          price={product.price}
          key={product.name}
        />
      ))}
    </div>
  );
}
