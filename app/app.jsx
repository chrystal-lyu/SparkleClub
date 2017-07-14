import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import About from 'About';
import BlogApp from 'BlogApp';
import Main from 'Main';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="articles" component={BlogApp}/>
      <Route path="about" component={About}/>
      <IndexRoute component={BlogApp}/>
    </Route>
  </Router>,
    document.getElementById('app')
);
