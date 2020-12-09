const initialState = {
  githubUser: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'github_login':
      return {
        ...state,
        githubUser: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
