const combineReducers = (reducers) => (state, action) => {
  let hasChanged;
  const nextState = Object.keys(reducers).reduce((result, key) => {
    // console.log('key', key);
    // console.log('result', result);
    result[key] = reducers[key](state[key], action);
    hasChanged = hasChanged || result[key] !== state[key];
    return result;
  }, {});
  return hasChanged ? nextState : state;
};

const combineStores = (stores) => {
  console.log('stores', stores);
  const storesArray = Object.entries(stores);
  console.log('storesArray', storesArray);
  const rootInitialState = {};
  const reducers = {};
  for (const [key, store] of storesArray) {
    console.log('key', key);
    console.log('store', store);
    rootInitialState[key] = store.initialState;
    reducers[key] = store.reducer;
  }

  console.log('reducers', reducers);

  const rootReducer = combineReducers(reducers);
  // console.log('initialstate', rootInitialState);
  return { rootReducer, rootInitialState };
};

export default combineStores;
