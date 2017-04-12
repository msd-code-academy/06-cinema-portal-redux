import { combineReducers } from 'redux';
import userIdentity from './userIdentity';
import loginForm from './loginForm';

const rootReducer = combineReducers({
  userIdentity,
  loginForm
});

export default rootReducer;