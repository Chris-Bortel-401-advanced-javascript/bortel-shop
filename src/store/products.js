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
            url: 'https://auth-server-cb.herokuapp.com/api/v1/products'
          }); 
          dispatch ({
            type: 'GETPRODUCTS',
            payload: products.data.results
          })
          console.log('products===+', products)
}


// Action that will trigger the reducer to reduce the stock counter
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

