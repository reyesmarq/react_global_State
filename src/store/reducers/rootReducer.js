import combineStores from '../../helpers/combineStores';

import * as user from './username.reducer';
import * as age from './age.reducer';
import * as githubUser from './githubUser.reducer';

const combineStore = combineStores({
  user,
  age,
  githubUser,
});

const { rootInitialState, rootReducer } = combineStore;

export { rootInitialState, rootReducer };
