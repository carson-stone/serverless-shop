import React, { useState } from 'react';
import './Home.css';
import { useAppContext } from '../libs/contextLib';
import ProductCard from '../components/ProductCard';
import Chip from '../components/Chip';

export default function Home() {
  const [selectedButton, setSelectedButton] = useState('all types');
  const [unselectedButtons, setUnselectedButtons] = useState([
    'Apple',
    'Samsung',
  ]);

  function makeSelected(e) {
    setSelectedButton(e.target.innerText);
    setUnselectedButtons([
      selectedButton,
      ...unselectedButtons.filter((filter) => filter !== e.target.innerText),
    ]);
  }

  const { products } = useAppContext();

  return (
    <div className='container'>
      <div className='header-row'>
        <h1>Watches</h1>
        <div className='chips'>
          <Chip primary text={selectedButton} key={selectedButton} />
          {unselectedButtons.map((buttonText) => (
            <Chip
              text={buttonText}
              onClick={(e) => makeSelected(e)}
              key={buttonText}
            />
          ))}
        </div>
      </div>
      <div className='Home'>
        {products.map((product) =>
          selectedButton === 'all types' ? (
            <ProductCard
              src={`data:image/png;base64, ${product.image}`}
              name={product.name}
              price={product.price}
              key={product.name}
            />
          ) : (
            product.name.includes(selectedButton) && (
              <ProductCard
                src={`data:image/png;base64, ${product.image}`}
                name={product.name}
                price={product.price}
                key={product.name}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
