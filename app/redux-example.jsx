import redux from 'redux';

console.log('Starting redux!')

import * as actions from 'actions';
var store = require('./store/configStore').configure();

store.subscribe(() => {
  var state = store.getState();

  console.log('New State', store.getState());
});

console.log('currentState', store.getState());

store.dispatch(actions.addComment('Like'));
store.dispatch(actions.addComment('Me too'));
store.dispatch(actions.addComment('Same here'));
