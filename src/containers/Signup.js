import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Signup.css';
import { useAppContext } from '../libs/contextLib';
import { useFormFields } from '../libs/hooksLib';
import { onError } from '../libs/errorLib';
import LoadingIcon from '../components/LoadingIcon';

export default function Signup() {
  const history = useHistory();
  const { setAuthenticated } = useAppContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
  });

  function validate() {
    return (
      fields.email.length &&
      fields.password.length &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const user = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });

      setUser(user);
    } catch (error) {
      onError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      setAuthenticated(true);
      history.push('/');
    } catch (error) {
      onError(error);
    } finally {
      setLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <p>please check your email for the confirmation code</p>
        <label htmlFor='confirmationCode'>confirmation code</label>
        <input
          type='tel'
          id='confirmationCode'
          autoFocus
          value={fields.confirmationCode}
          onChange={handleFieldChange}
        />
        <button
          className='primary-btn'
          disabled={!validateConfirmationForm() || loading}
        >
          confirm
        </button>
      </form>
    );
  }

  function renderSignupForm() {
    return (
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
        <label htmlFor='confirmPassword'>Confirm password</label>
        <input
          type='password'
          id='confirmPassword'
          value={fields.confirmPassword}
          onChange={handleFieldChange}
        />
        <button className='primary-btn' disabled={!validate() || loading}>
          sign up
        </button>
      </form>
    );
  }

  return (
    <div className='Signup container'>
      {loading && <LoadingIcon />}
      <h1>Signup</h1>
      {user === null ? renderSignupForm() : renderConfirmationForm()}
    </div>
  );
}
