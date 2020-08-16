import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Login.css';
import { useAppContext } from '../libs/contextLib';

export default function Login() {
  const { setAuthenticated } = useAppContext();
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate() {
    return email.length && password.length;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      setAuthenticated(true);
      setRedirect(true);
    } catch (e) {
      alert(e.message);
    }
  }

  return redirect ? (
    <Redirect to='/' />
  ) : (
    <div className='Login container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label for='email'>email address</label>
        <input
          type='email'
          id='email'
          placeholder='name@example.com'
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for='password'>password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='primary-btn' disabled={!validate()}>
          log in
        </button>
      </form>
    </div>
  );
}
