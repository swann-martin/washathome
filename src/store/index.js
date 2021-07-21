import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(ajaxMiddleware));
const store = createStore(reducer, enhancers);

export default store;
