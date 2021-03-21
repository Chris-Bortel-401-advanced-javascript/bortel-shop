import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store/index.js';
import StoreFront from './components/storefront/storefront.js';
import Product from './components/products/details.js';
import ShoppingCart from './components/cart/checkout.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';


function App() {
  return (
    <Provider store={store}>
    <CssBaseline /> 
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path= '/' component={StoreFront}/>
          <Route path= '/product/:id' component={Product}/>
          <Route path= '/cart' component={ShoppingCart}/>
          <StoreFront />
        </Switch>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;