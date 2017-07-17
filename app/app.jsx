import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import router from 'app/router/';
import store from './store/configStore';

store.subscribe(() => {
  var state = store.getState();

  console.log('New State => ', store.getState());
});

// store.dispatch(actions.activePost(0));

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
