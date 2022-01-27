import rootReducer from './reducers/index';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
// import thunk from 'redux-thunk';
// import postData from './middleware/thunk';
import sagaFunction from './middleware/sagaFunction';
const sagaMiddleware=createSagaMiddleware();
applyMiddleware(sagaMiddleware)
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaFunction)
// const store=createStore(rootReducer,applyMiddleware(thunk));
// store.dispatch(postData());
export default store;