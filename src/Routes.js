import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ProductPage from './containers/ProductPage';
import AddReviewPage from './containers/AddReviewPage';
import NotFound from './containers/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path='/products/:name'>
        <ProductPage />
      </Route>
      <Route exact path='/products/:name/review'>
        <AddReviewPage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
