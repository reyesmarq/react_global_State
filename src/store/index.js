import React, { createContext, useContext, useMemo } from 'react';
import { state, dispatch } from './reducers';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
