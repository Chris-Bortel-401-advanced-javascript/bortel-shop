import axios from 'axios';

const initialState = {
  products: [],
  activeCategory: {}
}
export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'GETPRODUCTS':
      console.log('payload', payload)
      return {...state,
        products: payload
      }
    case 'DECREMENTINSTOCKCOUNT':
      return state
    case 'RESHELFSTOCKCOUNT':
      return state
    default:
      return state
  }
}

export const getProducts = () => async dispatch => {
  let products = await axios({
    method: 'GET',
    url: 'https://davee-auth-api-server.herokuapp.com/api/v1/products'
  }); 
  dispatch ({
    type: 'GETPRODUCTS',
    payload: products.data.results
  })
}

export const decrementInStockCount = () => {
  return {
    type: 'DECREMENTINSTOCKCOUNT',
    payload: 'payload'
  }
}

export const reShelfStockCount = () => {
  return {
    type: 'RESHELFSTOCKCOUNT',
    payload: 'payload'
  }
}

