import {createStore,applyMiddleware} from 'redux';
import thunkmiddleware from 'redux-thunk'
import MoviesReducer from './Movies/MoviesReducer';

const Store=createStore(MoviesReducer,applyMiddleware(thunkmiddleware));

export default Store;
