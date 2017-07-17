import redux from 'redux';
import jsonData from 'json-loader!./article/data.json';

console.log('Starting redux!')

import * as actions from 'actions';
var store = require('./store/configStore').configure();

store.subscribe(() => {
  var state = store.getState();

  console.log('New State', store.getState());
});

console.log('initialState', store.getState());

store.dispatch(actions.activePost(1));
store.dispatch(actions.addComment('Like'));
