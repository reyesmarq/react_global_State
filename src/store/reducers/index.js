import { combineReducers } from '../../helpers/combineReducers';

// TODO: how to refactor initialstate and combine reducers to maintain just one array instead of two, state and reducers

/****************************************************************************
 * INITIAL STATE
 ***************************************************************************/
const initialUsername = {
  username: '',
};

const initialAge = {
  age: '',
};

const initialGithubUser = {
  githubUser: '',
};

const initialState = Object.assign(
  initialUsername,
  initialAge,
  initialGithubUser
);

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

const githubUserReducer = (state = initialGithubUser, action) => {
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

const reducer = combineReducers(userReducer, ageReducer, githubUserReducer);

export { reducer, initialState };
