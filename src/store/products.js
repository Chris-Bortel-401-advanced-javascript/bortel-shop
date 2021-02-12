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
console.log('payload in stock:', payload.inStock)
  payload.inStock = payload.inStock-=1;

  await axios ({
    method: 'PUT',
  
    url: `https://auth-server-cb.herokuapp.com/api/v1/products/${payload._id}`,
    data: payload
  })

  dispatch(getProducts());
}

// TODO: When I add an item to the cart, the console is logging that I have one more of the item in my db than I actually do.  
// started with 25010 added 9 macbooks to my cart and the console said that I had 25002 inStock when my Atlas said that I had the correct amount of 25001
export const putStockBack = (payload) => async dispatch => {
  let amount = payload.count;
  console.log('new amount: ', amount)
  let newObj = payload.obj;
  console.log('newObj: ', newObj )
  // TODO: Need to add only one item for each click of the delete button
  newObj.inStock = newObj.inStock+amount;
  console.log('newObj inStock: ', newObj.inStock )
  await axios ({
    method: 'PUT',
  
    url: `https://auth-server-cb.herokuapp.com/api/v1/products/${newObj._id}`,
    data: newObj
  })

  dispatch(getProducts());
}

