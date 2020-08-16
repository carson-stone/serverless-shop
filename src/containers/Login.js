import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Login.css';
import { useAppContext } from '../libs/contextLib';
import LoadingIcon from '../components/LoadingIcon';

export default function Login() {
  const history = useHistory();
  const { setAuthenticated } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate() {
    return email.length && password.length;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(email, password);
      setAuthenticated(true);
      history.push('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='Login container'>
      {loading && <LoadingIcon />}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>email address</label>
        <input
          type='email'
          id='email'
          placeholder='name@example.com'
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='primary-btn' disabled={!validate() || loading}>
          log in
        </button>
      </form>
    </div>
  );
}
