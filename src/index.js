import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Routes';
import {Provider} from 'react-redux';
import userList from './redux/reducers/userListReducer'
import loginReducer from './redux/reducers/loginReducer'

import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
   userList,
   loginReducer,
})
let store = createStore(rootReducer)


ReactDOM.render(
  <Provider store = {store}>
    <Router>
       <Router />
    </Router>,
  </Provider>,
  document.getElementById('root')
);
