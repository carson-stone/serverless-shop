import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import './App.css';
import { AppContext } from './libs/contextLib';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Routes from './Routes';

function App() {
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [sidebarOpen, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  async function loadSession() {
    try {
      await Auth.currentSession();
      setAuthenticated(true);
    } catch (error) {
      if (error !== 'No current user') {
        alert(error);
      }
    } finally {
      setAuthenticating(false);
    }
  }

  useEffect(() => {
    loadSession();
  }, []);

  return (
    !isAuthenticating && (
      <div className='App'>
        <Nav openSidebar={openSidebar} />
        <AppContext.Provider value={{ isAuthenticated, setAuthenticated }}>
          <Sidebar open={sidebarOpen} closeSidebar={closeSidebar} />
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
