import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Sidebar.css';
import { useAppContext } from '../libs/contextLib';
import xIcon from '../assets/x-icon.png';

export default function Sidebar({ open, closeSidebar }) {
  const { isAuthenticated, setAuthenticated } = useAppContext();

  return !open ? null : (
    <div className='sidebar-overlay'>
      <div className='Sidebar'>
        <div>
          <div>
            <img
              src={xIcon}
              alt='x icon'
              height={18}
              width={18}
              onClick={closeSidebar}
            />
          </div>
          {isAuthenticated ? (
            <Link
              to='/'
              className='login-link'
              onClick={async () => {
                await Auth.signOut();
                setAuthenticated(false);
                closeSidebar();
              }}
            >
              logout
            </Link>
          ) : (
            <Link to='/login' className='login-link' onClick={closeSidebar}>
              login
            </Link>
          )}
        </div>
        <div>
          <ul>
            <li>all</li>
            <li>watches</li>
            <li>shoes</li>
            <li>jackets</li>
          </ul>
        </div>
        <div>
          <h1>Serverless Shop</h1>
        </div>
      </div>
      <div className='sidebar-dimmer' onClick={closeSidebar}></div>
    </div>
  );
}
