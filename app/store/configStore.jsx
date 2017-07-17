import * as redux from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-redux';
var thunk = require('redux-thunk').default;

// import the root reducer
import rootReducer from 'reducers';
import comments from './../data/comments';
import posts from './../data/posts';

// create an object for the defualt data
const defaultState = {
  posts,
  comments
};

const store = redux.createStore(rootReducer, defaultState, redux.compose(
  redux.applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// browserHistory keeps track where you go in a brower
// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
