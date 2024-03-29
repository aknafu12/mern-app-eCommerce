import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
const reducer = combineReducers({
    // this containes all reducers



});

let initialstate = {}

const middleware = [thunk];
const store = createStore(
    reducer, 
    initialstate, 
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;