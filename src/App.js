import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Routes from './Routes';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
