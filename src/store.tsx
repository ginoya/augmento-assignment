import { createStore, combineReducers } from "redux";
import AssigmentReducer from './components/Assignment/AssigmentReducer';
import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    dashboard: AssigmentReducer
})
export const middlewares=[sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
sagaMiddleware.run(watcherSaga);
export default store;