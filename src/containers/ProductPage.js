import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import './ProductPage.css';
import { useAppContext } from '../libs/contextLib';
import backIcon from '../assets/back-icon.png';
import Chip from '../components/Chip';

export default function ProductPage() {
  const { name } = useParams();
  const { products } = useAppContext();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  async function getReviews(product) {
    const data = await API.get('reviews', `/products/${product}/reviews`);
    setReviews([...data]);
  }

  useEffect(() => {
    let data = products.find((p) => name === p.name);
    setProduct(data);

    if (data) {
      getReviews(data.name);
    }
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
          {reviews.length === 0 ? (
            <h3>No Reviews Yet</h3>
          ) : (
            <>
              <h3>Reviews</h3>
              {reviews.map((review) =>
                review.image ? (
                  <div key={review.userId}>
                    <span>
                      <p>{review.userId}</p>
                      <p>*****</p>
                    </span>
                    <img
                      src={`data:image/png;base64, ${review.image}`}
                      width={400}
                      alt={product.name}
                    />
                    <hr />
                  </div>
                ) : (
                  <div key={review.userId}>
                    <span>
                      <p>{review.userId}</p>
                      <p>*****</p>
                    </span>
                    <hr />
                  </div>
                )
              )}
            </>
          )}
        </div>
      </span>
    </div>
  );
}
