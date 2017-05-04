import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './app/reducers';

const middleware = [
  createLogger(),
  promiseMiddleware,
  thunk
];
export default createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

