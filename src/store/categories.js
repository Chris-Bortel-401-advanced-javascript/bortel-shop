import axios from 'axios';

const initialState = {
  categories: [],
  activeCategory: {}
}

export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'CHANGECATEGORY':
      return state
      case 'GETCATEGORIES':
      console.log('payload', payload)
      return state
    default:
      return state
  }
}

export const changeCategory = (payload) => {
  return {
    type: 'CHANGECATEGORY',
    payload: 'payload'
  }
}

export const getCategories = () => async dispatch => {
  let categories = await axios({
    method: 'GET',
    url: 'https://davee-auth-api-server.herokuapp.com/api/v1/categories'
  });
  dispatch({
    type: 'GETCATEGORIES',
    payload: categories.data.results,
  })
}