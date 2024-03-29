import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
export function getServerStore() {
    return createStore(reducers, applyMiddleware(thunk, logger));
}
export function getClientStore() {
    return createStore(reducers, applyMiddleware(thunk, logger));
}

