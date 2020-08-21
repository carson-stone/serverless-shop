import React, { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import './App.css';
import { AppContext } from './libs/contextLib';
import { onError } from './libs/errorLib';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Routes from './Routes';
import LoadingIcon from './components/LoadingIcon';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [sidebarOpen, setSidebar] = useState(false);
  const [products, setProducts] = useState([]);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  async function loadSession() {
    try {
      await Auth.currentSession();
      setAuthenticated(true);
    } catch (error) {
      if (error !== 'No current user') {
        onError(error);
      }
    }
  }

  async function getProducts() {
    try {
      const productsData = await API.get('reviews', '/products');

      setProducts(productsData);
    } catch (error) {
      onError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSession();
    getProducts();
  }, []);

  return (
    <div className='App'>
      {isLoading && <LoadingIcon />}
      <Nav openSidebar={openSidebar} />
      <AppContext.Provider
        value={{ isAuthenticated, setAuthenticated, products }}
      >
        <Sidebar open={sidebarOpen} closeSidebar={closeSidebar} />
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
