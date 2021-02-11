import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Categories from './categories.js';
import CurrentCategory from './current-category.js';
import Products from './products.js';

import {getCategories} from '../../store/categories.js';
import {getProducts} from '../../store/products.js';


function StoreFront() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <Categories />
      <CurrentCategory />
      <Products />
    </>
  )
}

export default StoreFront;