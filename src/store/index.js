import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import appMiddleware from 'src/middlewares/app';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(ajaxMiddleware, appMiddleware));
const store = createStore(reducer, enhancers);

export default store;
