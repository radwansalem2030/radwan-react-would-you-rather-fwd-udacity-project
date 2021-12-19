import { combineReducers } from 'redux';
import authedUsers from '../reducers/authedUser';
import users from '../reducers/users';
import tweets from '../reducers/tweets';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authedUsers,
  users,
  tweets,
  loadingBar: loadingBarReducer
});