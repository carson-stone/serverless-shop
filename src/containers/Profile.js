import React from 'react';
import './Profile.css';
import { useAppContext } from '../libs/contextLib';

export default function Profile() {
  const { isAuthenticated } = useAppContext();

  return (
    <div className='Profile container'>
      <h1>Profile</h1>
      {!isAuthenticated ? (
        <p>Not Authenticated</p>
      ) : (
        <form>
          <strong>Email</strong>
        </form>
      )}
    </div>
  );
}
