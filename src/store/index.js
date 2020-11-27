import React, { createContext, useContext, useMemo, useReducer } from 'react';
import {
  initialUsername,
  initialAge,
  userReducer,
  ageReducer,
} from './reducers';

const combineReducers = (...reducers) => (state = {}, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

const initialState = Object.assign(initialUsername, initialAge);

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(userReducer, ageReducer),
    initialState
  );

  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
