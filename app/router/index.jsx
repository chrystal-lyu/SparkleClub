import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import About from 'About';
import BlogApp from 'BlogApp';
import Main from 'Main';
import PostDetail from 'PostDetail';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="articles" component={BlogApp}/>
        <Route path="articles/:articleId" component={PostDetail}/>
      <Route path="about" component={About}/>
      <IndexRoute component={BlogApp}/>
    </Route>
  </Router>
);
