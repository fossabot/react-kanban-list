/*eslint-disable*/

import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from './root';

export const configureStore = (initialState) => {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  console.log('initialState: ', initialState);
  return applyMiddleware(thunk, promise)(createStore)(rootReducer, initialState, reduxDevTools);
  // return applyMiddleware(thunk, promise)(createStore)(rootReducer, reduxDevTools);
  /*
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promise),
  );
  */
};
