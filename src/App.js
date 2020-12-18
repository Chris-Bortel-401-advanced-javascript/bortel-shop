import React from 'react';
import StoreFront from './components/storefront/storefront.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline /> 
      <Header />
      <StoreFront />
      <Footer />
    </>
  );
}

export default App;
