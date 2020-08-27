import React from 'react';
import './Chip.css';

export default function Chip({ primary, text, onClick }) {
  return primary ? (
    <button className='Chip primary' onClick={onClick}>
      {text}
    </button>
  ) : (
    <button className='Chip' onClick={onClick}>
      {text}
    </button>
  );
}
