import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import firebase, {firebaseRef} from 'app/firebase';
import router from 'app/router/';
import store, {defaultState} from './store/configStore';
import comments from './data/comments';

import 'app/firebase/';

store.subscribe(() => {
  var state = store.getState();
  console.log('New State => ', state);
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user)
    console.log(user.displayName)
    store.dispatch(actions.login(user.uid, user.displayName));
    hashHistory.push('/');
  } else {
    store.dispatch(actions.logout());
  }
})

// firebaseRef.on('value', (snapshot) => {
//   store.dispatch(actions.startFetchPosts());
//   store.dispatch(actions.startFetchComments());
// });

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
