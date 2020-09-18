import React, { createContext, useReducer, useContext } from 'react';
import useReducers from 'usereducers';

const StoreContext = createContext();


/****************************************************************************
 * UTILS
 ***************************************************************************/


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
const user = (state = initialUsername, action) => {
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

const age = (state = initialAge, action) => {
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

/****************************************************************************
 * COMBINE REDUCERS
 ***************************************************************************/

export const StoreProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducerUsername, initialUsername);
  // const [state, dispatch] = useReducer(reducerAge, initialAge);
  const [state, dispatch] = useReducers(user, age);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
