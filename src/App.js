import React from 'react';
import { Provider } from 'react-redux'

import store from './store/index.js'
import StoreFront from './components/storefront/storefront.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline /> 
      <Header />
      <StoreFront />
      <Footer />
    </Provider>
  );
}

export default App;
