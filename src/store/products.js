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
  //TODO: This is causing the 500 error
  let products = await axios({
    method: 'GET',
    // eslint-disable-next-line
    url: `https://auth-server-cb.herokuapp.com/api/v1/products`
  }); 
  console.log('Just the DATA: ', products.data)
  dispatch ({
    type: 'GETPRODUCTS',
    payload: products.data.results
  })
  console.log('products from api: ' , products)
}


// Action that will trigger the reducer to reduce the stock counter
export const decrementStock = (payload) => async dispatch => {
// TODO: The _id seems to be the issue with the server 500 error. I am recieving the stringValue: ""payload._id""
console.log('payload in stock:', payload.inStock)
  payload.inStock = payload.inStock-=1;

  await axios ({
    method: 'PUT',
  
    url: `https://auth-server-cb.herokuapp.com/api/v1/products/${payload._id}`,
    data: payload
  })

  dispatch(getProducts());
}

export const putStockBack = (payload) => async dispatch => {
  let amount = payload.count;
  console.log('new amount: ', amount)
  let newObj = payload.obj;
  console.log('newObj: ', newObj )
  newObj.inStock = newObj.inStock+amount;
  console.log('newObj inStock: ', newObj.inStock )
  //TODO: This is causing the 500 error
  await axios ({
    method: 'PUT',
  
    url: `https://auth-server-cb.herokuapp.com/api/v1/products/${newObj._id}`,
    data: newObj
  })

  dispatch(getProducts());
}

