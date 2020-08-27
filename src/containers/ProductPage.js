import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { useAppContext } from '../libs/contextLib';

export default function ProductPage() {
  const { name } = useParams();

  return (
    <div className='ProductPage container'>
      <h1>{name}</h1>
    </div>
  );
}
