import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import About from 'About';
import Main from 'Main';
import Login from 'Login';
import PostDetail from 'PostDetail';
import PostList from 'PostList';
import Register from 'Register';
import {history} from './../store/configStore';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PostList}/>
      <Route path="articles" component={PostList}/>
        <Route path="articles/:postId" component={PostDetail}/>
      <Route path="about" component={About}/>
      <Route path="register" component={Register}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
);
