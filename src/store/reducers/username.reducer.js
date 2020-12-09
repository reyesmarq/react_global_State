const initialState = {
  username: 'Mauricio reyes',
};

const reducer = (state = initialState, action = {}) => {
  console.log('userreducer')
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

export { initialState, reducer };
