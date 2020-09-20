import React, { createContext, useContext, useMemo, useReducer } from 'react';
import {
  initialUsername,
  initialAge,
  userReducer,
  ageReducer,
} from './reducers';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  /****************************************************************************
   * Different way to combine reducers
   * 1 have multiple reducers separate as useReducers
   ***************************************************************************/
  const [user, dispatchUser] = useReducer(userReducer, initialUsername);
  const [age, dispatchAge] = useReducer(ageReducer, initialAge);

  // const ProviderValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  let initState = {
    ...user,
    ...age,
  };

  const state = useMemo(() => ({ ...initState }), [initState]);

  let dispatches = [dispatchUser, dispatchAge];

  const dispatch = (action) => dispatches.forEach((fn) => fn(action));

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
