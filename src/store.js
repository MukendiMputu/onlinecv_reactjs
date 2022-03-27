import {combineReducers, createStore} from "redux";
import {portfolioReducer} from "./reducers";

const reducers = {
    portfolioReducer,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (createStore(rootReducer));