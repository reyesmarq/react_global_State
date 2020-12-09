const initialState = {
  age: '',
};

const reducer = (state = initialState, action = {}) => {
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

export { initialState, reducer };
