import axios from 'axios';

const initialState = {
  categories: [],
  activeCategory: {}
};

export default function reducer(state=initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case 'CHANGECATEGORY':
      let newState = {...state,
        activeCategory: payload
      }
      return newState 
    case 'GETCATEGORIES':
        return {...state,
        categories: payload,
        activeCategory: payload[0]
      }
    default:
      return state
  }
}

export const changeCategory = (category) => {
  return {
    type: 'CHANGECATEGORY',
    payload: category,
  }
}

export const getCategories = () => async dispatch => {
  let categories = await axios({
    method: 'GET',
    url: 'https://auth-server-cb.herokuapp.com/api/v1/categories'
  })
  
  dispatch({
    type: 'GETCATEGORIES',
    payload: categories.data.results
  })
}