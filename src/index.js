import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter as Router} from 'react-router-dom'

import routes from './routes'

import rootReducer from './reducers/root_reducer'
import store from './store/store'

ReactDom.render(
    <Provider store={store}>
        {routes}
    </Provider>, document.querySelector('#root')
)