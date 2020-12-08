import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { initialState, reducer } from './reducers';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const thunkDispatch = action => {
      if (typeof action === "function") {
        return action(dispatch, state);
      }
  
      return dispatch(action);
    };
  
    return [state, thunkDispatch];
  }
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  // const middleware = (dispatch) => {
  //   const isPromise = (obj) => {
  //     return (
  //       !!obj &&
  //       (typeof obj === 'object' || typeof obj === 'function') &&
  //       typeof obj.then === 'function'
  //     );
  //   };

  //   return (action) => {
  //     if (isPromise(action.payload)) {
  //       action.payload.then((v) => {
  //         dispatch({ type: action.type, payload: v });
  //       });
  //     } else {
  //       dispatch(action);
  //     }
  //   };
  // };

  // const providerValue = useMemo(
  //   () => ({ state, dispatch: middleware(dispatch) }),
  //   [state, dispatch, middleware]
  // );
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
