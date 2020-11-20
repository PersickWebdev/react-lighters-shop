import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';

import storeReducer from "./storeReducer";

const reducers = combineReducers({
    lighters: storeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;