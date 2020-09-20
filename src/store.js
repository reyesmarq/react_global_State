import React, { createContext, useContext, useMemo, useReducer } from 'react';
// import useReducers from 'usereducers';

const StoreContext = createContext();

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

/****************************************************************************
 * COMBINE REDUCERS
 ***************************************************************************/

export const StoreProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducerUsername, initialUsername);
  // const [state, dispatch] = useReducer(reducerAge, initialAge);
  // const [state, dispatch] = useReducers(user, age);

  /****************************************************************************
   * Different way to combine reducers
   * 1 have multiple reducers separate as useReducers
   ***************************************************************************/
  const [user, dispatchUser] = useReducer(userReducer, initialUsername);
  const [age, dispatchAge] = useReducer(ageReducer, initialAge);

  // const ProviderValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  let state = {
    ...user,
    ...age,
  };

  const dispatch = (action) =>
    [dispatchUser, dispatchAge].forEach((fn) => fn(action));

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
