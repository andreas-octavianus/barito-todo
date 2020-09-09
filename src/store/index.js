import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import {helloSaga} from "../sagas";

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(helloSaga());

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware));

export default store;