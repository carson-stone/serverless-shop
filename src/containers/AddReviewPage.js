import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './AddReviewPage.css';
import backIcon from '../assets/back-icon.png';

export default function () {
  const { name } = useParams();
  return (
    <div className='container AddReviewPage'>
      <span>
        <Link to={`/products/${name}`}>
          <img src={backIcon} alt='back icon' width={35} height={35} />
        </Link>
        <h1>Review - {name}</h1>
      </span>
    </div>
  );
}
