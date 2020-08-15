import React, { useState } from 'react';
import './App.css';
import { AppContext } from './libs/contextLib';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Routes from './Routes';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [sidebarOpen, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  return (
    <div className='App'>
      <Nav openSidebar={openSidebar} />
      <AppContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <Sidebar open={sidebarOpen} closeSidebar={closeSidebar} />
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
