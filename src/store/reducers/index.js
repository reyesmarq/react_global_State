import { useReducer } from 'react';

/****************************************************************************
 * INITIAL STATE
 ***************************************************************************/
const initialUsername = {
  username: '',
};

const initialAge = {
  age: '',
};

const initialState = Object.assign(initialUsername, initialAge);

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

const combineReducers = (...reducers) => (state = {}, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

const [state, dispatch] = useReducer(
  combineReducers(userReducer, ageReducer),
  initialState
);

export { state, dispatch };
