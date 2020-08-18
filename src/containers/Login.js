import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Login.css';
import { useAppContext } from '../libs/contextLib';
import { useFormFields } from '../libs/hooksLib';
import { onError } from '../libs/errorLib';
import LoadingIcon from '../components/LoadingIcon';

export default function Login() {
  const history = useHistory();
  const { setAuthenticated } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
  });

  function validate() {
    return fields.email.length && fields.password.length;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      setAuthenticated(true);
      history.push('/');
    } catch (error) {
      onError(error);
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
          value={fields.email}
          onChange={handleFieldChange}
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          id='password'
          value={fields.password}
          onChange={handleFieldChange}
        />
        <button className='primary-btn' disabled={!validate() || loading}>
          log in
        </button>
        <Link to='/signup'>sign up</Link>
      </form>
    </div>
  );
}
