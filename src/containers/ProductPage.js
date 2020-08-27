import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import './ProductPage.css';
import { useAppContext } from '../libs/contextLib';
import backIcon from '../assets/back-icon.png';
import Chip from '../components/Chip';

export default function ProductPage() {
  const { name } = useParams();
  const history = useHistory();

  return (
    <div className='ProductPage container'>
      <span>
        <Link to='/'>
          <img src={backIcon} alt='back icon' width={35} height={35} />
        </Link>
        <h1>{name}</h1>
      </span>
      <span>
        <Chip text='add to cart' primary />
        <Chip text='leave review' />
      </span>
    </div>
  );
}
