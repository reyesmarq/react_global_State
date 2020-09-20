import { useReducer } from 'react'

/****************************************************************************
 * INITIAL STATE
 ***************************************************************************/
const initialUsername = {
  username: '',
};

const initialAge = {
  age: '',
};

/****************************************************************************
 * REDUCERS
 ***************************************************************************/
const userReducer = (state = initialUsername, action) => {
  switch (action.type) {
    case 'rename':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

const ageReducer = (state = initialAge, action) => {
  switch (action.type) {
    case 'age':
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};

export { initialUsername, initialAge, userReducer, ageReducer };