import { createStore, applyMiddleware, compose } from 'redux';
import appMiddleware from 'src/middlewares/appMiddleware';
import bookingsMiddleware from '../middlewares/bookingsMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import machinesMiddleware from '../middlewares/machinesMiddleware';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(appMiddleware, machinesMiddleware, userMiddleware, bookingsMiddleware));
const store = createStore(reducer, enhancers);

export default store;
