import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from './reducers';

/**
 * Create Redux store with HMR.
 *
 * For more info check:
 * - https://github.com/reactjs/react-redux/releases/tag/v2.0.0
 */
export default function configureStore(injectParams = {}) {
  const middlewares = [routerMiddleware(injectParams.history)];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
