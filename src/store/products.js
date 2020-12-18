const initialState = [];

export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'GETPRODUCTS':
      return state
    case 'DECREMENTINSTOCKCOUNT':
      return state
    case 'RESHELFSTOCKCOUNT':
      return state
    default:
      return state
  }
}

export const getProducts = () => {
  return {
    type: 'GETPRODUCTS',
    payload: 'payload'
  }
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