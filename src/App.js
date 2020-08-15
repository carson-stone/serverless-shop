import React, { useState } from 'react';
import './App.css';
import { AppContext } from './libs/contextLib';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Routes from './Routes';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div className='App'>
      <Nav />
      <AppContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
