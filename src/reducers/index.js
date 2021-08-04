import { combineReducers } from 'redux';
import machinesReducer from './machines';
import userReducer from './user';
import bookingsReducer from './bookings';

const rootReducer = combineReducers({
  machines: machinesReducer,
  user: userReducer,
  bookings: bookingsReducer,
});

export default rootReducer;
