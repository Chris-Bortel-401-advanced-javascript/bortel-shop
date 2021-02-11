import axios from 'axios';

const initialState = {
  products: [],
  activeCategory: {}
}
export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'GETPRODUCTS':
      return {...state,
        products: payload
      }
      // Reducer that reduces the # in stock when that action is dispatched
      // case 'DECREMENTINSTOCKCOUNT':
      //   return state
      //   case 'RESHELFSTOCKCOUNT':
      //     return state
          default:
            return state
          }
        }
        
export const getProducts = () => async dispatch => {
  let products = await axios({
    method: 'GET',
    // eslint-disable-next-line
    url: 'https://auth-server-cb.herokuapp.com/api/v1/products'
  }); 
  dispatch ({
    type: 'GETPRODUCTS',
    payload: products.data.results
  })
}


// Action that will trigger the reducer to reduce the stock counter
export const decrementStock = (payload) => async dispatch => {

  payload.inStock = payload.inStock-=1;

  await axios ({
    method: 'PUT',
    // eslint-disable-next-line
    url: 'https://auth-server-cb.herokuapp.com/api/v1/products/${payload._id}',
    data: payload
  })

  dispatch(getProducts());
}

export const putStockBack = (payload) => async dispatch => {
  let amount = payload.count;
  let newObj = payload.obj;
  newObj.inStock = newObj.inStock+amount;

  await axios ({
    method: 'PUT',
    // eslint-disable-next-line
    url: 'https://auth-server-cb.herokuapp.com/api/v1/products/${newObj._id}',
    data: newObj
  })

  dispatch(getProducts());
}

