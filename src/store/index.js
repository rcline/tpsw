import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import initialState from './initialState';
import routesMap from './routesMap';

// Development Redux devtools
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) :
    compose;
/* eslint-enable */


const history = createHistory();

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({
  ...reducers,
  location: reducer,
});
const middlewares = applyMiddleware(middleware);
const enhancers = composeEnhancers(
  enhancer,
  middlewares,
);

const store = createStore(
  rootReducer,
  initialState,
  enhancers,
);

export default store;
