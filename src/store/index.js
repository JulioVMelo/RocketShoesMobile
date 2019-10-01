import { createStore, applyMiddleware } from 'redux';
import reducers from './ducks';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers, applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
