import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as actions from 'actions';
import jsonData from 'json-loader!./article/data.json';
// var store = require('configStore').configure();
import router from 'app/router/';

// Load foundation
$(document).foundation();

console.log('initialState', jsonData.posts);
console.log('Post 0 comments', jsonData.posts[0].comments);
console.log('Post 1 comments', jsonData.posts[1].comments);



// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    {router}
  </div>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
