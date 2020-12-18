import React from 'react';

import Categories from './categories.js';
import CurrentCategory from './current-category.js';
import Products from './products.js';

function StoreFront() {
  return (
    <>
      <Categories />
      <CurrentCategory />
      <Products />
    </>
  )
}

export default StoreFront;