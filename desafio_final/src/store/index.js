import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combineReducers from './reducers';
import sagas from './sagas';

const middllewares = [];

const sagaMiddleware = createSagaMiddleware();

middllewares.push(sagaMiddleware);

const store = createStore(combineReducers, compose(applyMiddleware(...middllewares)));

sagaMiddleware.run(sagas);

export default store;
