import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import categories from './categories.js'
import products from './products.js'

const reducer = combineReducers({
  categories, products
})

const store = () => {
  return createStore(reducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)));
} 

export default store();