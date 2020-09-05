import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import './ProductPage.css';
import { useAppContext } from '../libs/contextLib';
import backIcon from '../assets/back-icon.png';
import starIcon from '../assets/star-icon-light.png';
import Chip from '../components/Chip';

export default function ProductPage() {
  const { name } = useParams();
  const { products } = useAppContext();
  const [product, setProduct] = useState(null);
  const [stars, setStars] = useState([]);
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

  async function getReviews(product) {
    const data = await API.get('reviews', `/products/${product}/reviews`);

    data.forEach((review) => {
      let newStars = [];

      for (let i = 1; i <= review.rating; ++i) {
        newStars.push('star');
      }

      review.stars = newStars;
    });

    setReviews([...data]);
  }

  useEffect(() => {
    let data = products.find((p) => name === p.name);
    setProduct(data);

    if (data) {
      const newStars = [];
      for (let i = 1; i <= data.rating; ++i) {
        newStars.push('star');
      }
      setStars(newStars);

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
          <span>
            {product.rating === undefined ? (
              <p>no rating</p>
            ) : (
              stars.map(() => <img src={starIcon} alt='star' />)
            )}
          </span>
        </div>
        <Chip text='add to cart' primary />
        <Chip
          text='leave review'
          onClick={() => history.push(`/products/${name}/review`)}
        />
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
                      <span className='review-stars'>
                        {review.stars.map(() => (
                          <img src={starIcon} className='star' alt='star' />
                        ))}
                      </span>
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
