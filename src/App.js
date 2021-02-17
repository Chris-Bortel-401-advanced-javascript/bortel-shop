import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store/index.js'
import StoreFront from './components/storefront/storefront.js';
import ProductDetails from './components/products/details.js';
import ShoppingCart from './components/cart/checkout.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

// TODO: Add browser router so that I can create a menu in the header that will direct users to the categories that they are looking for
// Links to: Home page using the title, links to my categories (electronics, books, albums)
function App() {
  return (
    <Provider store={store}>
    <CssBaseline /> 
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path= '/' component={StoreFront}/>
          <Route path= '/productDetails' component={ProductDetails}/>
          <Route path= '/cart' component={ShoppingCart}/>
          <StoreFront />
        </Switch>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
