import axios from 'axios';

const initialState = {
  products: [],
  activeCategory: {}
}

export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'GETPRODUCTS':
      return {...state, products: payload}

      default:
      return state
  }
}
        
export const getProducts = () => async dispatch => {
  let products = await axios({
    method: 'GET',
    url: `https://auth-server-cb-f42bb687ef8b.herokuapp.com/api/v1/products`
  }); 

  dispatch ({
    type: 'GETPRODUCTS',
    payload: products.data.results
  })
}

// Action that will trigger the reducer to reduce the stock counter
export const decrementStock = (payload) => async dispatch => {
// console.log('payload in stock:', payload.inStock)
  payload.inStock = payload.inStock-=1;

  await axios ({
    method: 'PUT',
    url: `https://auth-server-cb-f42bb687ef8b.herokuapp.com/api/v1/products/${payload._id}`,
    data: payload
  })

  dispatch(getProducts());
}

export const putStockBack = (payload) => async dispatch => {
  let amount = payload.count;
  let newObj = payload.obj;

  // TODO: Need to add only one item for each click of the delete button
  newObj.inStock = newObj.inStock+amount;
  await axios ({
    method: 'PUT',
    url: `https://auth-server-cb-f42bb687ef8b.herokuapp.com/api/v1/products/${newObj._id}`,
    data: newObj
  })

  dispatch(getProducts());
}

