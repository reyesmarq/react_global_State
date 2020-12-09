import { initialState as initialUsername, reducer as userReducer } from './username.reducer';
import { initialState as initialAge, reducer as ageReducer } from './age.reducer';
import { initialState as initialGithubUser, reducer as githubUserReducer } from './githubUser.reducer'
import { combineReducers } from '../../helpers/combineReducers';

// TODO: how to refactor initialstate and combine reducers to maintain just one array instead of two, state and reducers

/****************************************************************************
 * INITIAL STATE
 ***************************************************************************/

const initialState = Object.assign(
  initialUsername,
  initialAge,
  initialGithubUser
);

/****************************************************************************
 * REDUCERS
 ***************************************************************************/



const reducer = combineReducers(userReducer, ageReducer, githubUserReducer);

export { reducer, initialState };
