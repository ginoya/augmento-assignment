import { createStore, combineReducers } from "redux";
import AssigmentReducer from './components/Assignment/AssigmentReducer';
import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    dashboard: AssigmentReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watcherSaga);
export default store;