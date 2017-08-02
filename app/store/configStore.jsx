import * as redux from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-redux';
import thunk from 'redux-thunk';

import {firebaseRef} from 'app/firebase/';
import rootReducer from 'reducers';

export const defaultState = {};

const store = redux.createStore(rootReducer, defaultState, redux.compose(
  redux.applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
