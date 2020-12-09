import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useCallback,
} from 'react';
import { rootInitialState, rootReducer } from './reducers/rootReducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const thunkDispatch = useCallback(
      (action) => {
        if (typeof action === 'function') {
          return action(dispatch, state);
        }

        return dispatch(action);
      },
      [dispatch]
    );

    return [state, thunkDispatch];
  };

  const [state, dispatch] = useThunkReducer(rootReducer, rootInitialState);

  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
