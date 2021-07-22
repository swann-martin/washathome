import { combineReducers } from 'redux';
import machinesReducer from './machines';
import userReducer from './user';

const rootReducer = combineReducers({
  machines: machinesReducer,
  user: userReducer,
});

export default rootReducer;
