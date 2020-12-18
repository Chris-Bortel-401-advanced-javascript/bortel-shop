const initialState = {};

export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'ADDTOCART':
      return state
    case 'DELETEFROMCART':
      return state
    default:
      return state
  }
}

export const addToCart = () => {
  return {
    type: 'ADDTOCART',
    payload: 'payload'
  }
}

export const deleteFromCart = () => {
  return {
    type: 'DELETEFROMCART',
    payload: 'payload'
  }
}
